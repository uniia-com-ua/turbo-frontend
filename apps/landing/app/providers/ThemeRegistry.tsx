'use client';

import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@uniia/ui/index.ts";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  );
} 