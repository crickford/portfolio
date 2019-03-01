import Typography from "typography"
import theme from "typography-theme-sutro"

theme.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['300', '700'],
  },
  {
    name: 'Merriweather',
    styles: ['300', '300i', '700', '700i'],
  }
]

theme.overrideThemeStyles = () => ({
  'a': {
    color: '#10a6d0',
  },
  ['@media only screen and (max-width: 480px)']: {
    'ul,ol': {
      marginLeft: 0,
    }
  },
  ['@media only screen and (min-width: 769px)']: {
    'html': {
      'overflow-y': 'hidden'
    }
  },
  'h1,h2,h3,h4,h5': {
    'margin-top': '1rem'
  },
  ['@media only screen and (max-width:980px)']: { // '@media only screen and (max-width:980px) and (min-width:769px)'
    'html': {
      'font-size': '14px'
    }
  }
})


const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm