import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDishes } from '../features/dishes/dishesSlice'
import { addToCart } from '../features/cart/cartSlice'

import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


    const DishDetailPage = () =>{
        const deviceType = useDeviceType();

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

       return (
    <div className={`dish-detail-page ${deviceType === 'desktop' ? 'flex gap-8' : ''}`}>
      <div className={deviceType === 'desktop' ? 'w-1/2' : 'w-full'}>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full rounded-lg shadow-md"
          style={{
            maxHeight: deviceType === 'mobile' ? '300px' : '500px',
            objectFit: 'cover'
          }}
        />
      </div>
      
      <div className={deviceType === 'desktop' ? 'w-1/2' : 'w-full mt-6'}>
        <h2 className="text-3xl font-bold mb-4">{dish.name}</h2>
        <p className="text-gray-700 mb-6">{dish.description}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-semibold">€{dish.price.toFixed(2)}</span>
            <button
              onClick={() => dispatch(addToCart(dish))}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
          
          {deviceType === 'mobile' && (
            <Link 
              to="/" 
              className="inline-block text-blue-600 hover:underline mt-4"
            >
              ← Back to Menu
            </Link>
          )}
        </div>
        
        {/* ... rest of the component ... */}
      </div>
    </div>
  );

    }

    
export default DishDetailPage
