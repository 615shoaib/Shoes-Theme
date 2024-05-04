import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../../Redux/Reducer/Reducer.js';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { ProductsItems,loading } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const style = { display: 'inline-block' };

  const product = ProductsItems.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Loading...</div>; 
  }
  if(loading){
    return
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
   <>
      <div className="container detail-pg-container mt-2">
        <div className="row">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <img className='img-fluid' src={selectedImage} alt="" />
            </div>
            <div className=" col-xl-7 col-lg-6 col-md-12">
              <div className="detail-content">
                <h3 className="detail-title contact-page">{product.name}</h3>
                <h4 className='product' style={{color: 'rgb(56, 131, 150)'}}>${product.price}</h4>
                <p className='para' dangerouslySetInnerHTML={{__html:product.description}}/>
                <div className="product-info">
                  <div className="d-flex align-items-center gap-3 pb-2">
                    <h6>SKU :</h6>
                    <p>{product.sku}</p>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>Category:</h6>
                    <p>{product.categories[0].name}</p>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>Tags:</h6>
                    <p>Wool</p>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h6>Share:</h6>
                    <div className="social-icons-container m-0 d-flex gap-3">
                      <Link to="#" className="insta">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link to="#" className="twitter">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link to="#" className="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                  
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div >
          <div className="row">

          <div className="col-lg-6 d-flex flex-wrap gap-3">
      {product.images.map((image, index) => (
        <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-4 mb-3">
          <div className="card">
            <img
              src={image.src}
              className="img-fluid mt-3 "
              alt={`Product Image ${index}`}
              onClick={() => handleImageClick(image.src)}
              style={{ cursor: 'pointer', }}
            />
          </div>
        </div>
      ))}
    </div>



</div>

          </div>
          <div className="row " style={{ margin: '100px 0px' }}>
            <div className="container">
              <div className="col-lg-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                      Additional Information
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h5 >About</h5>
                    <p className='para text-dark' dangerouslySetInnerHTML={{__html:product.short_description}} />
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div>
                      <p>Weight : </p>
                      <p></p>
                    </div>
                    <div>
                      <p>Dimensions : </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
