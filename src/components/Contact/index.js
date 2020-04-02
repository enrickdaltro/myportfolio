import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import EnrickPB from '../../assets/enrick_pb.png';

import {
  Container,
  Content,
  Title,
  BoxContent,
  BoxText,
  BoxImage,
  BoxLinks,
} from './styles';

export default function Contact() {
  return (
    <Container id="falecomigo">
      <Content>
        <Title>
          <span>Entre em contato :)</span>
        </Title>

        <BoxContent>
          <BoxText>
            <span>Quem Sou eu</span>
            <p>
              Desenvolvedor Baiano, apaixonado por tecnologia, conhecimento e
              pelo mundo.
            </p>
            <p>
              Inquieto e autodidata, sempre busco aprender novas habilidades e
              conhecer novas coisas, afinal, acredito que viver é experenciar e
              eu me inspiro muito nisso.
            </p>

            <br />

            <span>Onde me achar</span>
            <p>
              Você pode me achar pelo meu email{' '}
              <span>enrickdaltro@gmail.com</span> ou pelas minhas redes sociais:
            </p>

            <BoxLinks>
              <a href="https://www.linkedin.com/in/enrickdaltro/">
                <FaLinkedin size={25} />
              </a>

              <a href="https://github.com/enrickdaltro">
                <FaGithub size={25} />
              </a>
            </BoxLinks>
          </BoxText>

          <BoxImage>
            <div />

            <img src={EnrickPB} alt="" />
          </BoxImage>
        </BoxContent>
      </Content>
    </Container>
  );
}
