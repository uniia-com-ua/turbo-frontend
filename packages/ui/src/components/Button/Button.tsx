import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';


export interface ButtonProps extends MuiButtonProps {
  // Додаткові пропси якщо потрібно
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
}; 