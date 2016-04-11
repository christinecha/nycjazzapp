"use strict"

export const videos = [
  "edmakUKp0TA",
  "b2Gu_SiJ60Y",
  "zIwREs0dN4Q",
  "XG-81iAjGEk",
  "FCwPmHBtJrM",
  "YwsqxZyNqa8",
  "rcrFoWOYxr0",
  "4somwYjj7e8",
  "_5KJlS8pDSE",
  "TcFoDw1BMHI"
]

export const randomVid = () => {
  let rand = Math.round(Math.random() * (videos.length - 1))
  return videos[rand]
}
