import { CSSProperties, Component, ReactNode, createElement } from "react";

export interface RecordAudioProps {
    fileUrl?: (value: string) => void;
    testStuff?: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    id?: string;
    hasError?: boolean;
    required?: boolean;
    disabled?: boolean;
    showInstructs?: boolean;
    locationVal?: string;
    microflowString?: string;
    entityString?: string;
}

export interface RecordAudioState {
    isRecordingSupported: boolean;
    // micList?: MediaDeviceInfo[];
    isRecordingStarted: boolean;
    isRecording: boolean;
    isPaused: boolean;
    isDone: boolean;
    isRecordButtonsEnabled: boolean;
    mediaRecorder?: MediaRecorder;
    audioUrl?: string;
    audioBlob?: Blob;
}

export class RecordAudio extends Component<RecordAudioProps, RecordAudioState> {

    static mimeType: string = 'audio/webm;codecs=opus';

    /**
     * Check to see if browser supports getUserMedia for recording before doing anything else.
     * If not supported, the render function will disable buttons.
     * @param props
     */
    constructor(props: RecordAudioProps) {
        super(props);
        let isRecordingSupported = true;
        let deviceList = [MediaDeviceInfo];
        // const inText = this.props.inText
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (MediaRecorder.isTypeSupported(RecordAudio.mimeType)) {
                isRecordingSupported = true;
                /* List the recording devices to let the user choose. Returns an array of InputDeviceInfo */
                navigator.mediaDevices.enumerateDevices().then((deviceList) => {
                    // devices = devices.filter((deviceInfo) => deviceInfo.kind === 'audioinput');
                    deviceList = deviceList.filter((deviceInfo) => deviceInfo.kind === 'audioinput');
                    // devices.forEach(entry => deviceList.push(Object.assign({}, entry)));
                    console.log('Devices = ' + deviceList);
                });
            }
            else {
                isRecordingSupported = false;
            }
        }
        else {
            isRecordingSupported = false;
        }
        if (!isRecordingSupported) {
            alert('Your browser does not support recording with getUserMedia. Try a different browser.');
        }
        /* Set defaults for state variables */
        this.state = {
            isRecordingSupported: isRecordingSupported,
            isRecordingStarted: false,
            isRecording: false,
            isPaused: false,
            isDone: false,
            isRecordButtonsEnabled: true,
        };
    }

    startRecording = () => {
        if (this.state.isRecordingStarted) {
            if (!this.state.isRecording) {
                /* Resume recording after pause. */
                if (this.state.mediaRecorder) {
                    this.state.mediaRecorder.resume();
                }
                this.setState({ isRecording: true });
            }
        }
        else {
            if (this.state.isRecordingSupported) {
                navigator.mediaDevices.getUserMedia(
                    // only audio needed for this app
                    {
                        audio: true
                    }
                )
                    .then(stream => {
                        /* Initialize a new MediaRecorder */
                        const mediaOptions = {
                            mimeType: RecordAudio.mimeType
                        };
                        const mediaRecorder = new MediaRecorder(stream, mediaOptions);
                        mediaRecorder.start();
                        const audioChunks: any = [];

                        /* Event listener for when new data is available from recording device. */
                        mediaRecorder.addEventListener("dataavailable", event => {
                            audioChunks.push(event.data);
                        });
                        this.setState( { isRecordingStarted: true, isRecording: true });

                        /* Event listener for "stop" event.*/
                        mediaRecorder.addEventListener("stop", () => {

                            /* Collect audio chunks into a Blob, create URL for it, update state. */
                            const audioBlob = new Blob(audioChunks, {'type' : RecordAudio.mimeType});
                            const audioUrl = URL.createObjectURL(audioBlob);
                            this.setState( { audioUrl: audioUrl, audioBlob: audioBlob, isRecording: false, isDone: true });

                            /* Update audioFileUrl attribute with the Blob URL */
                            if (this.props.fileUrl) {
                                this.props.fileUrl(audioUrl);
                            }

                            stream.getAudioTracks().forEach( track => track.stop());

                            // const reader = new FileReader();
                            // reader.onload = function(e){
                            //     // window.location.href = reader.result;
                            // };
                            // const blobUrl = reader.readAsDataURL(audioBlob);
                            /* don't forget to URL.revokeObjectURL() the audioUrl to release it when done playing/downloading/storing it */
                        });

                        this.setState( { mediaRecorder: mediaRecorder});

                    })
            }

        }
    };

    pauseRecording = () => {
        if (this.state.mediaRecorder) {
            this.state.mediaRecorder.pause();
        }
        this.setState({ isRecording: false });
    };

    stopRecording = () => {
        if (this.state.isRecording) {
            const mediaRecorder = this.state.mediaRecorder;
            if (this.state.mediaRecorder) {
                this.state.mediaRecorder.stop();
            }
            this.setState({
                isDone: true,
                isRecording: false,
                isRecordButtonsEnabled: false
            });
            console.log("done"); // testing only
        }
    };

    saveRecording = () => {
        const audioBlob = this.state.audioBlob;
        const microFlowName = this.props.microflowString!;
        const entityName = this.props.entityString!;

        mx.data.create({
            entity: entityName,
            callback : function (obj) {
                obj.set("Name", "recording.weba");

                mx.data.saveDocument(
                    obj.toString(),
                    "new_audio.weba",
                    {},
                    audioBlob as Blob,
                    function (){
                        mx.data.action({
                            params: {
                                applyto: "selection",
                                actionname: microFlowName,
                                guids: [obj.toString()]
                            },
                            callback: function (){},    // Success

                            error: function(error) {
                                /* Error in microflow call
                                Likely an incorrect Microflow name listed in widget options, check microflowName variable */
                                alert(`Error attempting to save audio.\nContact app support.\n\n (1) ${error}`)
                                mx.data.remove({
                                    guid: obj.toString(),
                                    callback: function () {},   // Success
                                    error: function () {}       // Error deleting object
                                })

                            }
                        });
                    },
                    function (error) {
                        // Error in save document call
                        alert(`Error attempting to save audio.\nContact app support\n\n (2) ${error}`)
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () {},       // Success
                            error: function () {}           // Error deleting object
                        })

                    }
                )
            },
            error: function (error) {
                // Error in create entity call
                // Likely an incorrect entity name listed in widget options, check entityName variable
                alert(`Error creating audio file.\nContact app support.\n\n (3) ${error}`)
            }
        })
    };

    deleteRecording = () => {
        if (this.state.audioUrl) {
            URL.revokeObjectURL(this.state.audioUrl);
            this.setState({
                isDone: false,
                isRecording: false,
                isRecordingStarted: false,
                isRecordButtonsEnabled: true
            })
        }
    };

    render(): ReactNode {
        // const className = classNames(this.props.className);
        // See https://reactjs.org/docs/conditional-rendering.html to set state and render button(s)
        // and https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6
        // <ButtonRecord isRecording={this.state.isRecording} recordHandler={this.startRecording}/>
        // <ButtonPause isRecording={this.state.isRecording} pauseHandler={this.pauseRecording}/>

        const isRecordingSupported = this.state.isRecordingSupported;
        const isRecordButtonsEnabled = this.state.isRecordButtonsEnabled;
        const isRecording = this.state.isRecording;
        const isDone = this.state.isDone;
        const showInstructions = true;
        return !isRecordingSupported ? <div className="not-supported">Recording not supported in this browser.</div> :
            <div className="outer-container">
                <div className="widget-record-audio">
                    <button style={ isRecording ? { display: 'none' } : { display: 'inline-block' } }
                            type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-record btn-all btn-icon btn-enabled" : "btn-record btn-all btn-icon" }
                            onClick={this.startRecording}
                    >
                        <div className={ isRecordButtonsEnabled ? "btn-record-circle" : "btn-record-circle-disabled" }>
                        </div>
                    </button>
                    <button style={ isRecording ? { display: 'inline-block' } : { display: 'none'} }
                            type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-color-red btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon" }
                            onClick={this.pauseRecording}
                    >
                        <span className="glyphicon glyphicon-pause"></span>
                    </button>
                    <button type="button"
                            disabled={!isRecordButtonsEnabled}
                            className={ isRecordButtonsEnabled ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon" }
                            onClick={this.stopRecording}
                    >
                        <span className="glyphicon glyphicon-stop"></span>
                    </button>
                    <div className={ isDone ? "widget-play-audio-show" : "widget-play-audio-hide" }>
                        <audio className={"audio-player"} controls src={this.state.audioUrl}>
                            Your browser does not support the <code>audio</code> element.
                        </audio>
                    </div>
                    <div style={ { "margin" : "0px 0px 0px 15px"} }>
                        <button type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                                onClick={this.saveRecording}
                        >
                            <span className="glyphicon glyphicon-plus" ></span>
                        </button>
                        <button type="button"
                                disabled={!isDone}
                                className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                                onClick={this.deleteRecording}
                        >
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                    </div>

                </div>
                <div className="instructions" style={ { display : this.props.showInstructs ? "block" : "none" }}>
                    <ol>
                        <li>Press <span className="btn-record-circle-small" style={ { margin: "-1px 2px" } }></span> to record a message.
                            You can press <span className="glyphicon glyphicon-pause" style={ { color: "red" } }></span> to pause.</li>
                        <li>Press <span className="glyphicon glyphicon-stop"></span> to stop. You can press <span className="glyphicon glyphicon-play"></span> to review it.</li>
                        <li>Press <span className="glyphicon glyphicon-plus" style={ { margin: "0px 0px 10px 0px" } }></span> to name the audio and save it to {this.props.locationVal}.</li>
                    </ol>
                    <span style={ { margin : "0px 0px 15px 15px"} }>Or press <span className="glyphicon glyphicon-remove"></span> to delete the current recording and start a new one.</span>
                </div>
            </div>
    }
}
