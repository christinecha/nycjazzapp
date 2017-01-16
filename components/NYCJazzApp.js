'use strict'

import React from 'react'
import Firebase from 'firebase'
import moment from 'moment-timezone'

import Show from './Show'

let ref = new Firebase('https://nycjazz.firebaseio.com/')


class NYCJazzApp extends React.Component {
  constructor(props) {
    super(props)

    const now = moment().tz('America/New_York').startOf('day').format('X')

    this.state = {
      allShows: {},
      date: now.toString()
    }

    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    this.getShows()
  }

  getShows() {
    const { date } = this.state

    const yesterday = moment().subtract(1, 'days')

    ref.child('shows')
    .orderByChild('startDateTime')
    .startAt(yesterday.unix())
    .once('value', (snapshot) => {
      let allShows = {}

      snapshot.forEach(child => {
        const show = child.val()
        show.id = child.key

        const day = moment(show.startDateTime, 'X').startOf('day').format('X')
        if (!allShows[day]) allShows[day] = []
        allShows[day].push(show)
      })

      this.setState({ allShows })
    })
  }

  handlePrev() {
    const newDate = moment(this.state.date, 'X').subtract(1, 'days')
    this.setState({ date: newDate.unix() })
  }

  handleNext() {
    const newDate = moment(this.state.date, 'X').add(1, 'days')
    this.setState({ date: newDate.unix() })
  }

  renderShows() {
    const { date, allShows } = this.state
    const selectedShows = allShows[date.toString()] || []

    return selectedShows.map((show, i) => {
      return (
        <Show
          key      = {i}
          title    = {show.title}
          link     = {show.link}
          venue    = {show.venue}
          datetime = {show.startDateTime}
        />
      )
    })
  }

  render() {
    const dateMoment = moment(this.state.date, 'X').tz('America/New_York')
    const formattedDate = dateMoment.format('dddd, MMMM D, YYYY')
    const isYesterday = dateMoment.diff(moment(), 'days') === -1

    return (
      <div className="react-app-content">
        <h1><span className="red">NYC</span> JAZZ SHOWS</h1>
        <div className="datepicker">
          {!isYesterday && <div className="arrow-prev" onClick={this.handlePrev}></div>}
          <div className="date">{formattedDate}</div>
          <div className="arrow-next" onClick={this.handleNext}></div>
        </div>

        <div className='shows'>
          { this.renderShows() }
        </div>
     </div>
    )
  }
}

export default NYCJazzApp
