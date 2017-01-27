const React = require('react')
const { render } = require('react-dom')

const PokerHands = require('./components/pokerhand/pokerhands')
const hand = require('../../hha/tmp/action-onall.analyzed.json.json')

try { require('preact/devtools') } finally {}

render(
  <PokerHands hands={[ hand ]} />
, document.body
)
