import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
  <AppWidgetSummary title="Weekly Car Sales" total={714} icon={'ant-design:car-filled'} />
</Grid>


          <Grid item xs={12} sm={6} md={3}>
  <AppWidgetSummary title="New Car Owners" total={13528} color="info" icon={'ant-design:car-filled'} />
</Grid>


          <Grid item xs={12} sm={6} md={3}>
  <AppWidgetSummary title="Car Orders" total={17233} color="warning" icon={'ant-design:car-filled'} />
</Grid>


          <Grid item xs={12} sm={6} md={3}>
  <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
</Grid>


          <Grid item xs={12} md={6} lg={8}>
  <AppWebsiteVisits
    title="Website Visits"
    subheader="(+43%) than last year"
    chartLabels={[
      '01/01/2023',
      '02/01/2023',
      '03/01/2023',
      '04/01/2023',
      '05/01/2023',
      '06/01/2023',
      '07/01/2023',
      '08/01/2023',
      '09/01/2023',
      '10/01/2023',
      '11/01/2023',
    ]}
    chartData={[
      {
        name: 'Car Brand A',
        type: 'column',
        fill: 'solid',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: 'Car Brand B',
        type: 'area',
        fill: 'gradient',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: 'Car Brand C',
        type: 'line',
        fill: 'solid',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]}
  />
</Grid>


          <Grid item xs={12} md={6} lg={4}>
  <AppCurrentVisits
    title="Current Car Visits"
    chartData={[
      { label: 'America', value: 4344 },
      { label: 'Asia', value: 5435 },
      { label: 'Europe', value: 1443 },
      { label: 'Africa', value: 4443 },
    ]}
    chartColors={[
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ]}
  />
</Grid>


          <Grid item xs={12} md={6} lg={8}>
  <AppConversionRates
    title="Car Conversion Rates"
    subheader="(+43%) than last year"
    chartData={[
      { label: 'Brand A', value: 40 },
      { label: 'Brand B', value: 43 },
      { label: 'Brand C', value: 48 },
      { label: 'Brand D', value: 47 },
      { label: 'Brand E', value: 54 },
      { label: 'Brand F', value: 58 },
      { label: 'Brand G', value: 69 },
      { label: 'Brand H', value: 110 },
      { label: 'Brand I', value: 120 },
      { label: 'Brand J', value: 138 },
    ]}
  />
</Grid>


          <Grid item xs={12} md={6} lg={8}>
  <AppCurrentSubject
    title="Car Brands"
    chartLabels={['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E']}
    chartData={[
      { name: 'Series 1', data: [30, 40, 50, 60, 70] },
      { name: 'Series 2', data: [20, 50, 70, 40, 80] },
      { name: 'Series 3', data: [50, 20, 10, 30, 40] },
    ]}
    chartColors={[theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main]}
  />
</Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
  <AppTrafficBySite
    title="Traffic by Car Site"
    list={[
      {
        name: 'Car Forum',
        value: 323234,
        icon: <Iconify icon={'eva:car-fill'} color="#FF5733" width={32} />,
      },
      {
        name: 'Car Marketplace',
        value: 341212,
        icon: <Iconify icon={'eva:car-fill'} color="#42FF33" width={32} />,
      },
      {
        name: 'Car Reviews',
        value: 411213,
        icon: <Iconify icon={'eva:car-fill'} color="#FF3369" width={32} />,
      },
      {
        name: 'Car News',
        value: 443232,
        icon: <Iconify icon={'eva:car-fill'} color="#FF33A5" width={32} />,
      },
    ]}
  />
</Grid>

          <Grid item xs={12} md={6} lg={8}>
  <AppTasks
    title="Car-Related Tasks"
    list={[
      { id: '1', label: 'Create Car Promo Campaign' },
      { id: '2', label: 'Update Car Listings' },
      { id: '3', label: 'Stakeholder Meeting for Car Launch' },
      { id: '4', label: 'Scoping & Estimations for Car Updates' },
      { id: '5', label: 'Sprint Showcase for New Car Models' },
    ]}
  />
</Grid>

        </Grid>
      </Container>
    </>
  );
}
