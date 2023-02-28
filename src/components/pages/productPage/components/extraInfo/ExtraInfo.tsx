import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ReactComponent as Cart } from "../../../../../assets/cartIcon.svg";
import { ReactComponent as VideoIcon } from "../../../../../assets/videoIcon.svg";
import { ReactComponent as MessageIcon } from "../../../../../assets/messageIcon.svg";
import {
  CartInfoWrapper,
  Input,
  ProdReview,
  ReviewsButton,
  Slider,
  Switch,
  Wrapper,
  WrapperBuyInfo,
  WrapperPriceOptions,
  WrapperReviews,
} from "./styles";

type ExtraInfoProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExtraInfo = ({ toggle, setToggle }: ExtraInfoProps) => {
  return (
    <Wrapper>
      <ProdReview>
        <WrapperBuyInfo>
          <StyledText color={theme.gray}>купили 43 раза</StyledText>
          <StyledText color={theme.gray}>|</StyledText>
          <CartInfoWrapper>
            <Cart />
            <StyledText margin="0 0 0 4px" color={theme.gray}>
              в корзине у 15 пользователей
            </StyledText>
          </CartInfoWrapper>
        </WrapperBuyInfo>
        <WrapperReviews>
          <ReviewsButton borderColor={theme.black}>
            <VideoIcon />
            <StyledText margin="0 4px" color={theme.gold}>
              +19
            </StyledText>
            <StyledText>Смотреть видеообзоры</StyledText>
          </ReviewsButton>
          <ReviewsButton borderColor={theme.gray}>
            <MessageIcon />
            <StyledText margin="0 4px" color={theme.gold}>
              +20
            </StyledText>
            <StyledText>Отзывы покупателей</StyledText>
          </ReviewsButton>
        </WrapperReviews>
      </ProdReview>
      <WrapperPriceOptions>
        <StyledText color={toggle ? theme.gray : theme.black}>
          Оптовые цены
        </StyledText>
        <Switch>
          <Input color={theme.gold} type="checkbox" defaultChecked={toggle} />
          <Slider
            toggle={toggle}
            color={theme.gold}
            onClick={() => setToggle(!toggle)}
          />
        </Switch>
        <StyledText color={toggle ? theme.black : theme.gray}>
          Розничные цены
        </StyledText>
      </WrapperPriceOptions>
    </Wrapper>
  );
};
