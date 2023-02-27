import { ProductType } from "../../types/types";
import { addDataType } from "../actions/addData";

const initialState = {
  product: {} as ProductType,
};

export const ProductReducer = (state = initialState, action: addDataType) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, product: { ...action.payload } };
    default:
      return state;
  }
};
