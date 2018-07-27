import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

class App extends Component {
  constructor(props) {
    super(props)

    this.regenerate = this.regenerate.bind(this)
    this.getRandomAdjective = this.getRandomAdjective.bind(this)

    this.state = {
      adjective: this.getRandomAdjective()
    }
  }
  getRandomAdjective() {
    return this.props.adjectives[Math.floor(Math.random() * this.props.adjectives.length)]
  }
  regenerate() {
    const adjective = this.getRandomAdjective()

    this.setState({
      adjective
    })
  }
  render() {
    return (
      <div>
        <p>React is { this.state.adjective }</p>
        <button onClick={this.regenerate}>Regenerate</button>
      </div>
    )
  }
}

App.propTypes = {
  adjectives: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default hot(module)(App)