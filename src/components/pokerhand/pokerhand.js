const React = require('react')
const { Component } = React
const Head = require('./head')
const Card = require('../card/card')
const Player = require('./player')

/* eslint-disable camelcase */
function toPlayer(x, idx) {
  const { tourney, bb, highlightPlayer } = this
  const m_or_bb = tourney ? x.m : (x.chips / bb).toFixed(0)
  const highlight = x.name === highlightPlayer
  return (
    <Player
      highlight={highlight}
      name={x.name}
      bb={x.bb}
      sb={x.sb}
      m_or_bb={m_or_bb}
      cards={x.cards}
      pos={x.pos}
      preflop={x.preflop}
      flop={x.flop}
      turn={x.turn}
      river={x.river}
      showdown={x.showdown}
      key={idx} />
  )
}

function renderFlop(cards) {
  const { card1, card2, card3 } = (cards || {})
  return (
    <span className='hha-pokerhand-board'>
      <Card card={card1} />
      <Card card={card2} />
      <Card card={card3} />
    </span>
  )
}

function renderTurn(cards) {
  const { card4 } = (cards || {})
  return (
    <span className='hha-pokerhand-board'>
      <Card card={card4} />
    </span>
  )
}

function renderRiver(cards) {
  const { card5 } = (cards || {})
  return (
    <span className='hha-pokerhand-board'>
      <Card card={card5} />
    </span>
  )
}

function determineWin(players) {
  for (var i = 0; i < players.length; i++) {
    const p = players[i]
    if (p.hero) return p.chipsAfter - p.chips
  }
  return 0
}

class PokerHand extends Component {
  render() {
    const { hand, className = '', highlightPlayer = null } = this.props
    const info = hand.info || {}
    const table = hand.table || {}
    const win = determineWin(hand.players)
    const tourney = info.gametype === 'tournament'
    const bb = info.bb
    const decimals = bb < 1 ? 2 : 0
    const players = (hand.players || []).map(toPlayer, { tourney, bb, highlightPlayer })

    const header = this._injectHeader()
    const footer = this._injectFooter()

    return (
      <div>
        {header}
        <div className={'hha-pokerhand-hand ' + className} onClick={() => this._onclicked()}>
          <Head
            ante={info.ante}
            gametype={info.gametype}
            handid={info.handid}
            gameid={info.gameid}
            gameno={info.gameno || table.tableno}
            year={info.year}
            month={info.month}
            day={info.day}
            hour={info.hour}
            min={info.min}
            sec={info.sec}
            maxseats={table.maxseats}
            board={hand.board}
            bb={info.bb}
            sb={info.sb}
            decimals={decimals}
            win={win} />

          <div className='hha-pokerhand-table'>
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Name</th>
                  <th>{tourney ? 'M' : 'BB'}</th>
                  <th>Cards</th>
                  <th>Preflop</th>
                  <th>Flop</th>
                  <th>Turn</th>
                  <th>River</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>{renderFlop(hand.board)}</td>
                  <td>{renderTurn(hand.board)}</td>
                  <td>{renderRiver(hand.board)}</td>
                </tr>
              </thead>
              <tbody>
                {players}
              </tbody>
            </table>
          </div>
        </div>
        {footer}
      </div>
    )
  }

  _injectHeader() {
    const { hand, injectHeader } = this.props
    return (typeof injectHeader === 'function') ? injectHeader(hand) : ''
  }

  _injectFooter() {
    const { hand, injectFooter } = this.props
    return (typeof injectFooter === 'function') ? injectFooter(hand) : ''
  }

  _onclicked() {
    const { hand, onselected } = this.props
    if (typeof onselected === 'function') onselected(hand, this)
  }
}

module.exports = PokerHand
