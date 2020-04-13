import React from 'react';

import FastFeet from '../../assets/download.png';
import FastFeetMobile from '../../assets/Desktop - 1 (1).png';
import Entrega from '../../assets/Desktop - 1.png';

import { Container, Content, Title, Card, CardContent, Column } from './styles';

export default function Projetos() {
  return (
    <Container id="projetos">
      <Column>
        <Content>
          <Title>
            <span>Meus projetos favoritos</span>
          </Title>
        </Content>
        <CardContent>
          <Card>
            <div>
              <img src={FastFeetMobile} alt="" />
            </div>

            <a
              href="https://github.com/enrickdaltro/fastfeet-mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              FastFeet Mobile
            </a>

            <p>
              Versão mobile da aplicação full-stack entregue para a conclusão do
              bootcamp GoStack, feito em React Native e NodeJS.{' '}
            </p>
          </Card>
          <Card>
            <div>
              <img src={FastFeet} alt="" />
            </div>

            <a
              href="https://github.com/enrickdaltro/fastfeet-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              FastFeet Web
            </a>

            <p>
              Versão web da aplicação full-stack entregue para a conclusão do
              bootcamp GoStack, feito em React e NodeJS.
            </p>
          </Card>

          <Card>
            <div>
              <img src={Entrega} alt="" />
            </div>

            <a
              href="https://github.com/entrega-sos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrega SOS
            </a>

            <p>
              Frontend da aplicação desenvolvida por voluntários, possibilitando
              a entrega de mercadorias na pandemia.
            </p>
          </Card>
        </CardContent>

        <p>
          Para conferir mais projetos, você pode acessar o meu{' '}
          <a href="https://github.com/enrickdaltro">github</a> :)
        </p>
      </Column>
    </Container>
  );
}
