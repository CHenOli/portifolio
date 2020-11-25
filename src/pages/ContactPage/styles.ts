import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;

  animation: smooth-appearance 0.7s ease;

  @keyframes smooth-appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const Main = styled.div``;

export const Title = styled.div`
  color: #78d0d3;

  font-size: 28px;
  font-weight: 500;

  @media (max-width: 900px) {
    margin-top: -128px;
  }
`;

export const Message = styled.div`
  margin-top: 16px;

  font-size: 22px;
  max-width: 600px;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const EmailPhone = styled.div`
  display: flex;

  font-size: 20px;
  font-weight: 500;

  margin-top: 32px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Email = styled.a`
  cursor: pointer;
  padding-bottom: 8px;
  border-bottom: 4px solid transparent;

  color: #78d0d3;
  text-decoration: none;

  &:hover {
    transition: border 0.4s;
    border-bottom: 4px solid #78d0d3;
  }
`;

export const Phone = styled.a`
  margin-left: 32px;

  cursor: pointer;
  padding-bottom: 8px;
  border-bottom: 4px solid transparent;

  color: #78d0d3;
  text-decoration: none;

  &:hover {
    transition: border 0.4s;
    border-bottom: 4px solid #78d0d3;
  }

  @media (max-width: 1100px) {
    margin-left: 0;
  }
`;

export const Image = styled.div`
  margin-left: 128px;

  @media (max-width: 1500px) {
    img {
      width: 600px;
      height: 400px;
    }
  }

  @media (max-width: 1250px) {
    img {
      width: 450px;
      height: 300px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
