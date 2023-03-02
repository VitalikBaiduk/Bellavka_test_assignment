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
import { ResourceButtons } from "../../../../common/commonButtons/resourceButtons/ResourceButtons";
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

  const { gray, black, gold } = theme;

  return (
    <Wrapper>
      <WrapperInner>
        <WrapperBuyInfo>
          <StyledText color={gray}>купили 43 раза</StyledText>
          <StyledText margin="0 10px" color={gray}>
            |
          </StyledText>
          <CartInfoWrapper>
            <Cart />
            <StyledText margin="0 0 0 4px" color={gray}>
              в корзине у 15 пользователей
            </StyledText>
          </CartInfoWrapper>
        </WrapperBuyInfo>
        <WrapperPriceOptions>
          <StyledText color={toggle ? gray : black}>Оптовые цены</StyledText>
          <Switch>
            <Input color={gold} type="checkbox" defaultChecked={toggle} />
            <Slider
              toggle={toggle}
              color={gold}
              onClick={() => setToggle(!toggle)}
            />
          </Switch>
          <StyledText color={toggle ? black : gray}>Розничные цены</StyledText>
        </WrapperPriceOptions>
      </WrapperInner>
      <WrapperReviews>
        {buttonsDataArr.map((item, index: number) => {
          return <ResourceButtons key={index} type={item.type} />;
        })}
      </WrapperReviews>
    </Wrapper>
  );
};
