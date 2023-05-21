import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Navigation from './Navigation/Navigation';
import { ThemeProvider } from '@mui/material';
import theme from 'utils/palette';
import { Loader } from './Loader/Loader';
export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
};
