import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import LoadingSkeleton from './LoadingSkeleton';
import Toast from './Toast';

const OrderReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector(state => state.cart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      dispatch(clearCart());
      setShowSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-4">Browse our menu to add delicious Greek dishes!</p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View Menu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Your Order</h2>
      
      <div className="divide-y">
        {items.map(item => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">€{item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(updateQuantity({ 
                        id: item.id, 
                        quantity: item.quantity - 1 
                      }));
                    } else {
                      dispatch(removeFromCart(item.id));
                    }
                  }}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={isSubmitting}
                >
                  -
                </button>
                <span className="px-3 py-1">{item.quantity}</span>
                <button
                  onClick={() => dispatch(updateQuantity({ 
                    id: item.id, 
                    quantity: item.quantity + 1 
                  }))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={isSubmitting}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700"
                disabled={isSubmitting}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total:</span>
          <span>€{total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleSubmitOrder}
          disabled={isSubmitting}
          className={`w-full py-3 rounded font-medium ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Submit Order'}
        </button>
      </div>

      {showSuccess && (
        <Toast
          message="Order submitted successfully!"
          type="success"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default OrderReview;