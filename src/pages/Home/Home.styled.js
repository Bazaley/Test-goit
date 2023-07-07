import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 460px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 8px;
    left: 0;
    top: 217px;
    background: #ebd8ff;
    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
      0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
      0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  }

  @media screen and (min-width: 767px) {
    width: 360px;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
  display: flex;
  justify-content: center;
`;

export const BoxBoy = styled.div`
  position: relative;
  width: max-content;

  margin: 136px auto 0;
`;
