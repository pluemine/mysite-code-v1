import React, { useState } from 'react';
import './Public.css';

import LinearProgress from '@mui/material/LinearProgress';

function TopScrollProgressbar(props) {
  const [progress, setProgress] = useState(0);

  window.onscroll = function () {
    handleChange_setProgress();
  };

  function handleChange_setProgress() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setProgress(scrolled);
  }

  return (
    <LinearProgress
      variant='determinate'
      value={progress}
      style={{ transition: 'all 0.5s ease' }}
    />
  );
}

export default TopScrollProgressbar;
