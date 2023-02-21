// import { Component, ReactNode, createElement } from "react";
import { createElement } from "react";
// import classNames from "classnames";

export interface ButtonRecordProps {
    isRecording: boolean;
    recordHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function ButtonRecord(Props: ButtonRecordProps) {

    const isRecording = Props.isRecording;

    if (isRecording) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // navigator.mediaDevices.getUserMedia (
            //     // constraints - only audio needed for this app
            //     {
            //         audio: true
            //     })
            //
            //     // Success callback
            //     .then(function(stream) {
            //
            //
            //     })
            //
            //     // Error callback
            //     .catch(function(err) {
            //             console.log('The following getUserMedia error occured: ' + err);
            //         }
            //     );
        }
        else {
            alert('Your browser does not support recording with getUserMedia.');
        }

    }
    else {
        // Props.recordHandler;
    }

    return <button style={ isRecording ? { display: 'none' } : { display: 'inline-block' } }
                   type="button"
                   className="btn-all btn-record"
                   onClick={Props.recordHandler}>
        <div className="btn-record-circle"></div>
        </button>
}

// export class ButtonRecord extends Component<ButtonRecordProps> {
//
//     render(): ReactNode {
//         const isRecording = this.props.isRecording;
//         return <button style={ isRecording ? { display: 'none'} : { display: 'inline-block' } }
//                        type="button"
//                        className="btn-all btn-record"
//                        onClick={() => this.handleRecordClick()}>
//             <div className="btn-record-circle"></div>
//         </button>
//     }
//
//     handleRecordClick() {
//         /* If not recording, set to "recording" state and hide record button so the next button, Pause, displays in its place. */
//         alert('Record something new');
//     }
//
// }

