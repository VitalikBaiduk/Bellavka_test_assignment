import styled from "styled-components";
import { ReactComponent as HideDataIcon } from "../../assets/circle-double-down.svg";
import { StyledText } from "../../styles/globalStyles";
import { theme } from "../../styles/theme";

export const MoreInfoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HideIcon = styled(HideDataIcon)<{ isShowMoreInfo: boolean }>`
  transform: ${({ isShowMoreInfo }) =>
    isShowMoreInfo ? "" : "rotate(180deg)"};
  & > path {
    fill: ${() => theme.gold};
  }
`;

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
      <HideIcon isShowMoreInfo={isShowMoreInfo} />
    </MoreInfoBlock>
  );
};
