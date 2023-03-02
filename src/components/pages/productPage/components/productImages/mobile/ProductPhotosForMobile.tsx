import { ReactComponent as Share } from "../../../../../../assets/union.svg";
import { ProductPhotosProps } from "../ProductPhotos";
import { theme } from "../../../../../../styles/theme";
import {
  ActiveVideo,
  Dots,
  DotsWrapper,
  IconBlock,
  Icons,
  Label,
  LabelsBlock,
  Status,
  StyledImg,
  StyledLike,
  StyledSlider,
  Wrapper,
} from "./styles";
import { BackButton } from "../../../../../common/commonButtons/backButton/BackButton";

export const ProductPhotosForMobile = ({
  photos,
  videos,
  alt,
  promocode,
}: ProductPhotosProps) => {
  const displayedData = [...photos, ...videos];
  const { red, white, gray2 } = theme;

  let settings = {
    draggable: true,
    accessibility: false,
    variableWidth: true,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <DotsWrapper>
        <Dots> {dots} </Dots>
      </DotsWrapper>
    ),
  };

  return (
    <Wrapper>
      <BackButton />
      <StyledSlider {...settings}>
        {displayedData.map((item: any, index: number) => {
          return (
            <>
              {item === displayedData[displayedData.length - 1] ? (
                <ActiveVideo key={index} muted loop autoPlay>
                  <source type="video/mp4" src={item.original} />
                </ActiveVideo>
              ) : (
                <StyledImg key={index} src={item.original} alt={alt} />
              )}
            </>
          );
        })}
      </StyledSlider>
      <IconBlock>
        <Icons>
          <StyledLike />
          <Share />
        </Icons>
        <LabelsBlock>
          <Label backgroundColor={red} color={white} fontSize="12px">
            {promocode}
          </Label>
          <Label backgroundColor={gray2} fontSize="12px">
            предзаказ
          </Label>
        </LabelsBlock>
      </IconBlock>
      <Status fontWeight="700" color={white} textTransform>
        New
      </Status>
    </Wrapper>
  );
};
