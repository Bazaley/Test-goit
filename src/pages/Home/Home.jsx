import { useLocation } from 'react-router-dom';
import { Box, Button, Title } from './Home.styled';

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Box>
        <Title>Welcome to the big collection of tweets</Title>
        <Button to="/tweets" state={{ from: location }}>
          go to tweets
        </Button>
      </Box>
    </>
  );
};

export default Home;
