import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const SiteButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  fontFamily: 'Poppins',
  height: '45px',
  '&:hover': {
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: 'none',
  },
});
