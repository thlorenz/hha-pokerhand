'use strict'

/** @jsx h */
const { h, render } = require('preact')
require('preact/devtools')

const PokerHands = require('./components/pokerhand/pokerhands')
const hand = require('../../hha/tmp/action-onall.analyzed.json.json')

render(
  <PokerHands hands={[ hand ]} />
, document.body
)
