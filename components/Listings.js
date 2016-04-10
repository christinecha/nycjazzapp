"use strict"

import React from 'react'
import Firebase from 'firebase'
import * as Datetime from './helpers/datetime'
import { getParamObj } from './helpers/parseURL'

let ref = new Firebase("https://nycjazz.firebaseio.com/")

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      date: getParamObj(location.href).date || Datetime.getFlattenedUnix(new Date())
    }
  }

  componentWillMount() {
    let start = this.state.date / 1000
    let end = (parseInt(this.state.date) + Datetime.unixDay) / 1000

    ref.child("shows").orderByChild("startDateTime").startAt(start).endAt(end).once("value", (snapshot) => {
      let shows = []
      snapshot.forEach((childSnapshot) => {
        shows.push(childSnapshot.val())
      })

      this.setState({
        shows: shows
      })
    })
  }

  getShows() {
    return this.state.shows.map((show, i) => {
      return (
          <div className="show" key={ i }>
            <a href={ show.link }>
              <div className="show--title">{ show.title }</div>
            </a>
            <div className="show--venue">{ show.venue }</div>
            <div className="show--date">{ Datetime.getFormattedDate(new Date((show.startDateTime - 3600) * 1000), "display-show") }</div>
          </div>
      )
    })
  }

  render() {
    return (
      <div>
        <a href={ location.pathname }>
          <button className = "submitDate">
            select another date
          </button>
        </a>
        { this.getShows() }
      </div>
    )
  }
}

export default Listings
