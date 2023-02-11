import React from "react";

import BackgroundVideo from "../../assets/mp4/background.mp4";

import Header from "../../components/Header";
import InfoBar from "../../components/InfoBar";

import {
  Container,
  Content,
  BackgroundDiv,
  BackgroundContent,
  MainInfo,
  MainTitle,
  MainParagraph,
  MainLink,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <InfoBar />

      <Content>
        <Header />
        <BackgroundDiv>
          <BackgroundContent>
            <video autoPlay="autoplay" loop="loop" muted="muted">
              <source src={BackgroundVideo} />
            </video>

            <MainInfo>
              <MainTitle>Bem vindo a UNIMAGEM</MainTitle>
              <MainParagraph>
                Passo a Passo você sentirá que temos todos os recursos
                necessários para lhe prestar o melhor atendimento, bem como
                nossos profissionais treinados para fazê-lo se sentir seguro e
                confiante.
              </MainParagraph>
              <MainLink href="">Ler mais</MainLink>
            </MainInfo>
          </BackgroundContent>
        </BackgroundDiv>
      </Content>
    </Container>
  );
}
