import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  a {
    position: absolute;
    top: 900px;
  }
`;
