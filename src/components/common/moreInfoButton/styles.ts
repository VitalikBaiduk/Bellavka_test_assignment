import styled from "styled-components";
import { ReactComponent as HideDataIcon } from "../../../assets/circle-double-down.svg";
import { theme } from "../../../styles/theme";

export const MoreInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HideIcon = styled(HideDataIcon)<{ $isShowMoreInfo: boolean }>`
  transform: ${({ $isShowMoreInfo }) =>
    $isShowMoreInfo ? "" : "rotate(180deg)"};
  & > path {
    fill: ${() => theme.gold};
  }
`;
