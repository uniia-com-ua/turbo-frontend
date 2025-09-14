import {Container, Typography, Alert} from "@mui/material";
import {MainContainer, Footer} from "./components/StyledComponents";
import {
  getHomePage,
  getGlobal,
  type HomePage,
  type BlockComponent,
  type AppBar as AppBarBlock,
} from "@uniia/strapi-sdk";
import {BlockRenderer} from "./components/BlockRenderer";
import {AppBar as LandingAppBar} from "@uniia/ui/components/landing/AppBar/AppBar";

export default async function Page() {
  let homePageData: HomePage | null = null;
  let appBarData: AppBarBlock | null = null;
  let error: string | null = null;

  try {
    const response = await getHomePage();
    homePageData = response.data;
    const global = await getGlobal();
    appBarData = global.data.appBar ?? null;
  } catch (err: unknown) {
    console.error("Помилка завантаження даних з Strapi:", err);
    const message = err instanceof Error ? err.message : "Не вдалося завантажити дані";
    error = message;
  }

  return (
    <MainContainer>
      <LandingAppBar Tabs={appBarData?.Tabs} LoginButton={appBarData?.LoginButton} />
      <Container maxWidth="xl">
        {error ? (
          <Alert severity="error">Помилка: {error}</Alert>
        ) : homePageData ? (
          <>
            {homePageData.Blocks && homePageData.Blocks.length > 0 ? (
              homePageData.Blocks.map((block: BlockComponent, index: number) => (
                <BlockRenderer key={`${block.__component}-${block.id || index}`} block={block} />
              ))
            ) : (
              <Alert severity="info">Немає блоків для відображення</Alert>
            )}
          </>
        ) : (
          <Typography>Завантаження...</Typography>
        )}
      </Container>

      <Footer>
        <Typography variant="body2" color="text.secondary">
          © 2025 Унія. Тестова сторінка.
        </Typography>
      </Footer>
    </MainContainer>
  );
}
