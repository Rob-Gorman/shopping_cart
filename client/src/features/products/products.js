import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/ApiClient";

const initialState = [];

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (arg) => {
    const data = await apiClient.addProduct(arg.formFields);
    if (arg.callback) arg.callback();
    return data;
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await apiClient.getProducts();
    return data;
  }
)

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await apiClient.removeProduct(id);
    return id;
  }
)

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (arg) => {
    let { formFields, id, callback } = arg;
    const data = await apiClient.editProduct(formFields, id);
    if (callback) callback();
    return data;
  }
)

export const addToCart = createAsyncThunk(
  "products/addToCart",
  async (id) => {
    const data = await apiClient.addToCart(id);
    return data;
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      return state.filter(product => {
        return product._id !== action.payload
      })
    })
    builder.addCase(editProduct.fulfilled, (state, action) => {
      return state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      })
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return state.map(product => {
        if (product._id === action.payload.product._id) {
          return action.payload.product;
        }
        return product;
      })
    })
  }
});

export default productSlice.reducer;