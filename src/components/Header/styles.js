import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 24px 0;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const MenuDiv = styled.div`
  display: flex;
  gap: 25px;
`;

export const MenuText = styled.a`
  font-size: 13px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.primary};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.primary};
  }
`;
