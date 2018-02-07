import * as React from 'react';
export interface CardProps {
    onCardSelected: (cardData: any) => void;
    data: {id: string | number, title: string, price: string };
}
export interface CardState {

}
export default class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
        this.onCardSelected = this.onCardSelected.bind(this);
    }
    onCardSelected() {
        return this.props.onCardSelected(this.props.data);
    }
    render() {
        return (
            <div>
                <h3>{this.props.data.title}</h3>
                <div>{this.props.data.price}</div>
                <div><button onClick={this.onCardSelected}>Select plan</button></div>
            </div>
        );
    }
}