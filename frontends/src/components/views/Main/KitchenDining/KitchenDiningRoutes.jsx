import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';
const Navbar = lazy(() => import('../00Components/NavMenu/NavMenu'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

// Cookware
const CookwareSets = lazy(() => import('./Cookware/CookwareSets'));
const DutchOvens = lazy(() => import('./Cookware/DutchOvens'));
const PanSkillets = lazy(() => import('./Cookware/PanSkillets'));
const Pots = lazy(() => import('./Cookware/Pots'));
const Roasters = lazy(() => import('./Cookware/Roasters'));

// Tableware
const DinnerSets = lazy(() => import('./Tableware/DinnerSets'));
const DinnerCollections = lazy(() => import('./Tableware/DinnerCollections'));
const Plates = lazy(() => import('./Tableware/Plates'));
const DessertPlates = lazy(() => import('./Tableware/DessertPlates'));
const Bowls = lazy(() => import('./Tableware/Bowls'));

// Bakeware
const BakingDishes = lazy(() => import('./Bakeware/BakingDishes'));
const BakingSets = lazy(() => import('./Bakeware/BakingSets'));
const BakingSheets = lazy(() => import('./Bakeware/BakingSheets'));
const CakePans = lazy(() => import('./Bakeware/CakePans'));
const CupcakePans = lazy(() => import('./Bakeware/CupcakePans'));
const PiePans = lazy(() => import('./Bakeware/PiePans'));
const PizzaPans = lazy(() => import('./Bakeware/PizzaPans'));
const LoafPans = lazy(() => import('./Bakeware/LoafPans'));
const MixingBowls = lazy(() => import('./Bakeware/MixingBowls'));
const BakingCups = lazy(() => import('./Bakeware/BakingCups'));
const BakingUtensils = lazy(() => import('./Bakeware/BakingUtensils'));

// Drinkware
const DrinkingGlasses = lazy(() => import('./Drinkware/DrinkingGlasses'));
const CoffeeMugs = lazy(() => import('./Drinkware/CoffeeMugs'));
const TeaCups = lazy(() => import('./Drinkware/TeaCups'));
const WineGlasses = lazy(() => import('./Drinkware/WineGlasses'));
const CocktailGlasses = lazy(() => import('./Drinkware/CocktailGlasses'));
const ChampagneGlasses = lazy(() => import('./Drinkware/ChampagneGlasses'));
const BeerGlasses = lazy(() => import('./Drinkware/BeerGlasses'));
const Pitchers = lazy(() => import('./Drinkware/Pitchers'));
const BeverageDispensers = lazy(() => import('./Drinkware/BeverageDispensers'));
const WaterBottles = lazy(() => import('./Drinkware/WaterBottles'));
const TravelMugs = lazy(() => import('./Drinkware/TravelMugs'));
const BlenderBottles = lazy(() => import('./Drinkware/BlenderBottles'));

// Serveware

const ServewareSets = lazy(() => import('./Serveware/ServewareSets'));
const CakeStands = lazy(() => import('./Serveware/CakeStands'));
const TieredServers = lazy(() => import('./Serveware/TieredServers'));
const ServingTrays = lazy(() => import('./Serveware/ServingTrays'));
const ServingPlatters = lazy(() => import('./Serveware/ServingPlatters'));
const CasseroleDishes = lazy(() => import('./Serveware/CasseroleDishes'));
const ButterDishes = lazy(() => import('./Serveware/ButterDishes'));
const GravyBoats = lazy(() => import('./Serveware/GravyBoats'));
const ServingBowls = lazy(() => import('./Serveware/ServingBowls'));
const UtensilCaddies = lazy(() => import('./Serveware/UtensilCaddies'));
const SugarServeware = lazy(() => import('./Serveware/SugarServeware'));
const Shaker = lazy(() => import('./Serveware/Shaker'));

// Silverware
const SilverwareSets = lazy(() => import('./Silverware/SilverwareSets'));
const SilverwareChest = lazy(() => import('./Silverware/SilverwareChest'));
const KitchenUtensils = lazy(() => import('./Silverware/KitchenUtensils'));

// Utensils/Gadgets
const CookingTimers = lazy(() => import('./UtensilGadgets/CookingTimers'));
const KitchenThermometers = lazy(() => import('./UtensilGadgets/KitchenThermometers'));
const KitchenTools = lazy(() => import('./UtensilGadgets/KitchenTools'));
const Slicers = lazy(() => import('./UtensilGadgets/Slicers'));
const MeasuringUtensils = lazy(() => import('./UtensilGadgets/MeasuringUtensils'));
const MandolineSlicers = lazy(() => import('./UtensilGadgets/MandolineSlicers'));
const MeatSlicers = lazy(() => import('./UtensilGadgets/MeatSlicers'));

// Food Storages
const StorageCanister = lazy(() => import('./FoodStorages/StorageCanister'));
const StorageSets = lazy(() => import('./FoodStorages/StorageSets'));
const CanningJars = lazy(() => import('./FoodStorages/CanningJars'));
const RefrigeratorStorage = lazy(() => import('./FoodStorages/RefrigeratorStorage'));
const PotRacks = lazy(() => import('./FoodStorages/PotRacks'));
const DishRacks = lazy(() => import('./FoodStorages/DishRacks'));

// Knifes / Cutlery
const KniveSets = lazy(() => import('./CutleryKnives/KniveSets'));
const BlockSets = lazy(() => import('./CutleryKnives/BlockSets'));
const KnifeSharpeners = lazy(() => import('./CutleryKnives/KnifeSharpeners'));
const KnifeBlocks = lazy(() => import('./CutleryKnives/KnifeBlocks'));
const Cleavers = lazy(() => import('./CutleryKnives/Cleavers'));
const ElectricKnives = lazy(() => import('./CutleryKnives/ElectricKnives'));
const CuttingBoard = lazy(() => import('./CutleryKnives/CuttingBoard'));

// Ornaments / Textiles
const KitchenOrnaments = lazy(() => import('../KitchenOrnamentsTextiles/KitchenOrnaments'));
const KitchenTextiles = lazy(() => import('../KitchenOrnamentsTextiles/KitchenTextiles'));


function KitchenDiningRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
      
      <Route exact path="/ornaments" component={Auth(KitchenOrnaments, null)} />
      <Route exact path="/textiles" component={Auth(KitchenTextiles, null)} />

    </Switch>
    <Footer />
  </Router>
  </Suspense>
  )
}

export default KitchenDiningRoutes