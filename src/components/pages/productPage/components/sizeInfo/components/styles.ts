import styled from "styled-components";
import { theme } from "../../../../../../styles/theme";

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const SizesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;
`;

export const Sizes = styled.div<{ borderColor: string; isActive: boolean }>`
  text-align: center;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 7px;
  padding: 10px 25px;
  margin-right: 10px;
  background-color: ${({ isActive }) => (isActive ? theme.gold : " ")};
  cursor: pointer;
  transition: 0.4s;
`;
