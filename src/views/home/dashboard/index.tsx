import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import { Autocomplete, Box, IconButton } from '@mui/material';
import IconifyIcon from '@src/components/icon';
interface Props {
    hidden: boolean
    settings: any
    toggleNavVisibility: () => void
    saveSettings: (values: any) => void
  }

  

const AppBarContent = (props: Props) => {
    // ** Props
    const { hidden, settings, saveSettings, toggleNavVisibility } = props
  
    return (
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          {hidden && !settings.navHidden ? (
            <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
              <IconifyIcon icon='bx:menu' />
            </IconButton>
          ) : null}
          {/* <Autocomplete hidden={hidden} settings={settings} /> */}
        </Box>
        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <LanguageDropdown settings={settings} saveSettings={saveSettings} />
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
          <NotificationDropdown settings={settings} notifications={notifications} />
          <UserDropdown settings={settings} /> */}
        </Box>
      </Box>
    )
  }
  