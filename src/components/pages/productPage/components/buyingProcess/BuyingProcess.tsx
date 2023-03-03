import { theme } from "../../../../../styles/theme";
import { ProductCommonType, ProductSizeType } from "../../../../../types/types";
import { CommonButton } from "../../../../common/commonButtons/commonButton/CommonButton";
import { SizeInfo } from "../sizeInfo/SizeInfo";
import { ReactComponent as Cart } from "../../../../../assets/blackCart.svg";
import { ReactComponent as Hand } from "../../../../../assets/hand.svg";
import { ButtonsWrapper, Wrapper } from "./styles";
import { ReduxState, useTypedSelector } from "../../../../../state/store";

type BuyingProcessProps = {
  id: number;
  sizeData: Array<ProductSizeType[] | ProductCommonType[]>;
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BuyingProcess = ({
  id,
  sizeData,
  setIsActiveModal,
}: BuyingProcessProps) => {
  const { activeItems } = useTypedSelector(
    (state: ReduxState) => state.product
  );

  const { gold2 } = theme;

  const onClick = () => {
    activeItems.items.activeHeigth === null
      ? setIsActiveModal(true)
      : activeItems.items.activeSize.length === 0
      ? setIsActiveModal(true)
      : setIsActiveModal(false);
  };

  return (
    <Wrapper>
      <SizeInfo id={id} sizeData={sizeData} />
      <ButtonsWrapper>
        <CommonButton
          onClick={onClick}
          backgroundColor={gold2}
          Icon={Cart}
          text={"в корзину"}
        ></CommonButton>
        <CommonButton
          onClick={onClick}
          Icon={Hand}
          text={"купить в 1 клик"}
        ></CommonButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
