import React from 'react';
import Swup from 'swup';

import {
  FaReact,
  FaNode,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';

import { DiMongodb } from 'react-icons/di';

import { Container, Title, Content, SecondContent, Card } from './styles';

export default function Tecnologias() {
  return (
    <>
      <Container id="tecnologias">
        <Title>
          <span>Tecnologias que eu uso</span>
        </Title>

        <Content>
          <Card>
            <FaReact size={70} />
            <span>React Native</span>
          </Card>
          <Card>
            <FaReact size={70} />
            <span>React</span>
          </Card>
          <Card>
            <FaNode size={70} />
            <span>NodeJs</span>
          </Card>
          <Card>
            <FaDocker size={70} />
            <span>Docker</span>
          </Card>
        </Content>

        <SecondContent>
          <Card>
            <FaHtml5 size={70} />
            <span>HTML5</span>
          </Card>
          <Card>
            <FaCss3Alt size={70} />
            <span>CSS3</span>
          </Card>
          <Card>
            <DiMongodb size={70} />
            <span>MongoDB</span>
          </Card>
          <Card>
            <FaGithub size={70} />
            <span>GitHub</span>
          </Card>
        </SecondContent>

        <p>
          Essas são as principais tecnologias, mas não são as únicas. Para
          conferir mais, você pode acessar o meu{' '}
          <a href="https://github.com/enrickdaltro">github</a> :)
        </p>
      </Container>
    </>
  );
}
