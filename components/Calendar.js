"use strict"

import React from 'react'
import * as Datetime from './helpers/datetime'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: new Date()
    }
  }

  getDays(startDate) {
    const { handleDateSelect } = this.props

    let days = []
    for (let i = 0; i < 7; i++) {
      let datetime = new Date(startDate + (Datetime.unixDay * i))
      days.push(
        <div
          className="day"
          key={ i }
          onClick={ () => handleDateSelect(datetime) }>
          { Datetime.getFormattedDate(datetime) }
        </div>
      )
    }
    return days
  }

  getWeeks() {
    const { now } = this.state
    let lastSunday = Datetime.getLastSunday(now)
    let weeks = []
    for (let i = 0; i < 5; i ++) {
      let startOfWeek = lastSunday.getTime() + (Datetime.unixWeek * i)
      weeks.push(
        <div key={ i } className="week">
          { this.getDays(startOfWeek) }
        </div>
      )
    }
    return weeks
  }

  render() {
    const { closeCalendar } = this.props

    return (
      <div className="calendar">
        calendar:
        { this.getWeeks() }
      </div>
    )
  }
}

export default Calendar
