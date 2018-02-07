import * as React from 'react';
export interface CardProps {

}
export interface CardState {

}
export default class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);
    }
    render() {
        return this.props.children;
    }
}