import React from "react";

export default class Controls extends React.Component {
    render() {
        let className;

        if (this.props.isPlaying) {
            className = 'icono-play';
        } else {
            className = 'icono-pause';
        }

        return (
            <div className="controls">
                <button onClick={this.props.onClick}><i className={className}></i></button>
            </div>
        );
    }
}