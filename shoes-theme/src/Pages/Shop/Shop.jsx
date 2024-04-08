import { useEffect } from "react";
import { fetchProductsAsync } from "../../Redux/Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";
import AddtoCart from "../Homepage/CatgoeyBased/AddTocart";
import ViewCart from "../Homepage/CartDetailpage/ViewCart";


function Shop() {
  const dispatch = useDispatch();

  const { ProductsItems } = useSelector((state) => state.products);

  const products = ProductsItems
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
    return (
        <>

            <div className="popular-container">
                <div className="container">
                    <div className='section-header text-center'>
                        <h1>
                            Popular Products
                        </h1>
                        <p>
                            Made with care for your little ones, our products are perfect for every <br/> occasion.
                            Check
                            it
                            out.
                        </p>
                    </div>
                    <div className="row mb-5">
                        {
                            products.map((product, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='d-flex justify-content-center flex-column align-items-center'>
                                        <div className="card popular-card" style={{width:'350px'}}>
                                            {/* <Link to={`/product/${product.id}`} className='popular-card-link'></Link> */}
                                                
                                                    {
                                                        product.images && product.images.length > 0 &&
                                                        <img src={product.images[0].src} alt=""
                                                             className="card-image img-fluid " style={{width:'100%'}}/>
                                                    }
                                                    
                                                
                                                <div className="card-overlay popular-card-overlay top  d-flex">
                                                    <div className="card-body">
                                                        <a href="">
                                                            <AddtoCart />
                                                            <ViewCart product={product}/>
                                                        </a>
                                                    </div>
                                                    <div className="popular-icons">
                                                        <div className='icon-heart'>
                                                            <a href="">
                                                                <i className="dripicons-heart"></i>
                                                            </a>
                                                        </div>
                                                      
                                                        {/* <PreviewIcon/> */}
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        <div className="popular-card-content card-body">
                                            <h5>{product.name}</h5>
                                            {/* <StarRating/> */}
                                            <div>
                                                <h5 className='popular-price'>${product.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;