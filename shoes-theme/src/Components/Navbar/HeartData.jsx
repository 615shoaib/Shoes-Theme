import { useSelector } from "react-redux";
import AddtoCart from "../../Pages/Homepage/CatgoeyBased/AddTocart";

const HeartData = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  console.log(wishlistItems);

  return (
    <>
      {wishlistItems && wishlistItems.length > 0 ? (
        wishlistItems.map((product) => (
          <div key={product.id} className="mt-5 mb-4">  
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
