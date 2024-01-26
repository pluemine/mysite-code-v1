import React, { useLayoutEffect } from 'react';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SectionTitle from '../components/SectionTitle';
import SectionNoData from '../components/SectionNoData';
import ShowCard from '../components/ShowCard';

function Portfolio(props) {
  const { setPage, portfolio_data } = props;

  useLayoutEffect(() => {
    setPage('portfolio');
  });

  return (
    <div style={{ paddingTop: '56px', minHeight: 'calc(100vh - 134px)' }}>
      <Grid container direction='column'>
        <Grid
          item
          className='home-banner'
          style={{
            paddingTop: '48px',
            paddingBottom: '48px',
          }}
        >
          <Container>
            <Grid container direction='column' gap={6}>
              <Grid item>
                <Grid container direction='column' gap={6}>
                  <Grid item>
                    <SectionTitle
                      title={portfolio_data[0]?.data[0]?.title}
                      subtitle={portfolio_data[0]?.data[0]?.subtitle}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <Grid container direction='column' gap={12}>
              <Grid item>
                {portfolio_data[0]?.list ? (
                  <Grid container rowSpacing={6} columnSpacing={3}>
                    {portfolio_data[0]?.list
                      ?.toReversed()
                      .map((data, index) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ width: '100%' }}
                            key={'projectItem' + index}
                          >
                            <ShowCard
                              id={data.project_id}
                              icon={data.icon}
                              title={data.title}
                              tag={data.tag}
                              description={data.description}
                              type={data.type}
                              action_name={data.action_name}
                              path={data.path}
                            />
                          </Grid>
                        );
                      })}
                  </Grid>
                ) : (
                  <SectionNoData />
                )}
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
