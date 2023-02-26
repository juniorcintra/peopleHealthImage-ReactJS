import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BackgroundDiv = styled.section`
  width: 100%;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(35, 31, 31, 0.5);
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB1JREFUeNpi/P//PwM6YGLAApAF1WEMRqK1AwQYALVzBip2fYr/AAAAAElFTkSuQmCC);
  }
`;

export const BackgroundContent = styled.div`
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    overflow: hidden;
  }
`;

export const MainInfo = styled.div`
  color: ${({ theme }) => theme.COLORS.white};
  width: 90%;
  max-width: 710px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 5%;
`;
export const MainTitle = styled.h1`
  font-weight: 900;
`;
export const MainParagraph = styled.p`
  font-weight: 400;
`;
export const MainLink = styled.a`
  background-color: ${({ theme }) => theme.COLORS.primary};
  width: 100px;
  color: ${({ theme }) => theme.COLORS.white};
  padding: 10px 6px;
  text-align: center;
  border-radius: 5px;
`;
