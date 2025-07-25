// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from '../../utils/hex-to-rgba'

const Alert = (theme: Theme) => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          '& .MuiAlertTitle-root': {
            fontWeight: 600,
            marginBottom: theme.spacing(1.6)
          },
          '& a': {
            fontWeight: 500,
            color: 'inherit'
          },
          '& .MuiAlert-icon': {
            marginRight: theme.spacing(3)
          },
          '&.MuiAlert-standard, &.MuiAlert-outlined, &.MuiAlert-filled': {
            '& .MuiAlert-icon': {
              opacity: 1,
              borderRadius: '50%',
              fontSize: '1.125rem',
              height: 'fit-content',
              padding: theme.spacing(1),
              marginTop: theme.spacing(1.25),
              color: theme.palette.common.white
            }
          },
          '& .MuiAlert-message': {
            fontSize: '1rem',
            padding: theme.spacing(1.75, 0)
          }
        },
        standardSuccess: {
          color: theme.palette.success.main,
          backgroundColor: hexToRGBA(theme.palette.success.main, 0.16),
          '& .MuiAlertTitle-root': {
            color: theme.palette.success.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.success.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.success.main, 0.24)}`
          }
        },
        standardInfo: {
          color: theme.palette.info.main,
          backgroundColor: hexToRGBA(theme.palette.info.main, 0.16),
          '& .MuiAlertTitle-root': {
            color: theme.palette.info.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.info.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.info.main, 0.24)}`
          }
        },
        standardWarning: {
          color: theme.palette.warning.main,
          backgroundColor: hexToRGBA(theme.palette.warning.main, 0.16),
          '& .MuiAlertTitle-root': {
            color: theme.palette.warning.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.warning.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.warning.main, 0.24)}`
          }
        },
        standardError: {
          color: theme.palette.error.main,
          backgroundColor: hexToRGBA(theme.palette.error.main, 0.16),
          '& .MuiAlertTitle-root': {
            color: theme.palette.error.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.error.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.error.main, 0.24)}`
          }
        },
        outlinedSuccess: {
          color: theme.palette.success.main,
          borderColor: theme.palette.success.main,
          '& .MuiAlertTitle-root': {
            color: theme.palette.success.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.success.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.success.main, 0.24)}`
          }
        },
        outlinedInfo: {
          color: theme.palette.info.main,
          borderColor: theme.palette.info.main,
          '& .MuiAlertTitle-root': {
            color: theme.palette.info.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.info.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.info.main, 0.24)}`
          }
        },
        outlinedWarning: {
          color: theme.palette.warning.main,
          borderColor: theme.palette.warning.main,
          '& .MuiAlertTitle-root': {
            color: theme.palette.warning.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.warning.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.warning.main, 0.24)}`
          }
        },
        outlinedError: {
          color: theme.palette.error.main,
          borderColor: theme.palette.error.main,
          '& .MuiAlertTitle-root': {
            color: theme.palette.error.main
          },
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.error.main,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.error.main, 0.24)}`
          }
        },
        filledSuccess: {
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.common.white,
            color: `${theme.palette.success.main} !important`,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.common.white, 0.24)}`
          }
        },
        filledInfo: {
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.common.white,
            color: `${theme.palette.info.main} !important`,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.common.white, 0.24)}`
          }
        },
        filledWarning: {
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.common.white,
            color: `${theme.palette.warning.main} !important`,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.common.white, 0.24)}`
          }
        },
        filledError: {
          '& .MuiAlert-icon': {
            backgroundColor: theme.palette.common.white,
            color: `${theme.palette.error.main} !important`,
            boxShadow: `0px 0px 0px 3px ${hexToRGBA(theme.palette.common.white, 0.24)}`
          }
        },
        filled: {
          fontWeight: 400,
          color: theme.palette.common.white
        }
      }
    }
  }
}

export default Alert
