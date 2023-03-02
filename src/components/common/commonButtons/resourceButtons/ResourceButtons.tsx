import { theme } from "../../../../styles/theme";
import { ReactComponent as VideoIcon } from "../../../../assets/videoIcon.svg";
import { ReactComponent as MessageIcon } from "../../../../assets/messageIcon.svg";
import { ReactComponent as Help } from "../../../../assets/help.svg";
import { ResourceButtonType } from "../../../../enums/enums";
import { StyledText } from "../../../../styles/globalStyles";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { ReviewsButton, StyledArrow } from "./styles";

type ResourceButtonsProps = {
  type: ResourceButtonType;
};

export const ResourceButtons = ({ type }: ResourceButtonsProps) => {
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;

  const { black, gold, gray } = theme;

  return (
    <>
      {type === ResourceButtonType.REVIEWS && (
        <ReviewsButton borderColor={black}>
          <VideoIcon />
          <StyledText margin="0 4px" color={gold}>
            +19
          </StyledText>
          <StyledText fontSize="14px">Смотреть видеообзоры</StyledText>
          {phone && <StyledArrow />}
        </ReviewsButton>
      )}
      {type === ResourceButtonType.FEEDBACK && (
        <ReviewsButton borderColor={gray}>
          <MessageIcon />
          <StyledText margin="0 4px" color={gold}>
            +19
          </StyledText>
          <StyledText fontSize="14px">Отзывы покупателей</StyledText>
          {phone && <StyledArrow />}
        </ReviewsButton>
      )}
      {type === ResourceButtonType.QUESTIONS && (
        <ReviewsButton borderColor={gray}>
          <Help />
          <StyledText margin="0 4px" color={gold}>
            +2
          </StyledText>
          <StyledText fontSize="14px">Вопросы по модели</StyledText>
          {phone && <StyledArrow />}
        </ReviewsButton>
      )}
    </>
  );
};
