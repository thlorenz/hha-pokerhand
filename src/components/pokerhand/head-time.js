'use strict'

/** @jsx h */
const { h, Component } = require('preact')

function twoDigits(n) {
  return ('0' + n).slice(-2)
}

class HeadTime extends Component {
  render() {
    const { hour, min, sec } = this.props
    if (!hour || !min || !sec) return <span />
    return (
      <span>
        {twoDigits(hour)}:{twoDigits(min)}:{twoDigits(sec)}
      </span>
    )
  }
}

module.exports = HeadTime
