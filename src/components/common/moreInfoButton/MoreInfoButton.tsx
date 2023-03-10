import { StyledText } from "../../../styles/globalStyles";
import { theme } from "../../../styles/theme";
import { HideIcon, MoreInfoBlock } from "./styles";

type MoreInfoButtonProps = {
  isShowMoreInfo: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MoreInfoButton = ({
  isShowMoreInfo,
  onClick,
}: MoreInfoButtonProps) => {
  const { gold } = theme;

  return (
    <MoreInfoBlock onClick={() => onClick(!isShowMoreInfo)}>
      <StyledText margin="0 5px 0 0" fontSize="14px" color={gold}>
        Подробнее
      </StyledText>
      <HideIcon $isShowMoreInfo={isShowMoreInfo} />
    </MoreInfoBlock>
  );
};
