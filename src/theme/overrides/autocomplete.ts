// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Type Import
import { Skin } from '../../@core/types'

const Autocomplete = (theme: Theme, skin: Skin) => {
  const boxShadow = () => {
    if (skin === 'bordered') {
      return theme.shadows[0]
    } else if (theme.palette.mode === 'light') {
      return theme.shadows[8]
    } else return theme.shadows[9]
  }

  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: boxShadow(),
          marginTop: theme.spacing(1),
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
        },
        listbox: {
          padding: theme.spacing(1.25, 0),
          '& .MuiAutocomplete-option': {
            padding: theme.spacing(2, 5),
            '&[aria-selected="true"]': {
              color: theme.palette.primary.main
            }
          }
        }
      }
    }
  }
}

export default Autocomplete
