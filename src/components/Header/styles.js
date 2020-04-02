import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    margin-left: 50px;
    align-items: center;
    justify-content: flex-end;
    ul {
      display: flex;
      a {
        font-size: 14px;
        margin-right: 10px;
        color: #999;
        &:hover {
          color: ${darken(0.2, '#999')};
          border-bottom: 1px solid #0f4bf1;
        }
      }
    }
  }

  center {
    margin-left: -190px;
    font-size: 22px;
  }

  aside {
    margin-right: 50px;

    a {
      color: #999;
      margin: 0 5px 0;

      &:hover {
        color: #0f4bf1;
      }
    }
  }
`;
