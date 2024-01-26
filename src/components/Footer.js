import React from 'react';
import './Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Footer(props) {
  const { footer } = props;
  return (
    <nav className='footer'>
      <div className='fixed-bar'>
        <Container>
          <div className='footer-container'>
            <Grid
              container
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent={{ xs: 'center', sm: 'center' }}
              alignItems='center'
              gap={3}
            >
              <Grid item>
                <Grid
                  container
                  direction={{ xs: 'column', sm: 'column' }}
                  justifyContent='center'
                  alignItems='center'
                  gap={0.5}
                >
                  <Grid item>
                    <div className='font-subbody color-fontsub'>
                      {footer.copyright}
                    </div>
                  </Grid>
                  <Grid item>
                    <div className='font-subbody color-fontsub'>
                      {footer.version}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </nav>
  );
}

export default Footer;
