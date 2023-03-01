import styled from "styled-components";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${() => theme.gray};
  padding: 10px 20px;
  margin-top: 20px;
`;

export const ChangeButton = styled(StyledText)`
  position: absolute;
  top: 10px;
  right: 25px;
`;
