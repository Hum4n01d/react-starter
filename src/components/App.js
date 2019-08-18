import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Text from './Text'
import Greeting from './Greeting'

const AppContainer = styled.div`
  background-color: dodgerblue;
  padding: 50px;
  height: 100%;
`

const App = () => {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      })
      const { joke } = await resp.json()

      setJoke(joke)
    }

    fetchData()
  }, [])

  return (
    <AppContainer>
      <Greeting name='User' />
      <Text>Random dad joke: {joke || 'Loading...'}</Text>
    </AppContainer>
  )
}

export default App
