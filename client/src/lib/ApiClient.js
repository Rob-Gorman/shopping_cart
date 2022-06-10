import axios from 'axios';

const apiClient = {
  getProducts: async () => {
    let {data} = await axios.get("/api/products")
    return data;
  },
  addProduct: async (formFields) => {
    let { data } = await axios.post('/api/products', {...formFields})
    return data;
  },
  editProduct: async (formFields, id) => {
    let { data } = await axios.put(`/api/products/${id}`, {...formFields})
    console.log(`api client`, data)
    return data;
  },
  removeProduct: async (id) => {
    await axios.delete(`/api/products/${id}`)
  },
  addToCart: async (id) => {
    const { data } = await axios.post(`/api/add-to-cart`, {productId: id})
    console.log(data)
    return data;
  },
  getCart: async () => {
    let {data} = await axios.get("/api/cart")
    return data
  },
  checkout: async() => {
    await axios.post(`/api/checkout`);
  }
}

export default apiClient;