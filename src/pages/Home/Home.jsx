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
  // const [followers, setFollowers] = useState(
  //   JSON.parse(localStorage.getItem('followers') || 100500)
  // );

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // localStorage.setItem('followers', JSON.stringify(followers));
  return (
    <>
      {users.map(({ tweets, followers }) => {
        return (
          <Box>
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
