import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    max-width: 425px;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  > p {
    margin-top: 40px;
    font-size: 12px;
    color: #999;

    text-align: center;

    span {
      color: #0f4bf1;
      font-size: 16px;
      border: none;
    }
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

export const Title = styled.div`
  span {
    font-size: 16px;
    color: #000;

    border-bottom: 2px solid #0f4bf1;
  }

  margin-bottom: 50px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  margin: 0px 10px;
  border: 1px solid #0f4bf1;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  padding: 10px;
  transition: transform 0.2s;
  transition: box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 425px) {
    margin: 10px 10px 0;
  }

  @media (max-width: 768px) {
    margin: 10px 10px 0;
  }

  div {
    max-width: 230px;
    height: 190px;
  }

  img {
    max-width: 230px;
  }

  a {
    font-size: 16px;
    color: #000;

    border-bottom: 2px solid #0f4bf1;

    transition: color 0.2s;

    cursor: pointer;

    &:hover {
      color: #0f4bf1;
    }
  }

  p {
    margin-top: 8px;
    color: #999;
  }
`;
