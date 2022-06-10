import { useDispatch } from "react-redux"
import { removeProduct, addToCart } from "../features/products/products";

const Product = ({details, onToggleEdit, edit }) => {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeProduct(details._id));
  }

  const handleAddToCart = async() => {
    dispatch(addToCart(details._id))
  }

  const addBtnClass = "button add-to-cart"
  console.log(details._id)
  return (
      <div className="product-details">
        <h3>{details.title}</h3>
        <p className="price">{details.price}</p>
        <p className="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div className="actions product-actions">
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"} onClick={handleAddToCart}>Add to Cart</a>
            <a className="button edit" onClick={() => onToggleEdit(!edit)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button" onClick={() => handleRemove(details._id)}><span>X</span></a>
      </div>
  )
}

export default Product