"use client";

import {CssBaseline, ThemeProvider} from "@mui/material";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {lightTheme} from "@uniia/ui";

export function ThemeRegistry({children}: {children: React.ReactNode}) {
  return (
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
      <ThemeProvider theme={lightTheme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
