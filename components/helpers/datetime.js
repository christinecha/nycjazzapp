"use strict"

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

export const getFormattedDate = (datetime) => {
  let month = datetime.getMonth() + 1
  let date = datetime.getDate()
  return month + " " + date
}

export const getLastSunday = (date) => {
  let lastSunday = date
      lastSunday.setDate(date.getDate() - date.getDay())
  return lastSunday
}
