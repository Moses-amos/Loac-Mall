import React, { Component } from "react";
import Slider from "react-slick";
import FrontImage from './Images/front.jpg'
import NoAdsImage  from './Images/NoAdsImage.png'

import './imgslider.css'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000
    };
    return (
      <div style={{ width: '640px', height: '430px'}}>
        <Slider 
        customPaging={(i) => (
          <div style={{  position: 'absolute', width: '70px', top: '-10px', opacity: '0'}}>
            {i}
          </div>
        )}
        dotsClass="slick-dots line-indicator" ref={slider => (this.slider = slider)} {...settings}>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src={NoAdsImage}
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px', cursor: 'pointer'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src={NoAdsImage}
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px', cursor: 'pointer'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src={NoAdsImage}
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px', cursor: 'pointer'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src={NoAdsImage}
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px', cursor: 'pointer'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src={NoAdsImage}
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px', cursor: 'pointer'}} />
          </div>
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div> */}
      </div>
    );
  }
}
