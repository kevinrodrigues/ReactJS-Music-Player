import React from "react";

export default class TimeStamp extends React.Component {
    convertTimeStamp(time) {
        let mins = Math.floor(time / 60);
        let secs = time - (mins * 60);

        if (secs < 10) {
            secs = '0' + secs;
        }

        time = mins + ':' + secs;

        return time;
    }

    render() {
        return (
            <div className="timestamps">
                <div className="current">{this.convertTimeStamp(this.props.currentTime)}</div>
                <div className="total">{this.convertTimeStamp(this.props.duration)}</div>
            </div>
        );
    }
}