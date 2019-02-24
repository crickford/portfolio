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
  'html': {
    'overflow-y': 'hidden'
  },
  'h1,h2,h3,h4,h5': {
    'margin-top': '1rem'
  }
})


const typography = new Typography(theme)

export default typography
export const rhythm = typography.rhythm