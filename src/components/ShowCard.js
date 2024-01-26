import { Link } from 'react-router-dom';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import DownloadIcon from '@mui/icons-material/Download';

function ShowCard(props) {
  const {
    id,
    icon,
    image_path,
    title,
    tag,
    description,
    sub_description,
    type,
    action_name,
    path,
  } = props;

  const theme = useTheme();

  let showScreen;
  let buttonScreen;

  if (icon) {
    showScreen = (
      <div
        className='image-container'
        style={{
          color: theme.palette.primary.main,
        }}
      >
        {icon}
      </div>
    );
  } else if (image_path) {
    showScreen = (
      <div className='image-container'>
        <img src={image_path} className='image-style-inside' alt='cover' />
      </div>
    );
  }

  if (type === 'link' || type === 'download') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' alignItems='center' gap={1}>
          <Grid item>
            {type === 'link' ? (
              <LinkOutlinedIcon
                style={{
                  color: theme.palette.primary.main,
                  fontSize: '16px',
                }}
              />
            ) : (
              <DownloadIcon
                style={{
                  color: theme.palette.primary.main,
                  fontSize: '16px',
                }}
              />
            )}
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
  } else if (type === 'internal') {
    buttonScreen = (
      <Grid item>
        <Grid container direction='row' alignItems='center' gap={1}>
          <Grid
            item
            component={Link}
            to={path}
            style={{ textDecoration: 'none' }}
          >
            <div
              className='font-subbodybold'
              style={{
                color: theme.palette.primary.main,
              }}
            >
              {action_name}
            </div>
          </Grid>
          <Grid item>
            <EastOutlinedIcon
              style={{
                color: theme.palette.primary.main,
                fontSize: '12px',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <div id={id}>
      <Grid container direction='column' gap={3}>
        <Grid item>{showScreen}</Grid>
        <Grid item>
          <Grid container direction='column' gap={1}>
            <Grid item>
              <div className='font-subheader color-fontmain'>{title}</div>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                {tag?.map((data, index) => {
                  return (
                    <Grid item key={'tagItem' + index}>
                      <div
                        className='tag font-tag'
                        style={{
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {data}
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className='font-subbody color-fontsub'>{description}</div>
        </Grid>
        {sub_description ? (
          <Grid item>
            <div className='font-subbody color-fontsub'>{sub_description}</div>
          </Grid>
        ) : undefined}
        {buttonScreen}
      </Grid>
    </div>
  );
}

export default ShowCard;
