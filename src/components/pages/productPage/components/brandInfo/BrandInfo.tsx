import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { TextWrapper, Wrapper } from "./styles";

type BrandInfoProps = {
  fullName: string;
  color: string;
  category: string;
  Logo: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

export const BrandInfo = ({
  fullName,
  color,
  category,
  Logo,
}: BrandInfoProps) => {
  const { gray } = theme;

  return (
    <Wrapper>
      <TextWrapper>
        <StyledText>{fullName + " " + color}</StyledText>
        <StyledText color={gray}>{category}</StyledText>
      </TextWrapper>
      <Logo />
    </Wrapper>
  );
};
