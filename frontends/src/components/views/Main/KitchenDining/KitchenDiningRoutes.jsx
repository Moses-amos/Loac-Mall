import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

// Cookware

import CookwareSets from './Cookware/CookwareSets';
import DutchOvens from './Cookware/DutchOvens';
import PanSkillets from './Cookware/PanSkillets';
import Pots from './Cookware/Pots';
import Roasters from './Cookware/Roasters';

// Tableware

import DinnerSets from './Tableware/DinnerSets';
import DinnerCollections from './Tableware/DinnerCollections';
import Plates from './Tableware/Plates';
import DessertPlates from './Tableware/DessertPlates';
import Bowls from './Tableware/Bowls';

// Bakeware

import BakingDishes from './Bakeware/BakingDishes';
import BakingSets from './Bakeware/BakingSets';
import BakingSheets from './Bakeware/BakingSheets';
import CakePans from './Bakeware/CakePans';
import CupcakePans from './Bakeware/CupcakePans';
import PiePans from './Bakeware/PiePans';
import PizzaPans from './Bakeware/PizzaPans';
import LoafPans from './Bakeware/LoafPans';
import MixingBowls from './Bakeware/MixingBowls';
import BakingCups from './Bakeware/BakingCups';
import BakingUtensils from './Bakeware/BakingUtensils';

// Drinkware

import DrinkingGlasses from './Drinkware/DrinkingGlasses';
import CoffeeMugs from './Drinkware/CoffeeMugs';
import TeaCups from './Drinkware/TeaCups';
import WineGlasses from './Drinkware/WineGlasses';
import CocktailGlasses from './Drinkware/CocktailGlasses';
import ChampagneGlasses from './Drinkware/ChampagneGlasses';
import BeerGlasses from './Drinkware/BeerGlasses';
import Pitchers from './Drinkware/Pitchers';
import BeverageDispensers from './Drinkware/BeverageDispensers';
import WaterBottles from './Drinkware/WaterBottles';
import TravelMugs from './Drinkware/TravelMugs';
import BlenderBottles from './Drinkware/BlenderBottles';

// Serveware

import ServewareSets from './Serveware/ServewareSets';
import CakeStands from './Serveware/CakeStands';
import TieredServers from './Serveware/TieredServers';
import ServingTrays from './Serveware/ServingTrays';
import ServingPlatters from './Serveware/ServingPlatters';
import CasseroleDishes from './Serveware/CasseroleDishes';
import ButterDishes from './Serveware/ButterDishes';
import GravyBoats from './Serveware/GravyBoats';
import ServingBowls from './Serveware/ServingBowls';
import UtensilCaddies from './Serveware/UtensilCaddies';
import SugarServeware from './Serveware/SugarServeware';
import Shaker from './Serveware/Shaker';

// Silverware

import SilverwareSets from './Silverware/SilverwareSets';
import SilverwareChest from './Silverware/SilverwareChest';
import KitchenUtensils from './Silverware/KitchenUtensils';

// Utensils/Gadgets

import CookingTimers from './UtensilGadgets/CookingTimers';
import KitchenThermometers from './UtensilGadgets/KitchenThermometers';
import KitchenTools from './UtensilGadgets/KitchenTools';
import Slicers from './UtensilGadgets/Slicers';
import MeasuringUtensils from './UtensilGadgets/MeasuringUtensils';
import MandolineSlicers from './UtensilGadgets/MandolineSlicers';
import MeatSlicers from './UtensilGadgets/MeatSlicers';

// Food Storages

import StorageCanister from './FoodStorages/StorageCanister';
import StorageSets from './FoodStorages/StorageSets';
import CanningJars from './FoodStorages/CanningJars';
import RefrigeratorStorage from './FoodStorages/RefrigeratorStorage';
import PotRacks from './FoodStorages/PotRacks';
import DishRacks from './FoodStorages/DishRacks';

// Knifes / Cutlery

import KniveSets from './CutleryKnives/KniveSets';
import BlockSets from './CutleryKnives/BlockSets';
import KnifeSharpeners from './CutleryKnives/KnifeSharpeners';
import KnifeBlocks from './CutleryKnives/KnifeBlocks';
import Cleavers from './CutleryKnives/Cleavers';
import ElectricKnives from './CutleryKnives/ElectricKnives';
import CuttingBoard from './CutleryKnives/CuttingBoard';

// Ornaments / Textiles

import KitchenOrnaments from '../KitchenOrnamentsTextiles/KitchenOrnaments';
import KitchenTextiles from '../KitchenOrnamentsTextiles/KitchenTextiles';


function KitchenDiningRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/cookware-sets" component={Auth(CookwareSets, null)} />
      <Route exact path="/dutch-ovens" component={Auth(DutchOvens, null)} />
      <Route exact path="/pans-skillets" component={Auth(PanSkillets, null)} />
      <Route exact path="/pots" component={Auth(Pots, null)} />
      <Route exact path="/roasters" component={Auth(Roasters, null)} />

      <Route exact path="/dinner-sets" component={Auth(DinnerSets, null)} />
      <Route exact path="/dinner-collections" component={Auth(DinnerCollections, null)} />
      <Route exact path="/plates" component={Auth(Plates, null)} />
      <Route exact path="/dessert-plates" component={Auth(DessertPlates, null)} />
      <Route exact path="/bowls" component={Auth(Bowls, null)} />

      <Route exact path="/baking-dishes" component={Auth(BakingDishes, null)} />
      <Route exact path="/baking-sets" component={Auth(BakingSets, null)} />
      <Route exact path="/baking-sheets" component={Auth(BakingSheets, null)} />
      <Route exact path="/cake-pans" component={Auth(CakePans, null)} />
      <Route exact path="/cupcake-pans" component={Auth(CupcakePans, null)} />
      <Route exact path="/pie-pans" component={Auth(PiePans, null)} />
      <Route exact path="/pizza-pans" component={Auth(PizzaPans, null)} />
      <Route exact path="/loaf-pans" component={Auth(LoafPans, null)} />
      <Route exact path="/mixing-bowls" component={Auth(MixingBowls, null)} />
      <Route exact path="/baking-cups" component={Auth(BakingCups, null)} />
      <Route exact path="/baking-utensils" component={Auth(BakingUtensils, null)} />
      
      <Route exact path="/drinking-glasses" component={Auth(DrinkingGlasses, null)} />
      <Route exact path="/coffee-mugs" component={Auth(CoffeeMugs, null)} />
      <Route exact path="/tea-cups" component={Auth(TeaCups, null)} />
      <Route exact path="/wine-glasses" component={Auth(WineGlasses, null)} />
      <Route exact path="/cocktail-glasses" component={Auth(CocktailGlasses, null)} />
      <Route exact path="/champagne-glasses" component={Auth(ChampagneGlasses, null)} />
      <Route exact path="/beer-glasses" component={Auth(BeerGlasses, null)} />
      <Route exact path="/pitchers" component={Auth(Pitchers, null)} />
      <Route exact path="/beverage-dispenser" component={Auth(BeverageDispensers, null)} />
      <Route exact path="/travel-mugs" component={Auth(TravelMugs, null)} />
      <Route exact path="/water-bottles" component={Auth(WaterBottles, null)} />
      <Route exact path="/blender-bottles" component={Auth(BlenderBottles, null)} />

      <Route exact path="/serveware-sets" component={Auth(ServewareSets, null)} />
      <Route exact path="/cake-stands" component={Auth(CakeStands, null)} />
      <Route exact path="/tiered-servers" component={Auth(TieredServers, null)} />
      <Route exact path="/serving-trays" component={Auth(ServingTrays, null)} />
      <Route exact path="/serving-platters" component={Auth(ServingPlatters, null)} />
      <Route exact path="/casserole-dishes" component={Auth(CasseroleDishes, null)} />
      <Route exact path="/butter-dishes" component={Auth(ButterDishes, null)} />
      <Route exact path="/gravy-boats" component={Auth(GravyBoats, null)} />
      <Route exact path="/serving-bowls" component={Auth(ServingBowls, null)} />
      <Route exact path="/utensil-caddies" component={Auth(UtensilCaddies, null)} />
      <Route exact path="/serveware" component={Auth(SugarServeware, null)} />
      <Route exact path="/shakers" component={Auth(Shaker, null)} />

      <Route exact path="/silverware-sets" component={Auth(SilverwareSets, null)} />
      <Route exact path="/silverware-chest" component={Auth(SilverwareChest, null)} />
      <Route exact path="/kitchen-utensils" component={Auth(KitchenUtensils, null)} />

      <Route exact path="/cooking-timers" component={Auth(CookingTimers, null)} />
      <Route exact path="/kitchen-thermometers" component={Auth(KitchenThermometers, null)} />
      <Route exact path="/kitchen-tools" component={Auth(KitchenTools, null)} />
      <Route exact path="/slice-tools" component={Auth(Slicers, null)} />
      <Route exact path="/measuring-utensils" component={Auth(MeasuringUtensils, null)} />
      <Route exact path="/mandolines-slicers" component={Auth(MandolineSlicers, null)} />
      <Route exact path="/meat-slicers" component={Auth(MeatSlicers, null)} />

      <Route exact path="/storage-canisters" component={Auth(StorageCanister, null)} />
      <Route exact path="/storage-set" component={Auth(StorageSets, null)} />
      <Route exact path="/canning-jars" component={Auth(CanningJars, null)} />
      <Route exact path="/refrigerator-storage" component={Auth(RefrigeratorStorage, null)} />
      <Route exact path="/pot-racks" component={Auth(PotRacks, null)} />
      <Route exact path="/dish-racks" component={Auth(DishRacks, null)} />
     
      <Route exact path="/knife-sets" component={Auth(KniveSets, null)} />
      <Route exact path="/block-sets" component={Auth(BlockSets, null)} />
      <Route exact path="/knife-sharpeners" component={Auth(KnifeSharpeners, null)} />
      <Route exact path="/knife-blocks" component={Auth(KnifeBlocks, null)} />
      <Route exact path="/cleavers" component={Auth(Cleavers, null)} />
      <Route exact path="/electric-knifes" component={Auth(ElectricKnives, null)} />
      <Route exact path="/cutting-boards" component={Auth(CuttingBoard, null)} />
      
      <Route exact path="/kitchen-ornaments" component={Auth(KitchenOrnaments, null)} />
      <Route exact path="/kitchen-textiles" component={Auth(KitchenTextiles, null)} />

    </Switch>
    <Footer />
  </Router>
  )
}

export default KitchenDiningRoutes