import styled from 'styled-components';

export const Container = styled.div`
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    height: 140px;
    max-height: 140px;

    & + a {
      margin-top: 8px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;

      @media (max-width: 550px) {
        display: none;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  margin: 0 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  strong {
    font-size: 20px;
    color: #3d3d4d;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;

    width: 100%;

    @media (max-width: 700px) {
      -webkit-line-clamp: 2;
    }
  }
`;
