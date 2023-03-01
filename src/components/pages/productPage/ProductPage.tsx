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
import { Shipment } from "./components/shipment/Shipment";
import { OtherColors } from "./components/otherColors/OtherColors";
import { AboutTheProduct } from "./components/aboutTheProduct/AboutTheProduct";

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
    aboutTheProductData,
    shipmentData,
  } = data ? data : ({} as ProductDataType);

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const modalInfo = {
    modalType: ModalType.SIZES,
    modalTitle:
      activeItems.items.activeSize.length === 0
        ? "выберите размер"
        : activeItems.items.activeHeigth === null
        ? "выберите рост"
        : "",
    contentTitle:
      activeItems.items.activeSize.length === 0
        ? "Какой у вас размер?"
        : activeItems.items.activeHeigth === null
        ? "Какой у вас рост?"
        : "",
    contentType:
      activeItems.items.activeSize.length === 0
        ? SizeType.SIZE
        : activeItems.items.activeHeigth === null
        ? SizeType.HEIGTH
        : ("" as SizeType),
  };

  return (
    <>
      {isActiveModal && (
        <Modal
          id={id}
          setIsActiveModal={setIsActiveModal}
          modalInfo={modalInfo}
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
              <Shipment city={"Москва"} data={shipmentData} />
              <OtherColors />
              <AboutTheProduct data={aboutTheProductData} />
            </MainInfoWrapper>
          </GlobalWrapper>
        </ExtraWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};
