import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../../assets/backButtonArrow.svg";
import { StyledText } from "../../../styles/globalStyles";

export const BackButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BackButton = () => {
  return (
    <BackButtonWrapper>
      <BackArrow />
      <StyledText>Назад</StyledText>
    </BackButtonWrapper>
  );
};
