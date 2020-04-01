import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="">Tecnologias</a>
          </li>
          <li>
            <a href="#about">Trabalhos</a>
          </li>
          <li>
            <a href="">Fale comigo</a>
          </li>
        </ul>
      </nav>

      <center>
        <span>Enrick Daltro</span>
      </center>

      <aside>
        <a>icon</a>
      </aside>
    </Container>
  );
}
