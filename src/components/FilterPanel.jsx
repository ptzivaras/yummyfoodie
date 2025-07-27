import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setDietaryPreference, 
  setAllergens, 
  setPriceRange, 
  resetFilters 
} from '../features/filters/filtersSlice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const { dietaryPreferences, allergens, priceRange } = useSelector(state => state.filters);

  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten-Free' }
  ];

  const allergenOptions = [
    { id: 'contains-nuts', label: 'Nuts' },
    { id: 'contains-gluten', label: 'Gluten' },
    { id: 'contains-lactose', label: 'Lactose' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="font-bold mb-3">Filters</h3>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Dietary Needs</h4>
        {dietaryOptions.map(option => (
          <label key={option.id} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={dietaryPreferences.includes(option.id)}
              onChange={() => {
                const updated = dietaryPreferences.includes(option.id)
                  ? dietaryPreferences.filter(item => item !== option.id)
                  : [...dietaryPreferences, option.id];
                dispatch(setDietaryPreference(updated));
              }}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Exclude Allergens</h4>
        {allergenOptions.map(option => (
          <label key={option.id} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={allergens.includes(option.id)}
              onChange={() => {
                const updated = allergens.includes(option.id)
                  ? allergens.filter(item => item !== option.id)
                  : [...allergens, option.id];
                dispatch(setAllergens(updated));
              }}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Price Range (€)</h4>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[1]}
          onChange={(e) => dispatch(setPriceRange([0, parseInt(e.target.value)]))}
          className="w-full"
        />
        <div className="flex justify-between text-xs">
          <span>0</span>
          <span>Up to {priceRange[1]}</span>
        </div>
      </div>

      <button 
        onClick={() => dispatch(resetFilters())}
        className="text-sm text-blue-600 hover:underline"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;