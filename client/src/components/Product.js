import ProductEditForm from "./ProductEditForm"
import { useState } from "react"

const Product = ({details, handleRemove, handleEdit}) => {
  const [edit, setEdit] = useState(false)
  function handleClose(e) {
    setEdit(false)
  }

  const addBtnClass = "button add-to-cart"
  return (
    <div className="product">
      <div className="product-details">
        <h3>{details.title}</h3>
        <p className="price">{details.price}</p>
        <p className="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div className="actions product-actions">
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"}>Add to Cart</a>
            <a className="button edit" onClick={() => setEdit(true)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button" onClick={() => handleRemove(details._id)}><span>X</span></a>
      </div>
      {edit ? <ProductEditForm details={details} onClose={handleClose} onEdit={handleEdit}/> : null}
    </div>
  )
}

export default Product