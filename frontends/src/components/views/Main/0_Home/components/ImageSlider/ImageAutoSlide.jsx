import React, { Component } from "react";
import Slider from "react-slick";
import GameSale from './Images/GameSale.jpg'
import FrontImage from './Images/front.jpg'
import HifiCorpSale from './Images/Hifi.jpg'
import EarbudIncredible from './Images/earpiece.jpg'
import MTCSale from './Images/MTC.jpg'
import LaptopHifi from './Images/Laptop.jpg'
import NictusSale from './Images/NictusSale.jfif'
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
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
    };
    return (
      <div style={{ width: '640px', height: '430px', borderRadius: '10px'}}>
        <Slider 
        customPaging={(i) => (
          <div style={{  position: 'absolute', width: '70px', top: '-10px', opacity: '0'}}>
            {i}
          </div>
        )}
        dotsClass="slick-dots line-indicator" ref={slider => (this.slider = slider)} {...settings}>

          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src='https://media.istockphoto.com/id/1249820105/vector/delivery-worker-loads-boxes-in-a-cargo-van-vector-illustration.jpg?s=612x612&w=0&k=20&c=8T3cMmb0Ijiy9IOcXVEHW9ZR3s2FIa3SG-SSPcGc4LU='
            // src="https://promotions.newegg.com/nepro/22-1978/1920x660_sm.jpg"
            // src="https://scontent.fers2-1.fna.fbcdn.net/v/t39.30808-6/312204525_453947930163293_7256185238435890456_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=oeINoouBV8cAX9nzFKc&_nc_ht=scontent.fers2-1.fna&oh=00_AfDJzycbCQWuW5iIKoc6uhn33ICA7NMOzxE2fDLDRnYvFg&oe=637020B5"
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src='https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960'
            // src="https://promotions.newegg.com/nepro/22-1978/1920x660_sm.jpg"
            // src="https://scontent.fers2-1.fna.fbcdn.net/v/t39.30808-6/312204525_453947930163293_7256185238435890456_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=oeINoouBV8cAX9nzFKc&_nc_ht=scontent.fers2-1.fna&oh=00_AfDJzycbCQWuW5iIKoc6uhn33ICA7NMOzxE2fDLDRnYvFg&oe=637020B5"
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px'}} />
          </div>
          <div style={{ width: '100%', height: '430px', position: 'absolute', borderRadius: '10px'}}>
            <img alt=""
            src='https://m.economictimes.com/thumb/msid-81883133,width-1200,height-900,resizemode-4,imgsize-77868/ecommerce-getty.jpg'
            // src="https://promotions.newegg.com/nepro/22-1978/1920x660_sm.jpg"
            // src="https://scontent.fers2-1.fna.fbcdn.net/v/t39.30808-6/312204525_453947930163293_7256185238435890456_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=oeINoouBV8cAX9nzFKc&_nc_ht=scontent.fers2-1.fna&oh=00_AfDJzycbCQWuW5iIKoc6uhn33ICA7NMOzxE2fDLDRnYvFg&oe=637020B5"
            style={{ width: '640px', height: '430px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', borderRadius: '10px'}} />
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
