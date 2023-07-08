import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: #ebd8ff;
  font-size: 37px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Button = styled(NavLink)`
  display: flex;
  width: 220px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  background: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
