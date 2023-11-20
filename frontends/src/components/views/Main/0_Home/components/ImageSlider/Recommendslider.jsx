import React, { Component } from "react";
import Slider from "react-slick";
import ImageCard from "../../../../../assets/ImageCard";
import '../../../00Components/pages.css'
import HomeLogos from "../../../../../assets/HomeLogos";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
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

  export default class MultipleItems extends Component {
    render() {

        let Products = this.props.Products;
        // let UserData = this.props.UserData;


    if(Products !== undefined && this.props !== undefined) {

        return (
          <>
          <div className="Slider_container_resize">
        <Slider slidesToShow={3}
                slidesToScroll={1}
                centerMode
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                centerPadding="115px"
                >
          {Products.map((product) => (
                <div className='listing-Recom-Slider'>
                <div className='listing-Details'>
                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                      <ImageCard images={product.imageOne} />
                  </div>
                    <div className='Item-value'>
                    <div className='Item-price'>
                      <span className='Price-span'>N$ {product.price}</span>
                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
            <>
              <div className='Save-Deals'>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span'>Save {product.special}</span>
                </div>
                <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
              </div>
            </>
            :
            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
            <>
            <div className='Save-Deals'>
              <div className='SavePercent'>
                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
              </div>
              <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
            </div>
          </>
          :
          product.special !== "0" && product.specialAttribute !== "0" ?
          <></>
        :
        <></>
            }
                    </div>
                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                    <></>
                    :
                    <div style={{ display: 'flex'}}>
                    <div className='Item-wasPrice'>
                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                    </div>
                    <div className='PriceWas-line_over'>
                    </div>
                    </div>
                    }
                
                  </div>
                  <div className='Item-title_Home'>
                      <p className='Item-title_p'>{product.title}</p>
                  </div>
                  </a>
                
                </div>
                <div className='Company-listing_HomeLogo'>
                <a href={`/product/${product._id}`}>
      <HomeLogos retailerImage={product.retailerImage} />
    </a>
                  </div>
                </div>
        ))}  
              </Slider>
            </div>
            <div className="Slider_container_resize_second">
        <Slider slidesToShow={3}
                slidesToScroll={3}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                centerPadding="125px"
                >
          {Products.map((product) => (
                <div className='listing-Recom-Slider'>
                <div className='listing-Details'>
                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                      <ImageCard images={product.imageOne} />
                  </div>
                    <div className='Item-value'>
                    <div className='Item-price'>
                      <span className='Price-span'>N$ {product.price}</span>
                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
            <>
              <div className='Save-Deals'>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span'>Save {product.special}</span>
                </div>
                <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
              </div>
            </>
            :
            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
            <>
            <div className='Save-Deals'>
              <div className='SavePercent'>
                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
              </div>
              <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
            </div>
          </>
          :
          product.special !== "0" && product.specialAttribute !== "0" ?
          <></>
        :
        <></>
            }
                    </div>
                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                    <></>
                    :
                    <div style={{ display: 'flex'}}>
                    <div className='Item-wasPrice'>
                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                    </div>
                    <div className='PriceWas-line_over'>
                    </div>
                    </div>
                    }
                
                  </div>
                  <div className='Item-title_Home'>
                      <p className='Item-title_p'>{product.title}</p>
                  </div>
                  </a>
                
                </div>
                <div className='Company-listing_HomeLogo'>
                <a href={`/product/${product._id}`}>
      <HomeLogos retailerImage={product.retailerImage} />
    </a>
                  </div>
                </div>
        ))}  
              </Slider>
            </div>
            <div className="Slider_container_resize_third">
        <Slider slidesToShow={2}
                slidesToScroll={2}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                centerPadding="115px"
                >
          {Products.map((product) => (
                <div className='listing-Recom-Slider'>
                <div className='listing-Details'>
                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                      <ImageCard images={product.imageOne} />
                  </div>
                    <div className='Item-value'>
                    <div className='Item-price'>
                      <span className='Price-span'>N$ {product.price}</span>
                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
            <>
              <div className='Save-Deals'>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span'>Save {product.special}</span>
                </div>
                <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
              </div>
            </>
            :
            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
            <>
            <div className='Save-Deals'>
              <div className='SavePercent'>
                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
              </div>
              <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
            </div>
          </>
          :
          product.special !== "0" && product.specialAttribute !== "0" ?
          <></>
        :
        <></>
            }
                    </div>
                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                    <></>
                    :
                    <div style={{ display: 'flex'}}>
                    <div className='Item-wasPrice'>
                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                    </div>
                    <div className='PriceWas-line_over'>
                    </div>
                    </div>
                    }
                
                  </div>
                  <div className='Item-title_Home'>
                      <p className='Item-title_p'>{product.title}</p>
                  </div>
                  </a>
                
                </div>
                <div className='Company-listing_HomeLogo'>
                <a href={`/product/${product._id}`}>
      <HomeLogos retailerImage={product.retailerImage} />
    </a>
                  </div>
                </div>
        ))}  
              </Slider>
            </div>
            <div className="Slider_container_resize_mobile">
        <Slider slidesToShow={1}
                slidesToScroll={1}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                centerPadding="115px"
                >
          {Products.map((product) => (
                <div className='listing-Recom-Slider'>
                <div className='listing-Details'>
                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                      <ImageCard images={product.imageOne} />
                  </div>
                    <div className='Item-value'>
                    <div className='Item-price'>
                      <span className='Price-span'>N$ {product.price}</span>
                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
            <>
              <div className='Save-Deals'>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span'>Save {product.special}</span>
                </div>
                <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
              </div>
            </>
            :
            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
            <>
            <div className='Save-Deals'>
              <div className='SavePercent'>
                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
              </div>
              <div className='Special_Deal_list'>
                <span>Special Sale</span>
              </div> 
            </div>
          </>
          :
          product.special !== "0" && product.specialAttribute !== "0" ?
          <></>
        :
        <></>
            }
                    </div>
                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                    <></>
                    :
                    <div style={{ display: 'flex'}}>
                    <div className='Item-wasPrice'>
                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                    </div>
                    <div className='PriceWas-line_over'>
                    </div>
                    </div>
                    }
                
                  </div>
                  <div className='Item-title_Home'>
                      <p className='Item-title_p'>{product.title}</p>
                  </div>
                  </a>
                
                </div>
                <div className='Company-listing_HomeLogo'>
                <a href={`/product/${product._id}`}>
      <HomeLogos retailerImage={product.retailerImage} />
    </a>
                  </div>
                </div>
        ))}  
              </Slider>
            </div>
            </>
          );
    }
    }
  }
  