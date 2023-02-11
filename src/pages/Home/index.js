import React from "react";

import BackgroundVideo from '../../assets/mp4/background.mp4';

import Header from "../../components/Header";
import InfoBar from "../../components/InfoBar";

import { 
  Container, 
  Content,
  BackgroundDiv,
  BackgroundContent,
  Video
} from "./styles";

export default function Home() {
  return (
    <Container>
      <InfoBar/>

      <Content>
        <Header/>

        <BackgroundDiv>
          <BackgroundContent>
            <Video autoPlay='autoplay' loop='loop' muted='muted'>
              <source src={BackgroundVideo} />
            </Video>
          </BackgroundContent>         
        </BackgroundDiv>
      </Content>
    </Container>
  );
}
