import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../products/products";
import apiClient from "../../lib/ApiClient";

const initialState = [];

export const getCart = createAsyncThunk(
  "cart/getCart",
  async () => {
    const data = await apiClient.getCart();
    return data;
  }
)

export const checkout = createAsyncThunk(
  "cart/checkout",
  async () => {
    await apiClient.checkout();
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      return action.payload;
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      let id = action.payload.item._id;
      const itemExists = state.find(item => {
        return (id === item._id);
      })
      if (itemExists) {
        return state.map(item => {
          if (item._id === id) {
            return action.payload.item;
          }
          return item;
        })
      } else {
        return state.concat(action.payload.item);
      }
    })
    builder.addCase(checkout.fulfilled, (state, action) => {
      return [];
    })
  },
});

export default cartSlice.reducer;