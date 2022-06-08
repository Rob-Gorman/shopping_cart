import React from "react";
import Header from "./Header"
import ShopBody from "./ShopBody"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => { 
    let fetchData = async () => {
      let {data} = await axios.get("/api/products")
      setData(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    let response = await axios.get("/api/cart")
    setCart(response.data)
  }

  const addProduct = async (formFields, callback) => {
    let response = await axios.post('/api/products', {...formFields})
    setData([...data, response.data])
    if (callback) callback();
  }

  // router.put("/products/:id", (req, res) => {
  //   const productId = req.params.id;
  //   const { title, price, quantity } = req.body;
  const editProduct = async (formFields, id) => {
    // send put
    let response = await axios.put(`/api/products/${id}`, {...formFields})
    let editedProduct = response.data
    // map state to updated object
    setData(data.map(product => {
      return (product._id === id ? editedProduct : product)
    }))
  }

  const removeProduct = async (id) => {
    // delete request
    await axios.delete(`/api/products/${id}`)
    // filter state to remove deleted product
    setData(data.filter(product => {
      return product._id !== id
    }))
  }

  const addToCart = async(id) => {
    console.log(id)
    await axios.post(`/api/add-to-cart`, {productId: id})
    await fetchCart()
    // let productAdded = data.map(({_id}) => _id === id)
    setData(data.map(product => {
      if (product._id === id) return {...product, quantity: product.quantity-1}
      else return product
    }))
  }

  const checkout = async() => {
    await axios.post(`/api/checkout`)
    setCart([])
  }

  return (
    <div id="app">
      <Header cart={cart} onCheckout={checkout}/>
      <ShopBody data={data} onAdd={addProduct} onRemove={removeProduct} onEdit={editProduct} onCartAdd={addToCart} />
    </div>
  );
};

export default App;
