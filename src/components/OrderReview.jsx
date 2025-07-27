import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';

const OrderReview = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleSubmitOrder = () => {
    // In a real app, this would call an API
    alert(`Order submitted! Total: €${total.toFixed(2)}`);
    dispatch(clearCart());
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Your Order</h2>
      
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="divide-y">
            {items.map(item => (
              <div key={item.id} className="py-4 flex justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">€{item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => dispatch(updateQuantity({ 
                      id: item.id, 
                      quantity: item.quantity - 1 
                    }))}
                    className="px-2 border rounded-l"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 border-t border-b">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => dispatch(updateQuantity({ 
                      id: item.id, 
                      quantity: item.quantity + 1 
                    }))}
                    className="px-2 border rounded-r"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleSubmitOrder}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Submit Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderReview;