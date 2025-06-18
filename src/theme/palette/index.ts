// ** Type Imports
import { PaletteMode } from '@mui/material'
import { Skin } from '../../@core/types'
import themeConstant from '../../configs/themeConstant'

const DefaultPalette = (mode: PaletteMode, skin: Skin) => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '50, 71, 92'
  const darkColor = '219, 219, 235'
  const darkPaperBgColor = '#2B2C40'
  const mainColor = mode === 'light' ? lightColor : darkColor
  const textMenuColor = mode === 'light' ? themeConstant.DRAWER_LIGHT_TEXT_COLOR : themeConstant.DRAWER_DARK_TEXT_COLOR
  const menuBGColor = mode === 'light' ? themeConstant.DRAWER_LIGHT_BG_COLOR : themeConstant.DRAWER_DARK_BG_COLOR
  const headerBGColor = mode === 'light' ? themeConstant.HEADER_LIGHT_BG_COLOR : themeConstant.HEADER_DARK_BG_COLOR
const menuSelectedColor= mode === 'light' ? themeConstant.MENU_SELECTED_COLOR : themeConstant.MENU_SELECTED_COLOR
const menuGroupTextColor= mode === 'light' ? themeConstant.MAIN_COLOR : themeConstant.DRAWER_DARK_TEXT_COLOR
  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return darkPaperBgColor
    } else if (mode === 'light') {
      return '#F5F5F9'
    } else return '#232333'
  }

  return {
    customThemeColors:{
      headerBGColor,
      menuBGColor,
      textMenuColor,
      menuSelectedColor,
      secondary: `rgba(${menuGroupTextColor}, 0.6)`,
      menuGroupTextColor,
    },
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      lightPaperBg: whiteColor,
      darkPaperBg: darkPaperBgColor,
      bodyBg: mode === 'light' ? '#F5F5F9' : '#232333', // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === 'light' ? '#EBEEF0' : '#444463',
      tooltipBg: mode === 'light' ? '#233446' : '#6b6c9d',
      tableHeaderBg: mode === 'light' ? '#F3F4F6' : '#353649',
      textMenuColor,
      headerBGColor
    },
    bgColors:{
      headerBGColor,
      menuBGColor,
    },
    botColor:{
      purple: '#696CFF',
      grey: '#8592A3',
      green: '#71DD37',
      red: '#FF3E1D',
      yellow: '#FFAB00',
      blue: '#03C3EC',
      navyblue: '#3f51b5',
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: themeConstant.PRIMARY_LIGHT,
      main: themeConstant.PRIMARY_MAIN,
      dark: themeConstant.PRIMARY_DARK,
      contrastText: whiteColor
    },
    secondary: {
      light: themeConstant.SECONDARY_LIGHT,
      main: themeConstant.SECONDARY_MAIN,
      dark: themeConstant.SECONDARY_DARK,
      contrastText: whiteColor
    },
    golden: {
      light: themeConstant.GOLDEN_LIGHT,
      main: themeConstant.GOLDEN_MAIN,
      dark: themeConstant.GOLDEN_DARK,
      contrastText: whiteColor
    },

    error: {
      light: themeConstant.ERROR_LIGHT,
      main: themeConstant.ERROR_MAIN,
      dark: themeConstant.ERROR_DARK,
      contrastText: whiteColor
    },
    warning: {
      light: themeConstant.WARNING_LIGHT,
      main: themeConstant.WARNING_MAIN,
      dark: themeConstant.WARNING_DARK,
      contrastText: whiteColor
    },
    info: {
      light: themeConstant.INFO_LIGHT,
      main: themeConstant.INFO_MAIN,
      dark: themeConstant.INFO_DARK,
      contrastText: whiteColor
    },
    success: {
      light: themeConstant.SUCCESS_LIGHT,
      main: themeConstant.SUCCESS_MAIN,
      dark: themeConstant.SUCCESS_DARK,
      contrastText: whiteColor
    },
    grey: {
      50: themeConstant.GREY_50,
      100: themeConstant.GREY_100,
      200: themeConstant.GREY_200,
      300: themeConstant.GREY_300,
      400: themeConstant.GREY_400,
      500: themeConstant.GREY_500,
      600: themeConstant.GREY_600,
      700: themeConstant.GREY_700,
      800: themeConstant.GREY_800,
      900: themeConstant.GREY_900,
      A100: themeConstant.GREY_A100,
      A200: themeConstant.GREY_A200,
      A400: themeConstant.GREY_A400,
      A700: themeConstant.GREY_A700

    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      golden: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : darkPaperBgColor,
      default: defaultBgColor(),
      menuBGColor,
      headerBGColor,
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
