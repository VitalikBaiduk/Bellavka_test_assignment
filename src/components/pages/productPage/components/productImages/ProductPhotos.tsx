import {
  ProductPhotosType,
  ProductVideosType,
} from "../../../../../types/types";
import "slick-carousel/slick/slick.css";
import { ReactComponent as ArrowUpOrDown } from "../../../../../assets/arrowUp.svg";
import { useEffect, useRef, useState } from "react";
import {
  ActiveItem,
  ActiveItemBottomLabel,
  ActiveItemTopLabel,
  ActiveVideo,
  InteractiveBlock,
  SmallItem,
  SmallVideoWrapper,
  StyledButton,
  StyledPlayeIcon,
  StyledSlider,
  Wrapper,
  WrapperActiveItem,
} from "./styles";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ReactComponent as Like } from "../../../../../assets/like.svg";
import { ReactComponent as Share } from "../../../../../assets/union.svg";
import { ReactComponent as Download } from "../../../../../assets/download-four.svg";

type ProductPhotosProps = {
  photos: ProductPhotosType[];
  videos: ProductVideosType[];
  alt: string;
  promocode: string;
};

export const ProductPhoto = ({
  photos,
  videos,
  alt,
  promocode,
}: ProductPhotosProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const sliderRef = useRef(null);

  const displayedData = [...photos, ...videos];

  useEffect(() => {
    //@ts-ignore
    if (sliderRef.current?.slickGoTo) sliderRef.current.slickGoTo(activeItem);
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    afterChange: (currentSlide: any) => {
      setActiveItem(currentSlide);
    },
    nextArrow: (
      <StyledButton>
        <ArrowUpOrDown />
      </StyledButton>
    ),
    prevArrow: (
      <StyledButton down>
        <ArrowUpOrDown />
      </StyledButton>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        {displayedData.map((item: any, index: number) =>
          item === displayedData[displayedData.length - 1] ? (
            <SmallVideoWrapper onClick={() => setActiveItem(index)}>
              <SmallItem src={item.preview} alt={alt} />
              <StyledPlayeIcon />
            </SmallVideoWrapper>
          ) : (
            <SmallItem
              onClick={() => setActiveItem(index)}
              src={item.original}
              alt={alt}
            />
          )
        )}
      </StyledSlider>
      <WrapperActiveItem>
        {activeItem >= displayedData.length - 1 ? (
          <ActiveVideo muted loop autoPlay>
            <source type="video/mp4" src={displayedData[activeItem].original} />
          </ActiveVideo>
        ) : (
          <ActiveItem src={displayedData[activeItem].original} alt={alt} />
        )}
        <ActiveItemTopLabel color={theme.green}>
          <StyledText fontWeight="600" color={theme.white}>
            NEW
          </StyledText>
        </ActiveItemTopLabel>
        <ActiveItemBottomLabel color={theme.red}>
          <StyledText fontWeight="600" color={theme.white}>
            {promocode}
          </StyledText>
        </ActiveItemBottomLabel>
        <InteractiveBlock>
          <Like />
          <Share />
          <Download />
        </InteractiveBlock>
      </WrapperActiveItem>
    </Wrapper>
  );
};
