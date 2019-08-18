import React from 'react'
import PropTypes from 'prop-types'

import { Title } from './Text'

const Greeting = ({ name }) => (
  <Title>Greetings, {name}!</Title>
)

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting
