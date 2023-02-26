import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  max-width: 1180px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.title};
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.title};
    margin-left: 7px;
  }
  &:before {
    content: "";
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.title};
    margin-right: 7px;
  }
`;

export const DivServices = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Service = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TitleService = styled.p`
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.primary};
  &:after {
    content: "";
    width: 40px;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.primary};
    margin-top: 12px;
  }
`;

export const DescriptionService = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;
