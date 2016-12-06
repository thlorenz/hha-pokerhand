'use strict'

/** @jsx h */
const { h } = require('preact')
const PokerHand = require('./pokerhand')

function toHand(x, idx) {
  return <PokerHand hand={x} key={idx} />
}

function PokerHands({ hands }) {
  return <div>{(hands || []).map(toHand)}</div>
}

module.exports = PokerHands
