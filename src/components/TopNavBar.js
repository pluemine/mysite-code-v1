import React from 'react';
import { Link } from 'react-router-dom';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';

function TopNavBar(props) {
  const { page, screenWidth, themeMode } = props;
  const theme = useTheme();

  let tagbox;

  if (themeMode) {
    tagbox = (
      <div
        className='tag'
        style={{
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <div className='font-tag'>
          {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Theme
        </div>
      </div>
    );
  } else {
    tagbox = undefined;
  }

  return (
    <div className='fixed-bar'>
      <Container>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className='navbar-container'
          wrap='nowrap'
          sx={{ overflow: 'hidden' }}
        >
          <Grid
            item
            xs='auto'
            component={Link}
            to='/'
            style={{ textDecoration: 'none' }}
          >
            <Grid container direction='row' alignItems='center' gap={0.5}>
              <Grid item>
                <KeyboardCommandKeyOutlinedIcon
                  style={{
                    fontSize: '12px',
                    color: theme.palette.primary.main,
                  }}
                />
              </Grid>
              <Grid item>
                <div className={'font-subheader color-fontmain'}>pluemine</div>
              </Grid>
            </Grid>
          </Grid>
          {screenWidth >= 1200 ? (
            <Grid item>
              <Grid container direction='row' alignItems='center' spacing={3}>
                <Grid item>{tagbox}</Grid>
                <Grid item>
                  <Link
                    to='/'
                    className='font-subbodybold color-fontsub'
                    style={{
                      textDecoration: 'none',
                      color:
                        page === 'home'
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  >
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to='/profile'
                    className='font-subbodybold color-fontsub'
                    style={{
                      textDecoration: 'none',
                      color:
                        page === 'profile'
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  >
                    Profile
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to='/portfolio'
                    className='font-subbodybold color-fontsub'
                    style={{
                      textDecoration: 'none',
                      color:
                        page === 'portfolio'
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  >
                    Portfolio
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to='/blog'
                    className='font-subbodybold color-fontsub'
                    style={{
                      textDecoration: 'none',
                      color:
                        page === 'blog'
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  >
                    Blog
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to='/settings'
                    className='font-subbodybold color-fontsub'
                    style={{
                      textDecoration: 'none',
                      color:
                        page === 'settings'
                          ? theme.palette.primary.main
                          : undefined,
                    }}
                  >
                    Settings
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          ) : undefined}
        </Grid>
      </Container>
    </div>
  );
}

export default TopNavBar;
