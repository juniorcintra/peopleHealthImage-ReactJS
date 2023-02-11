import React from "react";
import {
  Container,
  Content,
  Title,
  SubTitle,
  InfoBarContainer,
  InfoBarContent,
  ContactDiv,
  InfoContact,
  SocialDiv,
  InfoSocial,
} from "./styles";

import {
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <Container>
      <InfoBarContainer>
        <InfoBarContent>
          <ContactDiv>
            <InfoContact>
              <AiFillMail color="#5183a6" />
              unimagem@unimagempicos.com.br
            </InfoContact>
            <InfoContact>
              <AiFillPhone color="#5183a6" />
              (89) 3422-1463
            </InfoContact>
          </ContactDiv>
          <SocialDiv>
            <InfoSocial>
              <AiFillFacebook color="#5183a6" />
            </InfoSocial>
            <InfoSocial>
              <AiFillInstagram color="#5183a6" />
            </InfoSocial>
          </SocialDiv>
        </InfoBarContent>
      </InfoBarContainer>
      <Content>
        <Title>Hello World</Title>
        <SubTitle>Junior Cintra</SubTitle>
      </Content>
    </Container>
  );
}
