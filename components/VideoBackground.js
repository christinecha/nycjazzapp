"use strict"

import React from 'react'
import YouTube from './forked/Youtube'
import { randomVid } from './helpers/videoOptions'

let videoOptions = {
  height: window.innerHeight + 600,
  width: window.innerWidth + 600,
  playerVars: {   // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    loop: 1,
    start: 100,
    enablejsapi: 1,
    showinfo: 0
  }
}

class VideoBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: randomVid(),
      info: {}
    }
  }

  getInfo(e) {
    console.log(e.target.getVideoData())
    this.setState({
      info: e.target.getVideoData()
    })
  }

  displayInfo() {
    const { info } = this.state
    if (!info) return null
    return (
      <div className="video-background--info">
        <a href={`https://youtube.com/watch?v=${info.video_id}`}>
          NOW PLAYING: {info.title}
        </a>
      </div>
    )
  }

  render() {
    return (
      <div>
        <YouTube
          videoId  = { this.state.videoId }
          id       = "video-background"
          opts     = {videoOptions}
          onPlay   = {(e) => this.getInfo(e)} />
        <div id="video-background--overlay"></div>
        { this.displayInfo() }
      </div>
    )
  }
}

export default VideoBackground
