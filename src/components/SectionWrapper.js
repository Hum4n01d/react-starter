import styled from 'styled-components'

const SectionWrapper = styled.div`
  padding: 0 10px;

  ${props => props.body ? `` : `
    background-color: #eee;
  `}

  @media screen and (min-width: 500px) {
    margin: 0 10vw;
  }
`

export default SectionWrapper