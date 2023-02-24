import { Component, ReactNode, createElement } from "react";

import { RecordAudioWidgetContainerProps } from "../typings/RecordAudioWidgetProps";
import {RecordAudio} from "./components/RecordAudio";

import "./ui/RecordAudioWidget.css";

export default class RecordAudioWidget extends Component<RecordAudioWidgetContainerProps> {
    private readonly audioFileUrlHandler = this.setAudioFileUrl.bind(this);
    render(): ReactNode {
        return <RecordAudio
                fileUrl={this.audioFileUrlHandler}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                showInstructs={this.props.showInstructions}
                locationVal={this.props.saveLocation}
                microflowString={this.props.microflowCall}
                entityString={this.props.entityName}

        />
    }

    /* Set Audio File Url attribute (string) in DataView */
    setAudioFileUrl(value: string): void {
        this.props.audioFileUrl.setValue(value);
        this.forceUpdate();
    }
}
