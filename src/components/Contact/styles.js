import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 65%;
  width: 55%;
  padding: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  span {
    font-size: 18px;
    border-bottom: 2px solid #0f4bf1;
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 85%;
`;

export const BoxText = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px;

  span {
    font-size: 18px;
    border-bottom: 2px solid #0f4bf1;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #999;

    > span {
      color: #0f4bf1;
      font-size: 16px;
      border: none;
    }
  }
`;

export const BoxImage = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 10px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const BoxLinks = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #999;
    margin: 10px;

    &:hover {
      color: #0f4bf1;
    }
  }
`;
