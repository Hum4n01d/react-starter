import React from 'react'
import styled from 'styled-components';

import Layout from './Layout.js'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0
    }

    this.add = this.add.bind(this)
  }
  componentDidMount() {
    setInterval(this.add, 1000)
  }
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    return (
      <div>
        <p>Number of seconds that have passed:</p>
        <p>{this.state.number}</p>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

const Home = () => (
  <div>
    <p>This is a React App!</p>

    <Counter/>
  </div>
)

export default Home