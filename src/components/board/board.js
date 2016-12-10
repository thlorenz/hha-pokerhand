'use strict'

/** @jsx h */
const { h, Component } = require('preact')
const Card = require('../card/card')

class Board extends Component {
  render() {
    const { cards } = this.props
    const { card1, card2, card3, card4, card5 } = (cards || {})

    return (
      <span className='hha-pokerhand-board'>
        <Card card={card1} empty='     ' />
        <Card card={card2} empty='     ' />
        <Card card={card3} empty='     ' />
        <Card card={card4} empty='     ' />
        <Card card={card5} empty='     ' />
      </span>
    )
  }
}

module.exports = Board
