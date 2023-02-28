import { ActiveItemsType } from "../../types/types";

export type addActiveProductItemsType = ReturnType<
  typeof addActiveProductItems
>;

export const addActiveProductItems = (data: ActiveItemsType) => {
  return {
    type: "ADD_ACTIVE_PRODUCT_ITEMS",
    payload: data,
  } as const;
};
