import { ReactComponent as BackArrow } from "../../../assets/backButtonArrow.svg";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { StyledText } from "../../../styles/globalStyles";
import { BackButtonWrapper } from "./styles";

export const BackButton = () => {
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;

  return (
    <BackButtonWrapper>
      <BackArrow />
      {!phone && <StyledText>Назад</StyledText>}
    </BackButtonWrapper>
  );
};
