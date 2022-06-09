const product = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_INITIALIZED": {
      return action.payload;
    }
    case "NEW_PRODUCT_ADDED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_DELETED": {
      return state.filter(product => {
        return product._id !== action.payload.id;
      })
    }
    case "PRODUCT_EDITED": {
      return state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        }
        return product;
      })
    }
    case "ADDED_TO_CART": {
      return state.map(product => {
        if (product._id === action.payload.product._id) {
          return action.payload.product
        }
        return product;
      })
    }
    default:
      return state;
  }
}

export default product;