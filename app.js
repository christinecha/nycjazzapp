"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import VideoBackground from './components/VideoBackground'
import NYCJazzApp from './components/NYCJazzApp'

if (window.innerWidth > 375) {
  ReactDOM.render(
    <VideoBackground />,
    document.getElementById("video-background--container")
  )
}

ReactDOM.render(
  <NYCJazzApp />
  , document.getElementById("react-app")
)
