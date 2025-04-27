import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../features/dishes/dishesSlice'
import DishDetail from './DishDetail'

const DishList = () => {
  const dispatch = useDispatch()
  const { list, status, error } = useSelector(s => s.dishes)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchDishes())
  }, [status, dispatch])

  if (status === 'loading') return <div>Loading menu…</div>
  if (status === 'failed')  return <div>Error: {error}</div>

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map(d => (
        <DishDetail key={d.id} dish={d} />
      ))}
    </div>
  )
}

export default DishList