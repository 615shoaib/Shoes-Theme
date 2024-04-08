import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from './Category';
import { NavLink } from 'react-router-dom';

const Button = ({filteredCategories }) => {
  const dispatch = useDispatch();



  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category.id));
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 sidebar text-dark bg-dark mx-0 mb-2">
     
        {
        Array.isArray (filteredCategories) &&  filteredCategories.map((category) => (
          <ul className="nav flex-column mb-auto">
          <li key={category.id}>
            <NavLink
              to="/"
              className="nav-link text-white activeclass"
              aria-current="page"
              style={{ borderBottom: "1px solid #ccc", minHeight: '80px' }}
              onClick={() => handleCategoryClick(category)} 
            >
              {category.name}
            </NavLink>
          </li>
           </ul>
        ))}
     
    </div>
  );
};

export default Button;
