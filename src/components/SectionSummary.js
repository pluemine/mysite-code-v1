import { Link } from 'react-router-dom';
import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

function SectionSummary(props) {
  const { summaryList, handleClickScroll } = props;

  const theme = useTheme();

  return (
    <Grid container direction='row' justifyContent='center' spacing={6}>
      {summaryList?.map((data, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={'summaryItem' + index}>
            <Grid container direction='column' gap={3}>
              <Grid item>
                <Grid container direction='column' gap={1}>
                  <Grid item>
                    <div
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    >
                      {data.icon}
                    </div>
                  </Grid>
                  <Grid item>
                    <div className='font-subheader color-fontmain'>
                      {data.title}
                    </div>
                  </Grid>
                  <Grid item>
                    <div className='font-subbody color-fontsub'>
                      {data.detail}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {data.type === 'link' ? (
                <Grid item>
                  <Grid container direction='row' alignItems='center' gap={0.5}>
                    <Grid
                      item
                      component={Link}
                      to={data.path}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className='font-subbodybold'
                        style={{
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                        }}
                      >
                        {data.linkname}
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
              ) : (
                <Grid item>
                  <Grid container direction='row' alignItems='center' gap={0.5}>
                    <Grid item>
                      <div
                        className='font-subbodybold'
                        style={{
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                        }}
                        onClick={(e) => handleClickScroll(data.item_id)}
                      >
                        {data.action_name}
                      </div>
                    </Grid>
                    <Grid item>
                      <SouthEastOutlinedIcon
                        style={{
                          color: theme.palette.primary.main,
                          fontSize: '12px',
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SectionSummary;
