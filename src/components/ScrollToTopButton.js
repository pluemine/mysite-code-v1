import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopButton(props) {
  const { screenWidth } = props;
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', checkScrollPosition);
  window.addEventListener('load', checkScrollPosition);

  return (
    <Zoom in={visible}>
      <Fab
        color='primary'
        size='small'
        aria-label='scroll back to top'
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: screenWidth >= 1200 ? 24 : 80,
          right: 24,
        }}
      >
        <KeyboardArrowUpIcon className='color-fontinvert-fixed' />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTopButton;
