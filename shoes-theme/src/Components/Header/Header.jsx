import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const CartItems = useSelector((state)=>state.Cart.items) || []

  const CartItemsCount = CartItems.reduce((total, item) => total + parseInt(item.quantity), 0);  
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="d-lg-flex justify-content-around d-md-none d-sm-none  ">
              <div
                style={{
                  width: "200px",
                  borderRight: "1px solid #EAEAEA",
                  height: "55px",
                }}
              ></div>
              <div
                className="align-items-center d-flex justify-content-center"
                style={{
                  width: "150px",
                  whiteSpace: "nowrap",
                  margin: "0px -45px",
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                <span>Select an Option</span>
                <div className="font-awsom">
                  <b></b>
                </div>
              </div>
              <div
                className="ps-2 align-items-center d-flex justify-content-center gap-2"
                style={{
                  marginTop: "2px",
                  borderLeft: "1px solid #EAEAEA",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="w-50 ">
                  <img
                    src="http://demo.roadthemes.com/james/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                    style={{ width: "100%" }}
                  />
                </span>
                <span style={{ fontSize: "14px" }}> English</span>
              </div>
              <div
                className="ps-2 align-items-center d-flex justify-content-center gap-2"
                style={{
                  marginTop: "2px",
                  borderLeft: "1px solid #EAEAEA",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span className="ms-1">phone: (+1):3265498703</span>
              </div>
              <div className="row text-align-right">
                <div className="col-lg-12 col-md-10 d-flex justify-content-end ms-5 ps-5 gap-2">
                  <div
                    className="mx-3 p-2 mt-2 ms-5 "
                    style={{ width: "0px", borderLeft: "1px solid #EAEAEA" }}
                  >
                    <span className="d-flex ">
                      <img className="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEX///8AAADq6ur8/Pzv7+/4+Pj09PTFxcW+vr55eXnm5uba2tq6urp8fHzg4OCmpqZtbW0rKyvT09OGhoYhISFVVVVDQ0PNzc01NTWsrKwQEBBzc3OMjIy0tLQ7OzuSkpIZGRlhYWFMTEybm5vRKC4iAAAH7UlEQVR4nO1d6ZqiOhCVHWUTAREUMPD+73i12+l2eqxKMFXQ3I/z3ySHJLWn3GxWrFixYsWKFStWrFixYsWKFdPC+sDcq9CB49rmoUkycUyvtWEYdd4W267ydqbtLIqYuwu8bp8br3GMqjI2l0HILMNLAfD4QrpPvNide6kS2GVyTmVMHiguTfCL9ydItidFJn/4hPbci34Jy8uKehSVz/M2xHOv/F80YtymfKHus19Gx28h2aW0Pdvd3AS+4bUaTD6R/RLRFghtKnckv4COOZBQueEUOPNScf2eissNl1mvTpwRUrnhGM531nxBy8Uw8rk2xx10xDEEUc7BJY7G63sVtNX0XAKpZfwu8mxqLqWqbfwOxLRcfEYqNxyn1DjMXG5sphPRDTcXw+inEtHs+3KHmIZNOAUXw9ibE3DxOOXYMyJ+j7o8TsTFMDpumRaLcQtqi3M2VE1TJV20L66jfltXvMEbd4yZfE6CnWm77md41nFd24z9aIRXWgesZBLlhUTB6/CyZZmNuiXEuTWe2hLy/QEfx01OalbqkY9LrPRJj0o+iV8oScWEi4tzUaGSqeoHXyj4Q2zXRuGQpZHkgD3DqRR2uuCx0my5hhHNuBsbdFJhfeU5aFKpfB0fZ3U86Rc6jthrZcSyWdPqnRMR72XjZgyGgJDMeSrfUwq2TKycPGImt9svUQz52ya7I9PE9BanJHKZ6owtcypCKhIPVLhO6PVGD/HRz7SujSXQ2QrdO9rgIpr21jSo7VHof7kEZXOmvDXuFpuqJ0jjOR0qYCh1DZoaa0kOgXvGyER0voDVIfNcE5qJdqgtQCcC0LjylkpBBxgZOgsN0wMUF+YBLKFYU01iIyZmTpiAsLCDRuXXHBCxuSea4wOYLUs1ERJaTkkdQUzQEJ0zGxGaEc0Uf7BDzBoaKyCGT1lNbM9iBjTNd0Ncf/KEXQBrZ5KoExaTIQ/UO/CtIbmeLuzJkIqyT8A5hiuFEjDhjaH3ZzcmLG0oPl0Jjn7lSKDAZkBBMDp8ii8c+RPYQD8SXBoBkmEpDLHB0NPJ1x8d5GLwlFaCwrMetMe2QC57npwjHDrRV5s7kMzAk3I8gLbzWdsLhPU/wRF+BRv0BIX2UahAMkyFYRYoAfTrHMD7SCEpXwJ0BXvtGA34nQquOnEw6KQfBgKv456ruCWBxFmqHXMGDT+2apAQmjJtdIcGPbMLV0kYWGSoHzwBo6ZMauamaKDnHkskE0Bk9D2aX0RmiTsDHjP9nQEFQMcmAPh2BrZhFyia/1dKU0Bkpjdn9F1N0OxjMzRB07bXttPhgClHTcsdjKYtXJHNEDW7wxXQhEI7gAon54hymT8Bu817bc3mgGRIk/PfgEsOtvqDg2RSHtmMBB31B4czzSwSAK4HSAki53B2duC4NAcw6dASfDxYnJ04rDNYFVCUnsJRQLJ09hPsCJyN4iWaC2fnzwTD/wCcbKoJ7v/Ggb+VQX7OLDg9k5MoaeRVln5c/gcCOOd4IlFrMVwJdiX2Ni04GEz0eNMWk20NVqZFU6SDfS5aK8DCioKJ0vQlUnFIWm9iIhVHVC9pkHS2kVJmaQSyMWSlYMg5I8gAfQGt1SYznWAXwyCsn7ExLnTFIGjBaa4dAHoAfSZIaDn5WI22fpzhDgt9ntMTKjS40uAOijfVFv7YgPRpAz7VVl8I+Gjbqp60FgzOZ38g0j0Fkm5PxO+C8YcHurEGyetvwtrpDziSh25aohOM+z9A/iAQU5x3iPdPmid53yjoo9qy1+LFuzJN9pnoLJlvHGRzvhmkR5+a3LHliJtIH1TWw2gRbcXS9gA0z3N+wpa/qz4fxslQu5L3bug4uCi1mzklIy6r40k3myL0D0yuMLchGtXZy4tCs8orlRn7DwKlzibnSkWulRelweqIrf2MWl+jXHSythPNWbnjCxsbpV4N9+/ZFgO4PY637cc04mFjsxOqS6jTNAv/WYZzGEQ6tvseW8UB6kG/wFFEXRV6pRcml33xZhPB6esnOLHlOmkSZ2BhbMj6s45iw3XSZmHDdm8UBTQxGy67BoujLY+NejetBbCxJmjYOB0bPMjJxoZLCvA1n0XApm/cM09b4HnYbAb9rvO/iE0paFfaKpixTJVhN9gDZVvNyAsV9prP99yUSAHHOLSNubFmZmOHNGLt8uFqW41ClIPv3mwss9EXa6J8xC0tFYeJkc3GcjXNm9Z7CruHCg4TJ5t7OdL7Plv7I0it0g+al81m0/TvuPj5iz8CUGmkys1mc9gex/FJ++xlTlzSvG0aNhu72iqHYE5FFEIZqlBBphH3o3uJuOn2R5l4u/bbzseiuCr6hs8WeIZZNkMkIBF7ElkSHiQZpLm159+w49JvhstZ9Kc0zfM8TdteZN3Q+KXSv7UpseG/N09wXHMXBw/E8c521dO4lsq9mZSNFua2BWjhK5hJbNFBcsA9b74xhYSmgazj7R0T/BkCEVSCQCyvRVjgK0ho3r8PoISv0I187jUqw1JgsxgZoMJmhj/gehcWXvO4qHN2gy9xK/K5FzgK2HOEO+Ze3zgcUDZknWknQomdtNPcqxsLD5ECxI1WJwDyTxWz/NOjHmA2izHOvmFBbMgfJU4BgM1xOdbMX3gpBRZ4Yz7xQkIvyDD7ieBHgL6m/teQSeH2T3TqgqvHylSois/4fN2KZOY/4abAocqiKBve/C+iFStWrFgS/gOg/Xaqb6+xoAAAAABJRU5ErkJggg==" alt="/" style={{width:"20px"}}/>
                      
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "50px",
                      borderLeft: "1px solid #EAEAEA",
                      borderRight: "1px solid #EAEAEA",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                  
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width={"12px"}
                      >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                      </svg>
                   
                  </div>
                  
                  <div
                    className=" d-flex justify-content-center gap-2 align-items-center"
                    style={{ borderRight: "1px solid #EAEAEA", width: "60px" }}
                  >
                    <Link to="/add-to-cart">
                    <span>
                      <img
                        src="http://demo.roadthemes.com/james/wp-content/themes/james/images/icon-cart.png"
                        alt="/bag"
                      />
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        background: "black",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        textAlign: "center",
                        color: "#fff",
                        right: "110px",
                        fontSize:'15px',
                        alignItems:'center',
                        display:'flex',
                        justifyContent:'center'
                      }}
                    >
                      {CartItemsCount}
                   
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
