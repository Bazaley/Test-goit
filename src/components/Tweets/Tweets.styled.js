import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled(Link)`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #471ca9;
`;

export const LoadMore = styled.button`
  display: flex;
  width: 196px;
  margin: 26px auto 0;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10.311px;
  border: none;
  background-color: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  font-size: 18px;

  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

export const BoxCircles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
