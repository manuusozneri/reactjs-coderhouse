import React, { Component } from 'react';
import './VideoHero.css';


class VideoHero extends Component {
    render() {
        return(
            <div className="videoHero">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default VideoHero;