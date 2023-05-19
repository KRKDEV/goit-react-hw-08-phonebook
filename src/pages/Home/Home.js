import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const { Container, Typography, Button } = require('@mui/material');

const Home = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',
      }}
    >
      <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}>
        <FolderIcon sx={{ width: 50, height: 50 }} />
      </Avatar>
      <Typography variant="h3">Welcome to Phonebook</Typography>
      <Typography variant="h5">
        Store all your contacts in one place!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button
          variant="contained"
          sx={{ gap: '5px' }}
          component={Link}
          to="/login"
        >
          <LoginIcon /> Login
        </Button>
        <Button
          sx={{ gap: '5px' }}
          variant="outlined"
          component={Link}
          to="/register"
        >
          <AddCircleOutlineIcon />
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
