import EditableProduct from "./EditableProduct"
import AddProduct from "./AddProduct"

const ShopBody = ({data, onAdd, onRemove, onEdit, onCartAdd}) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return <EditableProduct key={product._id} details={product} onRemove={onRemove} onEdit={onEdit} onCartAdd={onCartAdd} />
        })}
      </div>
      <AddProduct onAdd={onAdd} />
    </main>
  )
}

export default ShopBody