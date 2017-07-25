import React from 'react'
import styled from 'styled-components'

import SectionWrapper from './SectionWrapper'

const Footer = styled.div`
  text-align: center;
  padding: 10px;

  p {
    margin: 0;
  }
`

export default props => (
  <SectionWrapper>
    <Footer>
      <p>&copy; {new Date().getFullYear()}</p>
    </Footer>
  </SectionWrapper>
)