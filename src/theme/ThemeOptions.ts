// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material'

// ** Type Import
import { Settings } from '../context/settingsContext'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'
const UserThemeOptions = (): ThemeOptions => {return {}}
const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { skin, mode, direction, themeColor } = settings

  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig: any = Object.assign({}, UserThemeOptions())

  const userFontFamily = userThemeConfig.typography?.fontFamily

  // ** Remove component overrides and typography objects from userThemeOptions
  delete userThemeConfig.components
  delete userThemeConfig.typography

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode === 'semi-dark' ? 'light' : mode, skin),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            'Public Sans',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(',')
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      }
    },
    userThemeConfig
  )

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
