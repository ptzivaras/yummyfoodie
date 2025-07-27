import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DishDetail = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={dish.image}
        alt={dish.name}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="font-semibold text-lg mb-1">{dish.name}</h3>
      <p className="text-gray-600 mb-2">€{dish.price.toFixed(2)}</p>
      <Link
        to={`/dishes/${dish.id}`}
        className="mt-auto text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  )
}

export default DishDetail