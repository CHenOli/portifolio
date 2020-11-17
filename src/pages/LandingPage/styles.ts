import styled from 'styled-components';

import ellipse from '../../assets/ellipse.svg';
import topRight from '../../assets/top-right.svg';
import bottomLeft from '../../assets/bottom-left.svg';
import bottomRight from '../../assets/bottom-right.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  min-width: 100vw;
  min-height: 900px;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 0 64px;

  max-width: 1800px;

  @media (max-width: 700px) {
    padding: 0 32px;
  }
`;

export const Left = styled.section`
  flex: 1;

  > div {
    max-width: 600px;
  }

  @media (max-width: 1500px) {
    padding-top: 120px;
  }

  @media (max-width: 1200px) {
    padding-top: 200px;
  }

  @media (max-width: 960px) {
    padding-top: 120px;
  }

  @media (max-width: 520px) {
    padding-top: 60px;
  }
`;

export const Right = styled.section`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: url(${ellipse}) no-repeat center;
  background-size: 80% 80%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 700px;

  @media (max-width: 1500px) {
    height: 600px;
  }
`;

export const Title = styled.strong`
  color: #574e65;
  font-weight: 900;
  font-size: 80px;
  line-height: 90px;

  @media (max-width: 1500px) {
    font-size: 60px;
    line-height: 70px;
  }

  @media (max-width: 520px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Description = styled.div`
  color: #aba6b2;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 8px;

  color: #fff;
  background: #78d0d3;

  margin-top: 64px;
  padding: 16px 32px;

  font-weight: 500;

  box-shadow: 0px 20px 25px -15px rgba(100, 177, 180, 0.6);

  transition: box-shadow 0.4s, background-color 0.4s;

  &:hover {
    box-shadow: 0px 20px 25px -15px rgba(100, 177, 180, 0.9);
  }
`;

export const BottomLeft = styled.div`
  position: absolute;

  top: 0;
  z-index: -1;

  width: 100%;
  height: 100vh;
  min-height: 900px;

  background: url(${bottomLeft}) no-repeat -1% 100%;
`;

export const BottomRight = styled.div`
  position: absolute;

  top: 0;
  z-index: -1;

  width: 100%;
  height: 100vh;
  min-height: 900px;

  background: url(${bottomRight}) no-repeat 101% 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TopRight = styled.div`
  position: absolute;

  top: 0;
  z-index: -1;

  width: 100%;
  height: 100vh;
  min-height: 900px;

  background: url(${topRight}) no-repeat 101% -1%;

  @media (max-width: 1800px) {
    background-size: 60%;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
