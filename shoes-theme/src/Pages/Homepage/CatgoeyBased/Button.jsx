import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from './Category';
import { NavLink } from 'react-router-dom';
import {Skeleton} from "@mui/material"

const Button = ({filteredCategories,loading }) => {
  const dispatch = useDispatch();



  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category.id));
  };

  return (
    <>
    {
      loading ? (
    
        Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4 ">
            <div className="card px-4">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton variant="text" width={200} animation="wave" />
                </h5>
                <p className="card-text">
                  <Skeleton variant="text" width={200} animation="wave" />
                </p>
                <p className="card-text">
                  <Skeleton variant="text" width={200} animation="wave" />
                </p>
              </div>
            </div>
          </div>
        ))
      )
      :(
        <div className="d-flex flex-column flex-shrink-0 sidebar text-dark bg-dark mx-0 mb-2 bg-dark">
     
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
      )
    }
    </>
  );
};

export default Button;
