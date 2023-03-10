import { StyledText } from "../../../../../styles/globalStyles";
import { theme } from "../../../../../styles/theme";
import { ProductCommonType, ProductSizeType } from "../../../../../types/types";
import { SizeType } from "../../../../../enums/enums";
import { SizesComponent } from "./components/SizesComponent";
import { SizeBlock, SizeBlockHeader } from "./styles";

type SizeInfoProps = {
  id: number;
  sizeData: Array<ProductSizeType[] | ProductCommonType[]>;
};

export const SizeInfo = ({ sizeData, id }: SizeInfoProps) => {
  const [sizes, heights] = sizeData;
  const { gold } = theme;

  return (
    <SizeBlock>
      <SizeBlockHeader>
        <StyledText>Размеры:</StyledText>
        <StyledText cursor="pointer" border borderColor={gold} color={gold}>
          Таблица размеров
        </StyledText>
      </SizeBlockHeader>
      {sizeData.map((el, index) => {
        const title = index === 0 ? "" : "Рост:";
        const sizeData = index === 0 ? sizes : heights;
        const type = index === 0 ? SizeType.SIZE : SizeType.HEIGTH;
        return (
          <SizesComponent
            type={type}
            key={index}
            title={title}
            sizeData={sizeData}
            id={id}
            isInModal={false}
          />
        );
      })}
      <StyledText>Срок прошива: 14 дней</StyledText>
    </SizeBlock>
  );
};
