import * as React from 'react';
export interface PanelProps {

}
export interface PanelState {

}
export default class Panel extends React.Component<PanelProps, PanelState> {
    constructor(props: PanelProps) {
        super(props);
    }
    render() {
        return this.props.children;
    }
}