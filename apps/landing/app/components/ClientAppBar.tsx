"use client";

import {AppBar} from "@uniia/ui/components/landing/AppBar/AppBar";
import {useMediaQuery, useTheme} from "@mui/material";

interface ClientAppBarProps {
  onLanguageChange: () => void;
  onStartClick: () => void;
}

export function ClientAppBar({onLanguageChange, onStartClick}: ClientAppBarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar isMobile={isMobile} onLanguageChange={onLanguageChange} onStartClick={onStartClick} />
  );
}
