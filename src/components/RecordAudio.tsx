import { CSSProperties, Component, ReactNode, createElement } from "react";
// import classNames from "classnames";
// import { ButtonRecord } from "./ButtonRecord";
// import {ButtonPause} from "./ButtonPause";
// import { MediaRecorder } from "dom-mediacapture-record";
import { DynamicValue, FileValue } from "mendix";
// import { saveDocument } from "@jeltemx/mendix-react-widget-utils/lib/documents";

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
}

export class RecordAudio extends Component<RecordAudioProps, RecordAudioState> {

    static mimeType: string = 'audio/webm;codecs=opus';
    static defaultProps: RecordAudioProps = {
        testStuff: 'nothing input'
    };

    /* Normally this is a good way to initialize state unless they are dependent on the results of other code. */
    // state: Readonly<RecordAudioState> = {
    //     isRecordingSupported: false,
    //     isRecording: false
    // };

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
            // micList: [deviceList],
            // micList: {...deviceList},
            // micList: [ ...deviceList ],
            // micList: [ this.state.micList, ...deviceList],
            // micList: [ ...this.state.micList, deviceList],
            isRecordingSupported: isRecordingSupported,
            isRecordingStarted: false,
            isRecording: false,
            isPaused: false,
            isDone: false,
            isRecordButtonsEnabled: true
        };

        // this.setState(prevState => ({
        //     itemList: prevState.itemList.map(
        //         obj => (obj.)
        //     )
        // }));
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
                            this.setState( { audioUrl: audioUrl, isRecording: false, isDone: true });

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

    // downloadRecording = () => {
    //     setTimeout(() => {
    //         if (this.state.audioUrl) {
    //             URL.revokeObjectURL(this.state.audioUrl);
    //             removeEventListener('click', this.downloadRecording);
    //         }
    //     }, 150);
    // };

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
                    <a href={this.state.audioUrl}
                       download="recording.weba"
                       className={ isDone ? "btn-download btn-color-black btn-all" : "btn-hide" }
                    >
                        <span className="glyphicon glyphicon-download-alt"></span>
                    </a>
                    <button type="button"
                            disabled={!isDone}
                            className={ isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide" }
                            onClick={this.deleteRecording}
                    >
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </div>
                <div className="instructions">
                    <ol>
                        <li>Press <span className="btn-record-circle-small" style={ { margin: "-1px 2px" } }></span> to record a message.
                            You can press <span className="glyphicon glyphicon-pause" style={ { color: "red" } }></span> to pause.</li>
                        <li>Press <span className="glyphicon glyphicon-stop"></span> to stop. You can press <span className="glyphicon glyphicon-play"></span> to review it.</li>
                        <li>Press <span className="glyphicon glyphicon-download-alt"></span> to download recording and save it.</li>
                        <li>Select <span className="glyphicon glyphicon-plus" style={ {color: "rgb(0, 98, 184)"} }></span>
                            <span style={ {color: "rgb(0, 98, 184)"} }>Upload Audio Message from File</span> to upload it.</li>
                        <li>To start a new recording, delete the old one with <span className="glyphicon glyphicon-remove"></span>.</li>
                    </ol>
                </div>
            </div>
    }
}


// <a href={this.state.audioUrl}
//    download="recording.weba"
//    className={ isDone ? "btn-download btn-color-black btn-all" : "btn-download-hide" }
//    onClick={this.downloadRecording}>
//     <span className="glyphicon glyphicon-download-alt"></span>
// </a>


// <div>
//     <button type="button"
//             disabled={!isRecordingSupported}
//             className={ isRecordingSupported ? "btn-color-black btn-all btn-enabled" : "btn-color-grey btn-all" }
//             onClick={this.downloadTest}>
//         Download
//     </button>
//     <button type="button"
//             disabled={!isRecordingSupported}
//             className={ isRecordingSupported ? "btn-color-black btn-all btn-enabled" : "btn-color-grey btn-all" }
//             onClick={this.cancel}>
//         Delete Recording
//     </button>
// </div>


// <audio controls src={this.state.audioUrl}>
//     Your browser does not support the <code>audio</code> element.
// </audio>


// <button type="button"
//         disabled={!isRecordingSupported}
//         className={ isRecordingSupported ? "btn-color-black btn-all btn-enabled" : "btn-color-grey btn-all" }
//         onClick={this.playRecording}>
//     <span className="glyphicon glyphicon-play"></span>
// </button>

// <div>
//     <a href={this.state.audioUrl} download={"recorded-audio.webm"}>Download audio recording</a>
// </div>
