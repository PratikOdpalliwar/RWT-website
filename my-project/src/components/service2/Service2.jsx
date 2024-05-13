import React, { useEffect } from 'react';
import animate from 'animateplus';
import "./service2.css"

function ServiceBlock({ icon, title, description, detailButtonIcon }) {
  useEffect(() => {
    animate({
      elements: ".service-block",
      duration: 2000,
      delay: index => index * 100,
      transform: ["scale(0)", "scale(1)"]
    });
  }, []);

  return (
    // did black bag
    <div className="col-lg-4 single-block bg-black">
      <div className="service-block">
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <span className="snow-dot"></span>
        <div className="hover-content"></div>
        <i className={icon}></i>
        <h5 className="title"><a href="#">{title}</a></h5>
        <p>{description}</p>
        <a href="#" className="detail-button"><i className="icon-img"><img src={detailButtonIcon} width="100%" alt="Detail Button Icon"/></i></a>
      </div>
    </div>
  );
}

function OurServices() {
  return (
    <div 
    style={{background:"black"}}
    className="our-service-sass hide-pr show-pr">
      <div className="container">
        <div className="theme-title-one text-center">
          <div className="icon-box hide-pr">
            <img src="http://html.creativegigs.net/rogan/rogan-c/html/images/shape/bg-shape1.svg" alt="" className="bg-shape" />
            <img src="http://html.creativegigs.net/rogan/rogan-c/html/images/icon/icon23.svg" alt="" className="icon" />
          </div>
          <h2 className="main-title">Provide awesome customer service <br /> with our tools.</h2>
        </div>

        <div className="inner-wrapper">
          <div className="row">
            <ServiceBlock
              icon="flaticon-web user"
              title="User Friendly dashboard &amp; Cool Interface."
              description="Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great."
              detailButtonIcon="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"
            />
            <ServiceBlock
              icon="flaticon-value icon-s"
              title="Thousand of features and Custom option."
              description="Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great."
              detailButtonIcon="https://cdn-icons-gif.flaticon.com/6172/6172518.gif"
            />
            <ServiceBlock
              icon="flaticon-login icon-s"
              title="Strong Managment &amp; Security."
              description="Lorem ipsum dolor si amet, an dusino situ  sint pertinacia constituto, mir es dignsius quo great."
              detailButtonIcon="https://cdn-icons-gif.flaticon.com/6172/6172512.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
