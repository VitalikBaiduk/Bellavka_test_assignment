import { addActiveProductItems } from "../../../../../state/actions/addActiveProductItems";
import {
  ReduxState,
  useTypedDispatch,
  useTypedSelector,
} from "../../../../../state/store";
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
  const dispatch = useTypedDispatch();
  const { activeItems, product } = useTypedSelector(
    (state: ReduxState) => state.product
  );
  const { data } = product;

  const [sizes, heights] = sizeData;

  return (
    <SizeBlock>
      <SizeBlockHeader>
        <StyledText>Размеры:</StyledText>
        <StyledText
          cursor="pointer"
          border
          borderColor={theme.gold}
          color={theme.gold}
        >
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
