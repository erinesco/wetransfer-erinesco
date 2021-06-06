import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Spinner = (props) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" size={props.size} color="primary" value={props.value} />
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant={props.textVariant} component="div" color="textSecondary">
        {`${Math.round(
          props.value,
        )}%`}
      </Typography>
    </Box>
  </Box>
);

Spinner.propTypes = {
  size: PropTypes.number,
  textVariant: PropTypes.string,
  value: PropTypes.number.isRequired,
};

Spinner.defaultProps = {
  size: 40,
  textVariant: 'caption',
};
