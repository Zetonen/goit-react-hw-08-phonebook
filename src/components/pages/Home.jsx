import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 600px);
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 48;
  text-align: center;
  color: #000000;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Welcome to Phonebook!</Title>
    </Wrapper>
  );
};

export default Home;
