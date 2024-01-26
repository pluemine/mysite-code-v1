import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { SiteButton } from '../components/SiteButton';
import SectionSummary from '../components/SectionSummary';

import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import ShowCard from '../components/ShowCard';
import SectionNoData from '../components/SectionNoData';

function Home(props) {
  const {
    setPage,
    handleClickScroll,
    hero,
    shortcut_list,
    skill_data,
    portfolio_data,
  } = props;

  useLayoutEffect(() => {
    setPage('home');
  });

  return (
    <div style={{ paddingTop: '56px', minHeight: 'calc(100vh - 134px)' }}>
      <Grid container direction='column'>
        <Grid
          item
          className='home-banner'
          style={{
            paddingTop: '96px',
            paddingBottom: '96px',
          }}
        >
          <Container>
            <Grid container direction='column' gap={6}>
              <Grid item>
                <img
                  src={hero.image_path}
                  className='profile-image'
                  alt='profile'
                />
              </Grid>
              <Grid item>
                <Grid container direction='column' gap={3}>
                  <Grid item>
                    <div
                      className='font-super color-fontmain'
                      style={{ maxWidth: '360px' }}
                    >
                      {hero.title}
                    </div>
                  </Grid>
                  <Grid item>
                    <div
                      className='font-body color-fontsub'
                      style={{ maxWidth: '800px' }}
                    >
                      {hero.intro}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='row' alignItems='center' gap={1}>
                  {hero.button?.map((data, index) => {
                    return (
                      <Grid item key={'button_item' + index}>
                        <SiteButton
                          className={
                            data.variant === 'contained'
                              ? 'color-fontinvert-fixed'
                              : undefined
                          }
                          variant={data.variant}
                          component={HashLink}
                          to={data.path}
                        >
                          {data.action_name}
                        </SiteButton>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <Grid container direction='column' gap={12}>
              <Grid item>
                <SectionSummary
                  summaryList={shortcut_list}
                  handleClickScroll={handleClickScroll}
                />
              </Grid>
              <Grid item>
                <Grid container direction='column' gap={6}>
                  <Grid item style={{}}>
                    <SectionTitle
                      title={skill_data[0]?.data[0]?.title}
                      subtitle={skill_data[0]?.data[0]?.subtitle}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container alignItems='stretch' spacing={3}>
                      {skill_data[0]?.list?.map((data, index) => {
                        return (
                          <Grid
                            item
                            xs={12}
                            md={4}
                            key={'skillcard_item' + index}
                          >
                            <SkillCard
                              id={data.item_id}
                              icon={data.icon}
                              title={data.title}
                              detail={data.detail}
                              list={data.list}
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column' gap={6}>
                  <Grid item>
                    <SectionTitle
                      title={portfolio_data[0]?.data[0]?.title}
                      subtitle={portfolio_data[0]?.data[0]?.subtitle}
                    />
                  </Grid>
                  <Grid item>
                    {portfolio_data[0]?.list ? (
                      <Grid container rowSpacing={6} columnSpacing={3}>
                        {portfolio_data[0]?.list
                          .toReversed()
                          .slice(0, 3)
                          ?.map((data, index) => {
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
                  {portfolio_data[0]?.list ? (
                    <Grid item>
                      <SiteButton
                        variant='outlined'
                        component={Link}
                        to='/portfolio'
                      >
                        All Projects
                      </SiteButton>
                    </Grid>
                  ) : undefined}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
