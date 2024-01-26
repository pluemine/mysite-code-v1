import React from 'react';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

function Timeline(props) {
  const { id, category, icon, title, type, time, detail_list } = props;
  const theme = useTheme();

  let timeline = (
    <Grid item style={{ height: '100%', minWidth: '24px' }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        style={{ height: '100%' }}
        gap={2}
      >
        <Grid item style={{ color: theme.palette.primary.main }}>
          {icon}
        </Grid>
        <Grid item xs style={{ margin: 'auto' }}>
          <div
            style={{
              height: '100%',
              minHeight: '24px',
              width: '2px',
              borderRadius: '4px',
              opacity: '0.16',
              backgroundColor: theme.palette.primary.main,
            }}
          ></div>
        </Grid>
      </Grid>
    </Grid>
  );

  let timeline_component;

  if (category === 'profile_education') {
    timeline_component = (
      <Grid container direction='row' alignItems='stretch' gap={3}>
        <Grid item>{timeline}</Grid>
        <Grid item xs style={{ maxWidth: '480px' }}>
          <Grid container direction='column' gap={3}>
            <Grid item>
              <Grid container direction='column' gap={1}>
                <Grid item>
                  <div className='font-bodybold color-fontmain'>{title}</div>
                </Grid>
                <Grid item>
                  <div
                    className='tag'
                    style={{
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <div className='font-tag'>{type}</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className='font-subbody color-fontsub'>{time}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  } else if (category === 'profile_workexperience') {
    timeline_component = (
      <Grid container direction='row' alignItems='stretch' gap={3}>
        <Grid item>{timeline}</Grid>
        <Grid item xs style={{ maxWidth: '480px' }}>
          <Grid container direction='column' gap={3}>
            <Grid item>
              <Grid container direction='column' gap={1}>
                <Grid item>
                  <div className='font-bodybold color-fontmain'>{title}</div>
                </Grid>
                <Grid item>
                  <div
                    className='tag'
                    style={{
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <div className='font-tag'>{type}</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className='font-subbody color-fontsub'>{time}</div>
            </Grid>
            <Grid item>
              <Grid
                container
                direction='column'
                alignItems='flex-start'
                gap={1.5}
              >
                {detail_list?.map((data, index) => {
                  if (data.type === 'text') {
                    return (
                      <div className='font-subbody color-fontsub'>
                        {data.detail}
                      </div>
                    );
                  } else if (data.type === 'image') {
                    return (
                      <img
                        src={data.image_path}
                        className='image-style'
                        alt=''
                      />
                    );
                  } else {
                    return undefined;
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid item id={id}>
      {timeline_component}
    </Grid>
  );
}

export default Timeline;
