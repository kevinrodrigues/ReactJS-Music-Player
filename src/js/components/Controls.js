import React from "react";

export default class Controls extends React.Component {
    render() {
        let className;

        if (this.props.isPlaying) {
            className = 'playing';
        } else {
            className = 'stopped';
        }

        return (
            <div className="controls">
                <button onClick={this.props.onClick} className={className}></button>
            </div>
        );
    }
}