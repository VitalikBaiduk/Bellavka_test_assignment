import { StyledText } from "../../../../../styles/globalStyles";
import { ProductDataType } from "../../../../../types/types";
import { RecommendationsItem } from "./components/recommendationsItem/RecommendationsItem";
import { theme } from "../../../../../styles/theme";
import { useState } from "react";
import { SliderButton, StyledSlider, TitleBlock, Wrapper } from "./styles";
import { useWindowSize } from "../../../../../hooks/useWindowSize";

type RecommendationsProps = {
  recommendations: ProductDataType[];
};

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  const [activeRecItem, setActiveRecItem] = useState(1);
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;

  const { gold, black, gray } = theme;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderButton />,
    prevArrow: <SliderButton />,
    afterChange: (currentSlide: any) => {
      setActiveRecItem(currentSlide + 1);
    },
  };

  const mobileSettings = {
    draggable: true,
    accessibility: false,
    variableWidth: true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderButton />,
    prevArrow: <SliderButton />,
  };

  const sliderSettings = phone ? mobileSettings : settings;

  return (
    <Wrapper>
      <TitleBlock>
        <StyledText fontSize="20px" color={phone ? gold : black}>
          Вам может понравиться:
        </StyledText>
        {!phone && (
          <StyledText margin="0 16px 0 0" color={gray}>
            {activeRecItem + "/"}
            <StyledText color={gray}>{recommendations.length}</StyledText>
          </StyledText>
        )}
      </TitleBlock>

      <StyledSlider {...sliderSettings}>
        {recommendations.map((item: ProductDataType, index: number) => {
          const { photos, price, brand, kits } = item;
          return (
            <RecommendationsItem
              key={index}
              img={photos[0].original}
              currentPrice={price.current}
              oldPrice={price.old}
              brand={brand.value}
              kit={kits[0].value}
              discount={price.discount.market.percent}
            />
          );
        })}
      </StyledSlider>
    </Wrapper>
  );
};
