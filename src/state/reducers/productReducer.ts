import { ActiveItemsType, ProductType } from "../../types/types";
import { addActiveProductItemsType } from "../actions/addActiveProductItems";
import { addDataType } from "../actions/addData";

const initialState = {
  product: {} as ProductType,
  activeItems: {
    id: 0,
    items: { activeSize: [], activeHeigth: null },
  } as ActiveItemsType,
};

type ActionType = addDataType | addActiveProductItemsType;

export const ProductReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, product: { ...action.payload } };
    case "ADD_ACTIVE_PRODUCT_ITEMS":
      return { ...state, activeItems: { ...action.payload } };
    default:
      return state;
  }
};
