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

  const priceHandler = (type: PriceType) => {
    const priceResult = {
      [PriceType.CURRENT]: toggle
        ? prices.retail + prices.symbol
        : prices.wholesale + prices.symbol,
      [PriceType.OLD]: toggle
        ? prices.retailOld + prices.symbol
        : prices.wholesaleOld + prices.symbol,
      [PriceType.SECOND_OPTION_OF_PRICE]: toggle
        ? "Оптовая цена: " + prices.wholesale + prices.symbol
        : "Розничная цена: " + prices.retail + prices.symbol,
    };

    return priceResult[type];
  };

  return (
    <>
      <PriceBlock>
        <PriceBlockHeader color={theme.black}>
          <StyledText color={phone ? theme.black : theme.white}>
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
              <StyledText fontSize="45px" fontWeight="600" color={theme.gold}>
                {priceHandler(PriceType.CURRENT)}
              </StyledText>
              <OldPrice margin="0 0 0 10px" fontWeight="400" color={theme.gray}>
                {priceHandler(PriceType.OLD)}
              </OldPrice>
            </CurrentPriceBlock>
            <DiscountsDescriptionBlock>
              <StyledText fontSize="14px" fontWeight="400" color={theme.red}>
                {"-" + prices.discount.market.amount + prices.symbol + " "}
                <StyledText fontSize="14px" fontWeight="400" color={theme.gray}>
                  скидка бренда {prices.discount.market.percent + "%"}
                </StyledText>
              </StyledText>
              <StyledText
                margin="5px 0 0 "
                fontSize="14px"
                fontWeight="400"
                color={theme.red}
              >
                {"-" + prices.discount.promocode.amount + prices.symbol + " "}
                <StyledText fontSize="14px" fontWeight="400" color={theme.gray}>
                  {name} {prices.discount.promocode.percent + "%"}
                </StyledText>
              </StyledText>
            </DiscountsDescriptionBlock>
          </Prices>
          {isShowMoreInfo && (
            <PromocodeBlock backgroundColor={theme.gold1}>
              <PromocodeDescr>
                <MainPromocodeDescr>
                  <StyledText textTransform fontWeight="600">
                    промокод {name}
                  </StyledText>
                  <StyledText fontWeight="400">
                    {promocode.description}
                  </StyledText>
                </MainPromocodeDescr>

                <EndPromoBlock>
                  <ClockIcon />
                  <StyledText margin="0 0 0 5px">
                    {moment(promocode.endedAt).format("M : d : hh : mm")}
                  </StyledText>
                </EndPromoBlock>
              </PromocodeDescr>
              <CustomBorder />
              <PromocodePercent>
                <StyledText fontSize="60px" fontWeight="800">
                  {"-" + prices.discount.promocode.percent + "%"}
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
