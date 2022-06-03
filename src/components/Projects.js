import React from "react";
import "./main.css";
function Projects() {
  return (
    <div className="mainContainer">
      <div className="container">
        <a
          href="https://github.com/sumanthleo/FoodApp-clone"
          target={"_blank"}
          className="link"
        >
          <div className="projectImage">
            <img
              src="https://imgnew.outlookindia.com/public/uploads/articles/2021/11/10/Zomato_investment_lebanon.jpg"
              alt=""
              className="TinderprojectImage"
            />
          </div>
          <div className="text">Zomato-clone</div>
        </a>
      </div>

      {/* hotstar */}
      <div className="container">
        <a
          href="https://github.com/sumanthleo/e-commerce"
          target={"_blank"}
          className="link"
        >
          <div className="projectImage">
            <img
              src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
              alt=""
              className="TinderprojectImage"
            />
          </div>
          <div className="text">E-commerce-clone</div>
        </a>
      </div>
      {/* blog-clone */}

      {/* flipkart-clone */}

      {/* instagram-clone */}
      <div className="container">
        <a href="/" target={"_self"} className="link">
          <div className="projectImage">
            <img
              src="https://www.mediabistro.com/wp-content/uploads/2016/02/tips-on-getting-your-copywriter-portfolio-started.jpg"
              alt=""
              className="TinderprojectImage"
            />
          </div>
          <div className="text">PortFolio</div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
