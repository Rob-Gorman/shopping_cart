import product from "./product";
import cart from "./cart";

const rootReducer = (state = {}, action) => {
  return {
    products: product(state.products, action),
    cart: cart(state.cart, action)
  }
}

export default rootReducer;