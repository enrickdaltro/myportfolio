import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;

  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    margin-top: 20px;
    color: #999;

    a {
      color: #0f4bf1;
    }

    @media (max-width: 425px) {
      text-align: center;
      max-width: 425px;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 16px;
    color: #000;

    border-bottom: 2px solid #0f4bf1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin: 10px;

  @media (max-width: 425px) {
    padding: 10px;
    margin: 5px;
  }

  span {
    font-size: 18px;
    margin-top: 10px;

    border-bottom: 2px solid #0f4bf1;

    @media (max-width: 425px) {
      font-size: 12px;
    }
  }
`;
