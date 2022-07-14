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
      title: "Mobile",
      tag: "Start Price ",
      price: "100",
      id: 5,
      img: "images/mobile-img.png"
    },
    {
      title: "Computers",
      tag: "Start Price ",
      price: "100",
      id: 6,
      img: "images/computer-img.png"
    },
    {
      title: "Jumkas",
      tag: "Start Price ",
      price: "100",
      id: 7,
      img: "images/jhumka-img.png"
    },
    {
      title: "Necklaces",
      tag: "Start Price ",
      price: "100",
      id: 8,
      img: "images/neklesh-img.png"
    },
    {
      title: "Kangans",
      tag: "Start Price ",
      price: "100",
      id: 9,
      img: "images/kangan-img.png"
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
    </>
  );
}

export default Home;