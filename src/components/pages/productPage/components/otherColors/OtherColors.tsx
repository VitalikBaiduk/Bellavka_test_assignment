import { StyledText } from "../../../../../styles/globalStyles";
import { ImagesBlock, StyledImg, Wrapper } from "./styles";

type OtherColorsProps = {
  data: string[];
};

export const OtherColors = ({ data }: OtherColorsProps) => {
  return (
    <Wrapper>
      <StyledText>Цвета:</StyledText>
      <ImagesBlock>
        {data.map((item, index: number) => {
          return <StyledImg key={index} src={item} alt="other color" />;
        })}
      </ImagesBlock>
    </Wrapper>
  );
};
