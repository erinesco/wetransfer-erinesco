import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { theme } from './theme';

export const PageWrapper = (props) => (
  <ThemeProvider theme={theme}>
    <div style={{ backgroundColor: theme.palette.background.default, height: '100vh' }}>
      <Container>
        <Typography variant="h1" style={{ color: theme.palette.text.primary }}>WeTransfer - Erin Esco</Typography>
        {props.children}
      </Container>
    </div>
  </ThemeProvider>
);

PageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
