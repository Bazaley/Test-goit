import { FollowersStyled } from './Followers.styled';

export const Followers = ({ followers }) => {
  return (
    <FollowersStyled>
      {new Intl.NumberFormat('en-US').format(followers)} FOLLOWERS
    </FollowersStyled>
  );
};
