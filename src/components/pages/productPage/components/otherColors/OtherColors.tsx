import { StyledText } from "../../../../../styles/globalStyles";
import { ImagesBlock, StyledImg, Wrapper } from "./styles";

type OtherColorsProps = {
  data?: string[];
};

export const OtherColors = ({ data }: OtherColorsProps) => {
  return (
    <Wrapper>
      <StyledText>Цвета:</StyledText>
      <ImagesBlock>
        {data ? (
          data.map((item) => {
            return <></>; /* <StyledImg
          src={item}
          alt="other color"
        /> */
          })
        ) : (
          <>
            <StyledImg />
            <StyledImg />
          </>
        )}
      </ImagesBlock>
    </Wrapper>
  );
};
