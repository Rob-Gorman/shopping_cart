const Product = ({details, onRemove, onToggleEdit, edit, onCartAdd}) => {

  const addBtnClass = "button add-to-cart"
  console.log(details._id)
  return (
      <div className="product-details">
        <h3>{details.title}</h3>
        <p className="price">{details.price}</p>
        <p className="quantity">{details.quantity} left in stock</p>
        {!edit ?
          <div className="actions product-actions">
            <a className={details.quantity ? addBtnClass : addBtnClass + " disabled"} onClick={() => onCartAdd(details._id)}>Add to Cart</a>
            <a className="button edit" onClick={() => onToggleEdit(!edit)}>Edit</a>
          </div>
          : null
        }
        <a className="delete-button" onClick={() => onRemove(details._id)}><span>X</span></a>
      </div>
  )
}

export default Product