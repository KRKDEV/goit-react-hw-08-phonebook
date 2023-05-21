import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/phonebook/contactsSlice';
import { selectStatusFilter } from 'redux/phonebook/filterSlice';
import ContactItem from 'components/ContactItem/ContactItem';

import { List } from '@mui/material';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const filterStatus = filter.status;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus)
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </List>
  );
};

export default ContactList;
