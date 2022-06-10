import EditableProduct from "./EditableProduct"
import AddProduct from "./AddProduct"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/products";

const ShopBody = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => { 
    dispatch(getProducts())// getComments)
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