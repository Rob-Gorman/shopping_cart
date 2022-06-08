import Product from './Product'
import ProductEditForm from './ProductEditForm'
import { useState } from 'react'

const EditableProduct = ({details, onRemove, onEdit, onCartAdd}) => {
  const [edit, setEdit] = useState(false)
  function handleToggleEdit(e) {
    setEdit(!edit)
  }

  return (
    <div className="product">
      <Product details={details} onRemove={onRemove} onToggleEdit={handleToggleEdit} edit={edit} onCartAdd={onCartAdd}/>
      {edit ? <ProductEditForm details={details} onClose={handleToggleEdit} onEdit={onEdit}/> : null}
    </div>
  )
}

export default EditableProduct