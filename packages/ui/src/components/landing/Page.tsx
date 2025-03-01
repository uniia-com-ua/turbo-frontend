import React from "react";
import {Container, Box, Typography, useMediaQuery, useTheme, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {AppBar} from "./AppBar";
import {Button} from "@uniia/ui/components/base/Button/Button";
import {Banner} from "./Banner/Banner";

const MainContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
});

const ContentSection = styled(Paper)(({theme}) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const Footer = styled("footer")(({theme}) => ({
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

const ImgPlaceholder = styled(Box)(({theme}) => ({
  height: "240px",
  width: "100%",
  backgroundColor: "#e0e0e0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

export interface PageProps {
  title?: string;
  description?: string;
}

export const Page: React.FC<PageProps> = ({
  title = "Ласкаво просимо до Унії",
  description = "Унія — інноваційна платформа для вивчення української мови та культури.",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainContainer>
      <AppBar
        isMobile={isMobile}
        onLanguageChange={() => console.log("Мову змінено")}
        onStartClick={() => console.log("Розпочати")}
      />

      <Container maxWidth="xl">
        <Banner backgroundImage="https://lh5.googleusercontent.com/5qa12m5N0C7HPInX8wVRvKBXV_SSP8usDLzo84TqxWQ3Jv1PVYCo3xGRuaEg5iUDu97dh3KhcxKFKrvpqbFYfocr35GKGc7vw46GppHhdtgkRFa5eHw_uNjWEvEPDjqoYm4NJobS" />
        <ContentSection>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
            {description}
          </Typography>

          <Box sx={{my: 4}}>
            <ImgPlaceholder>
              <Typography variant="body1" color="text.secondary">
                Зображення контенту
              </Typography>
            </ImgPlaceholder>
          </Box>
        </ContentSection>

        <Footer>
          <Typography variant="body2" color="text.secondary">
            © 2025 Унія. Всі права захищено.
          </Typography>
        </Footer>
      </Container>
    </MainContainer>
  );
};

export default Page;
