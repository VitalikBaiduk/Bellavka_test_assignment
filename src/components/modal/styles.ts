import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ModalItem = styled.div`
  background-color: ${() => theme.white};
  border-radius: 6px;
  padding: 30px 120px 45px 60px;
`;

export const SaveButton = styled.a`
  cursor: pointer;
  background: ${() => theme.gold};
  border-radius: 25px;
  padding: 13px 55px;
`;
