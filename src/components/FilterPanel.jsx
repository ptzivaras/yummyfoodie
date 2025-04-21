import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange }) => {
  const [dietary, setDietary] = useState({
    Vegan: false,
    GlutenFree: false,
    LactoseFree: false,
    NutFree: false,
  });

  const [priceRange, setPriceRange] = useState('');
  const [allergen, setAllergen] = useState('');

  const handleDietaryChange = (e) => {
    const { name, checked } = e.target;
    const newDietary = { ...dietary, [name]: checked };
    setDietary(newDietary);
    onFilterChange({ dietary: newDietary, priceRange, allergen });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    onFilterChange({ dietary, priceRange: e.target.value, allergen });
  };

  const handleAllergenChange = (e) => {
    setAllergen(e.target.value);
    onFilterChange({ dietary, priceRange, allergen: e.target.value });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Filters</h3>
      <div>
        <strong>Dietary Preferences:</strong>
        <label>
          <input type="checkbox" name="Vegan" checked={dietary.Vegan} onChange={handleDietaryChange} />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="GlutenFree" checked={dietary.GlutenFree} onChange={handleDietaryChange} />
          Gluten-Free
        </label>
        <label>
          <input type="checkbox" name="LactoseFree" checked={dietary.LactoseFree} onChange={handleDietaryChange} />
          Lactose-Free
        </label>
        <label>
          <input type="checkbox" name="NutFree" checked={dietary.NutFree} onChange={handleDietaryChange} />
          Nut-Free
        </label>
      </div>
      <div>
        <strong>Price Range:</strong>
        <select value={priceRange} onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="under10">Under €10</option>
          <option value="10to20">€10 - €20</option>
          <option value="20to30">€20 - €30</option>
          <option value="30to40">€30 - €40</option>
          <option value="over40">Over €40</option>
        </select>
      </div>
      <div>
        <strong>Allergens:</strong>
        <select value={allergen} onChange={handleAllergenChange}>
          <option value="">All</option>
          <option value="containsNuts">Contains Nuts</option>
          <option value="containsGluten">Contains Gluten</option>
          <option value="containsLactose">Contains Lactose</option>
          <option value="containsOther">Contains Other Allergens</option>
          <option value="allergenFree">Allergen-Free</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
