const React = require('react')
const { Component } = React

function twoDigits(n) {
  return ('0' + n).slice(-2)
}

class HeadDate extends Component {
  render() {
  const { day, month, year, className = '' } = this.props
    if (!year || !month || !day) return <span />
    return (
      <span className={className}>
        {twoDigits(month)}/{twoDigits(day)}/{year}
      </span>
    )
  }
}

module.exports = HeadDate
