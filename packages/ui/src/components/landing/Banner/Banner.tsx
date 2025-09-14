"use client";

import React, {useEffect, useState} from "react";
import {Box, Typography, Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Button} from "@uniia/ui/components/base/Button/Button";
import type {MediaFile, InfoBannerBlock, Button as CMSButton} from "@uniia/strapi-sdk";
import {resolveMediaUrl} from "@uniia/strapi-sdk";

// Контейнер для банера з фоновим зображенням
const BannerContainer = styled(Box)(({theme}) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  maxHeight: "800px",
  minHeight: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "48px",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("md")]: {
    minHeight: "400px",
    height: "80vh",
    backgroundPosition: "70%",
  },
}));

// Градієнт, що накладається поверх фону
const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.7) 100%)",
  zIndex: 1,
});

// Контейнер для контенту
const ContentContainer = styled(Container)(({theme}) => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "100%",
  width: "100%",
  marginBottom: "100px",
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
}));

// Стилізований заголовок
const Title = styled(Typography)(({theme}) => ({
  color: "white",
  fontWeight: 400,
  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  textAlign: "center",
  fontSize: "56px",
  [theme.breakpoints.down("md")]: {
    fontSize: "56px",
  },
}));

// Стилізований підзаголовок
const Subtitle = styled(Typography)(({theme}) => ({
  color: "white",
  marginBottom: theme.spacing(4),
  textShadow: "0 1px 3px rgba(0,0,0,0.3)",
  textAlign: "center",
  fontSize: "13px",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
}));

// Контейнер для кнопок
const ButtonContainer = styled(Box)(({theme}) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    maxWidth: "300px",
    margin: "0 auto",
  },
}));

export type InfoBannerProps = {
  title?: InfoBannerBlock["title"];
  subtitle?: InfoBannerBlock["subtitle"];
  Buttons?: CMSButton[];
  background?: MediaFile;
  isMobile?: boolean;
};

export const InfoBanner: React.FC<InfoBannerProps> = ({
  title = "Карбуй освіту",
  subtitle = "Перша онлайн-платформа для студентів українських університетів",
  Buttons,
  isMobile,
  background,
}) => {
  const lowRes = resolveMediaUrl(background, {size: "thumbnail"});
  const hiRes = resolveMediaUrl(background);

  const [hiReady, setHiReady] = useState(false);

  useEffect(() => {
    if (!hiRes) return;
    const img = new Image();
    img.src = hiRes;
    img.onload = () => setHiReady(true);
  }, [hiRes]);
  return (
    <Box sx={{width: "100%", position: "relative", overflow: "hidden"}}>
      <BannerContainer
        sx={{
          width: "100%",
        }}>
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${lowRes})`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "70%" : "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(5px)",
            transform: "scale(1.02)",
            zIndex: 0,
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${hiRes})`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "70%" : "center",
            backgroundRepeat: "no-repeat",
            opacity: hiReady ? 1 : 0,
            transition: "opacity 400ms ease-out",
            zIndex: 0,
          }}
        />
        <Overlay />
        <ContentContainer maxWidth="xl">
          <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ButtonContainer>
              {Buttons?.map(button => (
                <Button
                  key={button.id}
                  variant={button.variant}
                  size={button.size}
                  rounded={button.rounded}
                  isGlass={button.isGlass}
                  sx={button.sx}>
                  {button.label}
                </Button>
              ))}
            </ButtonContainer>
          </Box>
        </ContentContainer>
      </BannerContainer>
    </Box>
  );
};

export default InfoBanner;
