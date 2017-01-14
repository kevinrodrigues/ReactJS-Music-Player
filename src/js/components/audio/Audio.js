import React from "react";

export default class Audio extends React.Component {
    render() {
        return (
            <audio id="audio">
                <source src={this.props.src}/>
            </audio>
        );
    }
}