import React from 'react'
import { render } from 'react-dom'

import 'modern-normalize'
import './index.css'

import App from './components/App'

const adjectives = ['awesome', 'cool', 'amazing', 'terrific', 'great', 'nice', 'good', 'superb', 'fantastic']

render(
  <App adjectives={adjectives} />,
  document.getElementById('root')
)