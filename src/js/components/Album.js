import React from "react";

export default class Album extends React.Component {
    render() {
        return (
            <div>
                <div className="album"><img src={this.props.albumCover}/></div>
            </div>
        );
    }
}