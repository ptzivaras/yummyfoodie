import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../features/dishes/dishesSlice'

const DishList = () => {
  const dispatch = useDispatch()
  const { list, status, error } = useSelector(s => s.dishes)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchDishes())
  }, [status, dispatch])

  if (status === 'loading') return <div>Loading menu…</div>
  if (status === 'failed')  return <div>Error: {error}</div>

  return (
    // <div>
    //   <h3>DishList Empty For Now.. </h3>
    // </div>
    <ul className="space-y-2">
      {list.map(d => (
        <li key={d.id} className="p-2 bg-white rounded shadow">
          {d.name} — €{d.price.toFixed(2)}
        </li>
      ))}
    </ul>
  )
}

export default DishList