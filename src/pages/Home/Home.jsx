import { Button } from 'components/Button/Button';
import { Tweets } from 'components/Tweets/Tweets';
import { Followers } from 'components/Followers/Followers';
import { Box, Image, BoxBoy } from './Home.styled';
import { HandySvg } from 'handy-svg';
import icon from '../../images/Logo.svg';
import log from '../../images/picture.png';
import boy from '../../images/boy.png';

import { fetchUsers } from 'redux/users/users-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';

const Home = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, limit: 3 }));
  }, [dispatch]);

  return (
    <>
      {users.map(({ id, tweets, followers }) => {
        return (
          <Box key={id}>
            <HandySvg src={icon} width="76px" height="22px" />
            <Image>
              <img src={log} alt="log" />
            </Image>
            <BoxBoy>
              <img src={boy} alt="boy" />
            </BoxBoy>
            <Tweets tweets={tweets} />
            <Followers followers={followers} />
            <Button />
          </Box>
        );
      })}
    </>
  );
};

export default Home;
