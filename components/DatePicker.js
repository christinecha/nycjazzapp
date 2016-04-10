"use strict"

import React from 'react'
import Calendar from './Calendar'
import Dropdown from './Dropdown'
import * as Datetime from './helpers/datetime'

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customOption: null,
      customValue: null,
      selectedDate: new Date()
    }
  }

  selectDate(datetime) {
    this.setState({
      customOption: Datetime.getFormattedDate(datetime, "display"),
      customValue: datetime
    })

    this.updateValue(datetime)
  }

  updateValue(val) {
    this.setState({
      selectedDate: val
    })
  }

  render() {
    let customDisplays = {
      3: <Calendar handleDateSelect={ (datetime) => this.selectDate(datetime) } />
    }

    let valuesDictionary = {
      "Yesterday" : Datetime.yesterday(),
      "Today": new Date(),
      "Tomorrow": Datetime.tomorrow()
    }

    return (
      <div>
        <Dropdown
          customOption   = { this.state.customOption }
          customValue    = { this.state.customValue }
          defaultOption  = { 1 }
          options        = { ["Yesterday", "Today", "Tomorrow", "Custom"] }
          customDisplays = { customDisplays }
          updateValue    = { (val) => this.updateValue(val) }
          values         = { valuesDictionary }
        />
        <br />
        <a href={`?getShows=true&date=${Datetime.getFlattenedUnix(this.state.selectedDate)}`}>
          <button className = "submitDate">
            go
          </button>
        </a>
      </div>
    )
  }
}

export default DatePicker
