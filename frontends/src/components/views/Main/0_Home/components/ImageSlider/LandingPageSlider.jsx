import React, { Component } from "react";
import '../../../00Components/pages.css'
import Slider from "react-slick";
import NoImage from './Images/No_Image.jpg'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import SliderCardEmpty from "./EmptySliderCard/SliderCardEmpty";

import './imgslider.css'

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "#c25be9", fontSize: "30px", fontWeight: 'bolder' }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "#c25be9", fontSize: "30px", fontWeight: 'bolder' }} />
      </div>
    );
  };

export default class SimpleSlider extends Component {
  render() {

    return (
        <>
        <div className="Slider_container_resize">
          <Slider 
              slidesToShow={3}
              slidesToScroll={1}
              centerMode
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              centerPadding="115px"
          >
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />

          </Slider>
        </div>
        <div className="Slider_container_resize_second">
          <Slider 
              slidesToShow={3}
              slidesToScroll={3}
              // centerMode
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              centerPadding="115px"
          >
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />

          </Slider>
        </div>
        <div className="Slider_container_resize_third">
          <Slider 
              slidesToShow={2}
              slidesToScroll={2}
              // centerMode
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              centerPadding="115px"
          >
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />

          </Slider>
        </div>
        <div className="Slider_container_resize_mobile">
          <Slider 
              slidesToShow={1}
              slidesToScroll={1}
              // centerMode
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              centerPadding="115px"
          >
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />
            <SliderCardEmpty />

          </Slider>
        </div>
        </>
    );
  }
}




