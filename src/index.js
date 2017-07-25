import React from 'react'
import ReactDOM from 'react-dom'

import Router from './router'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
