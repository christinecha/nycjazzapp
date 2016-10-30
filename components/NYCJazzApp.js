'use strict'

import React from 'react'
import Firebase from 'firebase'
import moment from 'moment-timezone'

import Show from './Show'
import Dropdown from './Dropdown'

let ref = new Firebase('https://nycjazz.firebaseio.com/')

const getMoment = (date) => {
  if (date === 'Today') return moment().startOf('day')
  if (date === 'Tomorrow') return moment().startOf('day').add(24, 'hours')

  return moment.tz(date, 'ddd, MMM D', 'America/New_York')
}


class NYCJazzApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: false,
      shows: [],
      date: 'Today'
    }
  }

  componentDidMount() {
    this.getShows()
  }

  getShows() {
    const { date } = this.state

    const startMoment = getMoment(date)
    const endMoment = moment(startMoment).add(24, 'hours')

    ref.child('shows')
      .orderByChild('startDateTime')
      .startAt(startMoment.unix())
      .endAt(endMoment.unix())
      .once('value', (snapshot) => {
        let shows = []
        snapshot.forEach(child => {
          shows.push(child.val())
        })

        this.setState({ shows })
      })
  }

  updateDate(date) {
    this.setState({
      date,
      showDropdown: false
    }, this.getShows.bind(this))
  }

  renderShows() {
    return this.state.shows.map((show, i) => {
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
    return (
      <div>
        <div className='hero'>
          <h1>NYC<span className='jazz'>jazz</span></h1>
          <Dropdown
            showDropdown   = { this.state.showDropdown}
            toggleDropdown = { () => this.setState({ showDropdown: !this.state.showDropdown} )}
            value          = { this.state.date }
            options        = { ['Today', 'Tomorrow'] }
            updateValue    = { date => this.updateDate(date) }
          />
        </div>

        <div className='shows'>
          { this.renderShows() }
        </div>

        <div id="credits">
          <h4>CREATED BY <a href="http://christinecha.com">  CHRISTINE CHA</a></h4>
       </div>
      </div>
    )
  }
}

export default NYCJazzApp
