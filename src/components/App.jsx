import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import theme from '../utils/palette';
import Navigation from './Navigation/Navigation';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Contacts from 'pages/Contacts/Contacts';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
