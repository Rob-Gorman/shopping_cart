export const productsInitialized = (products) => {
  return { type: "PRODUCTS_INITIALIZED", payload: products }
}

export const productAdded = (product) => {
  return { type: "NEW_PRODUCT_ADDED", payload: product };
};

export const productDeleted = (id) => {
  return { type: "PRODUCT_DELETED", payload: { id }}
}

export const productEdited = (product) => {
  return { type: "PRODUCT_EDITED", payload: product };
}

export const addedToCart = (product) => {
  return { type: "ADDED_TO_CART", payload: product }
}