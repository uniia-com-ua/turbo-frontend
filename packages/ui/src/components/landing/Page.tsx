import React from "react";
import {Container, Box, Typography, useMediaQuery, useTheme, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {AppBar} from "./AppBar";
import {Banner} from "./Banner/Banner";

const MainContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
});

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

export interface PageProps {
  title?: string;
  description?: string;
  bannerImage?: string;
  logoImage?: string;
}

export const Page: React.FC<PageProps> = ({
  title = "Карбуй освіту",
  description = "Унія — інноваційна платформа для вивчення української мови та культури.",
  bannerImage = "../../../assets/landing/banner.png",
  logoImage = "../../../assets/landing/logo/logo.png",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainContainer>
      <AppBar
        isMobile={isMobile}
        onLanguageChange={() => console.log("Мову змінено")}
        onStartClick={() => console.log("Розпочати")}
        logoImage={logoImage}
      />

      <Container maxWidth="xl">
        <Banner title={title} bannerImage={bannerImage} />
        <Box height={300}>
          <Typography
            color="gray"
            variant="h6"
            mt={10}
            component="h1"
            textAlign={"center"}
            gutterBottom
            fontWeight="italic">
            {description}
          </Typography>
        </Box>

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
