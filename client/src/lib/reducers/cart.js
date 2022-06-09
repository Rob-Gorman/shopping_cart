const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_INITIALIZED": {
      return action.payload;
    }
    case "ADDED_TO_CART": {
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
    }
    case "CART_CHECKED_OUT": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default cart;