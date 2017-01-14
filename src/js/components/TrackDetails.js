import React from "react";

export default class TrackDetails extends React.Component {
    render() {
        return (
            <div className="track-details">
                <ul>
                    <li className={'track-name'}>{this.props.name}</li>
                    <li className={'track-artist'}>{this.props.artist}</li>
                    <li className={'track-album'}>{this.props.album}</li>
                </ul>
            </div>
        );
    }
}