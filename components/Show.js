import React from 'react'
import moment from 'moment-timezone'

class Show extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const startMoment = moment(this.props.datetime, 'X')

    return (
      <div className="show">
        <div className="show--time">
          <span className="show--hours">{ startMoment.format('h:mm') }</span>
          <span className="show--ampm">{ startMoment.format('A') }</span>
        </div>
        <div className="show--info">
          <div className="show--title">{ this.props.title }</div>
          <a href={ this.props.link }>
            <div className="show--venue">{ this.props.venue }</div>
          </a>
        </div>
      </div>
    )
  }
}

export default Show
