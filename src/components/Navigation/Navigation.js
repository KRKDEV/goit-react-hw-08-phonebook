import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          component={Link}
          to="/"
        >
          Phonebook
        </Typography>
        <Box
          sx={{
            minWidth: 200,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="outlined" color="secondary">
            Login
          </Button>
          <Button variant="outlined" color="secondary">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
