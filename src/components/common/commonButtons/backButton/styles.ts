import styled from "styled-components";

export const BackButtonWrapper = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 9;
  @media (max-width: 1050px) {
    top: 10px;
    left: 10px;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 100%;
    padding: 5px;
  }
`;
