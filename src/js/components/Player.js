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
            "duration": 331,
            "source": "https://cf-media.sndcdn.com/9Cls5PqvXM2S.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vOUNsczVQcXZYTTJTLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE0ODQ1MTI2ODN9fX1dfQ__&Signature=zPtiYqFfIBuF12w0~7F~C5UhHvMlIH9WXXfVnm2pgR6wu~piOcXML9gIDGj1Elw1eklBm-Bz6O4PlqwBA-7MqDN4XlF9xUHg-kxVtpcQ6H-cTBgqcSqmcGRCRdsp0SryBPDSWoayVi~7NGbXpddvqEu3PxJCB5PC2UzU4CFU-oFWt-jnb452Zvl6imLsbu2mY1wz86nz5sUUXRrL55qQ3sbqJpPzSciB2w5zzlWRiH3jjOollyOR69K0G8FAFVPAthlcrxZOt6iWazpSBl0aEpkCWPAqpwl78rmqd0iOV6WGYm7APwviSO7tpKrKl8HvZPTBnYI5uyADVROzD1TuNA__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ"
        };

        return (
            <div className="player">
                <Header/>
                <Album albumCover={TRACK.albumCover}/>
                <TrackDetails name={TRACK.name}/>
                <Scrubber/>
                <Controls/>
                <TimeStamp/>
                <Audio/>
            </div>
        );
    }
}