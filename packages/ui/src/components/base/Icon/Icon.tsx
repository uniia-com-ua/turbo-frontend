import {SvgIcon, SvgIconProps} from "@mui/material";

export interface IconProps extends Omit<SvgIconProps, "color"> {
  viewBox?: string;
  color?: SvgIconProps["color"];
  size?: string | number;
}

export const Icon = ({
  children,
  viewBox = "0 0 24 24",
  color = "inherit",
  size = 24,
  ...props
}: IconProps) => {
  return (
    <SvgIcon
      viewBox={viewBox}
      sx={{
        color,
        fontSize: size,
        ...props.sx,
      }}
      {...props}>
      {children}
    </SvgIcon>
  );
};
