import { generateMedia } from 'styled-media-query'

// Colors Palette
export const setColor = {
  red: '##FF4043',
  black: '#222222',
  white: '#ffffff',
  grey: '#617d98',
  lightGrey: '#CFCFCF',
  orange: '#FFAB00',
  green: '#00FF81',
}

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const breakpoints = {
  mobile: 320,
  smTablet: 576,
  tablet: 768,
  lgTablet: 992,
  desktop: 1200,
}

export const media = generateMedia({
  mobile: '15rem',
  smTablet: '36rem',
  tablet: '48rem',
  lgTablet: '62rem',
  desktop: '75rem',
})

// Layout's Functions
export const layout = ({ mW = 1140, wTh = '100%' } = {}) => {
  return `
  width: ${wTh};
    max-width:${setPxToRem(mW)};
    margin: 0 auto;
  `
}

export const setFlex = ({
  flex = 'auto',
  x = 'center',
  y = 'center',
  flDir = 'row',
  wrap = 'wrap',
} = {}) => {
  return `display: flex;
  flex:${flex};
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  flex-wrap: ${wrap}
  `
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 3.2) => {
  return `letter-spacing: ${setPxToRem(number)}`
}

export const setBorder = ({
  size = 2,
  style = 'solid',
  color = 'transparent',
} = {}) => {
  return `${setPxToRem(size)} ${style} ${color}`
}

export const setRadius = ({
  allPx = null,
  allPc = null,
  radius = 4,
  tl = radius,
  tr = radius,
  bl = radius,
  br = radius,
} = {}) => {
  if (allPx) {
    return `
    border-radius: ${setPxToRem(allPx)};
    `
  } else if (allPc) {
    return `
    border-radius: ${allPc}%;
    `
  } else {
    return `
    border-top-left-radius: ${setPxToRem(tl)};
    border-top-right-radius: ${setPxToRem(tr)};
    border-bottom-left-radius: ${setPxToRem(bl)};
    border-bottom-right-radius: ${setPxToRem(br)};
  `
  }
}
