import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";

const HeartData = ({
  showMenuItem,
  setShowMenuItem,
  anchorEl,
  setAnchorEl,
  handleClose,
}) => {
  const open = Boolean(anchorEl);

  const handleCloseMenuItem = () => {
    setShowMenuItem(false);
  };

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems);

  return (
    <>
      {showMenuItem && (
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {Array.isArray(wishlistItems) ? (
            wishlistItems.map((val) => (
              <MenuItem onClick={handleCloseMenuItem}>{val.name}</MenuItem>
            ))
          ) : (
            <div className="w-100">
             <h1 className="fs-4">No data found</h1> 
              </div>
          )}
        </Menu>
      )}
    </>
  );
};

export default HeartData;
