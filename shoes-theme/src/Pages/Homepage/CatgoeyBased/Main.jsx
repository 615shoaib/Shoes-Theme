import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, setSelectedCategory, fetchProducts } from './Category';
import Categorydata from './Categorydata';
import Button from './Button';

const Main = () => {
  const categories = useSelector(state => state.category.categories);
  const selectedCategory = useSelector(state => state.category.selectedCategory);
  const products = useSelector(state => state.category.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  const [show,setShow]=useState(false)



  useEffect(() => {
    // Fetch categories
    dispatch(fetchCategories())
      .then(() => setLoading(false)) 
      .catch(() => setLoading(false)); 
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true); 
      dispatch(fetchProducts(selectedCategory))
        .then(() => setLoading(false))
        .catch(() => setLoading(false)); 
    }
  }, [selectedCategory, dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      const firstCategory = categories[0];
      dispatch(setSelectedCategory(firstCategory.id));
    }
  }, [categories, dispatch]);

  const filteredCategories = Array.isArray(categories) && categories.filter(category => category.name !== 'Uncategorized' && category.name !== 'Uncategorised');


  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <Button filteredCategories={filteredCategories} selectedCategory={selectedCategory} loading={loading} setLoading={setLoading}/>
        </div>
        <div className="col-lg-8">
          <Categorydata products={products.slice(0,3)} loading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
