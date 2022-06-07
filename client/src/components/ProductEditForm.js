import { useState } from 'react';
const ProductEditForm = ({details, btnHandler, handleEdit}) => {
  const [title, setTitle] = useState(details.title || "")
  const [price, setPrice] = useState(details.price || "")
  const [quantity, setQuantity] = useState(details.quantity || "")

  const handleUpdate = (e) => {
    handleEdit({title, price, quantity}, details._id)
    btnHandler()
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
          <a className="button" onClick={btnHandler}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ProductEditForm