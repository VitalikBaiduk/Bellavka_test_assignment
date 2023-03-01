import styled from "styled-components";
import Slider from "react-slick";
import { BackButton } from "../../../../../commonButtons/backButton/BackButton";
import { ReactComponent as Like } from "../../../../../../assets/whiteLike.svg";
import { ReactComponent as Share } from "../../../../../../assets/union.svg";
import { StyledText } from "../../../../../../styles/globalStyles";
import { ProductPhotosProps } from "../ProductPhotos";
import { theme } from "../../../../../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
  height: 375px;

  & > button {
    display: none !important;
  }
  & > div > div > div {
    width: 250px !important;
    height: 375px;
    overflow: hidden;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 375px;
`;

export const SmallVideoWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ActiveVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 15px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelsBlock = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled(StyledText)<{ backgroundColor: string }>`
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  padding: 5px 10px;
`;

export const StyledLike = styled(Like)`
  margin-right: 10px;
`;

export const ProductPhotosForMobile = ({
  photos,
  videos,
  alt,
  promocode,
}: ProductPhotosProps) => {
  const displayedData = [...photos, ...videos];

  let settings = {
    draggable: true,
    accessibility: false,
    variableWidth: true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
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
          <Label
            backgroundColor={theme.red}
            color={theme.white}
            fontSize="12px"
          >
            {promocode}
          </Label>
          <Label backgroundColor={theme.gray2} fontSize="12px">
            предзаказ
          </Label>
        </LabelsBlock>
      </IconBlock>
    </Wrapper>
  );
};
