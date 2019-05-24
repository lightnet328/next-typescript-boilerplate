import * as React from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

function Home(): JSX.Element {
  return <>
    <Normalize />
    <Root>Welcome to Next.js!</Root>
  </>
}

export default Home
