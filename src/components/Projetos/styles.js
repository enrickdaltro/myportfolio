import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div``;

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
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  margin: 50px 10px 0;

  max-width: 250px;
  padding: 10px;

  div {
    border: 1px solid #eee;
    width: 100%;
    height: 130px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: #000;

    border-bottom: 2px solid #0f4bf1;
  }

  p {
    margin-top: 8px;
    color: #999;
  }
`;
