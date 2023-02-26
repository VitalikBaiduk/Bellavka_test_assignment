import { useEffect } from "react";
import { useTypedDispatch } from "../../../state/store";
import { getProductData } from "../../../state/thunks/getProductData";

export const ProductPage = () => {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  return <></>;
};
