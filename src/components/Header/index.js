import React from 'react';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#trabalhos">Trabalhos</a>
          </li>
          <li>
            <a href="#falecomigo">Fale comigo</a>
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
