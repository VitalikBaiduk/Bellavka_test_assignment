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
import { ModalInfoType } from "../../types/types";

type ModalProps = {
  id: number;
  setIsActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalInfo: ModalInfoType;
};

export const Modal = ({ id, setIsActiveModal, modalInfo }: ModalProps) => {
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
  const { modalType, contentType, contentTitle, modalTitle } = modalInfo;

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

  const sizeData =
    contentType === SizeType.HEIGTH ? product.data.heights : product.data.sizes;

  return (
    <Wrapper>
      <ModalItem>
        {product.data && (
          <>
            <StyledText fontWeight="600" fontSize="34px" textTransform>
              {modalTitle}
            </StyledText>
            {modalType === ModalType.SIZES && (
              <SizesComponent
                type={contentType}
                title={contentTitle}
                sizeData={sizeData}
                id={id}
                isInModal={true}
                setActiveSizeItemsForModal={setActiveSizeItems}
              />
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
