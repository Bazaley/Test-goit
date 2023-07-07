import { useState } from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ setFollowers, followers }) => {
  const [follow, setFollow] = useState(
    JSON.parse(localStorage.getItem('follow'))
  );
  localStorage.setItem('follow', JSON.stringify(follow));
  return (
    <>
      {follow ? (
        <ButtonStyled
          onClick={() => {
            setFollow(!follow);
            setFollowers(followers - 1);
          }}
          following
        >
          Following
        </ButtonStyled>
      ) : (
        <ButtonStyled
          onClick={() => {
            setFollow(!follow);
            setFollowers(followers + 1);
          }}
        >
          Follow
        </ButtonStyled>
      )}
    </>
  );
};
