import React from 'react'
import moment from 'moment-timezone'

import Calendar from './Calendar'


class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDatePicker: false
    }
  }

  selectOption(val) {
    if (val === 'Today' || val === 'Tomorrow') {
      this.props.updateValue(val)
      return
    }

    this.setState({ showDatePicker: true })
  }

  updateCalendarValue(val) {
    this.setState({ showDatePicker: false })
    const datestring = moment.tz(val, 'X', 'America/New_York').format('ddd, MMM D')
    this.props.updateValue(datestring)
  }

  renderOptions() {
    const options = this.state.showDatePicker ? this.props.options : this.props.options.concat(['Custom'])

    return options.map((val, i) => {
      return (
        <div
          key={i}
          className='option'
          onClick={this.selectOption.bind(this, val)}
        >
          {val}
        </div>
      )
    })
  }

  render() {
    const { showDropdown, toggleDropdown, value } = this.props

    return (
      <div className="dropdown">
        <div
          className="selectedOption"
          onClick={ toggleDropdown }>
          { value }
          <span className="caret">&#9660;</span>
        </div>
        <div className={`options ${showDropdown ? null : 'hidden'}`}>
          { this.renderOptions() }
          { this.state.showDatePicker && <Calendar updateValue={this.updateCalendarValue.bind(this)} /> }
        </div>
      </div>
    )
  }
}

export default Dropdown
