import { Theme, useMediaQuery } from '@mui/material';
import { useSettings } from '../hooks/useSettings';
import { Outlet } from 'react-router-dom';
import  HeaderBar  from './appBarNavigation/HeaderStyle';
import { useState } from 'react';


export default function LogoOnlyLayout() {
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const { settings, saveSettings } = useSettings();
  const toggleNavVisibility = () => setNavVisible(!navVisible)



  return (
    <>
      <HeaderBar
       hidden={hidden}
       settings={settings}
       saveSettings={saveSettings}
       toggleNavVisibility={toggleNavVisibility}
      />
      <Outlet />
    </>
  );
}
