import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";

import { RecordAudioWidgetContainerProps } from "../typings/RecordAudioWidgetProps";
import {RecordAudio} from "./components/RecordAudio";

import "./ui/RecordAudioWidget.css";

export default class RecordAudioWidget extends Component<RecordAudioWidgetContainerProps> {
    private readonly audioFileUrlHandler = this.setAudioFileUrl.bind(this);
    render(): ReactNode {
        // const inText=this.props.inText.displayValue;
        // const file=this.props.file;
        // return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
        return <RecordAudio
                // inText={inText}
                // file={file}
                fileUrl={this.audioFileUrlHandler}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}

        />
    }

    /* Set Audio File Url attribute (string) in DataView */
    setAudioFileUrl(value: string): void {
        this.props.audioFileUrl.setValue(value);
        this.forceUpdate();
    }
}
