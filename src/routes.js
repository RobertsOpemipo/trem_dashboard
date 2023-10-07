import { Navigate, useRoutes, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import UserDetailPage from './pages/UserDetailPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import NewUserPage from './pages/NewUserPage'; // Import NewUserPage

export default function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/app" />} />
        <Route path="app" element={<DashboardAppPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="userdetail" element={<UserDetailPage />} />
        <Route path="new-user" element={<NewUserPage />} /> {/* Add this route for NewUserPage */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="detail/:vehicleId" element={<VehicleDetailPage />} />
      <Route path="*" element={<SimpleLayout />}>
        <Route index element={<Navigate to="/dashboard/app" />} />
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
