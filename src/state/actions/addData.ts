export const addData = (data: any) => {
  return {
    type: "ADD_DATA",
    payload: data,
  } as const;
};
