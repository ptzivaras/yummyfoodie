import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../features/dishes/dishesSlice'
import { addToCart } from '../features/cart/cartSlice'


    const DishDetailPage = () =>{
        
        const { id }      = useParams()               // get :id from the URL
        const dispatch    = useDispatch()
        const { list, status, error } = useSelector(s => s.dishes)

        useEffect(() => {
            if (status === 'idle') {
            dispatch(fetchDishes())
            }
        }, [status, dispatch])

        if (status === 'loading') return <div>Loading dish…</div>
        if (status === 'failed')  return <div>Error: {error}</div>

        const dish = list.find(d => d.id === Number(id))
        if (!dish) return <div>Dish not found</div>

        return(
            <div>
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{dish.name}</h2>
                <p className="text-gray-700 mb-4">{dish.description}</p>
                <p className="text-lg font-semibold mb-4">€{dish.price.toFixed(2)}</p>
                <h3 className="font-semibold mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside mb-4">
                    {dish.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                </ul>
                <button
                    onClick={() => dispatch(addToCart(dish))}
                    className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
                >
                    Add to Cart
                </button>
                <Link to="/" className="text-blue-500 hover:underline">
                    ← Back to Menu
                </Link>
            </div>
        )

    }

    
export default DishDetailPage
