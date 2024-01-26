import React from 'react';
import './Public.css';

import Grid from '@mui/material/Grid';

import TopNavBar from './TopNavBar';
import TopScrollProgressbar from './TopScrollProgressbar';
import TopConsentBanner from './TopConsentBanner';

function TopGroupBar(props) {
  const {
    page,
    screenWidth,
    themeMode,
    localConsent,
    handleChange_setLocalConsent,
  } = props;

  return (
    <nav className='global-top'>
      <Grid container direction='column'>
        <Grid item>
          <TopNavBar
            page={page}
            screenWidth={screenWidth}
            themeMode={themeMode}
          />
        </Grid>
        <Grid item>
          <TopScrollProgressbar />
        </Grid>
        <Grid item>
          {!localConsent ? (
            <TopConsentBanner
              localConsent={localConsent}
              handleChange_setLocalConsent={handleChange_setLocalConsent}
            />
          ) : undefined}
        </Grid>
      </Grid>
    </nav>
  );
}

export default TopGroupBar;
