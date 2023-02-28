import {
  ReduxState,
  useTypedDispatch,
  useTypedSelector,
} from "../../state/store";
import { StyledText } from "../../styles/globalStyles";
import { theme } from "../../styles/theme";
import { ModalType, SizeType } from "../../enums/enums";
import { SizesComponent } from "../pages/productPage/components/sizeInfo/components/SizesComponent";
import { ModalItem, SaveButton, Wrapper } from "./styles";
import { useState } from "react";
import { addActiveProductItems } from "../../state/actions/addActiveProductItems";

type ModalProps = {
  id: number;
  type: ModalType | undefined;
  title: string;
  sizeTitle?: string;
  sizeType?: SizeType;
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({
  type,
  title,
  sizeTitle,
  sizeType,
  id,
  setIsActiveModal,
}: ModalProps) => {
  const { product, activeItems } = useTypedSelector(
    (state: ReduxState) => state.product
  );
  const [activeSizeItems, setActiveSizeItems] = useState<
    Array<number | null | number[]>
  >([]);
  const dispatch = useTypedDispatch();

  const [localHeigth, localSizes] = activeSizeItems;
  const modalSizes = localSizes as number[];
  const modalHeigth = localHeigth as number | null;

  const sendData = () => {
    if (modalSizes.length !== 0) {
      dispatch(
        addActiveProductItems({
          id: id,
          items: {
            activeSize: modalSizes,
            activeHeigth: activeItems.items.activeHeigth,
          },
        })
      );
      setIsActiveModal(false);
    } else if (modalHeigth !== null) {
      dispatch(
        addActiveProductItems({
          id: id,
          items: {
            activeSize: activeItems.items.activeSize,
            activeHeigth: modalHeigth,
          },
        })
      );
      setIsActiveModal(false);
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      <ModalItem>
        {product.data && (
          <>
            <StyledText fontWeight="600" fontSize="34px" textTransform>
              {title}
            </StyledText>
            {sizeType && (
              <>
                {type === ModalType.SIZES && sizeType === SizeType.SIZE && (
                  <SizesComponent
                    type={SizeType.SIZE}
                    title={sizeTitle}
                    sizeData={product.data.sizes}
                    id={id}
                    isInModal={true}
                    setActiveSizeItemsForModal={setActiveSizeItems}
                  />
                )}
                {type === ModalType.HEIGTH && sizeType === SizeType.HEIGTH && (
                  <SizesComponent
                    type={SizeType.HEIGTH}
                    title={sizeTitle}
                    sizeData={product.data.heights}
                    id={id}
                    isInModal={true}
                    setActiveSizeItemsForModal={setActiveSizeItems}
                  />
                )}
              </>
            )}
          </>
        )}
        <SaveButton>
          <StyledText onClick={sendData} color={theme.white}>
            Сохранить
          </StyledText>
        </SaveButton>
      </ModalItem>
    </Wrapper>
  );
};
