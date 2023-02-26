import React from "react";

import LogoPNG from "../../assets/png/logo.png";

import { Container, Logo, MenuDiv, MenuText } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo src={LogoPNG} />

      <MenuDiv>
        <MenuText href="#home">Home</MenuText>
        <MenuText href="#sobre">Sobre nós</MenuText>
        <MenuText>Serviços</MenuText>
        <MenuText>Staff de Profissionais</MenuText>
        <MenuText>Contato</MenuText>
        {/* <MenuText>Informações</MenuText> */}
      </MenuDiv>
    </Container>
  );
}
