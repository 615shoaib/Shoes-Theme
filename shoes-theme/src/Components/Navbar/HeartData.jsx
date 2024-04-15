import { useSelector,useDispatch } from "react-redux";
import AddtoCart from "../../Pages/Homepage/CatgoeyBased/AddTocart";
import { removeWhishList } from "../../Redux/Reducer/Whishlist";

const HeartData = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);


  const dispatch = useDispatch()

  const handleClick =(id)=>{
    console.log(  dispatch(removeWhishList(id)))
      dispatch(removeWhishList(id))
  }

  return (
    <>
      {wishlistItems && wishlistItems.length > 0 ? (
        wishlistItems.map((cartItem, index) => (
          <div className="mt-5 mb-4" key={index}>
            <table className="table mb-5 table-resposnive">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <button className="btn" onClick={()=>handleClick(cartItem.id)}>
                      <i className=" fa fa-close"></i>
                    </button>
                    {cartItem.images && cartItem.images.length > 0 && (
                      <img
                        src={cartItem ? cartItem.images[0].src : null}
                        alt="Product"
                        style={{ width: "50px" }}
                      />
                    )}
                  </td>
                  <td>{cartItem.name}</td>

                  <td>{cartItem.price}</td>
                </tr>
                <AddtoCart />
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <div className="d-flex justify-content-center h-100 mb-5 mt-5">
          <h1 className="fs-1 mt-3">No products added to the wishlist</h1>
        </div>
      )}
    </>
  );
};

export default HeartData;
