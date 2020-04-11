import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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

  div {
    position: relative;
    right: 250px;
    span {
      font-size: 24px;
    }

    @media (max-width: 425px) {
      right: 0px;
    }

    @media (max-width: 768px) {
      right: 0px;
    }
  }

  img {
    position: absolute;
    right: 200px;
    max-height: 400px;
    max-width: 400px;
    z-index: -1;

    @media (max-width: 425px) {
      right: 0px;
      position: relative;
      margin-top: 20px;
    }

    @media (max-width: 768px) {
      right: 0px;
      position: relative;
      margin-top: 20px;
    }
  }
`;
