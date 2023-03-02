import { theme } from "../../../../../styles/theme";
import { ProductCommonType, ProductSizeType } from "../../../../../types/types";
import { CommonButton } from "../../../../commonButtons/commonButton/CommonButton";
import { SizeInfo } from "../sizeInfo/SizeInfo";
import { ReactComponent as Cart } from "../../../../../assets/blackCart.svg";
import { ReactComponent as Hand } from "../../../../../assets/hand.svg";
import { ButtonsWrapper, Wrapper } from "./styles";
import { ReduxState, useTypedSelector } from "../../../../../state/store";
import { useWindowSize } from "../../../../../hooks/useWindowSize";

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
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;
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
          margin={phone ? "0 0 15px 0" : "0 0 0 20px"}
        ></CommonButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
