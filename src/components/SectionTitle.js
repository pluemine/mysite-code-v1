import './Public.css';

import Grid from '@mui/material/Grid';

function SectionTitle(props) {
  const { title, subtitle } = props;

  return (
    <Grid container direction='column' gap={2}>
      <Grid item>
        <div className='font-super color-fontmain'>{title}</div>
      </Grid>
      <Grid item>
        <div className='font-body color-fontsub' style={{ maxWidth: '800px' }}>
          {subtitle}
        </div>
      </Grid>
    </Grid>
  );
}

export default SectionTitle;
