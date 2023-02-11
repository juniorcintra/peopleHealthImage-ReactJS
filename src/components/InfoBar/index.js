import React from "react";

import {
  InfoBarContainer,
  InfoBarContent,
  ContactDiv,
  InfoContact,
  IconMail,
  IconPhone,
  SocialDiv,
  InfoSocial,
  IconFacebook,
  IconInstagram,
} from "./styles";

export default function InfoBar() {
  return (
    <InfoBarContainer>
      <InfoBarContent>
        <ContactDiv>
          <InfoContact>
            <IconMail /> unimagem@unimagempicos.com.br
          </InfoContact>
          <InfoContact>
            <IconPhone /> (89) 3422-1463
          </InfoContact>
        </ContactDiv>
        
        <SocialDiv>
          <InfoSocial>
            <IconFacebook />
          </InfoSocial>
          <InfoSocial>
            <IconInstagram />
          </InfoSocial>
        </SocialDiv>
      </InfoBarContent>
    </InfoBarContainer>
  );
}
