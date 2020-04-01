import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Arrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 6000);
  }, [visible]);

  return (
    <Container visible={visible}>
      <a href="#tecnologias">seta</a>
    </Container>
  );
}
