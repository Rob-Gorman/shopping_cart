import { useState } from 'react'

let initialFields = { title: "", price: "", quantity: ""}
const AddProduct = ({handleAdd}) => {
  const [formVisibility, setFormVisibility] = useState(false)
  const [formFields, setFormFields] = useState(initialFields)

  const showForm = (e) => {
    setFormVisibility(!formVisibility);
  }
  const formClass = formVisibility ? "add-form visible" : "add-form"

  const submitProduct = () => {
    handleAdd(formFields, () => {
      setFormFields(initialFields);
      showForm();
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
      <p><a className="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={formFields.title} onChange={(e) => setFormFields({...formFields, title: e.target.value})}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={formFields.price} onChange={(e) => setFormFields({...formFields, price: e.target.value})}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={formFields.quantity} onChange={(e) => setFormFields({...formFields, quantity: e.target.value})}/>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={submitProduct}>Add</a>
          <a className="button" onClick={showForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;