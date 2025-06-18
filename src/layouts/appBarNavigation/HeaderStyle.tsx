import { Box, styled } from '@mui/system';
import react from 'react'
import Logo from '../../components/Logo'
import Icon from '../../components/icon'
import IconButton from '@mui/material/IconButton'
import UserDropdown from './userDropdown';
import NotificationDropdown, { NotificationsType } from './NotificationDropdown';
import { Settings } from '../../context/settingsContext';

interface Props {
    hidden: boolean
    settings: Settings
    toggleNavVisibility: () => void
    saveSettings: (values: Settings) => void
  }
export default function HeaderBar(props: Props) {
    const { hidden, settings, saveSettings, toggleNavVisibility } = props

const notifications: NotificationsType[] = [
    {
        meta: 'Today',
        avatarAlt: 'Flora',
        title: 'Congratulation Flora! 🎉',
        avatarImg: '/images/avatars/4.png',
        subtitle: 'Won the monthly best seller badge'
    },
    {
        meta: 'Yesterday',
        avatarColor: 'primary',
        subtitle: '5 hours ago',
        avatarText: 'Robert Austin',
        title: 'New user registered.'
    },
    {
        meta: '11 Aug',
        avatarAlt: 'message',
        title: 'New message received 👋🏻',
        avatarImg: '/images/avatars/5.png',
        subtitle: 'You have 10 unread messages'
    },
    {
        meta: '25 May',
        title: 'Paypal',
        avatarAlt: 'paypal',
        subtitle: 'Received Payment',
        avatarImg: '/images/misc/paypal.png'
    },
    {
        meta: '19 Mar',
        avatarAlt: 'order',
        title: 'Received Order 📦',
        avatarImg: '/images/avatars/3.png',
        subtitle: 'New order received from John'
    },
    {
        meta: '27 Dec',
        avatarAlt: 'chart',
        subtitle: '25 hrs ago',
        avatarImg: '/images/misc/chart.png',
        title: 'Finance report has been generated'
    }
    ]

    const handleMenuClick = () => {
        console.log('Menu clicked');
    };
    return (
        <Box sx={{ p: 2, width: '98%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                <Logo />
            </Box>
            <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
                {/* <NotificationDropdown settings={settings}notifications={notifications} /> */}
                <UserDropdown />
            </Box>
        </Box>

    )
}