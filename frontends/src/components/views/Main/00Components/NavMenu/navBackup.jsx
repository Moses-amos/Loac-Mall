import React, { useState } from 'react'
import './navmenu.css'
import GadgetsNav from './NavCategories/GadgetsNav'
import ApplianceNav from './NavCategories/ApplianceNav'
import HomeNav from './NavCategories/HomeNav'

function navBackup() {

const [toggleTabGadgets, settoggleTabGadgets] = useState(false)
const [toggleTabAppliances, settoggleTabAppliances] = useState(false)
const [toggleTabHome, settoggleTabHome] = useState(false)
const [toggleTabApparel, settoggleTabApparel] = useState(false)
const [toggleSportsFitness, settoggleSportsFitness] = useState(false)
const [toggleToolsEquipment, settoggleToolsEquipment] = useState(false)
const [toggleFirstCategory, settoggleFirstCategory] = useState(0)
const [toggleSecondCategory, settoggleSecondCategory] = useState(0)
const [toggleSelectedOne, settoggleSelectedOne] = useState(0)
const [toggleBottomFirstCategory, settoggleBottomFirstCategory] = useState(0)
const [toggleBottomSecondCategory, settoggleBottomSecondCategory] = useState(0)
const [toggleThirdCategory, settoggleThirdCategory] = useState(0)
const [toggleFourthCategory, settoggleFourthCategory] = useState(0)
const [toggleFifthCategory, settoggleFifthCategory] = useState(0)
const [toggleBottomThirdCategory, settoggleBottomThirdCategory] = useState(0)
const [toggleBottomFourthCategory, settoggleBottomFourthCategory] = useState(0)
const [toggleBottomFifthCategory, settoggleBottomFifthCategory] = useState(0)
const [toggleBottomSixthCategory, settoggleBottomSixthCategory] = useState(0)
const [toggleBottomSevenCategory, settoggleBottomSevenCategory] = useState(0)

// const ToggleTabGadgetsCategory = () => settoggleTabGadgets(!toggleTabGadgets);
// const TabAppliancesCategory = () => settoggleTabAppliances(!toggleTabAppliances);
// const TabHomeCategory = () => settoggleTabHome(!toggleTabHome);
// const TabApparelCategory = () => settoggleTabApparel(!toggleTabApparel);
// const TabSportsFitnessCategory = () => settoggleSportsFitness(!toggleSportsFitness);
// const TabToolsEquipmentCategory = () => settoggleToolsEquipment(!toggleToolsEquipment);

const TabGadgetsCategory = (index) => {
  settoggleTabGadgets(index);
}

const TabAppliancesCategory = (index) => {
  settoggleTabAppliances(index);
}

const TabHomeCategory = (index) => {
  settoggleTabHome(index);
}

const TabApparelCategory = (index) => {
  settoggleTabApparel(index);
}

const TabSportsFitnessCategory = (index) => {
  settoggleSportsFitness(index);
}

const TabToolsEquipmentCategory = (index) => {
  settoggleToolsEquipment(index);
}

const FirstCategory = (index) => {
  settoggleFirstCategory(index)
}

const SelectedOneCategory = (index) => {
  settoggleSelectedOne(index);
}

const SecondCategory = (index) => {
  settoggleSecondCategory(index);
}

const ThirdCategory = (index) => {
  settoggleThirdCategory(index);
}

const FourthCategory = (index) => {
  settoggleFourthCategory(index);
}

const FifthCategory = (index) => {
  settoggleFifthCategory(index);
}


const BottomFirstCategory = (index) => {
  settoggleBottomFirstCategory(index);
}

const BottomSecondCategory = (index) => {
  settoggleBottomSecondCategory(index);
}

const BottomThirdCategory = (index) => {
  settoggleBottomThirdCategory(index);
}

const BottomFourthCategory = (index) => {
  settoggleBottomFourthCategory(index);
}

const BottomFifthCategory = (index) => {
  settoggleBottomFifthCategory(index);
}

const BottomSixthCategory = (index) => {
  settoggleBottomSixthCategory(index);
}

const BottomSevenCategory = (index) => {
  settoggleBottomSevenCategory(index);
}

return (
  <div className='Nav-menu'>
    <div className='Menu-Item-inline'>
        <div onMouseEnter={()=> { TabGadgetsCategory(true); SecondCategory(0); ThirdCategory(0); SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
          onClick={() => { settoggleTabGadgets(!toggleTabGadgets); TabAppliancesCategory(false); TabHomeCategory(false); TabApparelCategory(false);
            TabSportsFitnessCategory(false); TabToolsEquipmentCategory(false)}}
        className="Item-title_inline" >
          <span>Gadgets</span>
        </div>
        <div onMouseLeave={()=> { TabGadgetsCategory(false);SecondCategory(0); ThirdCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleTabGadgets ? "Dropdown_categories-menu" : "Dropdown_categories-menu_hide"}
        
        >
          <GadgetsNav 
            toggleSelectedOne={toggleSelectedOne} settoggleSelectedOne={settoggleSelectedOne}
            toggleFirstCategory={toggleFirstCategory} toggleSecondCategory={toggleSecondCategory} toggleThirdCategory={toggleThirdCategory}
            toggleFourthCategory={toggleFourthCategory} toggleFifthCategory={toggleFifthCategory}
            
            settoggleFirstCategory={settoggleFirstCategory} settoggleSecondCategory={settoggleSecondCategory} settoggleThirdCategory={settoggleThirdCategory}
            settoggleFourthCategory={settoggleFourthCategory} settoggleFifthCategory={settoggleFifthCategory} 
            
            toggleBottomFirstCategory={toggleBottomFirstCategory} toggleBottomSecondCategory={toggleBottomSecondCategory} toggleBottomThirdCategory={toggleBottomThirdCategory}
            toggleBottomFourthCategory={toggleBottomFourthCategory} toggleBottomFifthCategory={toggleBottomFifthCategory} toggleBottomSixthCategory={toggleBottomSixthCategory}
            toggleBottomSevenCategory={toggleBottomSevenCategory}
            
            settoggleBottomFirstCategory={settoggleBottomFirstCategory} settoggleBottomSecondCategory={settoggleBottomSecondCategory} settoggleBottomThirdCategory={settoggleBottomThirdCategory}
            settoggleBottomFourthCategory={settoggleBottomFourthCategory} settoggleBottomFifthCategory={settoggleBottomFifthCategory} settoggleBottomSixthCategory={settoggleBottomSixthCategory} 
            settoggleBottomSevenCategory={settoggleBottomSevenCategory} 
          
             />
      </div>

    </div>
    <div className='Menu-Item-inline'>
        <div onMouseEnter={()=> { TabAppliancesCategory(true); SecondCategory(0); ThirdCategory(0); SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
         onClick={() => { TabGadgetsCategory(false); settoggleTabAppliances(!toggleTabAppliances); TabHomeCategory(false); TabApparelCategory(false);
          TabSportsFitnessCategory(false); TabToolsEquipmentCategory(false)}}
       className="Item-title_inline">
          <span>Appliances</span>
        </div>
        <div onMouseLeave={()=> { TabAppliancesCategory(false);SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleTabAppliances ? "Dropdown_categories-menu-Appliance" : "Dropdown_categories-menu_hide"}
        
        >
          
          <ApplianceNav 
            toggleSelectedOne={toggleSelectedOne} settoggleSelectedOne={settoggleSelectedOne}
            toggleFirstCategory={toggleFirstCategory} toggleSecondCategory={toggleSecondCategory} toggleThirdCategory={toggleThirdCategory}
            toggleFourthCategory={toggleFourthCategory} toggleFifthCategory={toggleFifthCategory}
            
            settoggleFirstCategory={settoggleFirstCategory} settoggleSecondCategory={settoggleSecondCategory} settoggleThirdCategory={settoggleThirdCategory}
            settoggleFourthCategory={settoggleFourthCategory} settoggleFifthCategory={settoggleFifthCategory} 
            
            toggleBottomFirstCategory={toggleBottomFirstCategory} toggleBottomThirdCategory={toggleBottomThirdCategory}
            toggleBottomFourthCategory={toggleBottomFourthCategory} toggleBottomFifthCategory={toggleBottomFifthCategory}
            
            settoggleBottomFirstCategory={settoggleBottomFirstCategory} settoggleBottomThirdCategory={settoggleBottomThirdCategory}
            settoggleBottomFourthCategory={settoggleBottomFourthCategory} settoggleBottomFifthCategory={settoggleBottomFifthCategory} 

           />

      </div>
    </div>
    <div className='Menu-Item-inline'>
    <div onMouseEnter={()=> { TabHomeCategory(true); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
         onClick={() => { settoggleTabHome(!toggleTabHome); TabGadgetsCategory(false); TabAppliancesCategory(false); TabApparelCategory(false);
          TabSportsFitnessCategory(false); TabToolsEquipmentCategory(false)}}
       className="Item-title_inline" >
          <span>Home</span>
      </div>
      <div onMouseLeave={()=> { TabHomeCategory(false); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleTabHome ? "Dropdown_categories-menu-Home" : "Dropdown_categories-menu_hide"}>

          <HomeNav 
            toggleSelectedOne={toggleSelectedOne} settoggleSelectedOne={settoggleSelectedOne}
            toggleFirstCategory={toggleFirstCategory} toggleSecondCategory={toggleSecondCategory} toggleThirdCategory={toggleThirdCategory}
            toggleFourthCategory={toggleFourthCategory} toggleFifthCategory={toggleFifthCategory}
            
            settoggleFirstCategory={settoggleFirstCategory} settoggleSecondCategory={settoggleSecondCategory} settoggleThirdCategory={settoggleThirdCategory}
            settoggleFourthCategory={settoggleFourthCategory} settoggleFifthCategory={settoggleFifthCategory} 
            
            toggleBottomThirdCategory={toggleBottomThirdCategory}
            toggleBottomFourthCategory={toggleBottomFourthCategory} toggleBottomFifthCategory={toggleBottomFifthCategory} toggleBottomSixthCategory={toggleBottomSixthCategory}
            
            settoggleBottomThirdCategory={settoggleBottomThirdCategory}
            settoggleBottomFourthCategory={settoggleBottomFourthCategory} 
 />
          </div>
    </div>
    <div className='Menu-Item-inline'>
    <div 
    // onMouseEnter={()=> { TabApparelCategory(true);SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
    //      FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
    //      onClick={() => { TabGadgetsCategory(false); TabAppliancesCategory(false); TabHomeCategory(false); settoggleTabApparel(!toggleTabApparel);
    //       TabSportsFitnessCategory(false); TabToolsEquipmentCategory(false)}}
        className="Item-title_inline" >
          <span>Apparel</span>
          <div 
        //   onMouseLeave={()=> { TabApparelCategory(false);SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        // FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleTabApparel ? "Dropdown_categories-menu-Clothes" : "Dropdown_categories-menu_hide"}
        >
        </div>
      </div>
    </div>
    <div className='Menu-Item-inline'>
    <div 
    // onMouseEnter={()=> { TabSportsFitnessCategory(true); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
    //      FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
    //      onClick={() => { TabGadgetsCategory(false); TabAppliancesCategory(false); TabHomeCategory(false); TabApparelCategory(false);
    //       settoggleSportsFitness(!toggleSportsFitness); TabToolsEquipmentCategory(false)}}
        className="Item-title_inline" >
          <span>Sports & Fitness</span>
          <div 
        //   onMouseLeave={()=> { TabSportsFitnessCategory(false); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        // FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleSportsFitness ? "Dropdown_categories-menu-Sports" : "Dropdown_categories-menu_hide"}
        >
               </div>
      </div>
    </div>
    <div className='Menu-Item-inline'>
        <div 
        // onMouseEnter={()=> { TabToolsEquipmentCategory(true); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
        //  FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        //  onClick={() => { TabGadgetsCategory(false); TabAppliancesCategory(false); TabHomeCategory(false); TabApparelCategory(false);
        //   TabSportsFitnessCategory(false); settoggleToolsEquipment(!toggleToolsEquipment)}}
        className="Item-title_inline" >
          <span>Tools & Equipment</span>
          <div 
        //   onMouseLeave={()=> { TabToolsEquipmentCategory(false); SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        // FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className={toggleToolsEquipment ? "Dropdown_categories-menu-Tools" : "Dropdown_categories-menu_hide"}>

      </div>
        </div>
    </div>
</div>
)
}

export default navBackup