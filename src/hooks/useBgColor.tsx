// ** MUI Imports
import { useTheme } from '@mui/material/styles'


export type UseBgColorType = {
  [key: string]: {
    color: string
    backgroundColor: string
  }
}

const UseBgColor = () => {
  // ** Hooks
  const theme = useTheme()

  return {
    primaryFilled: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    },
    primaryLight: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main
    },
    secondaryFilled: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },
    secondaryLight: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.main
    },
    successFilled: {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main
    },
    successLight: {
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.main
    },
    errorFilled: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main
    },
    errorLight: {
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.main
    },
    warningFilled: {
      color: theme.palette.warning.contrastText,
      backgroundColor: theme.palette.warning.main
    },
    warningLight: {
      color: theme.palette.warning.main,
      backgroundColor: theme.palette.warning.main
    },
    infoFilled: {
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main
    },
    infoLight: {
      color: theme.palette.info.main,
      backgroundColor: theme.palette.info.main
    }
  }
}

export default UseBgColor
