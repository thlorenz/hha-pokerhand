'use strict'

/** @jsx h */
const { h, Component } = require('preact')
const Card = require('../card/card')

class Board extends Component {
  render() {
    const { cards } = this.props
    const { card1, card2, card3, card4, card5 } = cards

    return (
      <span className='hha-pokerhand-board'>
        <Card card={card1} empty='&nbsp;&nbsp;' />
        <Card card={card2} empty='&nbsp;&nbsp;' />
        <Card card={card3} empty='&nbsp;&nbsp;' />
        <Card card={card4} empty='&nbsp;&nbsp;' />
        <Card card={card5} empty='&nbsp;&nbsp;' />
      </span>
    )
  }
}

module.exports = Board
