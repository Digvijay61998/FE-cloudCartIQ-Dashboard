import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Divider } from '@mui/material';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface DropDownMenuProps {
    selectedValue: number;
  }

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 10 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const DropDownMenu = (selectedValue:DropDownMenuProps) => {
        const options = [
            'None',
            'Atria',
            'Callisto',
            'Dione',
            'Ganymede',
            'Hangouts Call',
            'Luna',
            'Oberon',
            'Phobos',
            'Pyxis',
            'Sedna',
            'Titania',
            'Triton',
            'Umbriel',
        ];
    
        const ITEM_HEIGHT = 48;
    
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            event.stopPropagation();
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        return (
            <>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                <KeyboardArrowDownIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '30ch',
                            },
                        },
                        list: {
                            'aria-labelledby': 'long-button',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'None'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </>
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{
                borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent:'flex-start',
                border: '1px solid',
                borderRadius: 2,
                bgcolor: 'background.paper',
                color: 'text.secondary',
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                select site
                                <DropDownMenu selectedValue={0}/>
                                <Divider orientation="vertical" variant="middle" flexItem  sx={{borderLeft:2}}/>
                            </Box>
                        }
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                Merchant Tools
                                <DropDownMenu  selectedValue={1}/>
                            </Box>
                        }
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                Administration
                                <DropDownMenu  selectedValue={2}/>
                            </Box>
                        }
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Item One

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}
