import styled from "styled-components";
import { AiFillMail, AiFillPhone, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export const InfoBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.COLORS.border};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.border};
`;

export const InfoBarContent = styled.div`
  width: 100%;
  height: 35px;
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContactDiv = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconMail = styled(AiFillMail)`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.primary };
`;

export const IconPhone = styled(AiFillPhone)`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.primary };
`;

export const InfoContact = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const SocialDiv = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoSocial = styled.span``;

export const IconFacebook = styled(AiFillFacebook)`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.primary };
`;

export const IconInstagram = styled(AiFillInstagram)`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.primary };
`;
