import styled from "styled-components";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 15px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  return (
    <Wrapper>
      <TextWrapper>
        <StyledText>{fullName + " " + color}</StyledText>
        <StyledText color={theme.gray}>{category}</StyledText>
      </TextWrapper>
      <Logo />
    </Wrapper>
  );
};
