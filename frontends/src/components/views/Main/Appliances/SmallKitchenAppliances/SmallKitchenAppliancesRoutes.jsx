import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const WaterCoolerDispensers = lazy(() => import('./WaterCoolerDispensers'));
const VacuumSealers = lazy(() => import('./VacuumSealers'));
const IndoorGrills = lazy(() => import('./IndoorGrills'));
const IceMakers = lazy(() => import('./IceMakers'));
const FoodScales = lazy(() => import('./FoodScales'));
const ElectricGriddles = lazy(() => import('./ElectricGriddles'));
const Dehydrators = lazy(() => import('./Dehydrators'));
const AirFryers = lazy(() => import('./AirFryers'));
const DeepFryers = lazy(() => import('./DeepFryers'));
const AirFryerOvens = lazy(() => import('./AirFryerOvens'));
const DryAger = lazy(() => import('./DryAger'));

// TreatMakers
const CottonCandyMachine = lazy(() => import('./TreatMakers/CottonCandyMachine'));
const FonduePots = lazy(() => import('./TreatMakers/FonduePots'));
const IceCreamMachine = lazy(() => import('./TreatMakers/IceCreamMachine'));
const IceCreamShaver = lazy(() => import('./TreatMakers/IceCreamShaver'));
const PopcornMachine = lazy(() => import('./TreatMakers/PopcornMachine'));

// Toasters
const ConveyorToasters = lazy(() => import('./Toastware/ConveyorToasters'));
const SandwitchToasters = lazy(() => import('./Toastware/SandwitchToasters'));
const SliceToaster = lazy(() => import('./Toastware/SliceToaster'));

// Mixers - Attachments
const StandMixers = lazy(() => import('./MixersAttachments/StandMixers'));
const HandMixers = lazy(() => import('./MixersAttachments/HandMixers'));
const MixerAttachments = lazy(() => import('./MixersAttachments/MixerAttachments'));

// Juicers - Blenders
const Blenders = lazy(() => import('./JuicersBlenders/Blenders'));
const Juicers = lazy(() => import('./JuicersBlenders/Juicers'));
const FoodChoppers = lazy(() => import('./JuicersBlenders/FoodChoppers'));
const FoodProcessors = lazy(() => import('./JuicersBlenders/FoodProcessors'));

// Countertop Ovens
const ToasterOvens = lazy(() => import('./CountertopOvens/ToasterOvens'));
const ConvectionOvens = lazy(() => import('./CountertopOvens/ConvectionOvens'));

// Cookers
const InstantPots = lazy(() => import('./Cookers/InstantPots'));
const SlowCookers = lazy(() => import('./Cookers/SlowCookers'));
const MultiCookers = lazy(() => import('./Cookers/MultiCookers'));

// Beverage Makers
const CoffeeMakers = lazy(() => import('./CoffeeTeaMakers/CoffeeMakers'));
const ExpressoMakers = lazy(() => import('./CoffeeTeaMakers/ExpressoMakers'));
const SodaMakers = lazy(() => import('./CoffeeTeaMakers/SodaMakers'));
const TeaMakers = lazy(() => import('./CoffeeTeaMakers/TeaMakers'));

// Bread, waffle Makers
const BreadMakers = lazy(() => import('./BreadWaffleMakers/BreadMakers'));
const PancakeMakers = lazy(() => import('./BreadWaffleMakers/PancakeMakers'));
const WaffleMakers = lazy(() => import('./BreadWaffleMakers/WaffleMakers'));

function SmallKitchenAppliancesRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
      
      <Route exact path="/air-fryers" component={Auth(AirFryers, null)} />
      <Route exact path="/deep-fryers" component={Auth(DeepFryers, null)} />
      <Route exact path="/fryer-ovens" component={Auth(AirFryerOvens, null)} />

      <Route exact path="/vacuum-sealers" component={Auth(VacuumSealers, null)} />
      <Route exact path="/food-scales" component={Auth(FoodScales, null)} />
      <Route exact path="/indoor-grills" component={Auth(IndoorGrills, null)} />
      <Route exact path="/water-dispensers" component={Auth(WaterCoolerDispensers, null)} />
      <Route exact path="/dehydrators" component={Auth(Dehydrators, null)} />
      <Route exact path="/ice-makers" component={Auth(IceMakers, null)} />
      <Route exact path="/electric-griddles" component={Auth(ElectricGriddles, null)} />
      <Route exact path="/dry-ager" component={Auth(DryAger, null)} />

      <Route exact path="/icecream-machine" component={Auth(IceCreamMachine, null)} />
      <Route exact path="/candy-machine" component={Auth(CottonCandyMachine, null)} />
      <Route exact path="/popcorn-machine" component={Auth(PopcornMachine, null)} />
      <Route exact path="/icecream-shaver" component={Auth(IceCreamShaver, null)} />
      <Route exact path="/fondue-pots" component={Auth(FonduePots, null)} />
   
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default SmallKitchenAppliancesRoutes