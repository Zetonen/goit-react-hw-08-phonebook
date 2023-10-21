import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Button } from './Menu.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const Menu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome to Phonebook {user.name} </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};