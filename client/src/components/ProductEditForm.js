import { useDispatch } from 'react-redux';
import { productEdited } from '../actions/productActions';
import axios from 'axios';

import { useState } from 'react';
const ProductEditForm = ({ details, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(details.title || "")
  const [price, setPrice] = useState(details.price || "")
  const [quantity, setQuantity] = useState(details.quantity || "")

  const editProduct = async (formFields, id) => {
    // send put
    let response = await axios.put(`/api/products/${id}`, {...formFields})
    let editedProduct = response.data
    dispatch(productEdited(editedProduct))
  }

  const handleUpdate = (e) => {
    editProduct({title, price, quantity}, details._id)
    onClose()
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleUpdate}>Update</a>
          <a className="button" onClick={onClose}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ProductEditForm