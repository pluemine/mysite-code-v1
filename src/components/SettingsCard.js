import React from 'react';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

function SettingsCard(props) {
  const { title, subtitle, type, variable, handleChange, list, component } =
    props;

  const theme = useTheme();

  let buttonScreen;

  if (type === 'settings_thememode') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' gap={3}>
          {list.map((data, index) => {
            return (
              <Grid item key={'settings_item' + index}>
                {variable === data.value ? (
                  <IconButton
                    onClick={() => {
                      handleChange(data.value);
                    }}
                    disabled
                    style={{ color: theme.palette.primary.main }}
                  >
                    {data.active_icon}
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      handleChange(data.value);
                    }}
                  >
                    {data.icon}
                  </IconButton>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  } else if (type === 'settings_accentcolor') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' gap={3}>
          {list.map((data, index) => {
            return (
              <Grid item key={'settings_item' + index}>
                <button
                  className='settings-icon-style'
                  disabled={variable === data.value}
                  onClick={() => {
                    handleChange(data.value);
                  }}
                  style={{
                    background: data.main,
                  }}
                ></button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  } else if (type === 'settings_reset') {
    buttonScreen = component;
  }

  return (
    <Grid
      container
      className='home-skillcard'
      direction='column'
      gap={3}
      style={{ height: '100%' }}
    >
      <Grid item>
        <Grid container alignItems='center' gap={1}>
          <Grid item xs={12}>
            <div className='font-subheader color-fontmain'>{title}</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div className='font-subbody color-fontsub'>{subtitle}</div>
      </Grid>
      {buttonScreen}
    </Grid>
  );
}

export default SettingsCard;
