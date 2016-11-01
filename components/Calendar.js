"use strict"

import React from 'react'
import moment from 'moment-timezone'


class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  getDays(startMoment) {
    const { updateValue } = this.props

    let days = []

    for (let i = 0; i < 7; i++) {
      let datetime = moment(startMoment).add(i, 'days')
      days.push(
        <div
          key={ i }
          className="day"
          onClick={ () => updateValue(datetime.unix()) }>
          { datetime.format('D') }
        </div>
      )
    }

    return days
  }

  getWeeks() {
    let weeks = []

    for (let i = 0; i < 5; i ++) {
      const startMoment = moment().startOf('week').add(i, 'weeks')
      weeks.push(
        <div key={ i } className="week">
          { this.getDays(startMoment) }
        </div>
      )
    }

    return weeks
  }

  render() {
    const { closeCalendar } = this.props

    return (
      <div className="calendar">
        <h4>
          { moment().endOf('week').format('MMMM') }
        </h4>
        { this.getWeeks() }
      </div>
    )
  }
}

export default Calendar
