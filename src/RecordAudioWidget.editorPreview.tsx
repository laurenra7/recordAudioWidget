import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { RecordAudioWidgetPreviewProps } from "../typings/RecordAudioWidgetProps";
import {RecordAudio} from "./components/RecordAudio";

declare function require(name: string): string;

export class preview extends Component<RecordAudioWidgetPreviewProps> {
    render(): ReactNode {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        // const inText = `[${this.props.inText}]`;
        // return <RecordAudio inText={inText}/>;
        // const file = `[${this.props.file}]`;
        // return <RecordAudio file={file}/>;
        // const fileUrl = `[${this.props.audioFileUrl}`;
        return <RecordAudio/>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/RecordAudioWidget.css");
}
