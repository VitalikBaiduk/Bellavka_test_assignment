import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../../consts";
import { addData } from "../actions/addData";

export const getProductData = () => async (dispatch: Dispatch) => {
  const url = `${API_URL}/products/94756956?include=category`;
  try {
    const { data } = await axios.get(url, {
      data: {},
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    dispatch(addData(data));
    // console.log(data);
  } catch (e) {
    // if (e instanceof AxiosError) {
    //   const { error } = e.response
    //     ? e.response.data
    //     : { error: "Something went wrong" };
    //   setError({ message: error, globalError: true });
    // }
  }
};
