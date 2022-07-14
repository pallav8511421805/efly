import React from 'react';
import { useState } from 'react';

function Home(props) {
  const [fdata, setfdata] = useState([]);
  const fashionpagedata = [
    {
      title: "Men's Regular Polo T-Shirt",
      tag: "Price ",
      price: "30",
      id: 1,
      img: "images/tshirt-img.png"
    },
    {
      title: "Men's Regular Fit Casual Shirt",
      tag: "Price ",
      price: "30",
      id: 2,
      img: "images/dress-shirt-img.png"
    },
    {
      title: "Women's Floral Maxi Dress",
      tag: "Price ",
      price: "30",
      id: 3,
      img: "images/women-clothes-img.png"
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 4,
      img: "images/laptop-img.png" 
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 5,
      img: "images/laptop-img.png" 
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 6,
      img: "images/laptop-img.png" 
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 7,
      img: "images/laptop-img.png" 
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 8,
      img: "images/laptop-img.png" 
    },
    {
      title: "Laptop",
      tag: "Start Price ",
      price: "100",
      id: 9,
      img: "images/laptop-img.png" 
    }

  ];

  const handlesearch = (val) => {
    let search_fashiondata = fashionpagedata.filter((f) => (
      f.title.toLowerCase().includes(val) || f.tag.toLowerCase().includes(val) || f.price.includes(val)
    ))
    setfdata(search_fashiondata);
  }

  const filterf_data = fdata.length > 0 ? fdata : fashionpagedata;
  return (
    <>
      {/* banner bg main end */}
      {/* fashion section start */}
      <div className="fashion_section">
        <div className="container">

          <div className="d-flex justify-content-end my-4">
            <input type="text" className="col-lg-6 col-sm-12" onChange={(e) => handlesearch(e.target.value)} placeholder="Search products" />
          </div>
          <h1 className="fashion_taital">All products</h1>
          <div className="fashion_section_2">
            <div className="row">
              {
                filterf_data.map((pd) => {
                  return (
                    <>
                      <div className="col-lg-4 col-sm-6" key={pd.id}>
                        <div className="box_main">
                          <h4 className="shirt_text">{pd.title}</h4>
                          <p className="price_text">{pd.tag}<span style={{ color: '#262626' }}>${pd.price}</span></p>
                          <div className="tshirt_img"><img src={pd.img} /></div>
                          <div className="btn_main">
                            <div className="buy_bt"><a href="#">Buy Now</a></div>
                            <div className="seemore_bt"><a href="#">See More</a></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div className="jewellery_section">
        <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="fashion_taital">Jewellery Accessories</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Jumkas</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/jhumka-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Necklaces</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/neklesh-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Kangans</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/kangan-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="fashion_taital">Jewellery Accessories</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Jumkas</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/jhumka-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Necklaces</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/neklesh-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Kangans</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/kangan-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="fashion_taital">Jewellery Accessories</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Jumkas</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/jhumka-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Necklaces</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/neklesh-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="box_main">
                        <h4 className="shirt_text">Kangans</h4>
                        <p className="price_text">Start Price  <span style={{ color: '#262626' }}>$ 100</span></p>
                        <div className="jewellery_img"><img src="images/kangan-img.png" /></div>
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">Buy Now</a></div>
                          <div className="seemore_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>
          <div className="loader_main">
            <div className="loader" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;