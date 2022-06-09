export const cartInitialized = (items) => {
  return { type: "CART_INITIALIZED", payload: items }
}

export const cartCheckedOut = () => {
  return { type: "CART_CHECKED_OUT"}
}