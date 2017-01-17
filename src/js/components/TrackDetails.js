import React from "react";

export default class TrackDetails extends React.Component {
    render() {
        return (
            <div className="TrackDetails">{this.props.name}</div>
        );
    }
}