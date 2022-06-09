import EditableProduct from "./EditableProduct"
import AddProduct from "./AddProduct"
import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { productsInitialized } from "../actions/productActions";

const ShopBody = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => { 
    let fetchData = async () => {
      let {data} = await axios.get("/api/products")
      dispatch(productsInitialized(data));
    }
    fetchData()
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