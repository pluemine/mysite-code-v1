import React from 'react';
import { Link } from 'react-router-dom';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import DownloadIcon from '@mui/icons-material/Download';

import { SiteButton } from './SiteButton';

function ActionCard(props) {
  const { item_id, icon, title, subtitle, type, action_name, path } = props;

  const theme = useTheme();

  let buttonScreen;

  if (type === 'link') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' alignItems='center' gap={1}>
          <Grid item>
            <LinkOutlinedIcon
              style={{
                color: theme.palette.primary.main,
                fontSize: '16px',
              }}
            />
          </Grid>
          <Grid item>
            <a
              className='font-subbodybold color-fontmain'
              style={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
              }}
              href={path}
            >
              {action_name}
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  } else if (type === 'download') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' alignItems='center' gap={1}>
          <Grid item>
            <DownloadIcon
              style={{
                color: theme.palette.primary.main,
                fontSize: '16px',
              }}
            />
          </Grid>
          <Grid item>
            <a
              className='font-subbodybold color-fontmain'
              style={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
              }}
              href={path}
            >
              {action_name}
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  } else if (type === 'button') {
    buttonScreen = (
      <Grid item>
        <SiteButton variant='outlined' component={Link} to={path}>
          {action_name}
        </SiteButton>
      </Grid>
    );
  }

  return (
    <Grid
      container
      className='home-skillcard'
      direction='column'
      gap={3}
      style={{ height: '100%' }}
      id={item_id}
    >
      <Grid item>
        <Grid container alignItems='center' gap={1}>
          <Grid item xs={12}>
            <div
              style={{
                color: theme.palette.primary.main,
              }}
            >
              {icon}
            </div>
          </Grid>
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

export default ActionCard;
