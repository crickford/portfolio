import Typography from "typography"
import theme from "typography-theme-sutro"

const phoneBreakpoint = '@media only screen and (max-width: 480px)';
const tabletBreakpoint = '@media only screen and (max-width:980px)'
const defaultBreakpoint = '@media only screen and (min-width: 769px)';

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
  [phoneBreakpoint]: {
    'ul,ol': {
      marginLeft: 0,
    }
  },
  [defaultBreakpoint]: {
    'html': {
      'overflow-y': 'hidden'
    }
  },
  'h1,h2,h3,h4,h5': {
    'margin-top': '1rem'
  },
  [tabletBreakpoint]: {
    'html': {
      'font-size': '14px'
    }
  }
})


const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm