import './Public.css';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import DevicesFoldOutlinedIcon from '@mui/icons-material/DevicesFoldOutlined';

function SectionNoData(props) {
  const theme = useTheme();

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <Grid item>
        <DevicesFoldOutlinedIcon
          style={{
            fontSize: '72px',
            color: theme.palette.primary.main,
            opacity: '0.50',
          }}
        />
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        gap={1}
      >
        <Grid item>
          <div className='font-subheader color-fontmain'>
            Sorry, there is nothing to show here yet
          </div>
        </Grid>
        <Grid item>
          <div
            className='font-subbody color-fontsub'
            style={{ maxWidth: '420px' }}
          >
            We are working hard to bring you the latest and most relevant data.
            Please check back later for updates.
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SectionNoData;
