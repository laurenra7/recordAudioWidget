import { createElement } from "react";

export interface ButtonPauseProps {
    isRecording: boolean;
    pauseHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function ButtonPause(Props: ButtonPauseProps) {

    const isRecording = Props.isRecording;
    return <button style={ isRecording ? { display: 'inline-block' } : { display: 'none'} }
                   type="button"
                   className="btn-pause btn-all"
                   onClick={Props.pauseHandler}>
        <span className="glyphicon glyphicon-pause"></span>
        </button>

}
