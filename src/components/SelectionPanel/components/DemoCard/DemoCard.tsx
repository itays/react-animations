import * as React from 'react';
import DemoCardProps from './DemoCardProps';
import DemoCardState from './DemoCardState';

export default class DemoCard extends React.Component<DemoCardProps, DemoCardState> {
    constructor(props: DemoCardProps) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
    onSelect() {
        if (this.props.events.onSelect) {
            return this.props.events.onSelect(this.props.data);
        }
    }
    render() {
        let style = {};
        if (this.props.options && this.props.options.cardSizes) {
            const width = this.props.options.cardSizes.width;
            const height = this.props.options.cardSizes.height;
            // const opacity = this.props.options.cardSizes.opacity;
            style = {width: `${width}px`, height: `${height}px`, display: width > 50 ? 'block' : 'none' };
        }
        return (
            <div className="card" style={style}>
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.additionalText}</p>
                <div>{this.props.data.price}</div>
                <div><button onClick={this.onSelect}>Select plan</button></div>
            </div>
        );
    }
}