import * as React from 'react';
export interface GroupProps {

}
export interface GroupState {

}
export default class Group extends React.Component<GroupProps, GroupState> {
    constructor(props: GroupProps) {
        super(props);
    }
    render() {
        return this.props.children;
    }
}