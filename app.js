"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from './components/DatePicker'
import Listings from './components/Listings'
import NoMatch from './components/NoMatch'
import VideoBackground from './components/VideoBackground'
import { getParamObj } from './components/helpers/parseURL'

let View = getParamObj(location.href).getShows ? <Listings /> : <DatePicker />

ReactDOM.render(
  <VideoBackground />,
  document.getElementById("video-background--container")
)

ReactDOM.render(
  View
  , document.getElementById("react-app")
)
