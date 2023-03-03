import {
  ProductPhotosType,
  ProductVideosType,
} from "../../../../../types/types";
import "slick-carousel/slick/slick.css";
import { ReactComponent as ArrowUpOrDown } from "../../../../../assets/ArrowUp.svg";
import { useEffect, useRef, useState } from "react";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ReactComponent as Like } from "../../../../../assets/like.svg";
import { ReactComponent as Share } from "../../../../../assets/union.svg";
import { ReactComponent as Download } from "../../../../../assets/download-four.svg";
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

export type ProductPhotosProps = {
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

  const { green, red, white } = theme;
  const displayedData = [...photos, ...videos];

  useEffect(() => {
    //@ts-ignore
    if (sliderRef.current?.slickGoTo) sliderRef.current.slickGoTo(activeItem);
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    afterChange: (currentslide: any) => {
      setActiveItem(currentslide);
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
            <SmallVideoWrapper key={index} onClick={() => setActiveItem(index)}>
              <SmallItem src={item.preview} alt={alt} />
              <StyledPlayeIcon />
            </SmallVideoWrapper>
          ) : (
            <SmallItem
              key={index}
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
        <ActiveItemTopLabel color={green}>
          <StyledText textTransform fontWeight="600" color={white}>
            new
          </StyledText>
        </ActiveItemTopLabel>
        <ActiveItemBottomLabel color={red}>
          <StyledText fontWeight="600" color={white}>
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
