import styled from "styled-components";
import { theme } from "../../../../styles/theme";

type WrapperProps = {
  margin?: string;
  backgroundColor?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.white};
  border: 1px solid;
  border-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.black};
  border-radius: 25px;
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: 15px 0;
  cursor: pointer;
  @media (max-width: 1050px) {
    max-width: 100%;
  }
`;

export const WrapperInner = styled.div`
  display: flex;
  align-items: center;
`;
