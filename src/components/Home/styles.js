import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    right: 250px;
    span {
      font-size: 24px;
    }
  }

  img {
    position: absolute;
    right: 200px;
    max-height: 400px;
    max-width: 400px;
    z-index: -1;
  }
`;
