import React from 'react'
import Header from './Header'
import Footer from './Footer'
import GlobalStyles from '../theme/globalStyles'
import styled from 'styled-components'
import { setFlex } from '../theme/helpers'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  )
}

const PageContainer = styled.main`
  ${setFlex({ flDir: 'column' })};
`

export default Layout
