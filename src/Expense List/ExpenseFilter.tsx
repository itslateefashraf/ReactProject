import React from 'react'
interface props{
    onSlectedCategory:(category:string) => void
}
const ExpenseFilter = ({onSlectedCategory}:props) => {
  return (
    <select className="form-select" onChange={(event)=>onSlectedCategory(event.target.value)}>
        <option value="">All Categories</option>
        <option value="Grocries">Grocries</option>
        <option value="Entertainment">Entertainments</option>
        <option value="Utlities">Utlities</option>
    </select>
  )
}

export default ExpenseFilter;
