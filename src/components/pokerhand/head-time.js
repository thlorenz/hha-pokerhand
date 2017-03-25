const React = require('react')
const { Component } = React

function twoDigits(n) {
  return ('0' + n).slice(-2)
}

class HeadTime extends Component {
  render() {
    const { hour, min, sec, className = '' } = this.props
    if (!hour || !min || !sec) return <span />
    return (
      <span className={className}>
        {twoDigits(hour)}:{twoDigits(min)}:{twoDigits(sec)}
      </span>
    )
  }
}

module.exports = HeadTime
