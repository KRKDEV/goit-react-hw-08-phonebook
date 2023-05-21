import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/contactsSlice';

// import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          backgroundColor: 'secondary.main',
          marginBottom: '5px',
          borderLeft: '2px solid',
          borderLeftColor: 'primary.main',
        }}
      >
        <ListItemText
          primary={`${contact.name}`}
          secondary={`number: ${contact.number}`}
        />
        <IconButton
          aria-label="delete"
          type="button"
          variant="contained"
          color="error"
          size="small"
          id={contact.id}
          onClick={() => handleDeleteContact(contact.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
