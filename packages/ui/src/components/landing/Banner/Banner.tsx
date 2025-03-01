import React from "react";
import {Box, Typography, Container, useMediaQuery} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {Button} from "@uniia/ui/components/base/Button/Button";

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
    height: "90vh",
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

export interface BannerProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  title = "Карбуй освіту",
  subtitle = "Перша онлайн-платформа для студентів українських університетів",
  primaryButtonText = "Розпочати",
  secondaryButtonText = "Дізнатись більше",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const backgroundImage = "../../../assets/landing/banner.png";

  // Попереднє завантаження зображення для кращої продуктивності
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, [backgroundImage]);

  return (
    <Box sx={{width: "100%", position: "relative", overflow: "hidden"}}>
      <BannerContainer
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
        }}>
        <Overlay />
        <ContentContainer maxWidth="xl">
          <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ButtonContainer>
              <Button
                variant="contained"
                size="large"
                rounded={false}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {backgroundColor: "#f0f0f0"},
                }}
                onClick={onPrimaryClick}>
                {primaryButtonText}
              </Button>
              <Button
                variant="outlined"
                isGlass={true}
                size="large"
                rounded={false}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {borderColor: "#f0f0f0", backgroundColor: "rgba(255,255,255,0.1)"},
                }}
                onClick={onSecondaryClick}>
                {secondaryButtonText}
              </Button>
            </ButtonContainer>
          </Box>
        </ContentContainer>
      </BannerContainer>
    </Box>
  );
};

export default Banner;
