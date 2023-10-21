import { Header, Link, Wrapper } from './AppBar.styled';
import { useAuth } from 'redux/auth/selectors';
import { Menu } from 'components/Menu/Menu';

const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>
      {isLoggedIn ? <Menu /> : <AuthNav />}
    </Header>
  );
};
