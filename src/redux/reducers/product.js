import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      console.log("state",action);
      state = action.payload
    },
  },
});

export const { getProducts } = productReducer.actions;
export default productReducer.reducer;

export const fetchData =  () => {
    return async function(dispatch, getState) {
        // axios
        //     .get("https://fakestoreapi.com/products")
        //     .then((res) => {
        //        dispatch(getProducts(res))
        //     })
        //     .catch((err) => {
        //         console.log("err", err);
        //     });
      try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(getProducts(data));
        } catch (err) {
            console.log(err);
        }
    }
};
