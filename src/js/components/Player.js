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
            "isPlaying": true,
            "currentTime": 0
        };
    }

    togglePlaying() {
        let playingStatus = this.state.isPlaying;
        let el = document.getElementById('audio');

        if (playingStatus) {
            playingStatus = false;
            el.play();
        } else {
            playingStatus = true;
            el.pause();
        }

        this.setState({isPlaying: playingStatus});
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
                <Controls isPlaying={this.state.isPlaying} onClick={this.togglePlaying.bind(this)}/>
                <TimeStamp duration={TRACK.duration} currentTime={this.state.currentTime}/>
                <Audio src={TRACK.source}/>
            </div>
        );
    }
}