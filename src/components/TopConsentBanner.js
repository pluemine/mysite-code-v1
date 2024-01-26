import React from 'react';
import './Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';

function TopConsentBanner(props) {
  const { handleChange_setLocalConsent } = props;

  return (
    <div className='consent-container'>
      <Container>
        <Grid container alignItems='center' spacing={2}>
          <Grid item xs='auto'>
            <CookieOutlinedIcon className='color-fontmain' />
          </Grid>
          <Grid item xs>
            <div className='font-subbody color-fontmain'>
              To enhance your browsing experience, we use Local Storage to store
              theme and accent color data on your browser.
            </div>
          </Grid>
          <Grid item>
            <div
              className='font-subbodybold color-fontmain'
              style={{ cursor: 'pointer' }}
              onClick={() => handleChange_setLocalConsent(1)}
            >
              Accept
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TopConsentBanner;
