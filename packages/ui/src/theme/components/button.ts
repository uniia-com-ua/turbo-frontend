import {Components} from "@mui/material/styles";
import {spacing} from "../tokens/spacing";

export const buttonComponents: Components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        padding: "8px 24px",
        fontWeight: 400,
        boxShadow: "none",
        lineHeight: "18px",
        fontSize: "13px",
        "&:hover": {
          boxShadow: "none",
        },
      },
      sizeSmall: {
        padding: `${spacing.space_x1} ${spacing.space_x3}`,
      },
      sizeMedium: {
        padding: `${spacing.space_x2} ${spacing.space_x5}`,
      },
      sizeLarge: {
        padding: `${spacing.space_x3} ${spacing.space_x6}`,
      },
    },
  },
};
