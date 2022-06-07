import React from "react";
import Header from "./Header"
import ShopBody from "./ShopBody"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => { 
    let fetchData = async () => {
      let {data} = await axios.get("/api/products")
      setData(data)
    }
    fetchData()
  }, [])

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

  return (
    <div id="app">
      <Header />
      <ShopBody data={data} handleAdd={addProduct} handleRemove={removeProduct} handleEdit={editProduct} />
    </div>
  );
};

export default App;
