import {createTheme} from "@mui/material/styles";
import {paletteLight, paletteDark} from "./palette";
import {typography} from "./typography";
import {buttonComponents, paperComponents} from "./components/index";
import {breakpoints, zIndex} from "./tokens";

export const lightTheme = createTheme({
  typography,
  palette: {
    mode: "light",
    ...paletteLight,
  },
  components: {
    ...buttonComponents,
    ...paperComponents,
  },
  shape: {
    borderRadius: 20,
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    values: {
      xs: parseInt(breakpoints.xs),
      sm: parseInt(breakpoints.sm),
      md: parseInt(breakpoints.md),
      lg: parseInt(breakpoints.lg),
      xl: parseInt(breakpoints.xl),
    },
  },
  zIndex,
});

export const darkTheme = createTheme({
  typography,
  palette: {
    mode: "dark",
    ...paletteDark,
  },
  components: {
    ...buttonComponents,
    ...paperComponents,
  },
});
