import React, { useState } from 'react';
import CategoryBased from './Category';


const LastCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const CategoryName = ['Footwear', 'Men', 'Women'];





  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
     

      {/* Render CategoryBased component with selected category name */}
      <CategoryBased categoryName={selectedCategory} />
    </>
  );
};

export default LastCategory;
