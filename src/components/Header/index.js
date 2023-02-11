import React from "react";

import LogoPNG from '../../assets/png/logo.png'

import { Container, Logo, MenuDiv, MenuText } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo src={LogoPNG} />

      <MenuDiv>
        <MenuText>Home</MenuText>
        <MenuText>Sobre nós</MenuText>
        <MenuText>Serviços</MenuText>
        <MenuText>Contato</MenuText>
        <MenuText>Informações</MenuText>
      </MenuDiv>
    </Container>
  );
}