"use strict"

import React from 'react'
import Calendar from './Calendar'
import Dropdown from './Dropdown'
import * as Datetime from './helpers/datetime'

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customOption: null
    }
  }

  selectDate(datetime) {
    this.setState({
      customOption: Datetime.getFormattedDate(datetime),
      customValue: datetime
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
          customValue   = { this.state.customValue }
          defaultOption  = { 1 }
          options        = { ["Yesterday", "Today", "Tomorrow", "Custom"] }
          customDisplays = { customDisplays }
          values         = { valuesDictionary }
        />
      </div>
    )
  }
}

export default DatePicker
