import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

import HeartData from "./HeartData";

function HeartClick() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showMenuItem, setShowMenuItem] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenuItem(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <i className="fa-regular fa-heart fs-4"></i>
      </IconButton>
      <HeartData
        showMenuItem={showMenuItem}
        setShowMenuItem={setShowMenuItem}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleClose={handleClose}
      />
    </>
  );
}

export default HeartClick;
