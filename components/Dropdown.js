"use strict"

import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customDisplay: null,
      customOption: this.props.customOption || null,
      customValue: this.props.customValue || null,
      selected: this.props.defaultOption || null,
      showOptions: false
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setState({
        customOption: this.props.customOption,
        customValue: this.props.customValue
      })
    }
  }

  closeOptions(e) {
    this.setState({
      showOptions: false
    })
  }

  getOptions() {
    if (!this.state.showOptions) return null

    const { customDisplays, options } = this.props

    let optionNodes = options.map((option, i) =>  {
      return (
        <div onClick={ () => this.setOption(i) } key={ i }>
          { option }
        </div>
      )
    })

    return (
      <div className="options">
        <div className="options--close" onClick={ (e) => this.closeOptions(e) }>X</div>
        { optionNodes }
        <div className="customDisplay">
          { customDisplays[this.state.selected] }
        </div>
      </div>
    )
  }

  getSelectedValue() {
    const { options, values } = this.props
    let selectorId = options[this.state.selected]

    if (values && values[selectorId]) {
      return values[selectorId]
    } else {
      return this.state.customValue || selectorId
    }
  }

  setOption(i) {
    const { customDisplays, customOption } = this.props
    this.setState({
      customOption: null,
      selected: i,
      showOptions: !!customDisplays[i]
    })
  }

  showOptions(e) {
    this.setState({
      showOptions: !this.state.showOptions
    })
  }

  render() {
    const { customDisplays, customOption, defaultOption, options } = this.props

    console.log('selected: ', this.getSelectedValue())

    return (
      <div className="dropdown">
        <div
          className="selectedOption"
          onClick={ (e) => this.showOptions(e) }>
          { this.state.customOption || options[this.state.selected] || "select one" }
        </div>
        { this.getOptions() }
      </div>
    )
  }
}

export default Dropdown
