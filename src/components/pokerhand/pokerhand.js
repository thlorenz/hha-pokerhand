const React = require('react')
const { Component } = React
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
    const { hand, className = '' } = this.props
    const info = hand.info || {}
    const table = hand.table || {}
    const players = (hand.players || []).map(toPlayer)

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
