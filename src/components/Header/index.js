import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
            <a href="#projetos">Projetos</a>
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
        <a href="https://www.linkedin.com/in/enrickdaltro/">
          <FaLinkedin size={20} />
        </a>

        <a href="https://github.com/enrickdaltro">
          <FaGithub size={20} />
        </a>
      </aside>
    </Container>
  );
}
