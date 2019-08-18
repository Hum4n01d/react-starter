import { hot } from 'react-hot-loader/root' // Must be required before react and react-dom
import React from 'react'
import { Normalize } from 'styled-normalize'

import GlobalStyle from './GlobalStyle'
import App from './App'

const Root = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <App />
  </>
)

export default hot(Root)
