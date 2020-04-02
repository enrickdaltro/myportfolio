import React from 'react';

import { Container, Content, Title, Card, CardContent } from './styles';

export default function Projetos() {
  return (
    <Container id="projetos">
      <Content>
        <Title>
          <span>Meus projetos favoritos</span>
        </Title>
      </Content>
      <CardContent>
        <Card>
          <div></div>

          <span>FastFeet</span>

          <p>esse é um projeto, esse é um projeto, esse é um projeto</p>
        </Card>

        <Card>
          <div></div>

          <span>FastFeet</span>

          <p>esse é um projeto, esse é um projeto, esse é um projeto</p>
        </Card>

        <Card>
          <div></div>

          <span>FastFeet</span>

          <p>esse é um projeto, esse é um projeto, esse é um projeto</p>
        </Card>
      </CardContent>
    </Container>
  );
}
