import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1180px;
`;

export const InfoBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const InfoBarContent = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 32px;
  &:hover {
    color: #000;
  }
`;

export const SubTitle = styled.p`
  color: #000;
  font-size: 18px;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
`;
export const InfoContact = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50px;
`;
export const InfoSocial = styled.span``;
