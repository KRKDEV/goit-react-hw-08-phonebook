import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
        </Box>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <Box
            sx={{
              minWidth: 200,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/register"
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
