import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { selectError, selectLoading, selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContacts, fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <List>
      {loading && error ? (
        <Loader />
      ) : contacts.length === 0 && !error ? (
        <p>Phonebook empty</p>
      ) : (
        contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <Item key={id}>
              {name + ' : ' + number}
              <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
                Delete
              </Button>
            </Item>
          );
        })
      )}
    </List>
  );
};
