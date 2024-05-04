import { useEffect, useState } from "react";
import { fetchProductsAsync } from "../../Redux/Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";
import AddtoCart from "../Homepage/CatgoeyBased/AddTocart";
import { Skeleton } from "@mui/material";
import ViewCart from "../Homepage/CartDetailpage/ViewCart";
import HeartIcon from "../Homepage/CatgoeyBased/HeartIcon";

function Shop() {
  const dispatch = useDispatch();

  const { ProductsItems } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  const products = ProductsItems;
  useEffect(() => {
    const data = async () => {
      await dispatch(fetchProductsAsync());
      setLoading(false);
    };
    data();
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="row mb-5 ">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-3">
              <div className="card px-4">
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={200}
                  animation="wave"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <Skeleton variant="text" width={200} animation="wave" />
                  </h5>
                  <p className="card-text">
                    <Skeleton variant="text" width={150} animation="wave" />
                  </p>
                  <p className="card-text">
                    <Skeleton variant="text" width={180} animation="wave" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="popular-container">
          <div className="container">
            <div className="section-header text-center">
              <h1>Popular Products</h1>
              <p>
                Made with care for your little ones, our products are perfect
                for every <br /> occasion. Check it out.
              </p>
            </div>
            <div className="row mb-5">
              {Array.isArray(products) && products.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <div
                      className="card popular-card"
                      style={{ maxWidth: "150px", width: "100%" }}
                    >
                      {product.images && product.images.length > 0 && (
                        <img
                          src={product.images[0].src}
                          alt=""
                          loading="lazy"
                          className="card-image img-fluid "
                        
                        />
                      )}

                      <div className="card-overlay popular-card-overlay top d-flex justify-content-center">
                        <div className="card-body d-flex">
                          <div className="add-to-cart">
                            <AddtoCart product={product} />
                          </div>
                          <div className="view-cart">
                            <ViewCart product={product} />
                          </div>
                          <div className="icon-heart">
                            <HeartIcon product={product}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popular-card-content card-body">
                      <h5>{product.name}</h5>

                      <div>
                        <h5 className="popular-price">${product.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
