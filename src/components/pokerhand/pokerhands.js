'use strict'

/** @jsx h */
const { h } = require('preact')
const PokerHand = require('./pokerhand')

class PokerHands {
  render() {
    const { hands } = this.props
    return <div>{(hands || []).map(this._toHand, this)}</div>
  }

  _toHand(x, idx) {
    const { onhandSelected, injectHeader, injectFooter } = this.props
    return (
      <PokerHand
        hand={x}
        key={idx}
        onselected={onhandSelected}
        injectHeader={injectHeader}
        injectFooter={injectFooter}
      />
    )
  }
}

module.exports = PokerHands
