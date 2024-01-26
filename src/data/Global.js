import { blue, purple, pink, red, orange, green } from '@mui/material/colors';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import BrightnessAutoOutlinedIcon from '@mui/icons-material/BrightnessAutoOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';

export const footer = {
  copyright: '© 2024 pluemine. All rights reserved.',
  version: 'Version 1.00b240126',
};

export const accentList = [
  {
    value: 0,
    color: blue,
    main: blue[500],
    bgdark: '#42a5f51a',
    bglight: '#1e88e51a',
  },
  {
    value: 1,
    color: purple,
    main: purple[500],
    bgdark: '#ab47bc1a',
    bglight: '#8e24aa1a',
  },
  {
    value: 2,
    color: pink,
    main: pink[500],
    bgdark: '#ec407a1a',
    bglight: '#d81b601a',
  },
  {
    value: 3,
    color: red,
    main: red[500],
    bgdark: '#ef53501a',
    bglight: '#e539351a',
  },
  {
    value: 4,
    color: orange,
    main: orange[500],
    bgdark: '#ffa7261a',
    bglight: '#fb8c001a',
  },
  {
    value: 5,
    color: green,
    main: green[500],
    bgdark: '#66bb6a1a',
    bglight: '#43a0471a',
  },
];

export const themeSelector = [
  {
    title: 'Theme Mode',
    subtitle:
      'You can adjust the theme mode of the website to match your preference and environment. You can choose from three options: light mode, dark mode, or system default. You can change the theme mode at any time and enjoy the website in your preferred way.',
    type: 'settings_thememode',
    list: [
      {
        value: 'light',
        icon: <LightModeOutlinedIcon />,
        active_icon: <LightModeIcon />,
      },
      {
        value: 'dark',
        icon: <DarkModeOutlinedIcon />,
        active_icon: <DarkModeIcon />,
      },
      {
        value: 'default',
        icon: <BrightnessAutoOutlinedIcon />,
        active_icon: <BrightnessAutoIcon />,
      },
    ],
  },
];

export const accentSelector = [
  {
    title: 'Accent Color',
    subtitle:
      'You can customize the accent color of the website to match your personality. You can choose from a variety of colors that will change the appearance of buttons, links, icons, and other elements. You can preview the changes on the page as you make them.',
    type: 'settings_accentcolor',
    list: accentList,
  },
];

export const resetSettings = [
  {
    title: 'Reset Settings',
    subtitle:
      'If you want to restore the original appearance of the website, you can reset the settings to default by clicking the button below. This will clear any changes you have made to the theme and accent color of the website.',
    type: 'settings_reset',
    actionname: 'Reset Settings',
  },
];

export const rejectConsent = [
  {
    title: 'Privacy Settings',
    subtitle:
      'If you want to reject your Local Storage consent, you can do so by clicking on the button below. However, please note that this will also erase your theme and accent color preferences from your browser.',
    type: 'settings_reset',
    actionname: 'Reject Consent',
  },
];
