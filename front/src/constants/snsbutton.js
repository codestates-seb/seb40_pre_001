import React from 'react';
import {
  GoogleIcon,
  GithubIcon,
  FacebookIcon,
} from '../components/@common/Icons';

const SNS_BUTTONS = [
  {
    BGC: 'rgb(214, 217, 220)',
    BORDER_C: '#fff',
    COLOR: 'black',
    HOVER_BG: 'rgba(214, 217, 220,1)',
    MESSAGE: 'Login with Google',
    ICON: <GoogleIcon />,
  },
  {
    BGC: 'rgb(47, 51, 55)',
    BORDER_C: ' rgb(214, 217, 220)',
    COLOR: '#fff',
    HOVER_BG: 'rgba(214, 217, 220, 0.2)',
    MESSAGE: 'Login with Github',
    ICON: <GithubIcon />,
  },
  {
    BGC: 'rgb(56, 84, 153)',
    BORDER_C: 'rgb(214, 217, 220)',
    COLOR: '#fff',
    HOVER_BG: 'rgba(56, 84, 153, 0.6)',
    MESSAGE: 'Login with Facebook',
    ICON: <FacebookIcon />,
  },
];

export default SNS_BUTTONS;
