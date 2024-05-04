import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllWhishList, removeWhishList } from "../../Redux/Reducer/Whishlist";
import AddtoCart from "../../Pages/Homepage/CatgoeyBased/AddTocart";

const HeartData = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    console.log(id)
    dispatch(removeWhishList({ id }));

  };

  const handleClicks =()=>{
    dispatch(removeAllWhishList())
  }

  return (
    <>
    <div className="container-fluid">

    
      {wishlistItems && wishlistItems.length > 0 ? (
        <div className="mt-5 mb-4">
          <table className="table mb-5 table-responsive w-100">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((cartItem, index) => (
                <tr key={index}>
                  <td>
                    <button className="btn" onClick={() => handleClick(cartItem.id)} >
                      <i className="fa fa-close"></i>
                    </button>
                    {cartItem.images && cartItem.images.length > 0 && (
                      <img
                        src={cartItem.images[0].src}
                        alt="Product"
                        style={{ width: "50px" }}
                      />
                    )}
                  </td>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddtoCart />
       
           <div>
           <button className="btn btn-dark mb-2" onClick={()=>handleClicks()}>
             Remove All Products
           </button>
         </div> 
         </div>
      ) : (
        <div className="d-flex justify-content-center h-100 mb-5 mt-5">
          <h1 className="fs-1 mt-3">No products added to the wishlist</h1>
        </div>
      )}
    
      </div>
    </>
  );
};

export default HeartData;
