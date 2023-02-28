import { StyledText } from "../../../styles/globalStyles";
import { Wrapper, WrapperInner } from "./styles";

type CommonButtonProps = {
  backgroundColor?: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  margin?: string;
  onClick: Function;
};

export const CommonButton = ({
  onClick,
  backgroundColor,
  Icon,
  text,
  margin,
}: CommonButtonProps) => {
  return (
    <Wrapper
      onClick={() => onClick()}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      <WrapperInner>
        <Icon />
        <StyledText textTransform>{text}</StyledText>
      </WrapperInner>
    </Wrapper>
  );
};
