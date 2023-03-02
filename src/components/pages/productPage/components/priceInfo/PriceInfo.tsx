import { useState } from "react";
import moment from "moment";
import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import {
  ProductPriceType,
  ProductPromocodeType,
} from "../../../../../types/types";
import { PriceType } from "../../../../../enums/enums";
import { ReactComponent as AdditionalInfo } from "../../../../../assets/addIndoIcon.svg";
import { ReactComponent as CustomBorder } from "../../../../../assets/customBorderDashed.svg";
import { ReactComponent as ClockIcon } from "../../../../../assets/clockIcon.svg";
import {
  CurrentPriceBlock,
  DiscountsDescriptionBlock,
  EndPromoBlock,
  MainPromocodeDescr,
  OldPrice,
  PriceBlock,
  PriceBlockHeader,
  PriceBlockItem,
  Prices,
  PromocodeBlock,
  PromocodeDescr,
  PromocodePercent,
  SecondOptioOfPrice,
} from "./styles";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { MoreInfoButton } from "../../../../moreInfoButton/MoreInfoButton";

type PriceInfoProps = {
  promocode: ProductPromocodeType;
  name: string;
  prices: ProductPriceType;
  toggle: boolean;
};

export const PriceInfo = ({
  name,
  promocode,
  prices,
  toggle,
}: PriceInfoProps) => {
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(true);

  const { black, white, gold, gold1, gray, red } = theme;
  const { retail, symbol, wholesale, retailOld, wholesaleOld, discount } =
    prices;

  const { description, endedAt } = promocode;

  const priceHandler = (type: PriceType) => {
    const priceResult = {
      [PriceType.CURRENT]: toggle ? retail + symbol : wholesale + symbol,
      [PriceType.OLD]: toggle ? retailOld + symbol : wholesaleOld + symbol,
      [PriceType.SECOND_OPTION_OF_PRICE]: toggle
        ? "Оптовая цена: " + wholesale + symbol
        : "Розничная цена: " + retail + symbol,
    };

    return priceResult[type];
  };
  return (
    <>
      <PriceBlock>
        <PriceBlockHeader color={black}>
          <StyledText color={phone ? black : white}>
            {toggle ? "Розничная цена:" : "Оптовая цена:"}
          </StyledText>
          {phone && (
            <MoreInfoButton
              isShowMoreInfo={isShowMoreInfo}
              onClick={setIsShowMoreInfo}
            />
          )}
        </PriceBlockHeader>
        <PriceBlockItem>
          <Prices>
            <CurrentPriceBlock>
              <StyledText fontSize="45px" fontWeight="600" color={gold}>
                {priceHandler(PriceType.CURRENT)}
              </StyledText>
              <OldPrice margin="0 0 0 10px" fontWeight="400" color={gray}>
                {priceHandler(PriceType.OLD)}
              </OldPrice>
            </CurrentPriceBlock>
            <DiscountsDescriptionBlock>
              <StyledText fontSize="14px" fontWeight="400" color={red}>
                {"-" + discount.market.amount + symbol + " "}
                <StyledText fontSize="14px" fontWeight="400" color={gray}>
                  скидка бренда {discount.market.percent + "%"}
                </StyledText>
              </StyledText>
              <StyledText
                margin="5px 0 0 "
                fontSize="14px"
                fontWeight="400"
                color={red}
              >
                {"-" + discount.promocode.amount + symbol + " "}
                <StyledText fontSize="14px" fontWeight="400" color={gray}>
                  {name} {discount.promocode.percent + "%"}
                </StyledText>
              </StyledText>
            </DiscountsDescriptionBlock>
          </Prices>
          {isShowMoreInfo && (
            <PromocodeBlock backgroundColor={gold1}>
              <PromocodeDescr>
                <MainPromocodeDescr>
                  <StyledText textTransform fontWeight="600">
                    промокод {name}
                  </StyledText>
                  <StyledText fontWeight="400">{description}</StyledText>
                </MainPromocodeDescr>

                <EndPromoBlock>
                  <ClockIcon />
                  <StyledText margin="0 0 0 5px">
                    {moment(endedAt).format("M : d : hh : mm")}
                  </StyledText>
                </EndPromoBlock>
              </PromocodeDescr>
              <CustomBorder />
              <PromocodePercent>
                <StyledText fontSize="60px" fontWeight="800">
                  {"-" + discount.promocode.percent + "%"}
                </StyledText>
              </PromocodePercent>
            </PromocodeBlock>
          )}
        </PriceBlockItem>
      </PriceBlock>
      <SecondOptioOfPrice>
        <StyledText margin="0 10px 0 0">
          {priceHandler(PriceType.SECOND_OPTION_OF_PRICE)}
        </StyledText>
        <AdditionalInfo />
      </SecondOptioOfPrice>
    </>
  );
};
