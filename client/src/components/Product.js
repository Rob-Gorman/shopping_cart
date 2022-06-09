import { useDispatch } from "react-redux"
import { productDeleted, addedToCart } from "../actions/productActions";
import axios from "axios";

const Product = ({details, onToggleEdit, edit }) => {
  const dispatch = useDispatch();

  const removeProduct = async (id) => {
    // delete request
    await axios.delete(`/api/products/${id}`)
    // filter state to remove deleted product
    dispatch(productDeleted(id))
  }

  const addToCart = async(id) => {
    const { data } = await axios.post(`/api/add-to-cart`, {productId: id})
    console.log(data);
    // let productAdded = data.map(({_id}) => _id === id)
    dispatch(addedToCart(data));
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
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"} onClick={() => addToCart(details._id)}>Add to Cart</a>
            <a className="button edit" onClick={() => onToggleEdit(!edit)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button" onClick={() => removeProduct(details._id)}><span>X</span></a>
      </div>
  )
}

export default Product