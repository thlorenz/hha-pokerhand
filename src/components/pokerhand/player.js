'use strict'

/** @jsx h */
const { h, Component } = require('preact')
const Card = require('../card/card')

function oneDecimal(x) {
  return (x || 0).toFixed(1)
}

function shortenActionType(type) {
  return  type === 'fold'     ? 'F'
        : type === 'check'    ? 'X'
        : type === 'call'     ? 'C'
        : type === 'bet'      ? 'B'
        : type === 'raise'    ? 'R'
        : type === 'collect'  ? 'W'
        : (console.error('Unknown action type', type), '?')
}

function renderStreet(actions, indent) {
  let s = indent ? '_____ ' : ''
  for (let i = 0; i < actions.length; i++) {
    const a = actions[i]
    if (a.type === 'bet-returned') continue
    s +=  shortenActionType(a.type) + ' '
        + (a.hasOwnProperty('ratio')
            ? oneDecimal(a.ratio)
            : '   ')
        + (a.allin ? ' A' : '')
        + ' '
  }
  return s.trim()
}

class Player extends Component {
  render() {
    const {
      name
    , bb, sb
    , cards
    , m } = this.props

    const card1    = cards && cards.card1
    const card2    = cards && cards.card2
    const pos      = this.props.pos && this.props.pos.toUpperCase()
    const preflop  = renderStreet(this.props.preflop, bb || sb)
    const flop     = renderStreet(this.props.flop, false)
    const turn     = renderStreet(this.props.turn, false)
    const river    = renderStreet(this.props.river, false)
    const showdown = renderStreet(this.props.showdown, false)

    return (
      <tr className='hha-pokerhand-player'>
        <td>{pos}</td>
        <td>{name}</td>
        <td>
          <Card card={card1} empty='' />
          <Card card={card2} empty='' />
        </td>
        <td>{m}</td>
        <td>{preflop}</td>
        <td>{flop}</td>
        <td>{turn}</td>
        <td>{river}</td>
        <td>{showdown}</td>
      </tr>
    )
  }
}

module.exports = Player
