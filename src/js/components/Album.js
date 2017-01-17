import React from "react";

export default class Album extends React.Component {
    render() {
        console.log(this.props.albumCover);
        return (
            <div>
                <div className="album"><img src={this.props.albumCover}/></div>
            </div>
        );
    }
}