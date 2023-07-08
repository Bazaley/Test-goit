import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { HandySvg } from 'handy-svg';
import { Button } from 'components/Button/Button';
import { Followers } from 'components/Followers/Followers';
import icon from '../../images/Logo.svg';
import log from '../../images/picture.png';
import ellipse from '../../images/Ellipse.png';
import { AvatarGenerator } from 'random-avatar-generator';
import { TweetsStyled, Box, Image, BoxBoy } from './UsersList.styled';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const generator = new AvatarGenerator();

  generator.generateRandomAvatar();

  return (
    <>
      {users.map(({ id, tweets, followers, follow, avatar }) => {
        return (
          <Box key={id}>
            <HandySvg src={icon} width="76px" height="22px" />
            <Image>
              <img src={log} alt="log" />
            </Image>
            <BoxBoy>
              <img src={ellipse} alt="boy" />
              <img
                style={{
                  position: 'absolute',
                  width: '73px',
                  top: '-4px',
                  left: '9px',
                }}
                src={generator.generateRandomAvatar()}
                alt="avatar"
              />
            </BoxBoy>
            <TweetsStyled>{tweets} TWEETS</TweetsStyled>

            <Followers followers={followers} />

            <Button id={id} follow={follow} followers={followers} />
          </Box>
        );
      })}
    </>
  );
};
