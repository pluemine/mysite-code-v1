import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

function SkillCard(props) {
  const { id, icon, title, detail, list } = props;

  const theme = useTheme();

  return (
    <Grid
      container
      className='home-skillcard'
      direction='column'
      gap={3}
      style={{ height: '100%' }}
      id={id}
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
        <div className='font-subbody color-fontsub'>{detail}</div>
      </Grid>
      <Grid item>
        <Grid container direction='column' gap={1}>
          {list?.map((data, index) => {
            return (
              <Grid item key={'skill_data_item' + index}>
                <Grid container direction='row' gap={1}>
                  <Grid item>
                    <LayersOutlinedIcon
                      style={{
                        fontSize: '16px',
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <div className='font-subbodybold color-fontmain'>
                      {data.title}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SkillCard;
