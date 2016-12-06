'use strict'

/** @jsx h */
const { h, Component } = require('preact')

const Board = require('../board/board')
const HeadTime = require('./head-time')
const HeadDate = require('./head-date')

class Head extends Component {
  render() {
    const {
      bb, sb, ante
    , maxseats
    , board
    , year, month, day
    , hour, min, sec
    , gametype, gameno, handid } = this.props

    const space = ' '
    return (
      <div className='hha-pokerhand-header'>
        <span className='hha-pokerhand-bb-sb-ante-max'>
          ({bb}/{sb}) {ante && '(' + ante + ')'} [{maxseats}]
        </span>
        {space}
        <Board cards={board} />
        {space}
        <HeadDate year={year} month={month} day={day} />
        {space}
        <HeadTime hour={hour} min={min} sec={sec} />
        {space}
        <span>
          {gametype === 'tournament' ? 'T' : 'C'}: {gameno} G: {handid}
        </span>
      </div>
    )
  }
}

module.exports = Head
