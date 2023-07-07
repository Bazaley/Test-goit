import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 767px) {
    padding: 0;
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
