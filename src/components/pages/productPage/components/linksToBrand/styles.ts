import styled from "styled-components";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const DeliveryBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryAvailability = styled(StyledText)`
  background-color: ${() => theme.red1};
  border-radius: 6px;
  padding: 5px 10px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 10px;
  }
  margin-top: 20px;
`;
