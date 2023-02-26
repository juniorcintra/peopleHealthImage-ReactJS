import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 7rem;
  bottom: 2rem;
  z-index: 1000;
  height: 58px;
  width: 58px;
  border: 5px solid #1e3469;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
  background: #fff;
  border-radius: 100px;
  cursor: pointer;
  transform: ${(props) => (props.visible === "visible" ? "none" : `scale(0)`)};
  transition: ${(props) =>
    props.visible === "visible"
      ? `transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`
      : `transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`};

  visibility: ${(props) => (props.visible !== "visible" ? "visible" : `none`)};

  button {
    border: 5px solid #a00505;
    color: #a00505;
    background: #fff;

    &:hover {
      background: #fff;
    }
  }

  svg {
    font-size: 24px;
  }
`;
