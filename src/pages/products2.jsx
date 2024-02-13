import { Helmet } from 'react-helmet-async';
import ProductsView2 from 'src/sections/products/view/products-view2';

// import { ProductsView2 } from 'src/sections/products/view2';

// ----------------------------------------------------------------------

export default function ProductsPage2() {
  return (
    <>
      <Helmet>
        <title> Top Tracks </title>
      </Helmet>

      <ProductsView2 />
    </>
  );
}
