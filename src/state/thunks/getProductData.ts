import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../../consts";
import { ProductCommonType } from "../../types/types";
import { addData } from "../actions/addData";

export const getProductData = () => async (dispatch: Dispatch) => {
  const url = `${API_URL}/products/94756956?include=category,colors,fabrics,heights,kits,sizes,photos,videos,otherColors,recommended`;
  try {
    const { data } = await axios.get(url, {
      data: {},
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const aboutTheProductData = {
      countryofOrigin: "Республика Беларусь",
      equipment: data.data.kits
        ? data.data.kits.map((el: ProductCommonType) => {
            return el.value;
          })
        : [""],
      season: [""],
      collection: [""],
      style: [""],
      material: data.data.fabrics
        ? data.data.fabrics.map((el: ProductCommonType) => {
            return el.value;
          })
        : [""],
      composition: data.data.fabricText ? data.data.fabricText : "",
      height: data.data.heights
        ? data.data.heights.map((el: ProductCommonType) => {
            return el.value;
          })
        : [""],
      description: data.data.description ? data.data.description : "",
    };

    const shipmentData = {
      fittingPrice: "499",
      courierPrice: "399",
      postPrice: "299",
      symbol: "₽",
    };

    const newData = {
      ...data,
      data: { ...data.data, aboutTheProductData, shipmentData },
    };

    dispatch(addData(newData));
  } catch (e) {
    // if (e instanceof AxiosError) {
    //   const { error } = e.response
    //     ? e.response.data
    //     : { error: "Something went wrong" };
    //   setError({ message: error, globalError: true });
    // }
  }
};
