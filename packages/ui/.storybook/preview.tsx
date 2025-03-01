import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '../src/theme';
import { getGlobalStyles } from '../src/theme/globalStyles';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import createCache from '@emotion/cache';
import type { Preview } from '@storybook/react';
import { CacheProvider } from '@emotion/react';

// Створення емоційного кешу для MUI
const cache = createCache({
  key: 'mui',
  prepend: true,
});

const globalStyles = getGlobalStyles();

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <style>{globalStyles}</style>
      <Story />
    </CacheProvider>
  ),
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // розгорнуті контроли за замовчуванням
    },
    docs: {
      story: { inline: true },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#121212' },
      ],
    },
  },
};

export default preview;
