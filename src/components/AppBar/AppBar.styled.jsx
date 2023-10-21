import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px auto;
  border: 3px solid #000000;
  background-color: rgba(255, 255, 255, 0.6);
  width: 640px;
`;

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #f08080;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;