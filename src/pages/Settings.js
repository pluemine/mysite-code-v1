import React, { useLayoutEffect } from 'react';
import '../components/Public.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SectionTitle from '../components/SectionTitle';
import SettingsCard from '../components/SettingsCard';
import { SiteButton } from '../components/SiteButton';

import {
  themeSelector,
  accentSelector,
  resetSettings,
  rejectConsent,
} from '../data/Global';

function Settings(props) {
  const {
    setPage,
    themeMode,
    accentColor,
    localConsent,
    handleChange_setThemeMode,
    handleChange_setAccentColor,
    handleChange_setLocalConsent,
    settings_data,
  } = props;

  useLayoutEffect(() => {
    setPage('settings');
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
                      title={settings_data.title}
                      subtitle={settings_data.subtitle}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <Container>
            <Grid container direction='column' gap={3}>
              {localConsent === 1 ? (
                <Grid item>
                  <div className='warning-container'>
                    <Grid container alignItems='center' spacing={2}>
                      <Grid item xs='auto' className='color-fontmain'>
                        {settings_data.warning_icon}
                      </Grid>
                      <Grid item xs>
                        <div className='font-subbody color-fontmain'>
                          {settings_data.warning}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              ) : undefined}
              <Grid item>
                <Grid container spacing={3}>
                  {themeSelector?.map((data, index) => {
                    return (
                      <Grid item sm={12} md={6} key={'themeSelector' + index}>
                        <SettingsCard
                          title={data.title}
                          subtitle={data.subtitle}
                          type={data.type}
                          variable={themeMode}
                          handleChange={handleChange_setThemeMode}
                          list={data.list}
                        />
                      </Grid>
                    );
                  })}
                  {accentSelector?.map((data, index) => {
                    return (
                      <Grid item sm={12} md={6} key={'accentSelector' + index}>
                        <SettingsCard
                          title={data.title}
                          subtitle={data.subtitle}
                          type={data.type}
                          variable={accentColor}
                          handleChange={handleChange_setAccentColor}
                          list={data.list}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item>
                {resetSettings?.map((data, index) => {
                  return (
                    <Grid item key={'resetSettings' + index}>
                      <SettingsCard
                        title={data.title}
                        subtitle={data.subtitle}
                        type={data.type}
                        component={
                          <SiteButton
                            variant='outlined'
                            onClick={() => {
                              handleChange_setThemeMode('default');
                              handleChange_setAccentColor(0);
                            }}
                            style={{ width: 'fit-content' }}
                          >
                            {data.actionname}
                          </SiteButton>
                        }
                      />
                    </Grid>
                  );
                })}
              </Grid>
              {localConsent === 1 ? (
                <Grid item>
                  {rejectConsent?.map((data, index) => {
                    return (
                      <Grid item key={'rejectConsent' + index}>
                        <SettingsCard
                          title={data.title}
                          subtitle={data.subtitle}
                          type={data.type}
                          component={
                            <SiteButton
                              variant='outlined'
                              onClick={() => {
                                handleChange_setLocalConsent(0);
                                localStorage.clear();
                                window.scrollTo(0, 0);
                              }}
                              style={{ width: 'fit-content' }}
                            >
                              {data.actionname}
                            </SiteButton>
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              ) : undefined}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
