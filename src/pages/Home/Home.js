import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/material';

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
      <Avatar color="secondary" sx={{ width: 80, height: 80 }}>
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
        <Button variant="contained" color="secondary">
          Login
        </Button>
        <Button variant="outlined" color="secondary">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
