import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '../src/theme';
import { getGlobalStyles } from '../src/theme/globalStyles';

const globalStyles = getGlobalStyles();

export const decorators = [
  (Story) => (
    <>
      <style>{globalStyles}</style>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
