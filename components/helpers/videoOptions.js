"use strict"

export const videos = [
  "edmakUKp0TA",
  "b2Gu_SiJ60Y",
  "zIwREs0dN4Q",
  "XG-81iAjGEk",
]

export const randomVid = () => {
  let rand = Math.round(Math.random() * (videos.length - 1))
  return videos[rand]
}
