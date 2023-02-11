import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-height: 100px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 32px;
  &:hover {
    color: #0000cd;
  }
`;

export const SubTitle = styled.span`
  color: #ccc;
  font-size: 18px;
`;
