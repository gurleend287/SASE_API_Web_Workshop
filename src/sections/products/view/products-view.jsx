import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useStateProvider } from 'src/utils/StateProvider';
import ProductCard from '../product-card';

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [{ topArtists }] = useStateProvider();

  const products = topArtists.map(({ images, name, id }, index) => ({
    cover: images[0].url,
    name,
  }));

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Top Artists
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
