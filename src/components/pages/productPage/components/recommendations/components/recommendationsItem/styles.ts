import styled from "styled-components";
import { StyledText } from "../../../../../../../styles/globalStyles";
import { ReactComponent as Like } from "../../../../../../../assets/smallLike.svg";
import { theme } from "../../../../../../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (max-width: 1050px) {
    margin: 20px 10px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const PriceBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const OldPrice = styled(StyledText)`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    top: 4px;
    left: 0;
    border-top: 1px solid;
    border-color: ${({ color }) => color};
  }
`;

export const LikeIcon = styled(Like)`
  position: absolute;
  top: 7px;
  right: 4px;
`;

export const Discount = styled(StyledText)`
  position: absolute;
  top: 6px;
  left: 3px;
  border-radius: 6px;
  background-color: ${() => theme.red};
  padding: 2px 5px 0;
`;
