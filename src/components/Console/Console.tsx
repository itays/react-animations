import * as React from 'react';
import { ConsoleProps } from './ConsoleProps';
import { ConsoleState } from './ConsoleState';

export default class Console extends React.Component<ConsoleProps, ConsoleState> {
    constructor(props: ConsoleProps) {
        super(props);
    }
    
    render() {
        return this.props.children;
    }
}