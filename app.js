"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import NYCJazzApp from './components/NYCJazzApp'

const $continue = document.querySelector('.continue-to-app')
const $exit = document.querySelector('.exit')

$continue.addEventListener('click', () => {
  document.body.classList.add('is--displaying-shows')

  ReactDOM.render(
    <NYCJazzApp />
    , document.getElementById("react-app")
  )
})


$exit.addEventListener('click', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("react-app"))
  document.body.classList.remove('is--displaying-shows')
})
