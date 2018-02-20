import * as React from 'react';
import DemoRadioSelectionProps from './DemoRadioSelectionProps';
import DemoRadioSelectionState from './DemoRadioSelectionState';
export default class DemoRadioSelection extends React.Component<DemoRadioSelectionProps, DemoRadioSelectionState> {
    constructor(props: DemoRadioSelectionProps) {
        super(props);
    }
    render() {
        return (<div className="radio-selection">Radio Selelction</div>);
    }
    
}