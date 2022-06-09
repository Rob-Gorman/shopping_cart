import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productAdded } from '../actions/productActions';
import axios from 'axios';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [formVisibility, setFormVisibility] = useState(false)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  const addProduct = async (formFields) => {
    let response = await axios.post('/api/products', {...formFields})
    dispatch(productAdded(response.data));
    [setTitle, setPrice, setQuantity].forEach(f => f(""));
    handleShowForm();
  }

  const handleShowForm = (e) => {
    setFormVisibility(!formVisibility);
  }
  const formClass = formVisibility ? "add-form visible" : "add-form"

  const handleSubmit = () => {
    let formFields = {title, price, quantity}
    addProduct(formFields);
  }

  // router.post("/products", (req, res, next) => {
  //   const { title, price, quantity } = req.body;
  //   Product.create({ title, price, quantity })
  //     .then((product) => res.json(product))
  //     .catch((err) => next(err));
  // });
  return (
    <div className={formClass}>
      <p><a className="button add-product-button" onClick={handleShowForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>Add</a>
          <a className="button" onClick={handleShowForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;