import { ReactComponent as CartIcon } from "../../../../../../../assets/recCartIcon.svg";
import { StyledText } from "../../../../../../../styles/globalStyles";
import { theme } from "../../../../../../../styles/theme";
import {
  Discount,
  LikeIcon,
  OldPrice,
  PriceBlock,
  StyledImg,
  Wrapper,
} from "./styles";

type RecommendationsItemProps = {
  img: string;
  currentPrice: number;
  oldPrice: number;
  brand: string;
  kit: string;
  discount: number;
};

export const RecommendationsItem = ({
  img,
  currentPrice,
  oldPrice,
  brand,
  kit,
  discount,
}: RecommendationsItemProps) => {
  return (
    <Wrapper>
      <StyledImg src={img} alt={"recommendation product"} />
      <PriceBlock>
        <StyledText fontSize="14px" fontWeight="600" color={theme.gold}>
          {currentPrice}
          <OldPrice
            margin="0 0 0 5px"
            fontSize="10px"
            fontWeight="400"
            color={theme.gray}
          >
            {oldPrice}
          </OldPrice>
        </StyledText>
        <CartIcon />
      </PriceBlock>
      <StyledText fontSize="12px">{brand}</StyledText>
      <StyledText fontSize="12px" color={theme.gray}>
        {kit}
      </StyledText>
      <LikeIcon />
      {discount > 0 && (
        <Discount fontSize="12px" fontWeight="700" color={theme.white}>
          {"-" + discount + "%"}
        </Discount>
      )}
    </Wrapper>
  );
};
