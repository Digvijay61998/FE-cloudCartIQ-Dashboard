// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from '../../utils/hex-to-rgba'

const Timeline = (theme: Theme) => {
  return {
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          '&:not(:last-of-type)': {
            '& .MuiTimelineContent-root': {
              marginBottom: theme.spacing(4)
            }
          }
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider
        }
      }
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(0.5)
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        filledPrimary: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.primary.main, 0.16)}`
        },
        filledSecondary: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.secondary.main, 0.16)}`
        },
        filledSuccess: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.success.main, 0.16)}`
        },
        filledError: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.error.main, 0.16)}`
        },
        filledWarning: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.warning.main, 0.16)}`
        },
        filledInfo: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.info.main, 0.16)}`
        },
        filledGrey: {
          boxShadow: `0 0 0 4px ${hexToRGBA(theme.palette.grey[400], 0.16)}`
        },
        outlinedPrimary: {
          '& svg': { color: theme.palette.primary.main }
        },
        outlinedSecondary: {
          '& svg': { color: theme.palette.secondary.main }
        },
        outlinedSuccess: {
          '& svg': { color: theme.palette.success.main }
        },
        outlinedError: {
          '& svg': { color: theme.palette.error.main }
        },
        outlinedWarning: {
          '& svg': { color: theme.palette.warning.main }
        },
        outlinedInfo: {
          '& svg': { color: theme.palette.info.main }
        },
        outlinedGrey: {
          '& svg': { color: theme.palette.grey[400] }
        }
      }
    }
  }
}

export default Timeline
