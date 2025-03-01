'use client';

import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@uniia/ui/index.ts";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  );
} 