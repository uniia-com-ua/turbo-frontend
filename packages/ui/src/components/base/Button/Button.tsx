import {Button as MuiButton, ButtonProps as MuiButtonProps} from "@mui/material";
import {border} from "@mui/system";
import {roundness} from "@uniia/ui/theme/tokens/index.ts";

export interface ButtonProps extends MuiButtonProps {
  variant?: "contained" | "outlined" | "text";
  rounded?: boolean;
  isGlass?: boolean;
}

export const Button = ({children, rounded = true, isGlass = false, ...props}: ButtonProps) => {
  const roundedProps = rounded
    ? {
        borderRadius: roundness.button_rounded,
      }
    : {
        borderRadius: roundness.button_square,
      };

  // Додаємо стилі для скляного варіанту, якщо потрібно
  const glassStyles = isGlass
    ? {
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
      }
    : {};

  return (
    <MuiButton {...props} sx={{...roundedProps, ...glassStyles, ...props.sx}}>
      {children}
    </MuiButton>
  );
};
