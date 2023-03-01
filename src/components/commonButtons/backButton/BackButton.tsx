import styled from "styled-components";
import { ReactComponent as BackArrow } from "../../../assets/backButtonArrow.svg";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { StyledText } from "../../../styles/globalStyles";

export const BackButtonWrapper = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 9;
  @media (max-width: 1051px) {
    top: 10px;
    left: 10px;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 100%;
    padding: 5px;
  }
`;

export const BackButton = () => {
  const windowWidth = useWindowSize()[0];
  return (
    <BackButtonWrapper>
      <BackArrow />
      {windowWidth > 1051 && <StyledText>Назад</StyledText>}
    </BackButtonWrapper>
  );
};
