import React, { useLayoutEffect } from 'react';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SectionTitle from '../components/SectionTitle';
import SectionSummary from '../components/SectionSummary';
import Timeline from '../components/Timeline';

import ActionCard from '../components/ActionCard';
import ShowCard from '../components/ShowCard';

function Profile(props) {
  const { setPage, handleClickScroll, profile_data } = props;

  useLayoutEffect(() => {
    setPage('profile');
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
                      title={profile_data[0]?.data[0]?.title}
                      subtitle={profile_data[0]?.data[0]?.subtitle}
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
                <Grid container direction='column' gap={6}>
                  <Grid item>
                    <SectionSummary
                      summaryList={profile_data[0]?.list}
                      handleClickScroll={handleClickScroll}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column' gap={12}>
                  {profile_data[0]?.list?.map((data, index) => {
                    if (data.item_id === 'profile_contact') {
                      return (
                        <Grid
                          item
                          className='scroll-margin'
                          key={'contact_section' + index}
                          id={data.item_id}
                        >
                          <Grid container direction='column' gap={6}>
                            <Grid item>
                              <SectionTitle
                                title={data.title}
                                subtitle={data.subtitle}
                              />
                            </Grid>
                            <Grid item>
                              <Grid container alignItems='stretch' spacing={3}>
                                {data.list?.map((data, index) => {
                                  return (
                                    <Grid item xs={12} md={4}>
                                      <ActionCard
                                        key={'contact_item' + index}
                                        item_id={data.item_id}
                                        icon={data.icon}
                                        title={data.title}
                                        subtitle={data.subtitle}
                                        type={data.type}
                                        action_name={data.action_name}
                                        path={data.path}
                                      />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    } else if (data.item_id === 'profile_certificate') {
                      return (
                        <Grid
                          item
                          className='scroll-margin'
                          key={'certificate_section' + index}
                          id={data.item_id}
                        >
                          <Grid container direction='column' gap={6}>
                            <Grid item>
                              <SectionTitle
                                title={data.title}
                                subtitle={data.subtitle}
                              />
                            </Grid>
                            <Grid item>
                              <Grid container rowSpacing={6} columnSpacing={3}>
                                {data.list?.toReversed().map((data, index) => {
                                  return (
                                    <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      md={4}
                                      style={{ width: '100%' }}
                                      key={'certificateItem' + index}
                                    >
                                      <ShowCard
                                        id={data.certificate_id}
                                        image_path={data.image_path}
                                        title={data.title}
                                        tag={data.tag}
                                        description={data.description}
                                        sub_description={`Issued ${data.issued}`}
                                        type={data.type}
                                        action_name={data.action_name}
                                        path={data.path}
                                      />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    } else if (data.item_id === 'profile_education') {
                      return (
                        <Grid
                          item
                          className='scroll-margin'
                          key={'education_section' + index}
                          id={data.item_id}
                        >
                          <Grid container direction='column' gap={6}>
                            <Grid item>
                              <SectionTitle
                                title={data.title}
                                subtitle={data.subtitle}
                              />
                            </Grid>
                            <Grid item>
                              <Grid container direction='colummn' gap={3}>
                                {data.list?.toReversed().map((data, index) => {
                                  return (
                                    <Grid item xs={12}>
                                      <Timeline
                                        key={'education_item' + index}
                                        id={data.education_id}
                                        category='profile_education'
                                        icon={data.icon}
                                        title={data.title}
                                        type={data.type}
                                        time={data.time}
                                      />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    } else if (data.item_id === 'profile_experience') {
                      return (
                        <Grid
                          item
                          className='scroll-margin'
                          key={'workexperience_section' + index}
                          id={data.item_id}
                        >
                          <Grid container direction='column' gap={6}>
                            <Grid item>
                              <SectionTitle
                                title={data.title}
                                subtitle={data.subtitle}
                              />
                            </Grid>
                            <Grid item>
                              <Grid container direction='colummn' gap={3}>
                                {data.list?.toReversed().map((data, index) => {
                                  return (
                                    <Grid item xs={12}>
                                      <Timeline
                                        key={'workexperience_item' + index}
                                        id={data.experience_id}
                                        category='profile_workexperience'
                                        icon={data.icon}
                                        title={data.title}
                                        position={data.position}
                                        type={data.type}
                                        time={data.time}
                                        detail_list={data.detail_list}
                                      />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    } else {
                      return undefined;
                    }
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
