import { Button as MuiButton, ButtonProps } from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  // Додаткові пропси якщо потрібно
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
}; 