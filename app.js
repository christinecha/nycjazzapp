"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from './components/DatePicker'
import Listings from './components/Listings'
import NoMatch from './components/NoMatch'
import { getParamObj } from './components/helpers/parseURL.js'

let View = getParamObj(location.href).getShows ? <Listings /> : <DatePicker />

ReactDOM.render(
  View
  , document.getElementById("react-app")
)
