const React = require('react')
const { Component } = React
const ReactDom = require('react-dom')
const PokerHand = require('./pokerhand')

class PokerHands extends Component {
  render() {
    const { hands = [] } = this.props
    this._pokerHands = new Array(hands.length)
    return <div>{(hands).map(this._toHand, this)}</div>
  }

  componentDidUpdate() {
    const { selectedIndex, autoScroll = true } = this.props
    if (!autoScroll) return
    const el = ReactDom.findDOMNode(this._pokerHands[selectedIndex])
    el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  _toHand(x, idx) {
    const { injectHeader, injectFooter, selectedIndex } = this.props
    const className = selectedIndex === idx
      ? 'selected'
      : ''

    const key = (x.info && x.info.handid) || idx
    return (
      <PokerHand
        hand={x}
        key={key}
        ref={el => (this._pokerHands[idx] = el)}
        onselected={(hand, component) => this._onhandSelected(hand, component, idx)}
        injectHeader={injectHeader}
        injectFooter={injectFooter}
        className={className}
      />
    )
  }

  _onhandSelected(hand, component, idx) {
    const { onhandSelected } = this.props
    if (typeof onhandSelected !== 'function') return
    onhandSelected(hand, component, idx)
  }
}

module.exports = PokerHands
