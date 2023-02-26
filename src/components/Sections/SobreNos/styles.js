import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1180px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.title};
  font-size: 18px;
  display: flex;
  line-height: 24px;
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

export const SuperTitle = styled.h1`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: 24px;
  line-height: 32px;
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const TitleInfo = styled.p`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 7px;
`;

export const TextInfo = styled.p`
  color: ${({ theme }) => theme.COLORS.black};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 5px;
`;

export const DivInfo = styled.div``;
