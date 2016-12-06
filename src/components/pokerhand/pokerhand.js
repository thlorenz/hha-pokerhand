'use strict'

/** @jsx h */
const { h, Component } = require('preact')
const Head = require('./head')
const Player = require('./player')

function toPlayer(x, idx) {
  return (
    <Player
      name={x.name}
      bb={x.bb}
      sb={x.sb}
      cards={x.cards}
      m={x.m}
      pos={x.pos}
      preflop={x.preflop}
      flop={x.flop}
      turn={x.turn}
      river={x.river}
      showdown={x.showdown}
      key={idx} />
  )
}

class PokerHand extends Component {
  render() {
    const { hand } = this.props
    const info = hand.info || {}
    const table = hand.table || {}
    const players = (hand.players || []).map(toPlayer)

    return (
      <div className='hha-pokerhand-hand'>
        <Head
          ante={info.ante}
          gametype={info.gametype}
          handid={info.handid}
          gameid={info.gameid}
          gameno={info.gameno}
          year={info.year}
          month={info.month}
          day={info.day}
          hour={info.hour}
          min={info.min}
          sec={info.sec}
          maxseats={table.maxseats}
          board={hand.board}
          bb={info.bb}
          sb={info.sb} />

        <div className='hha-pokerhand-table'>
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Name</th>
                <th>Cards</th>
                <th>M</th>
                <th>Preflop</th>
                <th>Flop</th>
                <th>Turn</th>
                <th>River</th>
              </tr>
            </thead>
            <tbody>
              {players}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = PokerHand
