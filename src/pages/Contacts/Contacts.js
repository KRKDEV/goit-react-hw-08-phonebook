import { Container, Box } from '@mui/material';

const Contacts = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box mt={10}>Contacts Page</Box>
    </Container>
  );
};

export default Contacts;
