import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }
`

export default GlobalStyle
