import { useEffect } from "react";
import styled from "styled-components";
import {
  ReduxState,
  useTypedDispatch,
  useTypedSelector,
} from "../../../state/store";
import { getProductData } from "../../../state/thunks/getProductData";
import { StyledText } from "../../../styles/globalStyles";
import { BackButton } from "../../commonButtons/backButton/BackButton";
import { Loader } from "../../loader/Loader";
import { ProductPhotos } from "./components/productImages/ProductPhotos";

export const ExtraWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 30px 0;
`;

export const Title = styled(StyledText)`
  font-size: 35px;
  margin-left: 120px;
`;

export const ProductPage = () => {
  const dispatch = useTypedDispatch();
  const { product } = useTypedSelector((state: ReduxState) => state.product);
  const { data } = product;

  console.log(data);
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  return (
    <>
      {data ? (
        <ExtraWrapper>
          <BackButton />
          <Title>
            {data.fullName +
              " " +
              data.colors[0].value +
              ", " +
              data.category.value}
          </Title>
          <ProductPhotos
            photos={data.photos}
            videos={data.videos}
            alt={data.fullName}
            promocode={data.promocode.name}
          />
        </ExtraWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};
