/**
 * This file was generated from RecordAudioWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface RecordAudioWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    audioFileUrl: EditableValue<string>;
}

export interface RecordAudioWidgetPreviewProps {
    class: string;
    style: string;
    audioFileUrl: string;
}
