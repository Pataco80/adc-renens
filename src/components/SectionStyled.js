import styled, { css } from 'styled-components'

// Import helpers
import { layout, media, setColor } from '../theme/helpers'

// Styled CSS
const SectionCss = css`
  background-color: ${(props) =>
    props.background ? props.background : `${setColor.mainWhite}`};
  padding: ${(props) => (props.paddingSm ? props.paddingSm : `2rem 1rem`)};

  ${media.greaterThan('tablet')`
    padding: ${(props) => (props.paddingMd ? props.paddingMd : `2rem 3rem`)};
  `}

  ${media.greaterThan('desktop')`
    padding: ${(props) => (props.paddingLg ? props.paddingLg : `3rem`)};
  `}
`

// Export Styles for the component
export const Section = styled.section`
  ${SectionCss}
  width: 100vw;
`
export const SectionContent = styled.div`
  padding: ${(props) => (props.padding ? props.padding : `0`)};
  width: 100%;
`

export const SectionCenter = styled.section`
  ${SectionCss}
  ${layout()};
  width: 100%;
`

export const SectionContentCenter = styled.div`
  ${layout()};
  padding: ${(props) => (props.padding ? props.padding : `0`)};
  width: 100%;
`
