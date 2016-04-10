"use strict"

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const daysAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const monthsAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const unixDay = 1000 * 60 * 60 * 24
export const unixWeek = 1000 * 60 * 60 * 24 * 7

export const yesterday = () => {
  let yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

export const tomorrow = () => {
  let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
}

export const formatTime = (hours, minutes) => {
  let newHours = hours
  let newMinutes = minutes
  let ampm = "am"

  if (hours > 12) {
    newHours = hours - 12
    ampm = "pm"
  }

  if (hours == 0) newHours = 12

  if (newHours.toString().length < 2) newHours = "0" + newHours
  if (newMinutes.toString().length < 2) newMinutes = "0" + newMinutes

  return newHours + ":" + newMinutes + " " + ampm
}

export const getFlattenedUnix = (datetime) => {
  let flattenedUnix = new Date(datetime)
  flattenedUnix.setHours(0)
  flattenedUnix.setMinutes(0)
  flattenedUnix.setSeconds(0)
  flattenedUnix.setMilliseconds(0)
  return getUnix(flattenedUnix)
}

export const getFormattedDate = (datetime, type) => {
  let month = datetime.getMonth()
  let date = datetime.getDate()
  let day = datetime.getDay()
  let hours = datetime.getHours()
  let minutes = datetime.getMinutes()

  if (type == "calendar") return date
  if (type == "display") return days[day] + ",  " + months[month] + " " + date
  if (type == "display-show") return daysAbbr[day] + " " + monthsAbbr[month] + " " + date + " | " + formatTime(hours, minutes)
}

export const getLastSunday = (date) => {
  let lastSunday = date
      lastSunday.setDate(date.getDate() - date.getDay())
  return lastSunday
}

export const getUnix = (date) => {
  let dateUnix = new Date(date).getTime()
  return dateUnix
}
