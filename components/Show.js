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
        <a href={ this.props.link } target="_blank">
          <div className="show--time">
            <span className="show--hours">{ startMoment.format('h:mm') }</span>
            <span className="show--ampm">{ startMoment.format('A') }</span>
          </div>
          <div className="show--info">
            <div className="show--title">{ this.props.title }</div>
            <div className="show--venue">{ this.props.venue }</div>
          </div>
        </a>
      </div>
    )
  }
}

export default Show
