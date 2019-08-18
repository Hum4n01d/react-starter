import styled from 'styled-components'

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: white;
`

const Title = styled(Text).attrs(() => ({
  as: 'h1'
}))`
  font-size: 32px;
`

export default Text
export {
  Title
}
