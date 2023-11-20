import React, { useState, useEffect } from 'react'
import '../productsupload.css'
import TextareaAutosize from 'react-textarea-autosize';


function ClothesUpload(props) {

    const [toggleSleeveLenght, settoggleSleeveLenght] = useState(0);
    const [toggleSockSize, settoggleSockSize] = useState(0)

    const SleeveLenght = (index) => {
        settoggleSleeveLenght(index);
    }

    const SockLenght = (index) => {
        settoggleSockSize(index);
    }

    const onBrandChange = (event) => {
        props.setBrandValue(event.currentTarget.value)
        }

        const onColorValueChange = (event) => {
            props.setColorValue(event.currentTarget.value);
          }

                const ClothMaterialCategory = (event) => {
                    props.setClothMaterial(event.currentTarget.value);
                  }

                  const InclusionsChange = (event) => {
                    props.setInclusions(event.currentTarget.value)
                    }

                    const DimensionsChange = (event) => {
                        props.setDimensions(event.currentTarget.value)
                        }
                
                const ShortSleevesCategory = () => {
                    props.setWomenClothSleeves("Short Sleeve");
                  }

                  const LongSleevesCategory = () => {
                    props.setWomenClothSleeves("Long Sleeve");
                  }

                  const NoSleevesCategory = () => {
                    props.setWomenClothSleeves("No Sleeve");
                  }

                  const KneeHighSocks = () => {
                    props.setSockHight("Knee High");
                  }

                  const MidCutSocks = () => {
                    props.setSockHight("Mid Cut");
                  }

                  const LowCutSocks = () => {
                    props.setSockHight("Low Cut");
                  }

                  const ExtraSmallSizeSelect = () => props.setExtraSmallSize(!props.ExtraSmallSize)
                  const SmallSizeSelect = () => props.setSmallSize(!props.SmallSize)
                  const MediumSizeSelect = () => props.setMediumSize(!props.MediumSize)
                  const LargeSizeSelect = () => props.setLargeSize(!props.LargeSize)
                  const ExtraLargeSizeSelect = () => props.setExtraLargeSize(!props.ExtraLargeSize)
                  const DoubleExtraLargeSizeSelect = () => props.setDoubleXLSize(!props.DoubleXLSize)

                  const SevenToEightYearsSizeSelect = () => props.setSevenToEightSize(!props.SevenToEightSize)
                  const EightToNineSizeSelect = () => props.setEightToNineSize(!props.EightToNineSize)
                  const NineToTenSizeSelect = () => props.setNineToTenSize(!props.NineToTenSize)
                  const ElevenToTwelveSizeSelect = () => props.setElevenToTwelveSize(!props.ElevenToTwelveSize)
                  const TwelveToThirteenSizeSelect = () => props.setTwelveToThirteenSize(!props.TwelveToThirteenSize)
                  const ThirteenToFourteenSizeSelect = () => props.setThirteenToFourteenSize(!props.ThirteenToFourteenSize)

                  const ThreeToFourSizeSelect = () => props.setThreeToFourSize(!props.ThreeToFourSize)
                  const FourToFiveSizeSelect = () => props.setFourToFiveSize(!props.FourToFiveSize)
                  const FiveToSixSizeSelect = () => props.setFiveToSixSize(!props.FiveToSixSize)
                  const SixToSevenSizeSelect = () => props.setSixToSevenSize(!props.SixToSevenSize)

                  const ThreeToSixMonthsSizeSelect = () => props.setThreeToSixMonthsSize(!props.ThreeToSixMonthsSize)
                  const SixToTwelveMonthSizeSelect = () => props.setSixToTwelveMonthSize(!props.SixToTwelveMonthSize)
                  const TwelveToThirtySixMonthSizeSelect = () => props.setTwelveToThirtySixMonthSize(!props.TwelveToThirtySixMonthSize)

                  const ZeroToThreeMonthsSelect = () => props.setZeroToThreeMonthsSize(!props.ZeroToThreeMonthsSize)
                  const SixToYearSizeSelect = () => props.setSixToYearSize(!props.SixToYearSize)


  return (
  
    <>
                {/* Man - Women Clothes */}
                <div className={ props.ProductType=== "Women Active Top" || props.ProductType=== "Women Active Crop Top" || props.ProductType=== "Women Sweatshirt"
                 || props.ProductType=== "Women Blouse" || props.ProductType=== "Women Tunic Top" || props.ProductType=== "Women Top" || props.ProductType=== "Women Button Shirt"
                 || props.ProductType=== "Women Polo Shirt" || props.ProductType=== "Women Turtleneck" || props.ProductType=== "Women Graphic Tee" || props.ProductType=== "Women T-shirt"
                 || props.ProductType=== "Women Jumpsuit" || props.ProductType=== "Women Romper" || props.ProductType=== "Women Maxi Dress" || props.ProductType=== "Women Midi Dress"
                 || props.ProductType=== "Women Mini Dress" || props.ProductType=== "Women Maxi Bodycon" || props.ProductType=== "Women Midi Bodycon" || props.ProductType=== "Women Mini Bodycon"
                 || props.ProductType=== "Women Asymmetrical Dress" || props.ProductType=== "Women Blazer Dress"
                 || props.ProductType=== "Women Blouson Dress" || props.ProductType=== "Women Corset Dress" || props.ProductType=== "Women Fit & Flare Dress"
                 || props.ProductType=== "Women Cocktail Dress" || props.ProductType=== "Women Sun Dress" || props.ProductType=== "Women Denim Dress"
                 || props.ProductType=== "Women Lace Dress" || props.ProductType=== "Women Peplum Dress" || props.ProductType=== "Women Shirt Dress" 
                 || props.ProductType=== "Women Sweater Dress" || props.ProductType=== "Women Pinafore Dress"|| props.ProductType=== "Man Active Jacket"
                 || props.ProductType=== "Man Active Topwear" || props.ProductType=== "Man Sweatshirt" || props.ProductType=== "Man Activewear"
                 || props.ProductType=== "Man T-Shirt" || props.ProductType=== "Man Graphic Tee" || props.ProductType=== "Man Button Shirt" 
                 || props.ProductType=== "Man Flannel Shirt" || props.ProductType=== "Women Flannel Shirt" || props.ProductType=== "Man Turtleneck"
                 || props.ProductType=== "Man Polo Shirt" || props.ProductType=== "Man Dress Shirt"
                  ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Style:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSleeveLenght ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(1); ShortSleevesCategory()}} >
            <span>Short Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(2); LongSleevesCategory()}} >
          <span>Long Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===3 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(3); NoSleevesCategory()}} >
          <span>No Sleeve</span>
          </div>
        </div>
      </div>
                            </li>
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ExtraSmallSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraSmallSizeSelect} >
            <span>Extra Small</span>
          </div>
          <div className={props.SmallSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SmallSizeSelect} >
          <span>Small</span>
          </div>
          <div className={props.MediumSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={MediumSizeSelect} >
          <span>Medium</span>
          </div>
          <div className={props.LargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={LargeSizeSelect} >
          <span>Large</span>
          </div>
          <div className={props.ExtraLargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraLargeSizeSelect} >
          <span>Extra Large</span>
          </div>
          <div className={props.DoubleXLSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={DoubleExtraLargeSizeSelect} >
          <span>Double XL +</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Boy Active Vest" || props.ProductType=== "Boy Active Jacket" || props.ProductType=== "Boy Sweatshirt"
                 || props.ProductType=== "Boy Activewear" || props.ProductType=== "Boy T-Shirt" || props.ProductType=== "Boy Active Vest"
                 || props.ProductType=== "Boy Graphic Tee" || props.ProductType=== "Boy Button Shirt" || props.ProductType=== "Boy Flannel Shirt"
                 || props.ProductType=== "Boy Turtleneck" || props.ProductType=== "Boy Turtleneck" || props.ProductType=== "Boy Polo Shirt"
                 || props.ProductType=== "Boy Dress Shirt" || props.ProductType=== "Girl Active Top" || props.ProductType=== "Girl Active Crop Top"
                 || props.ProductType=== "Girl Sweatshirt" || props.ProductType=== "Girl Blouse" || props.ProductType=== "Girl Tunic Top" || props.ProductType=== "Girl Top" || props.ProductType=== "Girl Button Shirt"
                 || props.ProductType=== "Girl Polo Shirt" || props.ProductType=== "Girl Turtleneck" || props.ProductType=== "Girl Graphic Tee" || props.ProductType=== "Girl T-shirt"
                 || props.ProductType=== "Girl Jumpsuit" || props.ProductType=== "Girl Romper" || props.ProductType=== "Girl Maxi Dress" || props.ProductType=== "Girl Midi Dress"
                 || props.ProductType=== "Girl Mini Dress" || props.ProductType=== "Girl Maxi Bodycon" || props.ProductType=== "Girl Midi Bodycon" || props.ProductType=== "Girl Mini Bodycon"
                 || props.ProductType=== "Girl Skirt" || props.ProductType=== "Boy Active Topwear"
                  ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Style:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSleeveLenght ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(1); ShortSleevesCategory()}} >
            <span>Short Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(2); LongSleevesCategory()}} >
          <span>Long Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===3 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(3); NoSleevesCategory()}} >
          <span>No Sleeve</span>
          </div>
        </div>
      </div>
                            </li>
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.SevenToEightSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SevenToEightYearsSizeSelect} >
            <span>7 - 8 yrs</span>
          </div>
          <div className={props.EightToNineSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={EightToNineSizeSelect} >
          <span>8 - 9 yrs</span>
          </div>
          <div className={props.NineToTenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={NineToTenSizeSelect} >
          <span>9 - 10 yrs</span>
          </div>
          <div className={props.ElevenToTwelveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ElevenToTwelveSizeSelect} >
          <span>11 - 12 yrs</span>
          </div>
          <div className={props.TwelveToThirteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirteenSizeSelect} >
          <span>12 - 13 yrs</span>
          </div>
          <div className={props.ThirteenToFourteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThirteenToFourteenSizeSelect} >
          <span>13 - 14 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Kid Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Kid Boy Active Vest" || props.ProductType=== "Kid Boy Active Jacket" || props.ProductType=== "Kid Boy Sweatshirt"
                 || props.ProductType=== "Kid Boy Activewear" || props.ProductType=== "Kid Boy T-Shirt" || props.ProductType=== "Kid Boy Active Vest"
                 || props.ProductType=== "Kid Boy Graphic Tee" || props.ProductType=== "Kid Boy Button Shirt" || props.ProductType=== "Kid Boy Flannel Shirt"
                 || props.ProductType=== "Kid Boy Turtleneck" || props.ProductType=== "Kid Boy Turtleneck" || props.ProductType=== "Kid Boy Polo Shirt"
                 || props.ProductType=== "Kid Boy Dress Shirt" || props.ProductType=== "Kid Girl Active Top" || props.ProductType=== "Kid Girl Active Crop Top"
                 || props.ProductType=== "Kid Girl Sweatshirt" || props.ProductType=== "Kid Girl Blouse" || props.ProductType=== "Kid Girl Tunic Top" || props.ProductType=== "Kid Girl Top" || props.ProductType=== "Kid Girl Button Shirt"
                 || props.ProductType=== "Kid Girl Polo Shirt" || props.ProductType=== "Kid Girl Turtleneck" || props.ProductType=== "Kid Girl Graphic Tee" || props.ProductType=== "Kid Girl T-shirt"
                 || props.ProductType=== "Kid Girl Jumpsuit" || props.ProductType=== "Kid Girl Romper" || props.ProductType=== "Kid Girl Maxi Dress" || props.ProductType=== "Kid Girl Midi Dress"
                 || props.ProductType=== "Kid Girl Mini Dress" || props.ProductType=== "Kid Girl Maxi Bodycon" || props.ProductType=== "Kid Girl Midi Bodycon" || props.ProductType=== "Kid Girl Mini Bodycon"
                 || props.ProductType=== "Kid Girl Skirt" || props.ProductType=== "Kid Boy Active Topwear"
                  ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Style:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSleeveLenght ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(1); ShortSleevesCategory()}} >
            <span>Short Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(2); LongSleevesCategory()}} >
          <span>Long Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===3 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(3); NoSleevesCategory()}} >
          <span>No Sleeve</span>
          </div>
        </div>
      </div>
                            </li>
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToFourSizeSelect} >
            <span>3 - 4 yrs</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FourToFiveSizeSelect} >
          <span>4 - 5 yrs</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FiveToSixSizeSelect} >
          <span>5 - 6 yrs</span>
          </div>
          <div className={props.SixToSevenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToSevenSizeSelect} >
          <span>6 - 7 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Toddler Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Toddler Boy Active Vest" || props.ProductType=== "Toddler Boy Active Jacket" || props.ProductType=== "Toddler Boy Sweatshirt"
                 || props.ProductType=== "Toddler Boy Activewear" || props.ProductType=== "Toddler Boy T-Shirt" || props.ProductType=== "Toddler Boy Active Vest"
                 || props.ProductType=== "Toddler Boy Graphic Tee" || props.ProductType=== "Toddler Boy Button Shirt" || props.ProductType=== "Toddler Boy Flannel Shirt"
                 || props.ProductType=== "Toddler Boy Turtleneck" || props.ProductType=== "Toddler Boy Turtleneck" || props.ProductType=== "Toddler Boy Polo Shirt"
                 || props.ProductType=== "Toddler Boy Dress Shirt" || props.ProductType=== "Toddler Girl Active Top" || props.ProductType=== "Toddler Girl Active Crop Top"
                 || props.ProductType=== "Toddler Girl Sweatshirt" || props.ProductType=== "Toddler Girl Blouse" || props.ProductType=== "Toddler Girl Tunic Top" || props.ProductType=== "Toddler Girl Top" || props.ProductType=== "Toddler Girl Button Shirt"
                 || props.ProductType=== "Toddler Girl Polo Shirt" || props.ProductType=== "Toddler Girl Turtleneck" || props.ProductType=== "Toddler Girl Graphic Tee" || props.ProductType=== "Toddler Girl T-shirt"
                 || props.ProductType=== "Toddler Girl Jumpsuit" || props.ProductType=== "Toddler Girl Romper" || props.ProductType=== "Toddler Girl Maxi Dress" || props.ProductType=== "Toddler Girl Midi Dress"
                 || props.ProductType=== "Toddler Girl Mini Dress" || props.ProductType=== "Toddler Girl Maxi Bodycon" || props.ProductType=== "Toddler Girl Midi Bodycon" || props.ProductType=== "Toddler Girl Mini Bodycon"
                 || props.ProductType=== "Toddler Girl Skirt" || props.ProductType=== "Toddler Boy Active Topwear"
                  ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Style:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSleeveLenght ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(1); ShortSleevesCategory()}} >
            <span>Short Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(2); LongSleevesCategory()}} >
          <span>Long Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===3 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(3); NoSleevesCategory()}} >
          <span>No Sleeve</span>
          </div>
        </div>
      </div>
                            </li>
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToSixMonthsSizeSelect} >
            <span>3 - 6 mnths</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToTwelveMonthSizeSelect} >
          <span>6 - 12 mnths</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirtySixMonthSizeSelect} >
          <span>12 - 36 mnths</span>
          </div>
          
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>
                    
                    {/* Man - Women Clothes */}
                    <div className={ props.ProductType=== "Women Tank Top" || props.ProductType=== "Women Active Jacket" || props.ProductType=== "Women Sport Bra"
                     || props.ProductType=== "Women Activewear" || props.ProductType=== "Women Tracksuit" || props.ProductType=== "Women Jogger Pants"
                     || props.ProductType=== "Women Yoga Pants" || props.ProductType=== "Women Sweatpants" || props.ProductType=== "Women Skort"
                     || props.ProductType=== "Women Bustier Corset" || props.ProductType=== "Women Waistcoat" || props.ProductType=== "Women Pantsuit"
                     || props.ProductType=== "Women Two Piece Suit" || props.ProductType=== "Women Jean Jacket" || props.ProductType=== "Women Leather Jacket"
                     || props.ProductType=== "Women Bomber Jacket" || props.ProductType=== "Women Puffer Jacket" || props.ProductType=== "Women Fleece Jacket"
                     || props.ProductType=== "Women Faux Jacket" || props.ProductType=== "Women Parka Jacket" || props.ProductType=== "Women Shacket"
                     || props.ProductType=== "Women Rain Jacket" || props.ProductType=== "Man Active Vest" || props.ProductType=== "Man Tracksuit"
                     || props.ProductType=== "Man Activewear" || props.ProductType=== "Man Sweatpants" || props.ProductType=== "Man Suit"
                     || props.ProductType=== "Man Tuxedo" || props.ProductType=== "Man Jean Jacket" || props.ProductType=== "Man Leather Jacket"
                     || props.ProductType=== "Man Bomber Jacket" || props.ProductType=== "Man Puffer Jacket" || props.ProductType=== "Man Fleece Jacket" 
                     || props.ProductType=== "Man Faux Jacket" || props.ProductType=== "Man Parka Jacket" || props.ProductType=== "Man Shacket" 
                     || props.ProductType=== "Man Rain Jacket"
                     ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ExtraSmallSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraSmallSizeSelect} >
            <span>Extra Small</span>
          </div>
          <div className={props.SmallSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SmallSizeSelect} >
          <span>Small</span>
          </div>
          <div className={props.MediumSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={MediumSizeSelect} >
          <span>Medium</span>
          </div>
          <div className={props.LargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={LargeSizeSelect} >
          <span>Large</span>
          </div>
          <div className={props.ExtraLargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraLargeSizeSelect} >
          <span>Extra Large</span>
          </div>
          <div className={props.DoubleXLSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={DoubleExtraLargeSizeSelect} >
          <span>Double XL +</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Boy Sweatpants" || props.ProductType=== "Boy Tracksuit"
                     || props.ProductType=== "Boy Jogger Pants" || props.ProductType=== "Boy Suit" || props.ProductType=== "Boy Tuxedo"
                     || props.ProductType=== "Boy Jean Jacket" || props.ProductType=== "Boy Leather Jacket" || props.ProductType=== "Boy Bomber Jacket"
                     || props.ProductType=== "Boy Puffer Jacket" || props.ProductType=== "Boy Fleece Jacket" || props.ProductType=== "Boy Faux Jacket"
                     || props.ProductType=== "Boy Parka Jacket" || props.ProductType=== "Boy Shacket" || props.ProductType=== "Boy Rain Jacket"
                     || props.ProductType=== "Girl Tank Top" || props.ProductType=== "Girl Active Jacket" || props.ProductType=== "Girl Sport Bra"
                     || props.ProductType=== "Girl Activewear" || props.ProductType=== "Girl Tracksuit" || props.ProductType=== "Girl Jogger Pants"
                     || props.ProductType=== "Girl Yoga Pants" || props.ProductType=== "Girl Sweatpants" || props.ProductType=== "Girl Skort"
                     || props.ProductType=== "Girl Bustier Corset" || props.ProductType=== "Girl Waistcoat" || props.ProductType=== "Girl Pantsuit"
                     || props.ProductType=== "Girl Two Piece Suit" || props.ProductType=== "Girl Jean Jacket" || props.ProductType=== "Girl Leather Jacket"
                     || props.ProductType=== "Girl Bomber Jacket" || props.ProductType=== "Girl Puffer Jacket" || props.ProductType=== "Girl Fleece Jacket"
                     || props.ProductType=== "Girl Faux Jacket" || props.ProductType=== "Girl Parka Jacket" || props.ProductType=== "Girl Shacket"
                     || props.ProductType=== "Girl Rain Jacket" || props.ProductType=== "Girl Rain Jacket"
                     || props.ProductType=== "Girl Outfit" || props.ProductType=== "Boy Outfit"
                     ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.SevenToEightSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SevenToEightYearsSizeSelect} >
            <span>7 - 8 yrs</span>
          </div>
          <div className={props.EightToNineSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={EightToNineSizeSelect} >
          <span>8 - 9 yrs</span>
          </div>
          <div className={props.NineToTenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={NineToTenSizeSelect} >
          <span>9 - 10 yrs</span>
          </div>
          <div className={props.ElevenToTwelveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ElevenToTwelveSizeSelect} >
          <span>11 - 12 yrs</span>
          </div>
          <div className={props.TwelveToThirteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirteenSizeSelect} >
          <span>12 - 13 yrs</span>
          </div>
          <div className={props.ThirteenToFourteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThirteenToFourteenSizeSelect} >
          <span>13 - 14 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Kid Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Kid Boy Sweatpants" || props.ProductType=== "Kid Boy Tracksuit"
                     || props.ProductType=== "Kid Boy Jogger Pants" || props.ProductType=== "Kid Boy Suit" || props.ProductType=== "Kid Boy Tuxedo"
                     || props.ProductType=== "Kid Boy Jean Jacket" || props.ProductType=== "Kid Boy Leather Jacket" || props.ProductType=== "Kid Boy Bomber Jacket"
                     || props.ProductType=== "Kid Boy Puffer Jacket" || props.ProductType=== "Kid Boy Fleece Jacket" || props.ProductType=== "Kid Boy Faux Jacket"
                     || props.ProductType=== "Kid Boy Parka Jacket" || props.ProductType=== "Kid Boy Shacket" || props.ProductType=== "Kid Boy Rain Jacket"
                     || props.ProductType=== "Kid Girl Tank Top" || props.ProductType=== "Kid Girl Active Jacket" || props.ProductType=== "Kid Girl Sport Bra"
                     || props.ProductType=== "Kid Girl Activewear" || props.ProductType=== "Kid Girl Tracksuit" || props.ProductType=== "Kid Girl Jogger Pants"
                     || props.ProductType=== "Kid Girl Yoga Pants" || props.ProductType=== "Kid Girl Sweatpants" || props.ProductType=== "Kid Girl Skort"
                     || props.ProductType=== "Kid Girl Bustier Corset" || props.ProductType=== "Kid Girl Waistcoat" || props.ProductType=== "Kid Girl Pantsuit"
                     || props.ProductType=== "Kid Girl Two Piece Suit" || props.ProductType=== "Kid Girl Jean Jacket" || props.ProductType=== "Kid Girl Leather Jacket"
                     || props.ProductType=== "Kid Girl Bomber Jacket" || props.ProductType=== "Kid Girl Puffer Jacket" || props.ProductType=== "Kid Girl Fleece Jacket"
                     || props.ProductType=== "Kid Girl Faux Jacket" || props.ProductType=== "Kid Girl Parka Jacket" || props.ProductType=== "Kid Girl Shacket"
                     || props.ProductType=== "Kid Girl Rain Jacket" || props.ProductType=== "Kid Girl Rain Jacket"
                     || props.ProductType=== "Kid Girl Outfit" || props.ProductType=== "Kid Boy Outfit"
                    ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToFourSizeSelect} >
            <span>3 - 4 yrs</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FourToFiveSizeSelect} >
          <span>4 - 5 yrs</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FiveToSixSizeSelect} >
          <span>5 - 6 yrs</span>
          </div>
          <div className={props.SixToSevenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToSevenSizeSelect} >
          <span>6 - 7 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Toddler Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Toddler Boy Sweatpants" || props.ProductType=== "Toddler Boy Tracksuit"
                     || props.ProductType=== "Toddler Boy Jogger Pants" || props.ProductType=== "Toddler Boy Suit" || props.ProductType=== "Toddler Boy Tuxedo"
                     || props.ProductType=== "Toddler Boy Jean Jacket" || props.ProductType=== "Toddler Boy Leather Jacket" || props.ProductType=== "Toddler Boy Bomber Jacket"
                     || props.ProductType=== "Toddler Boy Puffer Jacket" || props.ProductType=== "Toddler Boy Fleece Jacket" || props.ProductType=== "Toddler Boy Faux Jacket"
                     || props.ProductType=== "Toddler Boy Parka Jacket" || props.ProductType=== "Toddler Boy Shacket" || props.ProductType=== "Toddler Boy Rain Jacket"
                     || props.ProductType=== "Toddler Girl Tank Top" || props.ProductType=== "Toddler Girl Active Jacket" || props.ProductType=== "Toddler Girl Sport Bra"
                     || props.ProductType=== "Toddler Girl Activewear" || props.ProductType=== "Toddler Girl Tracksuit" || props.ProductType=== "Toddler Girl Jogger Pants"
                     || props.ProductType=== "Toddler Girl Yoga Pants" || props.ProductType=== "Toddler Girl Sweatpants" || props.ProductType=== "Toddler Girl Skort"
                     || props.ProductType=== "Toddler Girl Bustier Corset" || props.ProductType=== "Toddler Girl Waistcoat" || props.ProductType=== "Toddler Girl Pantsuit"
                     || props.ProductType=== "Toddler Girl Two Piece Suit" || props.ProductType=== "Toddler Girl Jean Jacket" || props.ProductType=== "Toddler Girl Leather Jacket"
                     || props.ProductType=== "Toddler Girl Bomber Jacket" || props.ProductType=== "Toddler Girl Puffer Jacket" || props.ProductType=== "Toddler Girl Fleece Jacket"
                     || props.ProductType=== "Toddler Girl Faux Jacket" || props.ProductType=== "Toddler Girl Parka Jacket" || props.ProductType=== "Toddler Girl Shacket"
                     || props.ProductType=== "Toddler Girl Rain Jacket" || props.ProductType=== "Toddler Girl Rain Jacket"
                     || props.ProductType=== "Toddler Girl Outfit" || props.ProductType=== "Toddler Boy Outfit"
                    ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToSixMonthsSizeSelect} >
            <span>3 - 6 mnths</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToTwelveMonthSizeSelect} >
          <span>6 - 12 mnths</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirtySixMonthSizeSelect} >
          <span>12 - 36 mnths</span>
          </div>
          
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>
                    
                    {/* Man - Women Clothes */}
                    <div className={ props.ProductType=== "Women Short" || props.ProductType=== "Women Seamless Short" || props.ProductType=== "Women Workout Short" || props.ProductType=== "Women Leggings"
                     || props.ProductType=== "Women Capri Pants" || props.ProductType=== "Women Blazer" || props.ProductType=== "Women Sweater"
                     || props.ProductType=== "Women Cardigan" || props.ProductType=== "Women Hoodie" || props.ProductType=== "Women Crop Top Hoodie"
                     || props.ProductType=== "Women Sweatshirt" || props.ProductType=== "Women Trench Coat" || props.ProductType=== "Women Peacoat"
                     || props.ProductType=== "Women Asymmetrical Skirt" || props.ProductType=== "Women High Waist Skirt" || props.ProductType=== "Women Mini Skirt"
                     || props.ProductType=== "Women Pencil Skirt" || props.ProductType=== "Women Peplum Skirt" || props.ProductType=== "Women Pleated Skirt"
                     || props.ProductType=== "Women Wrap Skirt" || props.ProductType=== "Women Straight Jeans" || props.ProductType=== "Women Bootcut Jeans"
                     || props.ProductType=== "Women Skinny Jeans" || props.ProductType=== "Women Jeggings" || props.ProductType=== "Women Boyfriend Jeans" 
                     || props.ProductType=== "Women High Waisted Jeans" || props.ProductType=== "Women Baggy Jeans" || props.ProductType=== "Women Flare Jeans"
                     || props.ProductType=== "Women Cropped Jeans" || props.ProductType=== "Women Denim Shorts" || props.ProductType=== "Women Pajama Set"
                     || props.ProductType=== "Women Pajama Pants" || props.ProductType=== "Women Pajama Short" || props.ProductType=== "Women Sleep Top"
                     || props.ProductType=== "Women Nightgown" || props.ProductType=== "Women Sleepshirt" || props.ProductType=== "Women Babydoll Chemise"
                     || props.ProductType=== "Women Robe" || props.ProductType=== "Women Loungewear Set" || props.ProductType=== "Man Jogger Pants"
                     || props.ProductType=== "Man Workout Short" || props.ProductType=== "Man Short" || props.ProductType=== "Man Swim Trunk"
                     || props.ProductType=== "Man Denim Short" || props.ProductType=== "Man Cargo Short" || props.ProductType=== "Man Khaki Short"
                     || props.ProductType=== "Women Cargo Short" || props.ProductType=== "Women Cargo Pants" || props.ProductType=== "Women Khaki Pants"
                     || props.ProductType=== "Women Khaki Short" || props.ProductType=== "Man Cargo Pants" || props.ProductType=== "Man Khaki Pants"
                     || props.ProductType=== "Man Blazer" || props.ProductType=== "Man Sweater" || props.ProductType=== "Man Hoodie"
                     || props.ProductType=== "Man Sweatshirt" || props.ProductType=== "Man Trench Coat" || props.ProductType=== "Man Peacoat"
                     || props.ProductType=== "Man Bootcut Jeans" || props.ProductType=== "Man Straight Jeans" || props.ProductType=== "Man Straight Jeans"
                     || props.ProductType=== "Man Skinny Jeans" || props.ProductType=== "Man Slim-Fit Jeans" || props.ProductType=== "Man Denim Jeans"
                     || props.ProductType=== "Man Boxers" || props.ProductType=== "Man Boxer Briefs" || props.ProductType=== "Man Underwear Briefs"
                     || props.ProductType=== "Man Underwear Pack" || props.ProductType=== "Man Pajama Set" || props.ProductType=== "Man Pajama Pants"
                     || props.ProductType=== "Man Pajama Short" || props.ProductType=== "Man Sleep Topwear" || props.ProductType=== "Man Robe"
                     || props.ProductType=== "Man Loungewear Set"

                   ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Polyester, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ExtraSmallSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraSmallSizeSelect} >
            <span>Extra Small</span>
          </div>
          <div className={props.SmallSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SmallSizeSelect} >
          <span>Small</span>
          </div>
          <div className={props.MediumSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={MediumSizeSelect} >
          <span>Medium</span>
          </div>
          <div className={props.LargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={LargeSizeSelect} >
          <span>Large</span>
          </div>
          <div className={props.ExtraLargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraLargeSizeSelect} >
          <span>Extra Large</span>
          </div>
          <div className={props.DoubleXLSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={DoubleExtraLargeSizeSelect} >
          <span>Double XL +</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Boy Workout Short" || props.ProductType=== "Boy Short"
                     || props.ProductType=== "Boy Swim Short" || props.ProductType=== "Boy Denim Short" || props.ProductType=== "Boy Workout Short"
                     || props.ProductType=== "Boy Cargo Short" || props.ProductType=== "Boy Khaki Short" || props.ProductType=== "Boy Khaki Pants"
                     || props.ProductType=== "Boy Cargo Pants" || props.ProductType=== "Boy Jogger Pants" || props.ProductType=== "Boy Sweatpants"
                     || props.ProductType=== "Boy Blazer" || props.ProductType=== "Boy Sweater" || props.ProductType=== "Boy Hoodie"
                     || props.ProductType=== "Boy Sweatshirt" || props.ProductType=== "Boy Trench Coat" || props.ProductType=== "Boy Peacoat" 
                     || props.ProductType=== "Boy Straight Jeans" || props.ProductType=== "Boy Bootcut Jeans" || props.ProductType=== "Boy Skinny Jeans"
                     || props.ProductType=== "Boy Slim-Fit Jeans" || props.ProductType=== "Boy Denim Shorts" || props.ProductType=== "Boy Underwear Pack"
                     || props.ProductType=== "Boy Boxers" || props.ProductType=== "Boy Boxer Briefs" || props.ProductType=== "Boy Underwear Briefs"
                     || props.ProductType=== "Boy Pajama Short" || props.ProductType=== "Boy Sleep Topwear" || props.ProductType=== "Boy Robe"
                     || props.ProductType=== "Boy Loungewear Set" || props.ProductType=== "Boy Pajama Set" || props.ProductType=== "Boy Pajama Pants"
                     || props.ProductType=== "Girl Short" || props.ProductType=== "Girl Seamless Short" || props.ProductType=== "Girl Workout Short"
                     || props.ProductType=== "Girl Capri Pants" || props.ProductType=== "Girl Blazer" || props.ProductType=== "Girl Khaki Short"
                     || props.ProductType=== "Girl Cargo Short" || props.ProductType=== "Girl Cargo Pants" || props.ProductType=== "Girl Khaki Pants"
                     || props.ProductType=== "Girl Sweater" || props.ProductType=== "Girl Leggings"
                     || props.ProductType=== "Girl Cardigan" || props.ProductType=== "Girl Hoodie" || props.ProductType=== "Girl Crop Top Hoodie"
                     || props.ProductType=== "Girl Sweatshirt" || props.ProductType=== "Girl Trench Coat" || props.ProductType=== "Girl Peacoat"
                     || props.ProductType=== "Girl Straight Jeans" || props.ProductType=== "Girl Bootcut Jeans"
                     || props.ProductType=== "Girl Skinny Jeans" || props.ProductType=== "Girl Jeggings" || props.ProductType=== "Girl Boyfriend Jeans" 
                     || props.ProductType=== "Girl High Waisted Jeans" || props.ProductType=== "Girl Baggy Jeans" || props.ProductType=== "Girl Flare Jeans"
                     || props.ProductType=== "Girl Cropped Jeans" || props.ProductType=== "Girl Denim Shorts" || props.ProductType=== "Girl Seamless Bra"
                     || props.ProductType=== "Girl Sports Bra" || props.ProductType=== "Girl Bra Pack" || props.ProductType=== "Girl Pajama Set"
                     || props.ProductType=== "Girl Pajama Pants" || props.ProductType=== "Girl Pajama Short" || props.ProductType=== "Girl Sleep Top"
                     || props.ProductType=== "Girl Nightgown" || props.ProductType=== "Girl Sleepshirt" || props.ProductType=== "Girl Babydoll Chemise"
                     || props.ProductType=== "Girl Robe" || props.ProductType=== "Girl Loungewear Set"

                   ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Polyester, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.SevenToEightSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SevenToEightYearsSizeSelect} >
            <span>7 - 8 yrs</span>
          </div>
          <div className={props.EightToNineSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={EightToNineSizeSelect} >
          <span>8 - 9 yrs</span>
          </div>
          <div className={props.NineToTenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={NineToTenSizeSelect} >
          <span>9 - 10 yrs</span>
          </div>
          <div className={props.ElevenToTwelveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ElevenToTwelveSizeSelect} >
          <span>11 - 12 yrs</span>
          </div>
          <div className={props.TwelveToThirteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirteenSizeSelect} >
          <span>12 - 13 yrs</span>
          </div>
          <div className={props.ThirteenToFourteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThirteenToFourteenSizeSelect} >
          <span>13 - 14 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Kid Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Kid Boy Workout Short" || props.ProductType=== "Kid Boy Short"
                     || props.ProductType=== "Kid Boy Swim Short" || props.ProductType=== "Kid Boy Denim Short" || props.ProductType=== "Kid Boy Workout Short"
                     || props.ProductType=== "Kid Boy Cargo Short" || props.ProductType=== "Kid Boy Khaki Short" || props.ProductType=== "Kid Boy Khaki Pants"
                     || props.ProductType=== "Kid Boy Cargo Pants" || props.ProductType=== "Kid Boy Jogger Pants" || props.ProductType=== "Kid Boy Sweatpants"
                     || props.ProductType=== "Kid Boy Blazer" || props.ProductType=== "Kid Boy Sweater" || props.ProductType=== "Kid Boy Hoodie"
                     || props.ProductType=== "Kid Boy Sweatshirt" || props.ProductType=== "Kid Boy Trench Coat" || props.ProductType=== "Kid Boy Peacoat" 
                     || props.ProductType=== "Kid Boy Straight Jeans" || props.ProductType=== "Kid Boy Bootcut Jeans" || props.ProductType=== "Kid Boy Skinny Jeans"
                     || props.ProductType=== "Kid Boy Slim-Fit Jeans" || props.ProductType=== "Kid Boy Denim Shorts" || props.ProductType=== "Kid Boy Underwear Pack"
                     || props.ProductType=== "Kid Boy Boxers" || props.ProductType=== "Kid Boy Boxer Briefs" || props.ProductType=== "Kid Boy Underwear Briefs"
                     || props.ProductType=== "Kid Boy Pajama Short" || props.ProductType=== "Kid Boy Sleep Topwear" || props.ProductType=== "Kid Boy Robe"
                     || props.ProductType=== "Kid Boy Loungewear Set" || props.ProductType=== "Kid Boy Pajama Set" || props.ProductType=== "Kid Boy Pajama Pants"
                     || props.ProductType=== "Kid Girl Short" || props.ProductType=== "Kid Girl Seamless Short" || props.ProductType=== "Kid Girl Workout Short"
                     || props.ProductType=== "Kid Girl Capri Pants" || props.ProductType=== "Kid Girl Blazer" || props.ProductType=== "Kid Girl Khaki Short"
                     || props.ProductType=== "Kid Girl Cargo Short" || props.ProductType=== "Kid Girl Cargo Pants" || props.ProductType=== "Kid Girl Khaki Pants"
                     || props.ProductType=== "Kid Girl Sweater" || props.ProductType=== "Kid Girl Leggings"
                     || props.ProductType=== "Kid Girl Cardigan" || props.ProductType=== "Kid Girl Hoodie" || props.ProductType=== "Kid Girl Crop Top Hoodie"
                     || props.ProductType=== "Kid Girl Sweatshirt" || props.ProductType=== "Kid Girl Trench Coat" || props.ProductType=== "Kid Girl Peacoat"
                     || props.ProductType=== "Kid Girl Straight Jeans" || props.ProductType=== "Kid Girl Bootcut Jeans"
                     || props.ProductType=== "Kid Girl Skinny Jeans" || props.ProductType=== "Kid Girl Jeggings" || props.ProductType=== "Kid Girl Boyfriend Jeans" 
                     || props.ProductType=== "Kid Girl High Waisted Jeans" || props.ProductType=== "Kid Girl Baggy Jeans" || props.ProductType=== "Kid Girl Flare Jeans"
                     || props.ProductType=== "Kid Girl Cropped Jeans" || props.ProductType=== "Kid Girl Denim Shorts" || props.ProductType=== "Kid Girl Seamless Bra"
                     || props.ProductType=== "Kid Girl Sports Bra" || props.ProductType=== "Kid Girl Bra Pack" || props.ProductType=== "Kid Girl Pajama Set"
                     || props.ProductType=== "Kid Girl Pajama Pants" || props.ProductType=== "Kid Girl Pajama Short" || props.ProductType=== "Kid Girl Sleep Top"
                     || props.ProductType=== "Kid Girl Nightgown" || props.ProductType=== "Kid Girl Sleepshirt" || props.ProductType=== "Kid Girl Babydoll Chemise"
                     || props.ProductType=== "Kid Girl Robe" || props.ProductType=== "Kid Girl Loungewear Set"

                   ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Polyester, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToFourSizeSelect} >
            <span>3 - 4 yrs</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FourToFiveSizeSelect} >
          <span>4 - 5 yrs</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FiveToSixSizeSelect} >
          <span>5 - 6 yrs</span>
          </div>
          <div className={props.SixToSevenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToSevenSizeSelect} >
          <span>6 - 7 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Toddler Boy - Girl Clothes */}
                    <div className={ props.ProductType=== "Toddler Boy Workout Short" || props.ProductType=== "Toddler Boy Short"
                     || props.ProductType=== "Toddler Boy Swim Short" || props.ProductType=== "Toddler Boy Denim Short" || props.ProductType=== "Toddler Boy Workout Short"
                     || props.ProductType=== "Toddler Boy Cargo Short" || props.ProductType=== "Toddler Boy Khaki Short" || props.ProductType=== "Toddler Boy Khaki Pants"
                     || props.ProductType=== "Toddler Boy Cargo Pants" || props.ProductType=== "Toddler Boy Jogger Pants" || props.ProductType=== "Toddler Boy Sweatpants"
                     || props.ProductType=== "Toddler Boy Blazer" || props.ProductType=== "Toddler Boy Sweater" || props.ProductType=== "Toddler Boy Hoodie"
                     || props.ProductType=== "Toddler Boy Sweatshirt" || props.ProductType=== "Toddler Boy Trench Coat" || props.ProductType=== "Toddler Boy Peacoat" 
                     || props.ProductType=== "Toddler Boy Straight Jeans" || props.ProductType=== "Toddler Boy Bootcut Jeans" || props.ProductType=== "Toddler Boy Skinny Jeans"
                     || props.ProductType=== "Toddler Boy Slim-Fit Jeans" || props.ProductType=== "Toddler Boy Denim Shorts" || props.ProductType=== "Toddler Boy Underwear Pack"
                     || props.ProductType=== "Toddler Boy Boxers" || props.ProductType=== "Toddler Boy Boxer Briefs" || props.ProductType=== "Toddler Boy Underwear Briefs"
                     || props.ProductType=== "Toddler Boy Pajama Short" || props.ProductType=== "Toddler Boy Sleep Topwear" || props.ProductType=== "Toddler Boy Robe"
                     || props.ProductType=== "Toddler Boy Loungewear Set" || props.ProductType=== "Toddler Boy Pajama Set" || props.ProductType=== "Toddler Boy Pajama Pants"
                     || props.ProductType=== "Toddler Girl Short" || props.ProductType=== "Toddler Girl Seamless Short" || props.ProductType=== "Toddler Girl Workout Short"
                     || props.ProductType=== "Toddler Girl Capri Pants" || props.ProductType=== "Toddler Girl Blazer" || props.ProductType=== "Toddler Girl Khaki Short"
                     || props.ProductType=== "Toddler Girl Cargo Short" || props.ProductType=== "Toddler Girl Cargo Pants" || props.ProductType=== "Toddler Girl Khaki Pants"
                     || props.ProductType=== "Toddler Girl Sweater" || props.ProductType=== "Toddler Girl Leggings"
                     || props.ProductType=== "Toddler Girl Cardigan" || props.ProductType=== "Toddler Girl Hoodie" || props.ProductType=== "Toddler Girl Crop Top Hoodie"
                     || props.ProductType=== "Toddler Girl Sweatshirt" || props.ProductType=== "Toddler Girl Trench Coat" || props.ProductType=== "Toddler Girl Peacoat"
                     || props.ProductType=== "Toddler Girl Straight Jeans" || props.ProductType=== "Toddler Girl Bootcut Jeans"
                     || props.ProductType=== "Toddler Girl Skinny Jeans" || props.ProductType=== "Toddler Girl Jeggings" || props.ProductType=== "Toddler Girl Boyfriend Jeans" 
                     || props.ProductType=== "Toddler Girl High Waisted Jeans" || props.ProductType=== "Toddler Girl Baggy Jeans" || props.ProductType=== "Toddler Girl Flare Jeans"
                     || props.ProductType=== "Toddler Girl Cropped Jeans" || props.ProductType=== "Toddler Girl Denim Shorts" || props.ProductType=== "Toddler Girl Seamless Bra"
                     || props.ProductType=== "Toddler Girl Sports Bra" || props.ProductType=== "Toddler Girl Bra Pack" || props.ProductType=== "Toddler Girl Pajama Set"
                     || props.ProductType=== "Toddler Girl Pajama Pants" || props.ProductType=== "Toddler Girl Pajama Short" || props.ProductType=== "Toddler Girl Sleep Top"
                     || props.ProductType=== "Toddler Girl Nightgown" || props.ProductType=== "Toddler Girl Sleepshirt" || props.ProductType=== "Toddler Girl Babydoll Chemise"
                     || props.ProductType=== "Toddler Girl Robe" || props.ProductType=== "Toddler Girl Loungewear Set"

                   ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Polyester, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToSixMonthsSizeSelect} >
            <span>3 - 6 mnths</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToTwelveMonthSizeSelect} >
          <span>6 - 12 mnths</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirtySixMonthSizeSelect} >
          <span>12 - 36 mnths</span>
          </div>
          
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Women Underwear */}
                    <div className={ props.ProductType=== "Women Boyleg" || props.ProductType=== "Women Bikini Panties" || props.ProductType=== "Women Brief Panties"
                     || props.ProductType=== "Women Brazilian Panties" || props.ProductType=== "Women Hipster Panties" || props.ProductType=== "Women Thong Panties"
                     || props.ProductType=== "Women G-String Panties" || props.ProductType=== "Women Panty Pack" || props.ProductType=== "Women Period Panties"
                     || props.ProductType=== "Women Lace Boyleg" || props.ProductType=== "Women Lace Bikini" || props.ProductType=== "Women Lace Brief Panties"
                     || props.ProductType=== "Women Lace Brazilian Panties" || props.ProductType=== "Women Lace Hipster Panties" || props.ProductType=== "Women Lace Thong Panties"
                     || props.ProductType=== "Women Lace G-String Panties" || props.ProductType=== "Women Bodysuit" || props.ProductType=== "Women Lingerie Set" 
                     || props.ProductType=== "Women Babydoll" || props.ProductType=== "Women Babydoll Chemise" || props.ProductType=== "Women Garter Belt"
                     || props.ProductType=== "Women One-piece Swimsuit" || props.ProductType=== "Women Bikini" 
                     || props.ProductType=== "Women Tankini" || props.ProductType=== "Women Swimsuit Top" || props.ProductType=== "Women Swimsuit Bottoms"
                     || props.ProductType=== "Women Swimsuit Cover-up" || props.ProductType=== "Women Swimsuit Bodyshaper" || props.ProductType=== "Women Camisole Shaper"
                     || props.ProductType=== "Women Thigh Shaper" || props.ProductType=== "Women Waist Shaper" || props.ProductType=== "Women Tights"
                     || props.ProductType=== "Women Pantyhouse"
                      ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Spandex, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ExtraSmallSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraSmallSizeSelect} >
            <span>Extra Small</span>
          </div>
          <div className={props.SmallSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SmallSizeSelect} >
          <span>Small</span>
          </div>
          <div className={props.MediumSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={MediumSizeSelect} >
          <span>Medium</span>
          </div>
          <div className={props.LargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={LargeSizeSelect} >
          <span>Large</span>
          </div>
          <div className={props.ExtraLargeSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ExtraLargeSizeSelect} >
          <span>Extra Large</span>
          </div>
          <div className={props.DoubleXLSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={DoubleExtraLargeSizeSelect} >
          <span>Double XL +</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Girl Underwear */}
                    <div className={ props.ProductType=== "Girl One-piece Swimsuit" || props.ProductType=== "Girl Bikini" 
                     || props.ProductType=== "Girl Tankini" || props.ProductType=== "Girl Swimsuit Top" || props.ProductType=== "Girl Swimsuit Bottoms"
                     || props.ProductType=== "Girl Swimsuit Cover-up" || props.ProductType=== "Girl Swimsuit Bodyshaper" || props.ProductType=== "Girl Camisole Shaper"
                     || props.ProductType=== "Girl Thigh Shaper" || props.ProductType=== "Girl Waist Shaper" || props.ProductType=== "Girl Tights"
                     || props.ProductType=== "Girl Pantyhouse" || props.ProductType=== "Girl Underwear" || props.ProductType=== "Girl Underwear Pack"
                      ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Spandex, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.SevenToEightSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SevenToEightYearsSizeSelect} >
            <span>7 - 8 yrs</span>
          </div>
          <div className={props.EightToNineSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={EightToNineSizeSelect} >
          <span>8 - 9 yrs</span>
          </div>
          <div className={props.NineToTenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={NineToTenSizeSelect} >
          <span>9 - 10 yrs</span>
          </div>
          <div className={props.ElevenToTwelveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ElevenToTwelveSizeSelect} >
          <span>11 - 12 yrs</span>
          </div>
          <div className={props.TwelveToThirteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirteenSizeSelect} >
          <span>12 - 13 yrs</span>
          </div>
          <div className={props.ThirteenToFourteenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThirteenToFourteenSizeSelect} >
          <span>13 - 14 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Toddler Girl Underwear */}
                    <div className={ props.ProductType=== "Toddler Girl One-piece Swimsuit" || props.ProductType=== "Toddler Girl Bikini" 
                     || props.ProductType=== "Toddler Girl Tankini" || props.ProductType=== "Toddler Girl Swimsuit Top" || props.ProductType=== "Toddler Girl Swimsuit Bottoms"
                     || props.ProductType=== "Toddler Girl Swimsuit Cover-up" || props.ProductType=== "Toddler Girl Swimsuit Bodyshaper" || props.ProductType=== "Toddler Girl Camisole Shaper"
                     || props.ProductType=== "Toddler Girl Thigh Shaper" || props.ProductType=== "Toddler Girl Waist Shaper" || props.ProductType=== "Toddler Girl Tights"
                     || props.ProductType=== "Toddler Girl Pantyhouse" || props.ProductType=== "Toddler Girl Underwear" || props.ProductType=== "Toddler Girl Underwear Pack"
                      ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Spandex, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToSixMonthsSizeSelect} >
            <span>3 - 6 mnths</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToTwelveMonthSizeSelect} >
          <span>6 - 12 mnths</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirtySixMonthSizeSelect} >
          <span>12 - 36 mnths</span>
          </div>
          
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Kid Girl Underwear */}
                    <div className={ props.ProductType=== "Kid Girl One-piece Swimsuit" || props.ProductType=== "Kid Girl Bikini" 
                     || props.ProductType=== "Kid Girl Tankini" || props.ProductType=== "Kid Girl Swimsuit Top" || props.ProductType=== "Kid Girl Swimsuit Bottoms"
                     || props.ProductType=== "Kid Girl Swimsuit Cover-up" || props.ProductType=== "Kid Girl Swimsuit Bodyshaper" || props.ProductType=== "Kid Girl Camisole Shaper"
                     || props.ProductType=== "Kid Girl Thigh Shaper" || props.ProductType=== "Kid Girl Waist Shaper" || props.ProductType=== "Kid Girl Tights"
                     || props.ProductType=== "Kid Girl Pantyhouse" || props.ProductType=== "Kid Girl Underwear" || props.ProductType=== "Kid Girl Underwear Pack"
                      ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Spandex, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToFourSizeSelect} >
            <span>3 - 4 yrs</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FourToFiveSizeSelect} >
          <span>4 - 5 yrs</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={FiveToSixSizeSelect} >
          <span>5 - 6 yrs</span>
          </div>
          <div className={props.SixToSevenSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToSevenSizeSelect} >
          <span>6 - 7 yrs</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Toddler Girl Underwear */}
                    <div className={ props.ProductType=== "Toddler Girl One-piece Swimsuit" || props.ProductType=== "Toddler Girl Bikini" 
                     || props.ProductType=== "Toddler Girl Tankini" || props.ProductType=== "Toddler Girl Swimsuit Top" || props.ProductType=== "Toddler Girl Swimsuit Bottoms"
                     || props.ProductType=== "Toddler Girl Swimsuit Cover-up" || props.ProductType=== "Toddler Girl Swimsuit Bodyshaper" || props.ProductType=== "Toddler Girl Camisole Shaper"
                     || props.ProductType=== "Toddler Girl Thigh Shaper" || props.ProductType=== "Toddler Girl Waist Shaper" || props.ProductType=== "Toddler Girl Tights"
                     || props.ProductType=== "Toddler Girl Pantyhouse" || props.ProductType=== "Toddler Girl Underwear" || props.ProductType=== "Toddler Girl Underwear Pack"
                      ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Spandex, Nylon)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ThreeToFourSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ThreeToSixMonthsSizeSelect} >
            <span>3 - 6 mnths</span>
          </div>
          <div className={props.FourToFiveSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToTwelveMonthSizeSelect} >
          <span>6 - 12 mnths</span>
          </div>
          <div className={props.FiveToSixSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={TwelveToThirtySixMonthSizeSelect} >
          <span>12 - 36 mnths</span>
          </div>
          
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Newborn Clothes */}
                    <div className={ props.ProductType=== "Baby Boy Bodyvest" || props.ProductType=== "Baby Boy Shirt" 
                    || props.ProductType=== "Baby Girl Bodyvest" || props.ProductType=== "Baby Girl Shirt" ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Style:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSleeveLenght ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(1); ShortSleevesCategory()}} >
            <span>Short Sleeve</span>
          </div>
          <div className={toggleSleeveLenght ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SleeveLenght(2); LongSleevesCategory()}} >
          <span>Long Sleeve</span>
          </div>
        </div>
      </div>
                            </li>
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ZeroToThreeMonths === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ZeroToThreeMonthsSelect} >
            <span>0 - 3 mnths</span>
          </div>
          <div className={props.SixToYearSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToYearSizeSelect} >
          <span>6- 12 mnths</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>
                    
                    {/* Newborn Clothes */}
                    <div className={ props.ProductType=== "Baby Boy Outfit" || props.ProductType=== "Baby Boy Babygrow" || props.ProductType=== "Baby Boy Romber"
                    || props.ProductType=== "Baby Boy legginette" || props.ProductType=== "Baby Boy Tracksuit" || props.ProductType=== "Baby Boy Cover"
                    || props.ProductType=== "Baby Boy Sweater" || props.ProductType=== "Baby Boy Short" || props.ProductType=== "Baby Boy Pants"
                    || props.ProductType=== "Baby Girl Outfit" || props.ProductType=== "Baby Girl Babygrow" || props.ProductType=== "Baby Girl Romber"
                    || props.ProductType=== "Baby Girl legginette" || props.ProductType=== "Baby Girl Tracksuit" || props.ProductType=== "Baby Girl Cover"
                    || props.ProductType=== "Baby Girl Sweater" || props.ProductType=== "Baby Girl Short" || props.ProductType=== "Baby Girl Pants"
                    || props.ProductType=== "Baby Girl Dress" || props.ProductType=== "Baby Girl Skirt" ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div style={{ width: '100%', display: 'flex', padding: '10px'}}>
                                    <div
                                        className='Details-Title_clothe_sizes'>
                                        <span>Available Sizes:</span></div>
                                        <div className='Select_brand-options_box'>
        <div className="Select_Laptop_Brand_options_listed">
        <div className={props.ZeroToThreeMonthsSize === true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={ZeroToThreeMonthsSelect} >
            <span>0 - 3 mnths</span>
          </div>
          <div className={props.SixToYearSize ===true ?'Select_brand_option_selected_style active-Ram_option_selected_style' : "Select_brand_option_selected_style"}
        onClick={SixToYearSizeSelect} >
          <span>6- 12 mnths</span>
          </div>
        </div>
      </div>
                                </div>
                            </li>
                     
                        </ul>
                    </div>

                    {/* Accessories */}
                    <div className={ props.ProductType=== "Women Neck Tie" || props.ProductType=== "Women Bow Tie" || props.ProductType=== "Women Belt"
                    || props.ProductType=== "Headband Scarf" || props.ProductType=== "Women Gloves" || props.ProductType=== "Kid Mittens" || props.ProductType=== "Women Scarf"
                    || props.ProductType=== "Mittens" || props.ProductType=== "Neck Tie" || props.ProductType=== "Bow Tie" || props.ProductType=== "Baby Girl Mittens"
                    || props.ProductType=== "Man Belt" || props.ProductType=== "Scarf" || props.ProductType=== "Gloves" || props.ProductType=== "Baby Girl Beanie"
                    || props.ProductType=== "Bandana Pack" || props.ProductType=== "Baby Boy Beanie" || props.ProductType=== "Baby Unisex Mittens"
                    || props.ProductType=== "Handkerchief Pack" || props.ProductType=== "Boy Belt" || props.ProductType=== "Boy Gloves"
                    || props.ProductType=== "Boy Socks" || props.ProductType=== "Boy Socks Packs" || props.ProductType=== "Girl Belt"
                    || props.ProductType=== "Girl Gloves" ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                        </ul>
                    </div>

                    {/* Socks */}
                    <div className={ props.ProductType=== "Women Socks" || props.ProductType=== "Women Socks Pack"
                    || props.ProductType=== "Socks" || props.ProductType=== "Socks Pack"
                    || props.ProductType=== "Unisex Socks" || props.ProductType=== "Unisex Socks Pack"
                    || props.ProductType=== "Boy Socks" || props.ProductType=== "Boy Socks Packs"
                    || props.ProductType=== "Girl Socks" || props.ProductType=== "Girl Socks Pack"
                    || props.ProductType=== "Kid Unisex Socks" || props.ProductType=== "Kid Unisex Socks Pack"
                    || props.ProductType=== "Baby Unisex Socks" || props.ProductType=== "Baby Unisex Socks Pack"
                    ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Sock Lenght:</div>
                                    <div className='Select_Charger_brand-options_box'>
        <div className="Select_Brand_options_listed">
        <div className={toggleSockSize ===1 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SockLenght(1); KneeHighSocks()}} >
            <span>Knee High</span>
          </div>
          <div className={toggleSockSize ===2 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SockLenght(2); MidCutSocks()}} >
          <span>Medium Cut</span>
          </div>
          <div className={toggleSockSize ===3 ?'Select_smart_tv_option_selected_style active-Ram_option_selected_style' : "Select_smart_tv_option_selected_style"}
        onClick={()=> { SockLenght(3); LowCutSocks()}} >
          <span>Low Cut</span>
          </div>
        </div>
      </div>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Bags */}
                    <div className={ props.ProductType=== "Briefcase" || props.ProductType=== "Laptop Bag"
                    || props.ProductType=== "Satchel" || props.ProductType=== "Crossbody Bag"
                    || props.ProductType=== "Saddle Bag" || props.ProductType=== "Fanny Pack"
                    || props.ProductType=== "Medical Bag" ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (Cotton, Polyester)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            
                        </ul>
                    </div>

                    {/* Fragrances */}
                    <div className={ props.ProductType=== "Ladies Perfume" || props.ProductType=== "Mens Colonge"
                    || props.ProductType=== "Fragrance Set" || props.ProductType=== "Body Mist"
                    || props.ProductType=== "Purse Spray" ? "active-Catergory_Tab " :"AllTabs"}>
                        <ul className='Details_Content_box'>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Brand:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BrandValue}
                                            onChange={onBrandChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li>    
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Material: (plastic, glass)</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.BodyCover}
                                            onChange={ClothMaterialCategory}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            
                            <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Color:</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}><input value={props.ColorValue}
                                            onChange={onColorValueChange}
                                            className="Details-Input_style"
                                            type="text" />
                                    </div>
                                </div>
                            </li> 
                            <li style={{ width: '100%', display: 'flex'}}>
                            <div
                                className='Details-Title_Text_style'>
                                Item Volume (Optional):</div>
                            <div className="Details-Input_Box_style">
                                <div style={{ paddingTop: '10px'}}><input value={props.Dimensions}
                                        onChange={DimensionsChange}
                                        placeholder='include Units ( ml )'
                                        className="Details-Input_style"
                                        type="text" />
                                </div>
                            </div>
                        </li>
                        <li style={{ width: '100%', display: 'flex'}}>
                                <div
                                    className='Details-Title_Text_style'>
                                    Special Attributes (Optional):</div>
                                <div className="Details-Input_Box_style">
                                    <div style={{ paddingTop: '10px'}}>
                                    <TextareaAutosize minRows={2} placeholder="example ( Long lasting smell )" style={{ width: '450px',  outline: '2px solid orange', fontSize: '15px',
                                     fontWeight: '600', border: 'none', color: '#070606', borderRadius: '2px', padding: '5px 8px'}}
                                     value={props.Inclusions} onChange={InclusionsChange} />
                                    </div>
                                </div>
                            </li>   
                            
                            
                        </ul>
                    </div>
                    
    </>
  )
}

export default ClothesUpload