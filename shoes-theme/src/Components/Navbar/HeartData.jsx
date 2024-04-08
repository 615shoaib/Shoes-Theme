import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';


const HeartData = ({showMenuItem,setShowMenuItem}) => {
  const wishlist = useSelector((state) => state.wishlist);

    const handleCloseMenuItem = () => {
      setShowMenuItem(false);
  };
  return (
    <div className="mini_cart_content">
        {showMenuItem && (
                <MenuItem onClick={handleCloseMenuItem}>
                    Example MenuItem
                </MenuItem>
            )}
    </div>
  );
};

export default HeartData;
