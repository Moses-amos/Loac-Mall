import React, { Component } from "react";
import Slider from "react-slick";
import NoAdsImage  from './Images/NoAd.png'

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
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 9000
    };
    return (
      <div style={{ width: '100%', height: '450px'}}>
        <Slider 
        // customPaging={(i) => (
        //   <div className="NoSlider_pagination_container">
        //     {i}
        //   </div>
        // )}
        
        dotsClass="slick-dots line-indicator"
         ref={slider => (this.slider = slider)} {...settings}>
         <div style={{ width: '100%', height: '450px', position: 'absolute'}}>
            <img alt=""
            src='https://pbs.twimg.com/media/F62uGGcXYAAGcsW?format=jpg&name=medium'
            style={{ width: '100%', height: '450px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'}} />
          </div>
          <div style={{ width: '100%', height: '450px', position: 'absolute'}}>
            <img alt=""
            src='https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg'
            style={{ width: '100%', height: '450px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'}} />
          </div>
          <div style={{ width: '100%', height: '450px', position: 'absolute'}}>
            <img alt=""
            src='https://img.freepik.com/free-photo/medium-shot-man-looking-jewelry_23-2149726786.jpg?w=740&t=st=1696485464~exp=1696486064~hmac=457b0163df8085f66f8544f2a3853b730d90f912c4ecade20ff35a1c734d8caf'
            style={{ width: '100%', height: '450px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'}} />
          </div>
          <div style={{ width: '100%', height: '450px', position: 'absolute'}}>
            <img alt=""
            src='https://img.freepik.com/free-photo/three-african-woman-choosing-clothes-store-shopping-day-they-buying-jeans_627829-709.jpg?w=740&t=st=1696485450~exp=1696486050~hmac=f018e93e4bbfeaf2b107e7d1f927933d2595cddadf721c9f2f14130148701e28'
            style={{ width: '100%', height: '450px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'}} />
          </div>

          {/* <div style={{ width: '100%', height: '450px', position: 'absolute'}}>
            <img alt=""
            src='https://pbs.twimg.com/media/F62uGGZWMAAiu2I?format=jpg&name=medium'
            style={{ width: '100%', height: '450px', display: 'flex',
              alignItems: 'center', justifyContent: 'center'}} />
          </div> */}
          

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
