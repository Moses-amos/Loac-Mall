import React, { useState } from 'react'

function CategoryClothing(props) {

    const [toggleClothingCategory, settoggleClothingCategory] = useState(0)
    const [toggleClothingType, settoggleClothingType] = useState(0)
    const [toggleShoes, settoggleShoes] = useState(0)
    const [toggleJewellery, settoggleJewellery] = useState(0)
    const [toggleWatches, settoggleWatches] = useState(0)
    const [toggleBags, settoggleBags] = useState(0)
    const [toggleWomensClothing, settoggleWomensClothing] = useState(0)
    const [toggleMensClothing, settoggleMensClothing] = useState(0)
    const [toggleWeddingClothing, settoggleWeddingClothing] = useState(0)
    const [toggleKidsClothing, settoggleKidsClothing] = useState(0)
    const [toggleBoyClothing, settoggleBoyClothing] = useState(0)
    const [toggleGirlClothing, settoggleGirlClothing] = useState(0)
    const [toggleKidBoyClothing, settoggleKidBoyClothing] = useState(0)
    const [toggleKidGirlClothing, settoggleKidGirlClothing] = useState(0)
    const [toggleToddlerBoyClothing, settoggleToddlerBoyClothing] = useState(0)
    const [toggleToddlerGirlClothing, settoggleToddlerGirlClothing] = useState(0)
    const [toggleBabyboyClothes, settoggleBabyboyClothes] = useState(0)
    const [toggleBabygirlClothes, settoggleBabygirlClothes] = useState(0)
    const [toggleManAccessories, settoggleManAccessories] = useState(0)
    const [toggleWomanAccessories, settoggleWomanAccessories] = useState(0)
    const [toggleBoyAccessories, settoggleBoyAccessories] = useState(0)
    const [toggleGirlAccessories, settoggleGirlAccessories] = useState(0)
    
    const [toggleThirdCategory, settoggleThirdCategory] = useState(0)

    const ThirdCategory = (index) => {
        settoggleThirdCategory(index);
    }

    const ClothingCategory = (index) => {
        settoggleClothingCategory(index);
    }

    const ClothingTypeCategory = (index) => {
        settoggleClothingType(index);
    }

    const ManAccessoriesCategory = (index) => {
        settoggleManAccessories(index);
    }

    const WomanAccessoriesCategory = (index) => {
        settoggleWomanAccessories(index);
    }

    const BoyAccessoriesCategory = (index) => {
        settoggleBoyAccessories(index);
    }

    const GirlAccessoriesCategory = (index) => {
        settoggleGirlAccessories(index);
    }

    const ShoesCategory = (index) => {
        settoggleShoes(index);
    }

    const JewelleryCategory = (index) => {
        settoggleJewellery(index);
    }

    const WatchesCategory = (index) => {
        settoggleWatches(index);
    }

    const BagsCategory = (index) => {
        settoggleBags(index);
    }

    const WomensClothingCategory = (index) => {
        settoggleWomensClothing(index);
    }

    const MensClothingCategory = (index) => {
        settoggleMensClothing(index);
    }

    const WeddingClothingCategory = (index) => {
        settoggleWeddingClothing(index);
    }

    const KidsClothingCategory = (index) => {
        settoggleKidsClothing(index);
    }

    const BoyClothingCategory = (index) => {
        settoggleBoyClothing(index);
    }

    const GirlClothingCategory = (index) => {
        settoggleGirlClothing(index);
    }

    const KidBoyClothingCategory = (index) => {
        settoggleKidBoyClothing(index);
    }

    const KidGirlClothingCategory = (index) => {
        settoggleKidGirlClothing(index);
    }

    const ToddlerBoyClothingCategory = (index) => {
        settoggleToddlerBoyClothing(index);
    }

    const ToddlerGirlClothingCategory = (index) => {
        settoggleToddlerGirlClothing(index);
    }

    const BabyboyClothesCategory = (index) => {
        settoggleBabyboyClothes(index);
    }

    const BabygirlClothesCategory = (index) => {
        settoggleBabygirlClothes(index);
    }



    return (
    <div>
                                           <div style={{ marginBottom: '3px', display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#333'}}>Categories</span>
                                    </div>
                                    <div onClick={()=> props.sethoverCategory(0)}
                                     style={{ width: '50px', cursor: 'pointer', display: 'flex', justifyContent: 'center'}}>
                                        <span style={{ fontWeight: '700', color: '#333'}}>Close</span>
                                    </div>
                                </div> 
                                <div style={{ display: 'flex'}}>
                                <ul className='Electronics_dropdown-selects'>
                                    <li className={toggleClothingCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(1)} 
                                        onMouseEnter={()=>{KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                            ; ShoesCategory(); JewelleryCategory(); WatchesCategory(); BagsCategory()}}
                                        >
                                        <div>Clothing</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        {/* <li className={toggleClothingCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(2)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                            MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                            ; ShoesCategory(); JewelleryCategory(); WatchesCategory(); BagsCategory()}}
                                        >
                                        <div>Wedding Clothing</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li> */}
                                        <li className={toggleClothingCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(3)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                            MensClothingCategory(); ShoesCategory(); JewelleryCategory()
                                            ; WatchesCategory(); BagsCategory()}}
                                        >
                                        <div>Kids Clothing</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(4)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); JewelleryCategory()
                                             ; WatchesCategory(); BagsCategory()}}
                                        >
                                        <div>Shoe</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(5)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                             ; ShoesCategory(); WatchesCategory(); BagsCategory()}}

                                        >
                                        <div>Jewellery</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingCategory=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(6)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                             ; ShoesCategory(); JewelleryCategory(); BagsCategory()}}

                                        >
                                        <div>Watch</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingCategory=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(7)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                             ; ShoesCategory(); JewelleryCategory(); WatchesCategory()}}

                                        >
                                        <div>Bag, Handbag</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingCategory=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(8)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                             ; ShoesCategory(); JewelleryCategory(); WatchesCategory(); BagsCategory()}}

                                        >
                                        <div>Fragrance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleClothingCategory=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ClothingCategory(9)} 
                                        onMouseEnter={()=>{WomensClothingCategory(); ClothingTypeCategory();
                                             MensClothingCategory(); KidsClothingCategory(); GirlClothingCategory(); BoyClothingCategory()
                                             ; ShoesCategory(); JewelleryCategory(); WatchesCategory(); BagsCategory()}}

                                        >
                                        <div>Beauty, Personal Care</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Clothing */}
                                <ul className={toggleClothingCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleClothingType=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(1); MensClothingCategory()}}>
                                        <div>Women Clothing</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingType=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(2); WomensClothingCategory()}}>
                                        <div>Men Clothing</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        

                                        <li className={toggleClothingType=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(4); MensClothingCategory()}}>
                                        <div>Woman Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleClothingType=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(5); WomensClothingCategory()}}>
                                        <div>Man Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleClothingType=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(6); WomensClothingCategory()}}>
                                        <div>Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleClothingType=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ClothingTypeCategory(3); WomensClothingCategory(); MensClothingCategory()}}>
                                        <div>Maternity Clothing</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        
                                </ul>

                                {/* Wedding Clothing */}
                                <ul className={toggleClothingCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleWeddingClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WeddingClothingCategory(1)}}>
                                        <div>Bride Clothing</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleWeddingClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WeddingClothingCategory(2)}}>
                                        <div>Groom Clothing</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        
                                </ul>

                                {/*Kids Clothing */}
                                <ul className={toggleClothingCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>

                                    <li className={toggleKidsClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(1); GirlClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                        KidGirlClothingCategory(); KidBoyClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Boy ~ 7 to 14 yrs</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(2); BoyClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                            KidGirlClothingCategory(); KidBoyClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Girl ~ 7 to 14 yrs</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        {/* forced index */}
                                        <li className={toggleKidsClothing=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(9); GirlClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                            KidGirlClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Boy ~ 3 to 7 yrs</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(10); BoyClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                            KidBoyClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Girl ~ 3 to 7 yrs</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                        <li className={toggleKidsClothing=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(11); GirlClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                            KidGirlClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Boy ~ 3 to 37 mths</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 12? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(12); BoyClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory();
                                            KidBoyClothingCategory(); ToddlerBoyClothingCategory()}}>
                                        <div>Girl ~ 3 to 37 mths</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidsClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(3); BoyClothingCategory(); GirlClothingCategory(); BabygirlClothesCategory();
                                            KidGirlClothingCategory(); KidBoyClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Newbon Boy</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(4); BoyClothingCategory(); GirlClothingCategory(); BabyboyClothesCategory();
                                            KidGirlClothingCategory(); KidBoyClothingCategory(); ToddlerBoyClothingCategory(); ToddlerGirlClothingCategory()}}>
                                        <div>Newbon Girl </div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidsClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(5); GirlClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory()}}>
                                        <div>Boy Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(6); BoyClothingCategory(); BabyboyClothesCategory(); BabygirlClothesCategory()}}>
                                        <div>Girl Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(7); BoyClothingCategory(); GirlClothingCategory(); BabygirlClothesCategory()}}>
                                        <div>Newbon Boy Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidsClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidsClothingCategory(8); BoyClothingCategory(); GirlClothingCategory(); BabyboyClothesCategory()}}>
                                        <div>Newbon Girl Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                </ul>

                                {/* Shoes, Sneakers */}
                                <ul className={toggleClothingCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleShoes=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(1)}}>
                                        <div>Women Shoe</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleShoes=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(2)}}>
                                        <div>Men Shoe</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleShoes=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(3)}}>
                                        <div>Athletic Shoe, Sneaker</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleShoes=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(4)}}>
                                        <div>Kid Shoe</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleShoes=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(5)}}>
                                        <div>Work, Utility Boot</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleShoes=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(6)}}>
                                        <div>Baby Girl Clothing</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                        <li className={toggleShoes=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ShoesCategory(7)}}>
                                        <div>Slide, Flip Flop</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                        

                                </ul>

                                {/* Jewellery */}
                                <ul className={toggleClothingCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleJewellery=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{JewelleryCategory(1)}}>
                                        <div>Earring</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleJewellery=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{JewelleryCategory(2)}}>
                                        <div>Necklace</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleJewellery=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{JewelleryCategory(3)}}>
                                        <div>Bracelet</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleJewellery=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{JewelleryCategory(4)}}>
                                        <div>Ring</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 
                                    <li className={toggleJewellery=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{JewelleryCategory(5)}}>
                                        <div>Jewellery Storage</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div>*/}
                                        </li> 

                                </ul>

                                {/* Watches */}
                                <ul className={toggleClothingCategory===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleWatches=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WatchesCategory(1)}}>
                                        <div>Womens Watch</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleWatches=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WatchesCategory(2)}}>
                                        <div>Mens Watch</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleWatches=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WatchesCategory(3)}}>
                                        <div>Luxury Watch</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleWatches=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WatchesCategory(4)}}>
                                        <div>Smart Watch</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleWatches=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WatchesCategory(5)}}>
                                        <div>Kids Watch</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>

                                </ul>

                                {/* Bags */}
                                <ul className={toggleClothingCategory===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleBags=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BagsCategory(1)}}>
                                        <div>Backpack</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                    <li className={toggleBags=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BagsCategory(2)}}>
                                        <div>Hand Bag, Purse</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >                       
                                        <div>Briefcase</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Briefcase")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Laptop Bag</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Bag")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Satchel</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Satchel")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Crossbody Bag</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Crossbody Bag")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Saddle Bag</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Saddle Bag")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Fanny Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fanny Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BagsCategory()}
                                        >
                                        <div>Medical Bag</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Medical Bag")}} className='Category-select_button'>select</div>
                                        </div></li>

                                </ul>

                                {/* Fragrance */}
                                <ul className={toggleClothingCategory===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li" 
                                        >                       
                                        <div>Ladies Perfume</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ladies Perfume")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Mens Colonge</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mens Colonge")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Fragrance Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fragrance Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Body Mist</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Body Mist")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Purse Spray</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Purse Spray")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        

                                </ul>

                                <div>
                                <ul className={toggleClothingType===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleWomensClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(1)}}>
                                        <div>Womens Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(2)}}>
                                        <div>Womens Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleWomensClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(3)}}>
                                        <div>Womens Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(6)}}>
                                        <div>Dress, Skirt</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(7)}}>
                                        <div>Style Dress</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                        <li className={toggleWomensClothing=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(9)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleWomensClothing=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(10)}}>
                                        <div>Bra, Bralette</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(11)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 12? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(12)}}>
                                        <div>Lingerie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleWomensClothing=== 13? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(13)}}>
                                        <div>Swimsuit, Shapewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleWomensClothing=== 14? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{WomensClothingCategory(14)}}>
                                        <div>Sleepwear, Loungwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                </ul>

                                <ul className={toggleClothingType===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleMensClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(1)}}>
                                        <div>Mens Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    
                                        <li className={toggleMensClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(2)}}>
                                        <div>Mens Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleMensClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(3)}}>
                                        <div>Mens Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleMensClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleMensClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleMensClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(6)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleMensClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(7)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleMensClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{MensClothingCategory(8)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                </ul>

                                <ul className={toggleClothingType===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleWomanAccessories=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ WomanAccessoriesCategory(1)}}>
                                        <div>Hats</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        <li className={toggleWomanAccessories=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ WomanAccessoriesCategory(2)}}>
                                        <div>Eyewear</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Neck Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Neck Tie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Bow Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bow Tie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Belt")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Headband Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headband Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Gloves</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Gloves")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => WomanAccessoriesCategory()}
                                        >
                                        <div>Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    
                                </ul>

                                <ul className={toggleClothingType===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleManAccessories=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ ManAccessoriesCategory(3)}}>
                                        <div>Man Hats</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        <li className={toggleManAccessories=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ ManAccessoriesCategory(4)}}>
                                        <div>Man Eyewear</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Neck Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Neck Tie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Bow Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bow Tie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Man Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Belt")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Gloves</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gloves")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    
                                </ul>

                                <ul className={toggleClothingType===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                
                                <li className="SelectCategory-li"
                                        >
                                        <div>Neck Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Neck Tie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                <li className="SelectCategory-li"
                                        >
                                        <div>Bow Tie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bow Tie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Belt")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Headband Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headband Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Bandana Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bandana Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Gloves</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gloves")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unisex Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Handkerchief Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Handkerchief Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        
                                    
                                </ul>

                                <ul className={toggleKidsClothing===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleBoyClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(1)}}>
                                        <div>Boy Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleBoyClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(2)}}>
                                        <div>Boy Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleBoyClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(3)}}>
                                        <div>Boy Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleBoyClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleBoyClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleBoyClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(6)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleBoyClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(7)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleBoyClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{BoyClothingCategory(8)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyClothingCategory()}
                                        >
                                        <div>Boy Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        
                                </ul>

                                <ul className={toggleKidsClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleGirlClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(1)}}>
                                        <div>Girl Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleGirlClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(2)}}>
                                        <div>Girl Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleGirlClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(3)}}>
                                        <div>Girl Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleGirlClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleGirlClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleGirlClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(6)}}>
                                        <div>Dress, Skirt</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleGirlClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(7)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleGirlClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(8)}}>
                                        <div>Bra, Cover-up</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleGirlClothing=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(9)}}>
                                        <div>Swimsuit</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleGirlClothing=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(10)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleGirlClothing=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{GirlClothingCategory(11)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlClothingCategory()}
                                        >
                                        <div>Girl Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleKidsClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                   
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Babygrow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Babygrow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Romber</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Romber")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>legginette</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy legginette")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bodyvest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Bodyvest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Coat, Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Cover")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleKidsClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                
                                    <li className="SelectCategory-li" onMouseEnter={() => BabygirlClothesCategory()}
                                        >
                                        <div>Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BabygirlClothesCategory()}
                                        >
                                        <div>Babygrow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Babygrow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Romber</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Romber")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>legginette</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl legginette")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bodyvest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Bodyvest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Coat, Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Cover")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BabygirlClothesCategory()}
                                        >
                                        <div>Dress</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Dress")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => BabygirlClothesCategory()}
                                        >
                                        <div>Skirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Skirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleKidsClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleBoyAccessories=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ BoyAccessoriesCategory(3)}}>
                                        <div>Boy Hats</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        <li className={toggleBoyAccessories=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ BoyAccessoriesCategory(4)}}>
                                        <div>Boy Eyewear</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Boy Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Belt")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Gloves</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Gloves")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Boy Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Socks Packs</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Socks Packs")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Unisex Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    
                                </ul>

                                <ul className={toggleKidsClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleGirlAccessories=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ GirlAccessoriesCategory(1)}}>
                                        <div>Girl Hats</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                        <li className={toggleGirlAccessories=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ GirlAccessoriesCategory(2)}}>
                                        <div>Girl Eyewear</div>
                                        {/* <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div> */}
                                        </li>
                                
                                <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Girl Bow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bow Tie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Girl Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Belt")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Girl Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Headband Scarf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headband Scarf")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Girl Gloves</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Gloves")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ManAccessoriesCategory()}
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Girl Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => GirlAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Unisex Socks Pack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    
                                </ul>

                                <ul className={toggleKidsClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li" 
                                        >
                                        <div>Boy Beanie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Beanie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        
                                        <li className="SelectCategory-li" 
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Unisex Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Boy Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    
                                </ul>

                                <ul className={toggleKidsClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li" 
                                        >
                                        <div>Girl Beanie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Beanie")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" 
                                        >
                                        <div>Mittens</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Mittens")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Girl Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => BoyAccessoriesCategory()}
                                        >
                                        <div>Unisex Socks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Unisex Socks")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        
                                    
                                </ul>

                                {/* kids clothes */}
                                <ul className={toggleKidsClothing===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleKidBoyClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(1)}}>
                                        <div>Boy Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidBoyClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(2)}}>
                                        <div>Boy Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidBoyClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(3)}}>
                                        <div>Boy Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidBoyClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidBoyClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleKidBoyClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(6)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidBoyClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(7)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidBoyClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidBoyClothingCategory(8)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => KidBoyClothingCategory()}
                                        >
                                        <div>Boy Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        
                                </ul>

                                <ul className={toggleKidsClothing===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleKidGirlClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(1)}}>
                                        <div>Girl Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidGirlClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(2)}}>
                                        <div>Girl Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidGirlClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(3)}}>
                                        <div>Girl Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidGirlClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidGirlClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleKidGirlClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(6)}}>
                                        <div>Dress, Skirt</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidGirlClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(7)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidGirlClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(8)}}>
                                        <div>Bra, Cover-up</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleKidGirlClothing=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(9)}}>
                                        <div>Swimsuit</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleKidGirlClothing=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(10)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleKidGirlClothing=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{KidGirlClothingCategory(11)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    
                                        <li className="SelectCategory-li" onMouseEnter={() => KidGirlClothingCategory()}
                                        >
                                        <div>Girl Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Toddler clothes */}
                                <ul className={toggleKidsClothing===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleToddlerBoyClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(1)}}>
                                        <div>Boy Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleToddlerBoyClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(2)}}>
                                        <div>Boy Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerBoyClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(3)}}>
                                        <div>Boy Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleToddlerBoyClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerBoyClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleToddlerBoyClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(6)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerBoyClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(7)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerBoyClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerBoyClothingCategory(8)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ foxczntWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => ToddlerBoyClothingCategory()}
                                        >
                                        <div>Boy Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        
                                </ul>

                                <ul className={toggleKidsClothing===12 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleToddlerGirlClothing=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(1)}}>
                                        <div>Girl Activewear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleToddlerGirlClothing=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(2)}}>
                                        <div>Girl Topwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerGirlClothing=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(3)}}>
                                        <div>Girl Bottomwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleToddlerGirlClothing=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(4)}}>
                                        <div>Coat, Hoodie</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerGirlClothing=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(5)}}>
                                        <div>Jacket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleToddlerGirlClothing=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(6)}}>
                                        <div>Dress, Skirt</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerGirlClothing=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(7)}}>
                                        <div>Jeans</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerGirlClothing=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(8)}}>
                                        <div>Bra, Cover-up</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleToddlerGirlClothing=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(9)}}>
                                        <div>Swimsuit</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        
                                    <li className={toggleToddlerGirlClothing=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(10)}}>
                                        <div>Underwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleToddlerGirlClothing=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ToddlerGirlClothingCategory(11)}}>
                                        <div>Sleepwear</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    
                                        <li className="SelectCategory-li" onMouseEnter={() => ToddlerGirlClothingCategory()}
                                        >
                                        <div>Girl Outfit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Outfit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>
                                

                                </div>
                                <div>

                                    {/* Women Clothing */}
                                <ul className={toggleWomensClothing===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Active Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Crop Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Active Crop Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sports Bra</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sports Bra")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Seamless Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Seamless Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleWomensClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Blouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tunic Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tunic Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women T-shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bustier Corset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bustier Corset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Waistcoat</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Waistcoat")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pantsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pantsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Two Piece Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Two Piece Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                                    
                                </ul>

                                <ul className={toggleWomensClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Seamless Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Seamless Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Workout Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jumpsuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Jumpsuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Romper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Romper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Capri Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Capri Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leggings</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Leggings")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                                    
                                </ul>

                                <ul className={toggleWomensClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cardigan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Cardigan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Crop Top Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Crop Top Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                                                      
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleWomensClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Leather Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Puffer Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleWomensClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Maxi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Midi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Mini Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Maxi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Midi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Mini Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Asymmetrical Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Asymmetrical Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>High Waist Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women High Waist Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Mini Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pencil Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pencil Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Peplum Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Peplum Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pleated Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pleated Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Wrap Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Wrap Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleWomensClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Asymmetrical Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Asymmetrical Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Blazer Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Blazer Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Blouson Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Blouson Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Corset Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Corset Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Fit & Flare Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Fit & Flare Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Cocktail Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Cocktail Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Sun Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sun Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Denim Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Lace Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Peplum Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Peplum Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Shirt Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Shirt Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Sweater Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sweater Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pinafore Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pinafore Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleWomensClothing===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Jeggings</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Jeggings")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boyfriend Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Boyfriend Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>High Waisted Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women High Waisted Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Baggy Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Baggy Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Flare Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Flare Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Cropped Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Cropped Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleWomensClothing===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bralette</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bralette")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwire Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Underwire Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Wireless Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Wireless Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Strapless Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Strapless Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>T-Shirt Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women T-Shirt Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Push-up Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Push-up Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Full-Coverage Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Full-Coverage Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sports Bra</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sports Bra")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                
                        </ul>

                        <ul className={toggleWomensClothing===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Boyleg</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Boyleg")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bikini</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bikini Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Brief Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Brief Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hipster Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Hipster Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Brazilian Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Brazilian Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Thong Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Thong Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>G-String Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women G-String Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Period Panties</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Period Panties")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Panty Pack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Panty Pack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                        </ul>

                        <ul className={toggleWomensClothing===12 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Boyleg</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Boyleg")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Bikini</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Bikini")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Brief</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Brief")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Hipster</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Hipster")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Brazilian</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Brazilian")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace Thong</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace Thong")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lace G-String</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lace G-String")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Lingerie Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Lingerie Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bodysuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bodysuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Babydoll</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Babydoll Chemise")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Garter Belt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Garter Belt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bustier Corset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bustier Corset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        <ul className={toggleWomensClothing===13 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>One-piece Swimsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women One-piece Swimsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>


                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bikini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bikini")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tankini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tankini")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Top</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Swimsuit Top")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Bottoms</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Swimsuit Bottoms")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Cover-up</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Swimsuit Cover-up")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bodyshaper</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Bodyshaper")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Camisole Shaper</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Camisole Shaper")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Thigh Shaper</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Thigh Shaper")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Waist Shaper</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Waist Shaper")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tights</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Tights")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pantyhouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pantyhouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                        </ul>

                        <ul className={toggleWomensClothing===14 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sleep Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Nightgown</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Nightgown")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleepshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Sleepshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Babydoll Chemise</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Babydoll Chemise")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Women Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Men Clothing */}
                        <ul className={toggleMensClothing ===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Active Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.ShorthoverCategory(); props.setProductType("Man Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleMensClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man T-Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Dress Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Dress Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tuxedo</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Tuxedo")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                    
                                </ul>

                                <ul className={toggleMensClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Swim Trunk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Swim Trunk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Denim Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Denim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                   
                                    
                                </ul>

                                <ul className={toggleMensClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleMensClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Leather Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Puffer Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleMensClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Slim-Fit Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Slim-Fit Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleMensClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxer Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Boxers")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxer Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Boxer Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Underwear Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleMensClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Man Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Boy Clothing */}
                        <ul className={toggleBoyClothing ===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Active Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.ShorthoverCategory(); props.setProductType("Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleBoyClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy T-Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Dress Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Dress Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tuxedo</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Tuxedo")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                    
                                </ul>

                                <ul className={toggleBoyClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Swim Trunks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Swim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Denim Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Denim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                   
                                    
                                </ul>

                                <ul className={toggleBoyClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleBoyClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Leather Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Puffer Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleBoyClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Slim-Fit Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Slim-Fit Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleBoyClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxers</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Boxers")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxer Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Boxer Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Underwear Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleBoyClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Boy Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Kid Boy Clothing */}
                        <ul className={toggleKidBoyClothing ===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Active Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.ShorthoverCategory(); props.setProductType("Kid Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleKidBoyClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy T-Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Dress Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Dress Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tuxedo</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Tuxedo")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                    
                                </ul>

                                <ul className={toggleKidBoyClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Swim Trunks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Swim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Denim Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Denim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                   
                                    
                                </ul>

                                <ul className={toggleKidBoyClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleKidBoyClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Leather Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Puffer Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleKidBoyClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Slim-Fit Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Slim-Fit Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleKidBoyClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxers</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Boxers")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxer Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Boxer Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Underwear Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleKidBoyClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Toddler Boy Clothing */}
                        <ul className={toggleToddlerBoyClothing ===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Active Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.ShorthoverCategory(); props.setProductType("Toddler Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                </ul>

                                <ul className={toggleToddlerBoyClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy T-Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Vest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Active Vest")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Dress Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Dress Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tuxedo</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Tuxedo")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                    
                                </ul>

                                <ul className={toggleToddlerBoyClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Swim Trunks</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Swim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Denim Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Denim Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                   
                                    
                                </ul>

                                <ul className={toggleToddlerBoyClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleToddlerBoyClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Leather Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Puffer Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleToddlerBoyClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Slim-Fit Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Slim-Fit Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleToddlerBoyClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxers</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Boy Boxers")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boxer Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Boxer Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Briefs</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Underwear Briefs")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleToddlerBoyClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Boy Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Girl Clothing */}
                        <ul className={toggleGirlClothing===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Active Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Crop Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Active Crop Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sports Bra</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sports Bra")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Seamless Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Seamless Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleGirlClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Blouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tunic Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tunic Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl T-shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bustier Corset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bustier Corset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Waistcoat</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Waistcoat")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pantsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Pantsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Two Piece Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Two Piece Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                                    
                                </ul>

                                <ul className={toggleGirlClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Workout Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jumpsuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Jumpsuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Romper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Romper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Capri Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Capri Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leggings</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Leggings")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                                    
                                </ul>

                                <ul className={toggleGirlClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cardigan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Cardigan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Crop Top Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Crop Top Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                      
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleGirlClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Leather")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Puffer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleGirlClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Maxi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Midi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Mini Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Maxi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Midi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Mini Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleGirlClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Jeggings</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Jeggings")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boyfriend Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Boyfriend Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>High Waisted Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl High Waisted Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Baggy Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Baggy Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Flare Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Flare Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Cropped Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Cropped Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleGirlClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Seamless Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Seamless Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Sports Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sports Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bra Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bra Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                
                        </ul>

                        <ul className={toggleGirlClothing===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>One-piece Swimsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl One-piece Swimsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bikini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bikini Panties")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tankini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tankini")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Top</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Swimsuit Top")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Bottoms</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Swimsuit Bottoms")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Cover-up</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Swimsuit Cover-up")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bodysuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Bodysuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tights</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Tights")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pantyhouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Pantyhouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                        </ul>

                        <ul className={toggleGirlClothing===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Underwear")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                            
                        </ul>

                        <ul className={toggleGirlClothing===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Topwear</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Girl Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Kid Girl Clothing */}
                        <ul className={toggleKidGirlClothing===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Active Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Crop Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Active Crop Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sports Bra</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sports Bra")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Seamless Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Seamless Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleKidGirlClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Blouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tunic Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tunic Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl T-shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bustier Corset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bustier Corset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Waistcoat</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Waistcoat")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pantsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Pantsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Two Piece Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Two Piece Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                                    
                                </ul>

                                <ul className={toggleKidGirlClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Workout Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jumpsuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Jumpsuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Romper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Romper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Capri Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Capri Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leggings</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Leggings")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                                    
                                </ul>

                                <ul className={toggleKidGirlClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cardigan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Cardigan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Crop Top Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Crop Top Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                      
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleKidGirlClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Leather")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Puffer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleKidGirlClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Maxi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Midi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Mini Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Maxi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Midi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Mini Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleKidGirlClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Jeggings</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Jeggings")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boyfriend Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Boyfriend Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>High Waisted Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl High Waisted Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Baggy Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Baggy Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Flare Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Flare Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Cropped Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Cropped Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleKidGirlClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Seamless Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Seamless Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Sports Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sports Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bra Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bra Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                
                        </ul>

                        <ul className={toggleKidGirlClothing===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>One-piece Swimsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl One-piece Swimsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bikini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bikini Panties")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tankini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tankini")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Top</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Swimsuit Top")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Bottoms</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Swimsuit Bottoms")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Cover-up</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Swimsuit Cover-up")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bodysuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bodysuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tights</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Tights")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pantyhouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Pantyhouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                        </ul>

                        <ul className={toggleKidGirlClothing===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Underwear")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                            
                        </ul>

                        <ul className={toggleKidGirlClothing===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Topwear</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                        {/* Toddler Girl Clothing */}
                        <ul className={toggleToddlerGirlClothing===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Active Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Crop Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Active Crop Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Active Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Activewear Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Active Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sports Bra</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sports Bra")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Activewear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tracksuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tracksuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Seamless Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Seamless Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleToddlerGirlClothing===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Blouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tunic Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tunic Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tank Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tank Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Top</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Top")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Button Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Button Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Flannel Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Flannel Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Polo Shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Polo Shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Turtleneck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Turtleneck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Graphic Tee</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Graphic Tee")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>T-shirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl T-shirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bustier Corset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Bustier Corset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Waistcoat</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Waistcoat")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Pantsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Pantsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Two Piece Suit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Two Piece Suit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                                    
                                </ul>

                                <ul className={toggleToddlerGirlClothing===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Workout Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Workout Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Cargo Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Khaki Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Skort</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Workout Skort")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jumpsuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Jumpsuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Romper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Romper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cargo Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Cargo Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Khaki Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Khaki Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jogger Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Jogger Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Capri Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Capri Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leggings</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Leggings")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Yoga Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Yoga Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatpants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sweatpants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                   
                                    
                                </ul>

                                <ul className={toggleToddlerGirlClothing===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Blazer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Blazer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sweater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Cardigan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Cardigan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Crop Top Hoodie</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Crop Top Hoodie")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sweatshirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sweatshirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                      
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Trench Coat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Trench Coat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Peacoat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Peacoat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleToddlerGirlClothing===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Jean Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Jean Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Leather Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Leather")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bomber Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Bomber Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Puffer Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Puffer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Fleece Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Fleece Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Faux Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Faux Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Parka Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Parka Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Shacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Shacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Rain Jacket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Rain Jacket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    
                                </ul>

                                <ul className={toggleToddlerGirlClothing===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Maxi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Midi Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Dress</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Mini Dress")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Maxi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Maxi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Midi Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Midi Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Mini Bodycon</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Mini Bodycon")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skirt</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Skirt")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                        </ul>

                        <ul className={toggleToddlerGirlClothing===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Straight Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Straight Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bootcut Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Bootcut Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Skinny Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Skinny Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Jeggings</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Jeggings")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Boyfriend Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Boyfriend Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>High Waisted Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl High Waisted Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Baggy Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Baggy Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Flare Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Flare Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Cropped Jeans</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Cropped Jeans")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Denim Shorts</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Denim Shorts")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                        </ul>

                        <ul className={toggleToddlerGirlClothing===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Seamless Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Seamless Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Sports Bra</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Sports Bra")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bra Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kid Girl Bra Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                                
                        </ul>

                        <ul className={toggleToddlerGirlClothing===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>One-piece Swimsuit</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl One-piece Swimsuit")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Bikini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Bikini Panties")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Tankini</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tankini")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Top</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Swimsuit Top")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Bottoms</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Swimsuit Bottoms")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Swimsuit Cover-up</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Swimsuit Cover-up")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Bodysuit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Bodysuit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Tights</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Tights")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pantyhouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Pantyhouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                        </ul>

                        <ul className={toggleToddlerGirlClothing===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                        <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Underwear")}} className='Category-select_button'>select</div>
                                </div>
                            </li>

                            <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                >
                                <div>Underwear Pack</div>
                                <div>
                                    <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Underwear Pack")}} className='Category-select_button'>select</div>
                                </div>
                            </li>
                            
                            
                            
                        </ul>

                        <ul className={toggleToddlerGirlClothing===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Pajama Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Pants</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Pajama Pants")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Pajama Short</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Pajama Short")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Sleep Topwear</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Sleep Topwear")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Robe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Robe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ThirdCategory()}
                                        >
                                        <div>Loungewear Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Girl Loungewear Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    
                        </ul>

                                </div>
</div>
    </div>
  )
}

export default CategoryClothing