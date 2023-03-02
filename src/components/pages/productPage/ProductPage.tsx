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
  GlobalWrapperInner,
  RecommendationsWrapper,
  MobileWrapper,
} from "./styles";
import { Modal } from "../../modal/Modal";
import { ModalType, SizeType } from "../../../enums/enums";
import { BuyingProcess } from "./components/buyingProcess/BuyingProcess";
import { Shipment } from "./components/shipment/Shipment";
import { OtherColors } from "./components/otherColors/OtherColors";
import { AboutTheProduct } from "./components/aboutTheProduct/AboutTheProduct";
import { LinksToBrand } from "./components/linksToBrand/LinksToBrand";
import { ReactComponent as BrandLogo } from "../../../assets/brandLogo.svg";
import { Recommendations } from "./components/recommendations/Recommendations";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { ProductPhotosForMobile } from "./components/productImages/mobile/ProductPhotosForMobile";
import { BrandInfo } from "./components/brandInfo/BrandInfo";

export const ProductPage = () => {
  const windowWidth = useWindowSize()[0];
  const phone = windowWidth <= 1050;
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
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
    availabilityStatus,
    recommended,
  } = data ? data : ({} as ProductDataType);

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

  useEffect(() => {
    dispatch(getProductData(setError));
  }, []);

  return (
    <>
      {error.length && alert(error)}
      {isActiveModal && (
        <Modal
          id={id}
          setIsActiveModal={setIsActiveModal}
          modalInfo={modalInfo}
        />
      )}
      {data ? (
        <ExtraWrapper>
          {!phone && (
            <HeaderBlock>
              <BackButton />
              <Title>
                {fullName + " " + colors[0].value + ", " + category.value}
              </Title>
            </HeaderBlock>
          )}
          <GlobalWrapper>
            <GlobalWrapperInner>
              {!phone ? (
                <>
                  <ProductPhoto
                    photos={photos}
                    videos={videos}
                    alt={fullName}
                    promocode={promocode.name}
                  />
                  <RecommendationsWrapper>
                    <LinksToBrand
                      deliveryAvailability={availabilityStatus}
                      Logo={BrandLogo}
                      linksToBrand={""}
                      linksToAll={""}
                    />
                    <Recommendations recommendations={recommended} />
                  </RecommendationsWrapper>
                </>
              ) : (
                <>
                  <ProductPhotosForMobile
                    photos={photos}
                    videos={videos}
                    alt={fullName}
                    promocode={promocode.name}
                  />
                  <MobileWrapper>
                    <ExtraInfo toggle={toggle} setToggle={setToggle} />
                    <BrandInfo
                      fullName={fullName}
                      color={colors[0].value}
                      category={category.value}
                      Logo={BrandLogo}
                    ></BrandInfo>
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
                    <AboutTheProduct data={aboutTheProductData} />
                    <Recommendations recommendations={recommended} />
                  </MobileWrapper>
                </>
              )}
            </GlobalWrapperInner>
            {!phone && (
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
                <OtherColors data={[photos[0].original]} />
                <AboutTheProduct data={aboutTheProductData} />
              </MainInfoWrapper>
            )}
          </GlobalWrapper>
        </ExtraWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};
