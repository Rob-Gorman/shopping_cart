import product from "./product";
import cart from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ products: product, cart })
// const rootReducer = (state = {}, action) => {
//   return {
//     products: product(state.products, action),
//     cart: cart(state.cart, action)
//   }
// }
export default rootReducer