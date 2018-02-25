import * as React from 'react';
import DemoCollapsedCardProps from './DemoCollapsedCardProps';
// import DemoCollapsedCardState from './DemoCollapsedCardState';

export default class DemoCollapsedCard extends React.Component<DemoCollapsedCardProps> {
    constructor(props: DemoCollapsedCardProps) {
        super(props);
        this.onUnselect = this.onUnselect.bind(this);
    }
    onUnselect() {
        if (this.props.events.onUnselect) {
            return this.props.events.onUnselect(this.props.data);
        }
    }
    render() {
        return (
            <div className="collapsed-card">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.additionalText}</p>
                <div>{this.props.data.price}</div>
                <div><button onClick={this.onUnselect}>Change</button></div>
            </div>
        );
    }
}