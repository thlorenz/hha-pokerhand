const React = require('react')
const { Component } = React

const HeadTime = require('./head-time')
const HeadDate = require('./head-date')

function renderWin(win, bb, ante, decimals) {
  if (isNaN(ante)) ante = 0
  const bigWin = Math.abs(win) > (bb + ante)
  const winIndicator = (
      win < 0 ? '-'
    : win > 0 ? '+'
    : '±'
  )

  const className = (
      win < 0 && bigWin ? 'down'
    : win > 0 && bigWin ? 'up'
    : ''
  )

  return (
    <span className={'hha-pokerhand-win fr ' + className}>
      {winIndicator}${Math.abs(win).toFixed(decimals)}
    </span>
  )
}

class Head extends Component {
  render() {
    const {
      bb, sb, ante
    , maxseats
    , year, month, day
    , hour, min, sec
    , gametype, gameno, handid
    , win, decimals } = this.props

    const space = ' '
    return (
      <div className='hha-pokerhand-header'>
        <span className='hha-pokerhand-bb-sb-ante-max'>
          ({bb}/{sb}) {ante && '(' + ante + ')'} [{maxseats}]
        </span>
        {renderWin(win, bb, ante, decimals)}
        <span className='fr'>
          {gametype === 'tournament' ? 'T' : 'C'}: {gameno} G: {handid}
        </span>
        <HeadTime hour={hour} min={min} sec={sec} className='fr' />
        {space}
        <HeadDate year={year} month={month} day={day} className='fr' />
        {space}
      </div>
    )
  }
}

module.exports = Head
