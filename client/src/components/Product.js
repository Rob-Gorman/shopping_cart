import { useContext } from "react"
import { addToCart, ProductContext, removeProduct } from "../context/products-context"
import {CartContext} from "../context/cart-context"
import axios from 'axios'

const cartAddItem = async(newItem, cart, setCart) => {
  let itemInCart = cart.find(item => item.productId === newItem.productId)
  console.log("newitem", newItem, "cart", cart)
  if (!!itemInCart) {
    setCart(cart.map(item => {
      if (item.productId === itemInCart.productId) return newItem
      return item
    }))
  } else setCart(cart.concat(newItem))
}

const Product = ({details, edit, onToggleEdit}) => {
  const {dispatch} = useContext(ProductContext)
  const {cart, setCart} = useContext(CartContext)
  const onRemove = (id) => {
    removeProduct(id, dispatch)
  }

  const handleAddToCart = async (e) => {
    e.preventDefault()
    let {data} = await axios.post(`/api/add-to-cart`, {productId: details._id})
    cartAddItem(data.item, cart, setCart)
    addToCart(data.product, dispatch)
  }

  const addBtnClass = "button add-to-cart"
  return (
      <div className="product-details">
        <h3>{details.title}</h3>
        <p className="price">{details.price}</p>
        <p className="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div className="actions product-actions">
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"}
            onClick={handleAddToCart}>Add to Cart</a>
            <a className="button edit" onClick={() => onToggleEdit(!edit)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button" onClick={() => onRemove(details._id)}><span>X</span></a>
      </div>
  )
}

export default Product