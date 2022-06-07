import Product from "./Product"
import AddProduct from "./AddProduct"

const ShopBody = ({data, handleAdd, handleRemove, handleEdit}) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {data.map(product => {
          return <Product key={product._id} details={product} handleRemove={handleRemove} handleEdit={handleEdit}/>
        })}
      </div>
      <AddProduct handleAdd={handleAdd} />
    </main>
  )
}

export default ShopBody