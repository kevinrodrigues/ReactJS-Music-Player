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

    render() {
        const TRACK = {
            "name": "Say you won't let go",
            "artist": "James Authur",
            "album": "Back from the Edge",
            "year": "2016",
            "albumCover": "../img/album.jpg",
            "duration": 210,
            "source": "../assets/demo.mp3"
        };

        return (
            <div className="player">
                <Header/>
                <Album albumCover={TRACK.albumCover}/>
                <TrackDetails name={TRACK.name}/>
                <Scrubber/>
                <Controls/>
                <TimeStamp duration={TRACK.duration} currentTime={this.state.currentTime}/>
                <Audio src={TRACK.source}/>
            </div>
        );
    }
}