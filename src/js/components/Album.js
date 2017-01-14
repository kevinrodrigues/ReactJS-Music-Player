import React from "react";

export default class Album extends React.Component {
    render() {
        return (
            <div className="album">
                <div><img src={this.props.albumCover}/></div>
            </div>
        );
    }
}