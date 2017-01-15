import React from "react";

import Header from "./Header";
import Album from "./Album";
import TrackDetails from "./TrackDetails";
import Scrubber from "./Scrubber";
import Controls from "./Controls";
import TimeStamp from "./TimeStamp";
import Audio from "./audio/Audio";


export default class Player extends React.Component {
    constructor() {
        super();

        this.state = {
            "playStatus": "playing",
            "currentTime": 0
        };
    }

    eventClicked() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="Player">
                <div className="Background" onClick={this.eventClicked.bind(this)}>Background</div>
                <Header/>
                <Album/>
                <TrackDetails/>
                <Scrubber/>
                <Controls/>
                <TimeStamp/>
                <Audio/>
            </div>
        );
    }
}