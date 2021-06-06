import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { theme } from '../theme';

export const StartStopButtons = (props) => (
  <Box my={1}>
    <Button variant="contained" color="primary" onClick={props.onClickStart} disabled={props.isActive} style={{ marginRight: theme.spacing(1) }}>
      Start
    </Button>
    <Button variant="contained" color="secondary" onClick={props.onClickStop} disabled={!props.isActive}>
      Stop
    </Button>
  </Box>
);

StartStopButtons.propTypes = {
  onClickStart: PropTypes.func.isRequired,
  onClickStop: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,

};
