import Product from './Product'
import ProductEditForm from './ProductEditForm'
import { useState } from 'react'

const EditableProduct = ({ details }) => {
  const [edit, setEdit] = useState(false)
  function handleToggleEdit(e) {
    setEdit(!edit)
  }

  return (
    <div className="product">
      <Product details={details} onToggleEdit={handleToggleEdit} edit={edit} />
      {edit ? <ProductEditForm details={details} onClose={handleToggleEdit} /> : null}
    </div>
  )
}

export default EditableProduct