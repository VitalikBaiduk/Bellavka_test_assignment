import { StyledText } from "../../../../../styles/globalStyles";
import { ReactComponent as HideDataIcon } from "../../../../../assets/circle-double-down.svg";
import { theme } from "../../../../../styles/theme";
import { AboutTheProductType } from "../../../../../types/types";
import { useState } from "react";
import { TitleBlock, Wrapper } from "./styles";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import { MoreInfoButton } from "../../../../moreInfoButton/MoreInfoButton";

type AboutTheProductProps = {
  data: AboutTheProductType;
};

export const AboutTheProduct = ({ data }: AboutTheProductProps) => {
  const {
    countryofOrigin,
    equipment,
    season,
    collection,
    style,
    material,
    composition,
    height,
    description,
  } = data;

  const [isShowInfo, setIsShowInfo] = useState(true);
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;

  const { gray } = theme;

  const productdata = [
    {
      label: "Страна производитель: ",
      value: countryofOrigin.length ? countryofOrigin : "Республика Беларусь",
    },
    {
      label: "Комплектация: ",
      value: equipment[0].length ? equipment.join() : "платье",
    },
    {
      label: "Сезон: ",
      value: season[0].length ? season.join() : "демисезон",
    },
    {
      label: "Коллекция: ",
      value: collection[0].length ? collection.join() : "весна, весна2022",
    },
    {
      label: "Стиль: ",
      value: style[0].length ? style.join() : "на каждый день",
    },
    {
      label: "Материал: ",
      value: material[0].length ? material.join() : "текстиль",
    },
    {
      label: "Состав: ",
      value: composition.length ? composition : "полиэстер 95%, спандекс 5%",
    },
    {
      label: "Рост: ",
      value: height[0].length ? height.join() + " см" : "164 см",
    },
    {
      label: "Описание: ",
      value: description.length
        ? description
        : "Платье женское нарядно-повседневное на подкладке полуприлегающего силуэта, расширенное к низу. Выполнено из цветного креп-шифона (не тянется). Подкладка из креп-шифона (не тянется). Вырез горловины «лодочкой» на обтачке, рукав втачной, по низу собран на узкую резинку, по талии через шлевки протянут пояс из ткани. Длина платья – 113 см. Длина рукава – 48 см. Ширина рукава в пройме – 38 см. 50р – ОГ 106, ОТ 104, ОБ 144 52р – ОГ 110, ОТ 108, ОБ 148 54р – ОГ 114, ОТ 112, ОБ 152",
    },
  ];

  return (
    <Wrapper isShowInfo={isShowInfo}>
      <TitleBlock onClick={() => setIsShowInfo(!isShowInfo)}>
        <StyledText margin="0 5px 0 0">О товаре</StyledText>
        {phone ? (
          <MoreInfoButton isShowMoreInfo={isShowInfo} onClick={setIsShowInfo} />
        ) : (
          <HideDataIcon />
        )}
      </TitleBlock>
      {productdata.map(
        (item: { label: string; value: string }, index: number) => {
          return (
            <StyledText key={index} margin="8px 0 0" color={gray}>
              {item.label}
              <StyledText lineHeight="150%">{item.value}</StyledText>
            </StyledText>
          );
        }
      )}
    </Wrapper>
  );
};
