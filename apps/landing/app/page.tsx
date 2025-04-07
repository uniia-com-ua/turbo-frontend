"use client";
import {Container, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {AppBar} from "@uniia/ui/components/landing/AppBar/AppBar";
import {Banner} from "@uniia/ui/components/landing/Banner/Banner";
import {useTranslations} from "next-intl";

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

export default function Page() {
  const t = useTranslations("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainContainer>
      <AppBar
        isMobile={isMobile}
        onLanguageChange={() => console.log("Мову змінено")}
        onStartClick={() => console.log("Розпочати")}
        logoImage="/logo/app_icon.png"
      />

      <Container maxWidth="xl">
        <Banner
          title={t("banner.title")}
          subtitle={t("banner.description")}
          bannerImage="/main_image.webp"
        />
        <Box height={300}>
          <Typography
            color="gray"
            variant="h6"
            mt={10}
            component="h1"
            textAlign={"center"}
            gutterBottom
            fontWeight="italic">
            Розробка сторінки в процесі...
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
}
