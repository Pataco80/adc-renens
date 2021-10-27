import React from 'react'
import styled from 'styled-components'
import { SectionCenter } from './SectionStyled'
import { media } from '../theme/helpers'

const Header = () => {
  return (
    <HeaderContent>
      <SectionCenter>
        <h1>Amis de la Constitution Renens</h1>
        <h2>Routes pour distribution de flyers</h2>
      </SectionCenter>
    </HeaderContent>
  )
}

const HeaderContent = styled.header`
  text-align: center;
`

export default Header
