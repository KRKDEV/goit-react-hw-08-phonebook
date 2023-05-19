import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/palette';
import Navigation from './Navigation/Navigation';
import Home from '../pages/Home/Home';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};
