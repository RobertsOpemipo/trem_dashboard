import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components

import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';

// mock
import PRODUCTS from '../_mock/products';
// import VehicleOpp from '../sections/@dashboard/cardetails/VehicleOpp';
// import '../sections/@dashboard/cardetails';
import { VehicleOpp } from '../sections/@dashboard/cardetails';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Vehicle Opp | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5, fontWeight: 'bold', color: 'blue', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Vehicle Opp
        </Typography>


        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        {/* <ProductList products={PRODUCTS} /> */}
        {/* <div className='pt-4 min-h-screen bg-blue-900'> */}
          <VehicleOpp />
        {/* </div> */}
        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}
