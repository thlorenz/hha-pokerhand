const React = require('react')
const { Component } = React

const back = '🂠'

class CardBacks extends Component {
  render() {
    return (
      <span className='hha-pokerhand-card-backs'>
        {back}{back}
      </span>
    )
  }
}

module.exports = CardBacks
