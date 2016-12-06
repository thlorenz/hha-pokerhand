'use strict'

/** @jsx h */
const { h, Component } = require('preact')

function twoDigits(n) {
  return ('0' + n).slice(-2)
}

class HeadDate extends Component {
  render() {
  const { day, month, year } = this.props
    if (!year || !month || !day) return <span />
    return (
      <span>
        {twoDigits(month)}/{twoDigits(day)}/{year}
      </span>
    )
  }
}

module.exports = HeadDate
