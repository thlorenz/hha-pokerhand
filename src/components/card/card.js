'use strict'

/** @jsx h */
const { h, Component } = require('preact')

function renderSuit(s) {
  switch (s) {
    case 's': return '♠'
    case 'h': return '♥'
    case 'd': return '♦'
    case 'c': return '♣'
  }
}

class Card extends Component {
  render() {
    const { isEmpty, value, suit, suitClass } = this._cardInfo()

    return (
      <span className='hha-pokerhand-card'>
        <span className='hha-pokerhand-card-value'>{value}</span>
        {!isEmpty && <span className={suitClass}>{suit}</span>}
      </span>
    )
  }

  _cardInfo() {
    const { card, empty } = this.props
    const isEmpty = (typeof card !== 'string' || !card.length)
    const value = isEmpty ? empty : card[0]
    const suit = isEmpty ? '' : renderSuit(card[1])
    const suitClass = isEmpty ? 'hha-pokerhand-card-suit' : 'hha-pokerhand-card-suit ' + card[1]
    return { isEmpty, value, suit, suitClass }
  }
}

module.exports = Card
