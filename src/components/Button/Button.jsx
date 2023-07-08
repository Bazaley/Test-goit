import { ButtonStyled } from './Button.styled';
import { updateUser } from 'redux/users/users-operations';
import { useDispatch } from 'react-redux';

export const Button = ({ id, follow, followers }) => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    const newFollowers = follow ? followers - 1 : followers + 1;
    dispatch(updateUser({ id, follow: follow ? false : true, newFollowers }));
  };

  return (
    <>
      {follow ? (
        <ButtonStyled onClick={handlerClick} following>
          following
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={handlerClick}>follow</ButtonStyled>
      )}
    </>
  );
};
