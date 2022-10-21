import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@joaogabriel-sg-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
