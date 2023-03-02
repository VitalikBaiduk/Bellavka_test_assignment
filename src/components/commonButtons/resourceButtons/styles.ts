import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { ReactComponent as Arrow } from "../../../assets/arrowRight.svg";

export const ReviewsButton = styled.a<{ borderColor: string }>`
  position: relative;
  width: 100%;
  max-width: 245px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${({ borderColor }) => borderColor};
  padding: 15px 5px;
  cursor: pointer;
  @media (max-width: 1050px) {
    max-width: 30%;
  }
`;

export const StyledArrow = styled(Arrow)`
  position: absolute;
  top: 10px;
  right: 10px;
  & > path {
    fill: ${() => theme.gray};
  }
`;
