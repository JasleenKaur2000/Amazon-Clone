import React from "react";
import "../pages/Home.css";
import { headerItems } from "../utils/productData";
import Banner1 from "../banner images/Banner1.PNG";
import Banner2 from "../banner images/Banner2.PNG";
import Banner3 from "../banner images/Banner3.PNG";
import Banner4 from "../banner images/Banner4.PNG";
import Banner5 from "../banner images/Banner5.PNG";
import Banner6 from "../banner images/Banner6.PNG";
import Slider from "../components/Slider";

const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  return (
    <>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">{/*products*/}</div>
          <div style={{ marginTop: "40px" }}>{/*back to top */}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
