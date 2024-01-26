import React from 'react';
import { Link } from 'react-router-dom';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';
import InterestsIcon from '@mui/icons-material/Interests';
import SmsIcon from '@mui/icons-material/Sms';
import SettingsIcon from '@mui/icons-material/Settings';

function BottomNavBar(props) {
  const { page, screenWidth } = props;
  const theme = useTheme();
  let screen;

  if (screenWidth < 1200) {
    screen = (
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className='BottomNavBar-container'
        >
          <Grid item>
            <IconButton aria-label='Home' component={Link} to='/'>
              {page === 'home' ? (
                <HomeIcon style={{ color: theme.palette.primary.main }} />
              ) : (
                <HomeOutlinedIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label='Profile' component={Link} to='/profile'>
              {page === 'profile' ? (
                <BadgeIcon style={{ color: theme.palette.primary.main }} />
              ) : (
                <BadgeOutlinedIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label='Portfolio' component={Link} to='/portfolio'>
              {page === 'portfolio' ? (
                <InterestsIcon style={{ color: theme.palette.primary.main }} />
              ) : (
                <InterestsOutlinedIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label='Blog' component={Link} to='/blog'>
              {page === 'blog' ? (
                <SmsIcon style={{ color: theme.palette.primary.main }} />
              ) : (
                <SmsOutlinedIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label='Settings' component={Link} to='/settings'>
              {page === 'settings' ? (
                <SettingsIcon style={{ color: theme.palette.primary.main }} />
              ) : (
                <SettingsOutlinedIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    screen = undefined;
  }

  return (
    <nav className='global-bottom'>
      <div className='fixed-bar'>{screen}</div>
    </nav>
  );
}

export default BottomNavBar;
