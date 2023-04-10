import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import WaterCoolerDispensers from './WaterCoolerDispensers';
import VacuumSealers from './VacuumSealers';
import IndoorGrills from './IndoorGrills';
import IceMakers from './IceMakers';
import FoodScales from './FoodScales';
import ElectricGriddles from './ElectricGriddles';
import Dehydrators from './Dehydrators';
import AirDeepFryers from './AirDeepFryers';

// TreatMakers
import CottonCandyMachine from './TreatMakers/CottonCandyMachine';
import FonduePots from './TreatMakers/FonduePots';
import IceCreamMachine from './TreatMakers/IceCreamMachine';
import IceCreamShaver from './TreatMakers/IceCreamShaver';
import PopcornMachine from './TreatMakers/PopcornMachine';

// Toasters
import ConveyorToasters from './Toastware/ConveyorToasters';
import SandwitchToasters from './Toastware/SandwitchToasters';
import SliceToaster from './Toastware/SliceToaster';

// Mixers - Attachments
import StandMixers from './MixersAttachments/StandMixers';
import HandMixers from './MixersAttachments/HandMixers';
import MixerAttachments from './MixersAttachments/MixerAttachments';

// Juicers - Blenders
import Blenders from './JuicersBlenders/Blenders';
import Juicers from './JuicersBlenders/Juicers';
import FoodChoppers from './JuicersBlenders/FoodChoppers';
import FoodProcessors from './JuicersBlenders/FoodProcessors';

// Countertop Ovens
import ToasterOvens from './CountertopOvens/ToasterOvens';
import ConvectionOvens from './CountertopOvens/ConvectionOvens';

// Cookers
import InstantPots from './Cookers/InstantPots';
import SlowCookers from './Cookers/SlowCookers';
import MultiCookers from './Cookers/MultiCookers';

// Beverage Makers
import CoffeeMakers from './CoffeeTeaMakers/CoffeeMakers';
import ExpressoMakers from './CoffeeTeaMakers/ExpressoMakers';
import SodaMakers from './CoffeeTeaMakers/SodaMakers';
import TeaMakers from './CoffeeTeaMakers/TeaMakers';

// Bread, waffle Makers
import BreadMakers from './BreadWaffleMakers/BreadMakers';
import PancakeMakers from './BreadWaffleMakers/PancakeMakers';
import WaffleMakers from './BreadWaffleMakers/WaffleMakers';


function SmallKitchenAppliancesRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/bread-makers" component={Auth(BreadMakers, null)} />
      <Route exact path="/waffle-makers" component={Auth(WaffleMakers, null)} />
      <Route exact path="/pancake-makers" component={Auth(PancakeMakers, null)} />
      
      <Route exact path="/coffe-makers" component={Auth(CoffeeMakers, null)} />
      <Route exact path="/expresso-makers" component={Auth(ExpressoMakers, null)} />
      <Route exact path="/tea-makers" component={Auth(TeaMakers, null)} />
      <Route exact path="/soda-makers" component={Auth(SodaMakers, null)} />

      <Route exact path="/instant-pots" component={Auth(InstantPots, null)} />
      <Route exact path="/slow-cookers" component={Auth(SlowCookers, null)} />
      <Route exact path="/multi-cookers" component={Auth(MultiCookers, null)} />
      
      <Route exact path="/toaster-ovens" component={Auth(ToasterOvens, null)} />
      <Route exact path="/convection-ovens" component={Auth(ConvectionOvens, null)} />
 
      <Route exact path="/blenders" component={Auth(Blenders, null)} />
      <Route exact path="/juicers" component={Auth(Juicers, null)} />
      <Route exact path="/food-processors" component={Auth(FoodProcessors, null)} />
      <Route exact path="/food-choppers" component={Auth(FoodChoppers, null)} />

      <Route exact path="/stand-mixers" component={Auth(StandMixers, null)} />
      <Route exact path="/hand-mixers" component={Auth(HandMixers, null)} />
      <Route exact path="/mixer-attachments" component={Auth(MixerAttachments, null)} />
      
      <Route exact path="/slice-toasters" component={Auth(SliceToaster, null)} />
      <Route exact path="/sandwitch-toasters" component={Auth(SandwitchToasters, null)} />
      <Route exact path="/conveyor-toasters" component={Auth(ConveyorToasters, null)} />
      
      <Route exact path="/air-deep" component={Auth(AirDeepFryers, null)} />
      <Route exact path="/vacuum-sealers" component={Auth(VacuumSealers, null)} />
      <Route exact path="/food-scales" component={Auth(FoodScales, null)} />
      <Route exact path="/indoor-grills" component={Auth(IndoorGrills, null)} />
      <Route exact path="/water-dispensers" component={Auth(WaterCoolerDispensers, null)} />
      <Route exact path="/dehydrators" component={Auth(Dehydrators, null)} />
      <Route exact path="/ice-makers" component={Auth(IceMakers, null)} />
      <Route exact path="/electric-griddles" component={Auth(ElectricGriddles, null)} />

      <Route exact path="/icecream-machine" component={Auth(IceCreamMachine, null)} />
      <Route exact path="/candy-machine" component={Auth(CottonCandyMachine, null)} />
      <Route exact path="/popcorn-machine" component={Auth(PopcornMachine, null)} />
      <Route exact path="/icecream-shaver" component={Auth(IceCreamShaver, null)} />
      <Route exact path="/fondue-pots" component={Auth(FonduePots, null)} />
   
    </Switch>
    <Footer />
    </Router>
  )
}

export default SmallKitchenAppliancesRoutes