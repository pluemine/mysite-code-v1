import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SectionNoData from '../components/SectionNoData';
import { SiteButton } from '../components/SiteButton';

function NotFound(props) {
  const { setPage } = props;

  useLayoutEffect(() => {
    setPage('notfound');
  });

  return (
    <div style={{ paddingTop: '56px', minHeight: 'calc(100vh - 134px)' }}>
      <Grid container direction='column'>
        <Grid item xs style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item>
                <SectionNoData />
              </Grid>
              <Grid item>
                <SiteButton variant='outlined' component={Link} to='/'>
                  Back to Home
                </SiteButton>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotFound;
