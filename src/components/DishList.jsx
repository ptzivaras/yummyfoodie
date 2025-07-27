import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../features/dishes/dishesSlice';
import DishDetail from './DishDetail';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorBoundary from './ErrorBoundary';

const DishList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector(state => state.dishes);
  const { dietaryPreferences, allergens, priceRange } = useSelector(state => state.filters);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDishes());
    }
  }, [status, dispatch]);

  const filteredDishes = list.filter(dish => {
    // Filter by dietary preferences
    if (dietaryPreferences.length > 0 && 
        !dietaryPreferences.every(pref => dish.tags.dietaryPreferences.includes(pref))) {
      return false;
    }
    
    // Filter by allergens
    if (allergens.length > 0 && 
        allergens.some(allergen => dish.tags.allergens.includes(allergen))) {
      return false;
    }
    
    // Filter by price
    if (dish.price < priceRange[0] || dish.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  if (status === 'loading') {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <LoadingSkeleton type="dish" count={6} />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <ErrorBoundary 
        error={error} 
        onRetry={() => dispatch(fetchDishes())}
      />
    );
  }

  return (
    <div className="content-wrapper">
      <div className="filter-panel no-print">
        <FilterPanel />
      </div>
      
      <div className="dishes-grid">
        {status === 'loading' ? (
          <LoadingSkeleton type="dish" count={6} />
        ) : filteredDishes.map(dish => (
          <DishDetail 
            key={dish.id} 
            dish={dish} 
            className="hover:scale-[1.02] transition-transform"
          />
        ))}
      </div>
    </div>
  );
};

export default DishList;