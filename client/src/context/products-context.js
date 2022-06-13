import { createContext, useReducer } from "react";
import axios from "axios";


export const ProductContext = createContext()

const productReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    }
    case "PRODUCT_EDITED": {
      return state.map(product => {
        return (product._id === action.payload._id ? action.payload : product)
      })
    }
    case "PRODUCT_REMOVED": {
      return state.filter(product => {
        return product._id !== action.payload
      })
    }
    case "ADDED_TO_CART": {
      return state.map(product => {
        if (product._id === action.payload._id) return action.payload
        return product
      })
    }
    default: {
      return state
    }
  }
}

export const fetchProducts = async (dispatch) => {
  let {data} = await axios.get("/api/products")
  dispatch({type: "PRODUCTS_RECEIVED", payload: data})
}

export const addProduct = async (newProduct, dispatch, callback) => {
  let {data} = await axios.post('/api/products', {...newProduct})
  dispatch({type: "PRODUCT_ADDED", payload: data})
  if (callback) callback();
}

export const editProduct = async (formFields, id, dispatch, callback) => {
  let {data} = await axios.put(`/api/products/${id}`, {...formFields})
  dispatch({type: "PRODUCT_EDITED", payload: data})
  if (callback) callback()
}

export const removeProduct = async (id, dispatch) => {
  await axios.delete(`/api/products/${id}`)
  dispatch({type: "PRODUCT_REMOVED", payload: id})
}

export const addToCart = async (product, dispatch) => {
  dispatch({type: "ADDED_TO_CART", payload: product})
}

export const ProductProvider = ({children}) => {
  const [products, dispatch] = useReducer(productReducer, [])

  return (
    <ProductContext.Provider value={{products, dispatch}}>
      {children}
    </ProductContext.Provider>
  )
}