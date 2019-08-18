import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'

import Root from './components/Root'

render(
  <Root />,
  document.querySelector('#root')
)
