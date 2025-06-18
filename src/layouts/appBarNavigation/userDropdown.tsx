import { Avatar, Badge, Menu, MenuItem, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import IconifyIcon from '@src/components/icon';
import react, { Fragment, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/icon'

export default function UserDropdown() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState<any>('dummy name');
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const handleDropdownOpen = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = (url?: string) => {
        if (url) {
            navigate(url);
        }
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // logout();
        handleDropdownClose();
      };

    const BadgeContentSpan = styled('span')(({ theme }) => ({
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor:'red',
        boxShadow: `0 0 0 2px`,
      }));

      const styles = {
        py: 2,
        px: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.secondary',
        textDecoration: 'none',
        '& svg': {
          mr: 2,
          fontSize: '1.25rem',
          color: 'text.secondary',
        },
      };

    return (
        <Fragment>
            <Badge
                overlap="circular"
                onClick={handleDropdownOpen}
                sx={{ ml: 2, cursor: 'pointer' }}
                badgeContent={<BadgeContentSpan />}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Avatar
                    alt={user?.fullName || 'NA'}
                    src={user?.profilePic || user?.fullName || 'NA'}
                    onClick={handleDropdownOpen}
                    sx={{ width: 40, height: 40, bgcolor: 'primary.main', color: '#fff' }}
                />
            </Badge>
            <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'         }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left' 
        }}
      >
          <Box sx={{ py: 2, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap="circular"
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar
                alt={user?.fullName || 'NA'}
                src={user?.fullName || 'NA'}
                sx={{ width: '2.5rem', height: '2.5rem', bgcolor: 'primary.main', color: '#fff' }}
              />
            </Badge>
          </Box>
          <Box
              sx={{
                ml: 3,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>
                {user?.fullName || 'dummy name'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {user?.role || 'dummy role'}
              </Typography>
            </Box>
          </Box>
          <MenuItem
          sx={{ p: 0 }}
          onClick={() => handleDropdownClose('#')}
        >
          <Box sx={styles}>
          <Icon icon="bx:cog" />
            Settings
          </Box>
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{
            py: 2,
            px: 4,
            color: 'text.secondary',
            '& svg': { mr: 2, fontSize: '1.25rem', color: 'text.secondary' },
          }}
        >
          <Icon icon="bx:power-off" />
          Sign Out
        </MenuItem>
      </Menu>
        </Fragment>
    )
}