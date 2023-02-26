import React from "react";

import {
  Container,
  Content,
  SuperTitle,
  Title,
  DivLeft,
  DivInfo,
  TitleInfo,
  TextInfo,
} from "./styles";

import SobreNosIMG from "../../../assets/png/sobrenos.jpg";

export default function Sobre() {
  return (
    <Container id="sobre">
      <Content>
        <DivLeft>
          <Title>Sobre a clínica</Title>
          <SuperTitle>Nossa Missão, Visão e Valores!</SuperTitle>
          <DivInfo>
            <TitleInfo>Missao:</TitleInfo>
            <TextInfo>
              Atender com excelência os clientes que buscam tratamento de saúde
              humanizado e acessível
            </TextInfo>
          </DivInfo>
          <DivInfo>
            <TitleInfo>Visao:</TitleInfo>
            <TextInfo>
              Ser o Maior Centro Médico Popular da Região de Picos
            </TextInfo>
          </DivInfo>
          <DivInfo>
            <TitleInfo>Valores:</TitleInfo>
            <TextInfo>- Excelência em atendimento</TextInfo>
            <TextInfo>- Ética</TextInfo>
            <TextInfo>- Humanização</TextInfo>
            <TextInfo>- Parceria</TextInfo>
            <TextInfo>- Transparência</TextInfo>
          </DivInfo>
        </DivLeft>
        <img src={SobreNosIMG} />
      </Content>
    </Container>
  );
}
