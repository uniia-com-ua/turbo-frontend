"use client";

import {styled} from "@mui/material/styles";

export const MainContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
});

export const Footer = styled("footer")(({theme}) => ({
  padding: theme.spacing(3),
  marginTop: "auto",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.54)",
  backdropFilter: "blur(10.4px)",
  WebkitBackdropFilter: "blur(10.4px)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));
