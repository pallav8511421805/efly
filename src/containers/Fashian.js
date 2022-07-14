import React from 'react';
import { useState } from 'react';

function Fashian(props) {
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
    }
  ];

  const handlesearch = () => {
    let search = document.getElementById("fashion_s");
    let search_val = search.value;
    let search_fashiondata = fashionpagedata.filter((f) => (
      // f.title.toLowerCase().includes(search_val) 
      // ||
      f.tag.toLowerCase().includes(search_val) ||
      f.price.toString().includes(search_val)
    ))

    setfdata(search_fashiondata);
    console.log(search_fashiondata);
  }

  const filterf_data = fdata.length > 0 ? fdata : fashionpagedata ;

  return (
    <>
      <div className="fashion_section">
        <div className="container">
          <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>

          <div className="input-group justify-content-end">
            <input type="text" className="form-control col-lg-6 col-sm-12" id='fashion_s' placeholder="Search fashion" />
            <button className="btn btn-secondary shadow-none" type="button" onClick={() => handlesearch()} style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}><i className="fa fa-search" /></button>
          </div>

          <div className="fashion_section_2">
            <div className="row">
              {
                filterf_data.map((pd) => {
                  console.log(pd);
                  return (
                    <>
                      <div className="col-lg-4 col-sm-6" key={pd.id.toString()}>
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

export default Fashian;