import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  width: 196px;
  margin: 26px auto 0;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  border: none;

  background: ${({ following }) => (following ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  font-size: 18px;

  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
