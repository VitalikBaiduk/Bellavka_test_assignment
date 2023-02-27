import { ProductType } from "../../types/types";

export type addDataType = ReturnType<typeof addData>;

export const addData = (data: ProductType) => {
  return {
    type: "ADD_DATA",
    payload: data,
  } as const;
};
