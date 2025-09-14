"use client";

import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Button} from "@uniia/ui/components/base/Button/Button";
import {LogoText} from "@uniia/ui/components/base/LogoText/LogoText";
import type {Button as ButtonProps} from "@uniia/strapi-sdk";

// Стилізований компонент для логотипу
const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
});

// Іконка для мобільного меню (можна замінити на svg)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
  </svg>
);

export interface AppBarProps {
  Tabs?: ButtonProps[];
  LoginButton?: ButtonProps;
  onLanguageChange?: () => void;
  onStartClick?: () => void;
  isMobile?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({
  Tabs,
  LoginButton,
  onLanguageChange,
  onStartClick,
  isMobile = false,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiAppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        height: isMobile ? "72px" : "92px",
      }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          background: "rgba(255, 255, 255, 0.54)",
          backdropFilter: "blur(10.4px)",
          WebkitBackdropFilter: "blur(10.4px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}>
        <Toolbar disableGutters sx={{height: "100%"}}>
          {/* Логотип */}
          <Logo>
            <LogoText size={100} />
          </Logo>

          <Box sx={{display: "flex", justifyContent: "flex-start", ml: 4, flexGrow: 1}}>
            {!isMobile && (
              <>
                {Tabs?.map(tab => (
                  <Button
                    variant="text"
                    color="inherit"
                    size="large"
                    rounded={tab.rounded}
                    key={tab.id}>
                    {tab.label}
                  </Button>
                ))}
              </>
            )}
          </Box>

          {isMobile ? (
            // Мобільне меню
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}>
                {Tabs?.map(tab => (
                  <MenuItem onClick={handleMenuClose} key={tab.id}>
                    {tab.label}
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={onLanguageChange}>
                  <ListItemIcon>🌐</ListItemIcon>
                  <ListItemText>ENG</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    onStartClick?.();
                    handleMenuClose();
                  }}>
                  <ListItemIcon>🚀</ListItemIcon>
                  <ListItemText>{LoginButton?.label}</ListItemText>
                </MenuItem>
              </Menu>
            </>
          ) : (
            // Десктопне меню - права частина
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Button onClick={onLanguageChange} color="inherit" variant="text" rounded={false}>
                ENG
              </Button>
              <Button
                onClick={onStartClick}
                variant="contained"
                rounded={false}
                size="large"
                sx={{backgroundColor: "#020B18", ml: 2}}>
                {LoginButton?.label}
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
