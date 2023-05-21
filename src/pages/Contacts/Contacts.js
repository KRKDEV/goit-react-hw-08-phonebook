import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import {
  fetchContacts,
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/phonebook/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container
      sx={{
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {error && <div>{error}</div>}
      <Box mt={10}>
        <ContactForm />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'secondary.main',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Typography variant="h6">My Contacts </Typography>
        <Typography variant="h6" sx={{ marginRight: '5px' }}>
          {contacts.length}
        </Typography>
      </Box>
      <Box>
        <Filter />
      </Box>
      <Box>
        {contacts.length === 0 && !isLoading && (
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            No contacts to show
          </Box>
        )}
        {contacts.length > 0 && <ContactList />}
      </Box>
    </Container>
  );
};

export default Contacts;
