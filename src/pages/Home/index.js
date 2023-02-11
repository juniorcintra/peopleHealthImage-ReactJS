import React from "react";

import Header from "../../components/Header";
import InfoBar from "../../components/InfoBar";

import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <InfoBar/>

      <Content>
        <Header/>
      </Content>
    </Container>
  );
}
