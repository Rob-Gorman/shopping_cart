import CartItem from './CartItem'
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { CartContext } from '../context/cart-context'

const Cart = () => {

  const {cart, setCart} = useContext(CartContext)

  useEffect(() => {
    const fetchCart = async () => {
      let {data} = await axios.get("/api/cart")
      setCart(data)
    }
    fetchCart()
  }, [])

  const onCheckout = async () => {
    await axios.post(`/api/checkout`)
    setCart([])
  }

  let emptyCart = !cart.length
  let defaultCheckoutClass = "button checkout"
  let checkoutClass = emptyCart ? `${defaultCheckoutClass} disabled` : defaultCheckoutClass

  return (
  <div className="cart">
    <h2>Your Cart</h2>
    { emptyCart ? <p>Your Cart is Empty</p> : (
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map(item => <CartItem key={item.productId} item={item} />)}
        <tr>
          <td colSpan="3" className="total">Total: ${cart.reduce((acc, item) => (item.price * item.quantity) + acc, 0)}</td>
        </tr>
      </tbody>
    </table>
    )}
    <a className={checkoutClass} onClick={onCheckout}>Checkout</a>
  </div>
  )
}

export default Cart