import { useState } from 'react'

let initialFields = { title: "", price: "", quantity: ""}
const AddProduct = ({onAdd}) => {
  const [formVisibility, setFormVisibility] = useState(false)
  // const [formFields, setFormFields] = useState(initialFields)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleShowForm = (e) => {
    setFormVisibility(!formVisibility);
  }
  const formClass = formVisibility ? "add-form visible" : "add-form"

  const handleSubmit = () => {
    let formFields = {title, price, quantity}
    onAdd(formFields, () => {
      [setTitle, setPrice, setQuantity].forEach(f => f(""));
      handleShowForm();
    })
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