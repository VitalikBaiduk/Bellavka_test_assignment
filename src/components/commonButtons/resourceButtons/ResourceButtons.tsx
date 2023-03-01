import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { ReactComponent as Arrow } from "../../../assets/arrowRight.svg";
import { ReactComponent as VideoIcon } from "../../../assets/videoIcon.svg";
import { ReactComponent as MessageIcon } from "../../../assets/messageIcon.svg";
import { ReactComponent as Help } from "../../../assets/help.svg";
import { ResourceButtonType } from "../../../enums/enums";
import { StyledText } from "../../../styles/globalStyles";
import { useWindowSize } from "../../../hooks/useWindowSize";

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
  @media (max-width: 1145px) {
    max-width: 100%;
    &:first-child {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 1050px) {
    max-width: 30%;
    &:first-child {
      margin: 0px;
    }
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

type ResourceButtonsProps = {
  type: ResourceButtonType;
};

export const ResourceButtons = ({ type }: ResourceButtonsProps) => {
  const windowWidth = useWindowSize()[0];
  return (
    <>
      {type === ResourceButtonType.REVIEWS && (
        <ReviewsButton borderColor={theme.black}>
          <VideoIcon />
          <StyledText margin="0 4px" color={theme.gold}>
            +19
          </StyledText>
          <StyledText fontSize="14px">Смотреть видеообзоры</StyledText>
          {windowWidth <= 1050 && <StyledArrow />}
        </ReviewsButton>
      )}
      {type === ResourceButtonType.FEEDBACK && (
        <ReviewsButton borderColor={theme.gray}>
          <MessageIcon />
          <StyledText margin="0 4px" color={theme.gold}>
            +19
          </StyledText>
          <StyledText fontSize="14px">Отзывы покупателей</StyledText>
          {windowWidth <= 1050 && <StyledArrow />}
        </ReviewsButton>
      )}
      {type === ResourceButtonType.QUESTIONS && (
        <ReviewsButton borderColor={theme.gray}>
          <Help />
          <StyledText margin="0 4px" color={theme.gold}>
            +2
          </StyledText>
          <StyledText fontSize="14px">Вопросы по модели</StyledText>
          {windowWidth <= 1050 && <StyledArrow />}
        </ReviewsButton>
      )}
    </>
  );
};
