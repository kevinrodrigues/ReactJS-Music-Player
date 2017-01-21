import React from "react";

import Album from "./Album";
import TrackDetails from "./TrackDetails";
import ProgressBar from "./ProgressBar";
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

    defaultProps() {
        return {
            "name": "Say you won't let go",
            "artist": "James Authur",
            "album": "Back from the Edge",
            "year": "2016",
            "albumCover": "../img/album.jpg",
            "duration": 210,
            "source": "../assets/demo.mp3"
        }
    }

    togglePlaying() {
        let playingStatus = this.state.isPlaying;
        let el = document.getElementById('audio');

        if (playingStatus) {
            let that = this;

            playingStatus = false;
            el.play();

            setInterval(function() {
                let time = el.currentTime;
                let trackTime = that.defaultProps().duration;
                let percent = (time / trackTime) * 100 + '%';

                that.updateProgressBar(percent);
                that.updatePlayingTime(time);


            }, 100);

        } else {
            playingStatus = true;
            el.pause();
        }

        this.setState({isPlaying: playingStatus});
    }

    updateProgressBar(percent) {
        let el = document.querySelector('.progress');

        el.style.width = percent;
    }

    updatePlayingTime(time) {
        time = Math.floor(time);
        this.setState({currentTime: time});
    }

    render() {
        return (
            <div className="player-container">
                <Album albumCover={this.defaultProps().albumCover}/>
                <div className="player">
                    <div className="track-info">
                        <TrackDetails name={this.defaultProps().name} artist={this.defaultProps().artist} album={this.defaultProps().album}/>
                        <Controls isPlaying={this.state.isPlaying} onClick={this.togglePlaying.bind(this)}/>
                        <TimeStamp duration={this.defaultProps().duration} currentTime={this.state.currentTime}/>
                    </div>
                    <Audio src={this.defaultProps().source}/>
                </div>
                <ProgressBar/>
            </div>

        );
    }
}