import EditableProduct from "./EditableProduct"
import AddProduct from "./AddProduct"
import { useContext, useEffect } from "react"
import { fetchProducts, ProductContext } from "../context/products-context"

const ShopBody = () => {
  const { products, dispatch } = useContext(ProductContext)

  useEffect(() => {
    fetchProducts(dispatch)
  }, [dispatch])
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map(product => {
          return <EditableProduct key={product._id} details={product} />
        })}
      </div>
      <AddProduct />
    </main>
  )
}

export default ShopBody