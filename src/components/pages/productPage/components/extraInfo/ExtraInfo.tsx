import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ReactComponent as Cart } from "../../../../../assets/cartIcon.svg";
import {
  CartInfoWrapper,
  Input,
  WrapperInner,
  Slider,
  Switch,
  Wrapper,
  WrapperBuyInfo,
  WrapperPriceOptions,
  WrapperReviews,
} from "./styles";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { ResourceButtons } from "../../../../commonButtons/resourceButtons/ResourceButtons";
import { ResourceButtonType } from "../../../../../enums/enums";

type ExtraInfoProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExtraInfo = ({ toggle, setToggle }: ExtraInfoProps) => {
  const buttonsDataArr = [
    { type: ResourceButtonType.REVIEWS },
    { type: ResourceButtonType.FEEDBACK },
    { type: ResourceButtonType.QUESTIONS },
  ];

  return (
    <Wrapper>
      <WrapperInner>
        <WrapperBuyInfo>
          <StyledText color={theme.gray}>купили 43 раза</StyledText>
          <StyledText margin="0 10px" color={theme.gray}>
            |
          </StyledText>
          <CartInfoWrapper>
            <Cart />
            <StyledText margin="0 0 0 4px" color={theme.gray}>
              в корзине у 15 пользователей
            </StyledText>
          </CartInfoWrapper>
        </WrapperBuyInfo>
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
      </WrapperInner>
      <WrapperReviews>
        {buttonsDataArr.map((item) => {
          return <ResourceButtons type={item.type} />;
        })}
      </WrapperReviews>
    </Wrapper>
  );
};
