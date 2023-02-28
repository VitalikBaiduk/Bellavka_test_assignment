import { useEffect, useState } from "react";
import {
  ReduxState,
  useTypedDispatch,
  useTypedSelector,
} from "../../../state/store";
import { getProductData } from "../../../state/thunks/getProductData";
import { BackButton } from "../../commonButtons/backButton/BackButton";
import { Loader } from "../../loader/Loader";
import { ProductPhoto } from "./components/productImages/ProductPhotos";
import { ExtraInfo } from "./components/extraInfo/ExtraInfo";
import { PriceInfo } from "./components/priceInfo/PriceInfo";
import { ProductDataType } from "../../../types/types";
import {
  ExtraWrapper,
  GlobalWrapper,
  HeaderBlock,
  Title,
  MainInfoWrapper,
} from "../styles";
import { Modal } from "../../modal/Modal";
import { ModalType, SizeType } from "../../../enums/enums";
import { BuyingProcess } from "./components/buyingProcess/BuyingProcess";

export const ProductPage = () => {
  const [toggle, setToggle] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const dispatch = useTypedDispatch();
  const { product, activeItems } = useTypedSelector(
    (state: ReduxState) => state.product
  );
  const { data } = product;
  const {
    fullName,
    colors,
    category,
    photos,
    videos,
    promocode,
    price,
    heights,
    sizes,
    id,
  } = data ? data : ({} as ProductDataType);

  const modalType = () => {
    if (activeItems.items.activeHeigth === null) {
      return ModalType.HEIGTH;
    } else if (activeItems.items.activeSize.length === 0) {
      return ModalType.SIZES;
    } else {
      return;
    }
  };

  const sizeType = () => {
    if (activeItems.items.activeHeigth === null) {
      return SizeType.HEIGTH;
    } else if (activeItems.items.activeSize.length === 0) {
      return SizeType.SIZE;
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <>
      {isActiveModal && (
        <Modal
          sizeTitle={
            modalType() && modalType() === ModalType.HEIGTH
              ? "Какой у вас рост?"
              : "Какой у вас размер?"
          }
          id={id}
          type={modalType()}
          title={
            modalType() && modalType() === ModalType.HEIGTH
              ? "выберите рост"
              : "выберите размер"
          }
          sizeType={sizeType()}
          setIsActiveModal={setIsActiveModal}
        />
      )}
      {data ? (
        <ExtraWrapper>
          <HeaderBlock>
            <BackButton />
            <Title>
              {fullName + " " + colors[0].value + ", " + category.value}
            </Title>
          </HeaderBlock>
          <GlobalWrapper>
            <ProductPhoto
              photos={photos}
              videos={videos}
              alt={fullName}
              promocode={promocode.name}
            />
            <MainInfoWrapper>
              <ExtraInfo toggle={toggle} setToggle={setToggle} />
              <PriceInfo
                promocode={promocode}
                name={promocode.name}
                prices={price}
                toggle={toggle}
              />
              <BuyingProcess
                setIsActiveModal={setIsActiveModal}
                id={id}
                sizeData={[sizes, heights]}
              />
            </MainInfoWrapper>
          </GlobalWrapper>
        </ExtraWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};
