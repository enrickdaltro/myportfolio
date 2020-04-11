import React from 'react';

import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

import EnrickPB from '../../assets/Group 1.svg';

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
              Desenvolvedor baiano, apaixonado por tecnologia, conhecimento e
              pelo mundo.
            </p>
            <p>
              Inquieto e autodidata, sempre busco aprender novas habilidades e
              vivenciar novas experiências. Me inspiro na tecnologia e em seus
              desafios, buscando aprender o máximo com eles.
            </p>

            <br />

            <span>Onde me encontrar</span>
            <p>
              Você pode me achar pelo meu email{' '}
              <span>enrickdaltro@gmail.com</span> ou pelas minhas redes sociais:
            </p>

            <BoxLinks>
              <a
                href="https://www.linkedin.com/in/enrickdaltro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>

              <a
                href="https://github.com/enrickdaltro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://telegram.me/enrickdaltro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
            </BoxLinks>
          </BoxText>

          <BoxImage>
            <img src={EnrickPB} alt="" />
          </BoxImage>
        </BoxContent>
      </Content>
    </Container>
  );
}
