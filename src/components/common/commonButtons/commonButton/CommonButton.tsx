import { StyledText } from "../../../../styles/globalStyles";
import { Wrapper, WrapperInner } from "./styles";

type CommonButtonProps = {
  backgroundColor?: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  onClick: Function;
};

export const CommonButton = ({
  onClick,
  backgroundColor,
  Icon,
  text,
}: CommonButtonProps) => {
  return (
    <Wrapper onClick={() => onClick()} backgroundColor={backgroundColor}>
      <WrapperInner>
        <Icon />
        <StyledText textTransform>{text}</StyledText>
      </WrapperInner>
    </Wrapper>
  );
};
