import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Spinner } from '../components/Spinner';
import { theme } from '../theme';
import { StartStopButtons } from '../components/StartStopButtons';

export const RegularSpinner = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      return;
    }
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [active]);

  return (
    <Box my={1}>
      <Typography style={{ color: theme.palette.text.primary }}>
        Regular Spinner
      </Typography>
      <Spinner value={progress} />
      <StartStopButtons
        onClickStart={() => setActive(true)}
        onClickStop={() => setActive(false)}
        isActive={active}
      />
    </Box>
  );
};
