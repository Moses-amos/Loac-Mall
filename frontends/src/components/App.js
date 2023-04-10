import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from '../hoc/auth'

// General Routes
import MRoutes from './views/MRoutes';

//Authentication
import LoginPage from './views/Authentication/LoginPage/LoginPage.jsx';
import RegisterPage from './views/Authentication/RegisterPage/RegisterPage.jsx'
import AppendRole from './views/Fulfillment/MainOperations/AppendRole/AppendRole.jsx'
import ReRoutePage from './views/Fulfillment/MainOperations/ReRoutePage/ReRoutePage';
import RetailerRole from './views/Fulfillment/MainOperations/AppendRole/RetailerRole';

// Client Routes
import ClientPages from './views/Client/ClientPages';
import ClientOtherPages from './views/Client/ClientOtherPages';

// Fulfillment Routes
import Fulfillment from './views/Fulfillment/Fulfillment.jsx';

// Main Routes
import MainOperations from './views/Fulfillment/MainOperations/MainOperations';
import UserLogged from './views/Main/0_Home/components/UserLogged';
import CartRoute from './views/Main/CartPage/CartRoute';
import ConfirmPage from './views/Authentication/ConfirmPage/ConfirmPage.jsx';
import FurnitureRoutes from './views/Main/Furniture/FurnitureRoutes';
import HomeDecoreRoutes from './views/Main/HomeDecore/HomeDecoreRoutes';
import KitchenDiningRoutes from './views/Main/KitchenDining/KitchenDiningRoutes';
import BathroomRoutes from './views/Main/BathroomPlacements/BathroomRoutes';
import KitchenPlacementRoutes from './views/Main/KitchenPlacements/KitchenPlacementRoutes';
import BeddingRoutes from './views/Main/Bedding/BeddingRoutes';
import HairAppliancesRoutes from './views/Main/Appliances/HairAppliances/HairAppliancesRoutes'
import OutdoorKitchenRoutes from './views/Main/Appliances/OutdoorKitchen/OutdoorKitchenRoutes';
import SmallKitchenAppliancesRoutes from './views/Main/Appliances/SmallKitchenAppliances/SmallKitchenAppliancesRoutes';
import IndoorApplianceRoutes from './views/Main/Appliances/IndoorAppliances/IndoorApplianceRoutes';
import PowerToolsRoutes from './views/Main/Appliances/PoweTools/PowerToolsRoutes';
import GardenToolsRoutes from './views/Main/Appliances/GartdenTools/GardenToolsRoutes';
import BranchLocationRoutes from './views/Fulfillment/MainOperations/Pages/MainPages/BranchLocations/BranchLocationRoutes';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {

    return (
  <Suspense fallback={(<div>Loading...</div>)}>
  <div>
    <Switch>
      {/*Auntentication */}
      <Route exact path="/login" component={Auth(LoginPage, null)} />
      <Route exact path="/register" component={Auth(RegisterPage, null)} />
      <Route exact path="/reroute" component={Auth(ReRoutePage, true)} />
      <Route exact path="/branch-location" component={Auth(AppendRole, true)} />
      <Route exact path="/confirm" component={Auth(ConfirmPage, null)} />
      <Route exact path="/logged" component={Auth(UserLogged, true)} />
      <Route exact path="/0/admin" component={Auth(RetailerRole, true)} />

      {/*Main */}
      <Route exact path="/" component={MRoutes} />
      <Route exact path="/e" component={MRoutes} />
      <Route exact path="/desktops-laptops" component={MRoutes} />
      <Route exact path="/desktop-components" component={MRoutes} />
      <Route exact path="/computer-accessories" component={MRoutes} />
      <Route exact path="/computer-pads" component={MRoutes} />
      <Route exact path="/power-cables" component={MRoutes} />
      <Route exact path="/card-readers" component={MRoutes} />
      <Route exact path="/mouse-keyboard" component={MRoutes} />
      <Route exact path="/laptop-components" component={MRoutes} />
      <Route exact path="/hard-disk-drives" component={MRoutes} />
      <Route exact path="/solid-state-drives" component={MRoutes} />
      <Route exact path="/external-drives" component={MRoutes} />
      <Route exact path="/chargers-batteries" component={MRoutes} />
      <Route exact path="/storage-drives" component={MRoutes} />
      <Route exact path="/networking" component={MRoutes} />
      <Route exact path="/desktops" component={MRoutes} />
      <Route exact path="/laptops" component={MRoutes} />
      <Route exact path="/cd-dvd-drives" component={MRoutes} />
      <Route exact path="/processors" component={MRoutes} />
      <Route exact path="/desktop-cabinets" component={MRoutes} />
      <Route exact path="/graphic-cards" component={MRoutes} />
      <Route exact path="/power-supplies" component={MRoutes} />
      <Route exact path="/motherboards" component={MRoutes} />
      <Route exact path="/desktop-memory" component={MRoutes} />
      <Route exact path="/wifi-cards" component={MRoutes} />
      <Route exact path="/cooling" component={MRoutes} />
      <Route exact path="/tablet-components" component={MRoutes} />
      <Route exact path="/laptop-memory" component={MRoutes} />
      <Route exact path="/laptop-accessory" component={MRoutes} />
      <Route exact path="/storage-devices" component={MRoutes} />
      <Route exact path="/cables-adapters" component={MRoutes} />
      <Route exact path="/office-devices" component={MRoutes} />
      <Route exact path="/monitors" component={MRoutes} />
      <Route exact path="/printers" component={MRoutes} />
      <Route exact path="/computer-software" component={MRoutes} />
      <Route exact path="/cellular-components" component={MRoutes} />
      <Route exact path="/cellular-phones" component={MRoutes} />
      <Route exact path="/cellular-accessories" component={MRoutes} />
      <Route exact path="/tablet-accessories" component={MRoutes} />
      <Route exact path="/iphones" component={MRoutes} />
      <Route exact path="/cellular-accessories" component={MRoutes} />
      <Route exact path="/tablets" component={MRoutes} />
      <Route exact path="/smartphones" component={MRoutes} />
      <Route exact path="/home-theater" component={MRoutes} />
      <Route exact path="/flatscreens" component={MRoutes} />
      <Route exact path="/sound-bars" component={MRoutes} />
      <Route exact path="/streaming-device" component={MRoutes} />
      <Route exact path="/cameras-other" component={MRoutes} />
      <Route exact path="/cameras" component={MRoutes} />
      <Route exact path="/camcorders" component={MRoutes} />
      <Route exact path="/webcams" component={MRoutes} />
      <Route exact path="/drones" component={MRoutes} />
      <Route exact path="/projectors" component={MRoutes} />
      <Route exact path="/binoculars" component={MRoutes} />
      <Route exact path="/camera-accessories" component={MRoutes} />
      <Route exact path="/camera-components" component={MRoutes} />
      <Route exact path="/audio" component={MRoutes} />
      <Route exact path="/headphones" component={MRoutes} />
      <Route exact path="/headphone-accessories" component={MRoutes} />
      <Route exact path="/audio-systems" component={MRoutes} />
      <Route exact path="/audio-players" component={MRoutes} />
      <Route exact path="/portable-speakers" component={MRoutes} />
      <Route exact path="/game-consoles" component={MRoutes} />
      <Route exact path="/playstations" component={MRoutes} />
      <Route exact path="/xbox" component={MRoutes} />
      <Route exact path="/nintendo" component={MRoutes} />
      <Route exact path="/other-consoles" component={MRoutes} />
      <Route exact path="/handheld-vr" component={MRoutes} />
      <Route exact path="/about-us" component={MRoutes} />

      <Route exact path="/wearable-tech" component={MRoutes} />
      <Route exact path="/wearable-gadgets" component={MRoutes} />
      <Route exact path="/watches" component={MRoutes} />
      <Route exact path="/fitness-trackers" component={MRoutes} />
      <Route exact path="/hair-devices" component={MRoutes} />
      <Route exact path="/health-devices" component={MRoutes} />
      <Route exact path="/fitness-equipment" component={MRoutes} />
      <Route exact path="/auto-electronics" component={MRoutes} />
      <Route exact path="/home-systems" component={MRoutes} />

      <Route exact path="/appliances" component={MRoutes} />
      <Route exact path="/cooking-appliances" component={MRoutes} />
      <Route exact path="/freezers" component={MRoutes} />
      <Route exact path="/dishwashers" component={MRoutes} />
      <Route exact path="/microwaves" component={MRoutes} />
      <Route exact path="/cooktops" component={MRoutes} />
      <Route exact path="/ovens" component={MRoutes} />
      <Route exact path="/refrigerators" component={MRoutes} />
      <Route exact path="/appliance-packages" component={MRoutes} />

      <Route exact path="/laundry-appliances" component={MRoutes} />
      <Route exact path="/wash-machines" component={MRoutes} />
      <Route exact path="/dryers" component={MRoutes} />
      <Route exact path="/appliance-bundles" component={MRoutes} />

      <Route exact path="/kitchen-appliances" component={MRoutes} />
      <Route exact path="/ambiance-devices" component={MRoutes} />
      <Route exact path="/air-conditioners" component={MRoutes} />
      <Route exact path="/air-purifiers" component={MRoutes} />
      <Route exact path="/fans" component={MRoutes} />
      <Route exact path="/heaters" component={MRoutes} />
      <Route exact path="/pressure-cookers" component={MRoutes} />

      <Route exact path="/indoor-appliances" component={MRoutes} />
      <Route exact path="/vacuums" component={MRoutes} />
      <Route exact path="/steam-cleaning" component={MRoutes} />
      <Route exact path="/essential-tools" component={MRoutes} />
      <Route exact path="/carpet-cleaning" component={MRoutes} />
      <Route exact path="/power-tools" component={MRoutes} />
      <Route exact path="/outdoor-tools" component={MRoutes} />
      <Route exact path="/tv-mounts" component={MRoutes} />

      <Route exact path="/bread-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/waffle-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/pancake-makers" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/coffe-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/expresso-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/tea-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/soda-makers" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/instant-pots" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/slow-cookers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/multi-cookers" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/toaster-ovens" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/convection-ovens" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/blenders" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/juicers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/food-processors" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/food-choppers" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/stand-mixers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/hand-mixers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/mixer-attachments" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/slice-toasters" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/sandwitch-toasters" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/conveyor-toasters" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/air-deep" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/vacuum-sealers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/food-scales" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/indoor-grills" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/water-dispensers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/dehydrators" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/ice-makers" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/electric-griddles" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/icecream-machine" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/candy-machine" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/popcorn-machine" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/icecream-shaver" component={SmallKitchenAppliancesRoutes} />
      <Route exact path="/fondue-pots" component={SmallKitchenAppliancesRoutes} />

      <Route exact path="/kitchen-thermometers" component={OutdoorKitchenRoutes} />
      <Route exact path="/kitchen-torches" component={OutdoorKitchenRoutes} />
      <Route exact path="/outdoor-grills" component={OutdoorKitchenRoutes} />
      <Route exact path="/smokers" component={OutdoorKitchenRoutes} />

      <Route exact path="/straighteners-brushes" component={HairAppliancesRoutes} />
      <Route exact path="/curling-irons" component={HairAppliancesRoutes} />
      <Route exact path="/hair-dryers" component={HairAppliancesRoutes} />
      <Route exact path="/clippers" component={HairAppliancesRoutes} />
      <Route exact path="/hair-trimmers" component={HairAppliancesRoutes} />
      <Route exact path="/electric-shavers" component={HairAppliancesRoutes} />
      <Route exact path="/facial-trimmers" component={HairAppliancesRoutes} />
      <Route exact path="/epilators" component={HairAppliancesRoutes} />

      <Route exact path="/indoor-appliances" component={IndoorApplianceRoutes} />
      <Route exact path="/vacuums" component={IndoorApplianceRoutes} />
      <Route exact path="/steam-cleaning" component={IndoorApplianceRoutes} />
      <Route exact path="/carpet-cleaning" component={IndoorApplianceRoutes} />
      <Route exact path="/essential-tools" component={IndoorApplianceRoutes} />

      <Route exact path="/power-tools" component={PowerToolsRoutes} />
      <Route exact path="/electric-drills" component={PowerToolsRoutes} />
      <Route exact path="/electric-chainsaws" component={PowerToolsRoutes} />
      <Route exact path="/electric-planers" component={PowerToolsRoutes} />
      <Route exact path="/electric-sanders" component={PowerToolsRoutes} />
      <Route exact path="/jig-saws" component={PowerToolsRoutes} />
      <Route exact path="/nail-guns" component={PowerToolsRoutes} />

      <Route exact path="/leaf-blowers" component={GardenToolsRoutes} />
      <Route exact path="/trimmers-edgers" component={GardenToolsRoutes} />
      <Route exact path="/pressure-washers" component={GardenToolsRoutes} />
      <Route exact path="/log-splitters" component={GardenToolsRoutes} />
      <Route exact path="/lawn-mowers" component={GardenToolsRoutes} />
      <Route exact path="/more-tools" component={GardenToolsRoutes} />

      <Route exact path="/entertainment-centers" component={FurnitureRoutes} />
      <Route exact path="/tv-stands" component={FurnitureRoutes} />
      <Route exact path="/coffee-tables" component={FurnitureRoutes} />
      <Route exact path="/end-tables" component={FurnitureRoutes} />
      <Route exact path="/console-tables" component={FurnitureRoutes} />
      <Route exact path="/ottomans" component={FurnitureRoutes} />
      <Route exact path="/floor-pillows" component={FurnitureRoutes} />
      <Route exact path="/chairs" component={FurnitureRoutes} />
      <Route exact path="/lounges" component={FurnitureRoutes} />
      <Route exact path="/sofas-couches" component={FurnitureRoutes} />
      <Route exact path="/sectional-sofas" component={FurnitureRoutes} />
      <Route exact path="/love-seats" component={FurnitureRoutes} />
      <Route exact path="/sofa-beds" component={FurnitureRoutes} />
      <Route exact path="/futons" component={FurnitureRoutes} />

      <Route exact path="/dining-tables" component={FurnitureRoutes} />
      <Route exact path="/dining-chairs" component={FurnitureRoutes} />
      <Route exact path="/counter-stools" component={FurnitureRoutes} />
      <Route exact path="/dining-benches" component={FurnitureRoutes} />
      <Route exact path="/kitchen-islands" component={FurnitureRoutes} />
      <Route exact path="/kitchen-cabinets" component={FurnitureRoutes} />
      <Route exact path="/kitchen-carts" component={FurnitureRoutes} />
      <Route exact path="/sideboards-buffets" component={FurnitureRoutes} />
      <Route exact path="/pantry-cabinets" component={FurnitureRoutes} />
      <Route exact path="/bakers-racks" component={FurnitureRoutes} />
      <Route exact path="/pub-tables" component={FurnitureRoutes} />
      <Route exact path="/bar-cabinets" component={FurnitureRoutes} />
      <Route exact path="/bar-carts" component={FurnitureRoutes} />
      <Route exact path="/wine-racks" component={FurnitureRoutes} />
      <Route exact path="/dining-sets" component={FurnitureRoutes} />

      <Route exact path="/beds" component={FurnitureRoutes} />
      <Route exact path="/mattresses" component={FurnitureRoutes} />
      <Route exact path="/headboards" component={FurnitureRoutes} />
      <Route exact path="/storage-beds" component={FurnitureRoutes} />
      <Route exact path="/bed-frames" component={FurnitureRoutes} />
      <Route exact path="/bunk-beds" component={FurnitureRoutes} />
      <Route exact path="/folding-beds" component={FurnitureRoutes} />
      <Route exact path="/dressers-chests" component={FurnitureRoutes} />
      <Route exact path="/nightstands" component={FurnitureRoutes} />
      <Route exact path="/jewellery-armoires" component={FurnitureRoutes} />
      <Route exact path="/vanity-sets" component={FurnitureRoutes} />
      <Route exact path="/bedroom-benches" component={FurnitureRoutes} />
      <Route exact path="/wardrobes" component={FurnitureRoutes} />
      <Route exact path="/bedroom-sets" component={FurnitureRoutes} />

      <Route exact path="/bathroom-seating" component={FurnitureRoutes} />
      <Route exact path="/bathroom-vanity" component={FurnitureRoutes} />
      <Route exact path="/floor-cabinets" component={FurnitureRoutes} />
      <Route exact path="/wall-cabinets" component={FurnitureRoutes} />
      <Route exact path="/toilet-etageres" component={FurnitureRoutes} />
      <Route exact path="/towel-racks" component={FurnitureRoutes} />
      <Route exact path="/storage-racks" component={FurnitureRoutes} />

      <Route exact path="/bookshelves" component={FurnitureRoutes} />
      <Route exact path="/storage-cabinets" component={FurnitureRoutes} />
      <Route exact path="/filing-cabinets" component={FurnitureRoutes} />
      <Route exact path="/storage-drawers" component={FurnitureRoutes} />
      <Route exact path="/storage-trunks" component={FurnitureRoutes} />
      <Route exact path="/storage-racks" component={FurnitureRoutes} />
      <Route exact path="/cube-storages" component={FurnitureRoutes} />
      <Route exact path="/storage-ottomans" component={FurnitureRoutes} />
      <Route exact path="/desks" component={FurnitureRoutes} />

      <Route exact path="/counter-stools" component={FurnitureRoutes} />
      <Route exact path="/bar-tables" component={FurnitureRoutes} />
      <Route exact path="/corner-bars" component={FurnitureRoutes} />
      <Route exact path="/pub-sets" component={FurnitureRoutes} />
      
      <Route exact path="/office-chairs" component={FurnitureRoutes} />
      <Route exact path="/adjustable-desks" component={FurnitureRoutes} />
      <Route exact path="/printer-stands" component={FurnitureRoutes} />
      <Route exact path="/drawers-carts" component={FurnitureRoutes} />
      <Route exact path="/breakroom-tables" component={FurnitureRoutes} />
      <Route exact path="/standing-podiums" component={FurnitureRoutes} />
      <Route exact path="/desk-organizers" component={FurnitureRoutes} />
      <Route exact path="/storage-baskets" component={FurnitureRoutes} />

      <Route exact path="/entryway-benches" component={FurnitureRoutes} />
      <Route exact path="/hall-tree" component={FurnitureRoutes} />
      <Route exact path="/shoe-storages" component={FurnitureRoutes} />
      <Route exact path="/wall-shelves" component={FurnitureRoutes} />
      <Route exact path="/coat-racks" component={FurnitureRoutes} />
      <Route exact path="/storage-benches" component={FurnitureRoutes} />

      <Route exact path="/patio-chairs" component={FurnitureRoutes} />
      <Route exact path="/patio-benches" component={FurnitureRoutes} />
      <Route exact path="/outdoor-lounges" component={FurnitureRoutes} />
      <Route exact path="/outdoor-seating" component={FurnitureRoutes} />
      <Route exact path="/patio-tables" component={FurnitureRoutes} />
      <Route exact path="/outdoor-bistros" component={FurnitureRoutes} />
      <Route exact path="/outdoor-shades" component={FurnitureRoutes} />
      <Route exact path="/bistro-sets" component={FurnitureRoutes} />
      <Route exact path="/conversation-sets" component={FurnitureRoutes} />
      <Route exact path="/outdoor-dining" component={FurnitureRoutes} />
      <Route exact path="/patio-furniture" component={FurnitureRoutes} />
      
      <Route exact path="/folding-chairs" component={FurnitureRoutes} />
      <Route exact path="/folding-tables" component={FurnitureRoutes} />
      <Route exact path="/folding-trays" component={FurnitureRoutes} />
      <Route exact path="/folding-sets" component={FurnitureRoutes} />
      
      <Route exact path="/gaming-chairs" component={FurnitureRoutes} />
      <Route exact path="/gaming-desks" component={FurnitureRoutes} />
      <Route exact path="/gaming-furniture" component={FurnitureRoutes} />
      
      <Route exact path="/baby-cribs" component={FurnitureRoutes} />
      <Route exact path="/crib-mattresses" component={FurnitureRoutes} />
      <Route exact path="/bassinets-sleepers" component={FurnitureRoutes} />
      <Route exact path="/changing-tables" component={FurnitureRoutes} />
      <Route exact path="/gliders-seating" component={FurnitureRoutes} />
      <Route exact path="/travel-beds" component={FurnitureRoutes} />
      <Route exact path="/baby-dressers" component={FurnitureRoutes} />
      <Route exact path="/toddler-beds" component={FurnitureRoutes} />

      <Route exact path="/kids-beds" component={FurnitureRoutes} />
      <Route exact path="/kids-chairs" component={FurnitureRoutes} />
      <Route exact path="/kids-furniture" component={FurnitureRoutes} />
      <Route exact path="/kids-headboards" component={FurnitureRoutes} />
      <Route exact path="/play-tents" component={FurnitureRoutes} />
      <Route exact path="/toy-boxes" component={FurnitureRoutes} />
      <Route exact path="/kids-vanities" component={FurnitureRoutes} />

      <Route exact path="/throw-pillows" component={HomeDecoreRoutes} />
      <Route exact path="/throw-blankets" component={HomeDecoreRoutes} />
      <Route exact path="/backrest-pillows" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-cases" component={HomeDecoreRoutes} />
      
      <Route exact path="/table-lamps" component={HomeDecoreRoutes} />
      <Route exact path="/floor-lamps" component={HomeDecoreRoutes} />
      <Route exact path="/desk-lamps" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-lighting" component={HomeDecoreRoutes} />
      <Route exact path="/lamp-shades" component={HomeDecoreRoutes} />
      <Route exact path="/lamp-sets" component={HomeDecoreRoutes} />
      <Route exact path="/ceiling-lights" component={HomeDecoreRoutes} />
      <Route exact path="/ceiling-fans" component={HomeDecoreRoutes} />
      <Route exact path="/chandeliers" component={HomeDecoreRoutes} />
      <Route exact path="/fandeliers" component={HomeDecoreRoutes} />
      <Route exact path="/track-lights" component={HomeDecoreRoutes} />
      <Route exact path="/outdoor-lights" component={HomeDecoreRoutes} />
      
      <Route exact path="/tapestries" component={HomeDecoreRoutes} />
      <Route exact path="/wall-hangings" component={HomeDecoreRoutes} />
      <Route exact path="/decals-wallpaper" component={HomeDecoreRoutes} />
      
      <Route exact path="/canvas-art" component={HomeDecoreRoutes} />
      <Route exact path="/framed-art" component={HomeDecoreRoutes} />
      <Route exact path="/inspirational-arts" component={HomeDecoreRoutes} />
      <Route exact path="/paintings" component={HomeDecoreRoutes} />
      <Route exact path="/photography" component={HomeDecoreRoutes} />
      <Route exact path="/metal-art" component={HomeDecoreRoutes} />
      
      <Route exact path="/throw-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/area-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/bedroom-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/door-mats" component={HomeDecoreRoutes} />
      <Route exact path="/runner-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/round-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/kids-rugs" component={HomeDecoreRoutes} />
      <Route exact path="/outdoor-rugs" component={HomeDecoreRoutes} />

      <Route exact path="/round-mirrors" component={HomeDecoreRoutes} />
      <Route exact path="/floor-mirrors" component={HomeDecoreRoutes} />
      <Route exact path="/wall-mirrors" component={HomeDecoreRoutes} />
      <Route exact path="/led-mirrors" component={HomeDecoreRoutes} />
      
      <Route exact path="/wall-clocks" component={HomeDecoreRoutes} />
      <Route exact path="/table-clocks" component={HomeDecoreRoutes} />
      <Route exact path="/cuckoo-clocks" component={HomeDecoreRoutes} />
      <Route exact path="/digital-clocks" component={HomeDecoreRoutes} />
      <Route exact path="/alarm-clocks" component={HomeDecoreRoutes} />
      
      <Route exact path="/table-frames" component={HomeDecoreRoutes} />
      <Route exact path="/wall-frames" component={HomeDecoreRoutes} />
      <Route exact path="/gallary-frames" component={HomeDecoreRoutes} />
      <Route exact path="/digital-frames" component={HomeDecoreRoutes} />
      
      <Route exact path="/candles" component={HomeDecoreRoutes} />
      <Route exact path="/frameless-candles" component={HomeDecoreRoutes} />
      <Route exact path="/candle-holders" component={HomeDecoreRoutes} />
      <Route exact path="/oil-diffusers" component={HomeDecoreRoutes} />
      
      <Route exact path="/artificial-plants" component={HomeDecoreRoutes} />
      <Route exact path="/artificial-trees" component={HomeDecoreRoutes} />
      <Route exact path="/fake-succulents" component={HomeDecoreRoutes} />
      <Route exact path="/plant-stands" component={HomeDecoreRoutes} />
      <Route exact path="/planters" component={HomeDecoreRoutes} />
      <Route exact path="/vases" component={HomeDecoreRoutes} />

      <Route exact path="/globes" component={HomeDecoreRoutes} />
      <Route exact path="/sculptures" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-trays" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-bowls" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-items" component={HomeDecoreRoutes} />
      <Route exact path="/decorative-lighting" component={HomeDecoreRoutes} />
      <Route exact path="/room-dividers" component={HomeDecoreRoutes} />
      <Route exact path="/bookends" component={HomeDecoreRoutes} />
      
      <Route exact path="/flooring" component={HomeDecoreRoutes} />
      <Route exact path="/floor-tiles" component={HomeDecoreRoutes} />
      <Route exact path="/wall-tiles" component={HomeDecoreRoutes} />
      <Route exact path="/stone-tiles" component={HomeDecoreRoutes} />
      <Route exact path="/vinyl-flooring" component={HomeDecoreRoutes} />
      <Route exact path="/tiles" component={MRoutes} />

      <Route exact path="/cookware-sets" component={KitchenDiningRoutes} />
      <Route exact path="/dutch-ovens" component={KitchenDiningRoutes} />
      <Route exact path="/pans-skillets" component={KitchenDiningRoutes} />
      <Route exact path="/pots" component={KitchenDiningRoutes} />
      <Route exact path="/roasters" component={KitchenDiningRoutes} />

      <Route exact path="/dinner-sets" component={KitchenDiningRoutes} />
      <Route exact path="/dinner-collections" component={KitchenDiningRoutes} />
      <Route exact path="/plates" component={KitchenDiningRoutes} />
      <Route exact path="/dessert-plates" component={KitchenDiningRoutes} />
      <Route exact path="/bowls" component={KitchenDiningRoutes} />

      <Route exact path="/baking-dishes" component={KitchenDiningRoutes} />
      <Route exact path="/baking-sets" component={KitchenDiningRoutes} />
      <Route exact path="/baking-sheets" component={KitchenDiningRoutes} />
      <Route exact path="/cake-pans" component={KitchenDiningRoutes} />
      <Route exact path="/cupcake-pans" component={KitchenDiningRoutes} />
      <Route exact path="/pie-pans" component={KitchenDiningRoutes} />
      <Route exact path="/pizza-pans" component={KitchenDiningRoutes} />
      <Route exact path="/loaf-pans" component={KitchenDiningRoutes} />
      <Route exact path="/mixing-bowls" component={KitchenDiningRoutes} />
      <Route exact path="/baking-cups" component={KitchenDiningRoutes} />
      <Route exact path="/baking-utensils" component={KitchenDiningRoutes} />

      <Route exact path="/drinking-glasses" component={KitchenDiningRoutes} />
      <Route exact path="/coffee-mugs" component={KitchenDiningRoutes} />
      <Route exact path="/tea-cups" component={KitchenDiningRoutes} />
      <Route exact path="/wine-glasses" component={KitchenDiningRoutes} />
      <Route exact path="/cocktail-glasses" component={KitchenDiningRoutes} />
      <Route exact path="/champagne-glasses" component={KitchenDiningRoutes} />
      <Route exact path="/beer-glasses" component={KitchenDiningRoutes} />
      <Route exact path="/pitchers" component={KitchenDiningRoutes} />
      <Route exact path="/beverage-dispenser" component={KitchenDiningRoutes} />
      <Route exact path="/travel-mugs" component={KitchenDiningRoutes} />
      <Route exact path="/water-bottles" component={KitchenDiningRoutes} />
      <Route exact path="/blender-bottles" component={KitchenDiningRoutes} />

      <Route exact path="/serveware-sets" component={KitchenDiningRoutes} />
      <Route exact path="/cake-stands" component={KitchenDiningRoutes} />
      <Route exact path="/tiered-servers" component={KitchenDiningRoutes} />
      <Route exact path="/serving-trays" component={KitchenDiningRoutes} />
      <Route exact path="/serving-platters" component={KitchenDiningRoutes} />
      <Route exact path="/casserole-dishes" component={KitchenDiningRoutes} />
      <Route exact path="/butter-dishes" component={KitchenDiningRoutes} />
      <Route exact path="/gravy-boats" component={KitchenDiningRoutes} />
      <Route exact path="/serving-bowls" component={KitchenDiningRoutes} />
      <Route exact path="/utensil-caddies" component={KitchenDiningRoutes} />
      <Route exact path="/serveware" component={KitchenDiningRoutes} />
      <Route exact path="/shakers" component={KitchenDiningRoutes} />
     
      <Route exact path="/silverware-sets" component={KitchenDiningRoutes} />
      <Route exact path="/silverware-chest" component={KitchenDiningRoutes} />
      <Route exact path="/kitchen-utensils" component={KitchenDiningRoutes} />
      
      <Route exact path="/cooking-timers" component={KitchenDiningRoutes} />
      <Route exact path="/kitchen-tools" component={KitchenDiningRoutes} />
      <Route exact path="/slice-tools" component={KitchenDiningRoutes} />
      <Route exact path="/measuring-utensils" component={KitchenDiningRoutes} />
      <Route exact path="/mandolines-slicers" component={KitchenDiningRoutes} />
      <Route exact path="/meat-slicers" component={KitchenDiningRoutes} />

      <Route exact path="/storage-canisters" component={KitchenDiningRoutes} />
      <Route exact path="/storage-sets" component={KitchenDiningRoutes} />
      <Route exact path="/canning-jars" component={KitchenDiningRoutes} />
      <Route exact path="/refrigerator-storage" component={KitchenDiningRoutes} />
      <Route exact path="/pot-racks" component={KitchenDiningRoutes} />
      <Route exact path="/dish-racks" component={KitchenDiningRoutes} />
      
      <Route exact path="/knife-sets" component={KitchenDiningRoutes} />
      <Route exact path="/block-sets" component={KitchenDiningRoutes} />
      <Route exact path="/knife-sharpeners" component={KitchenDiningRoutes} />
      <Route exact path="/knife-blocks" component={KitchenDiningRoutes} />
      <Route exact path="/cleavers" component={KitchenDiningRoutes} />
      <Route exact path="/electric-knifes" component={KitchenDiningRoutes} />
      <Route exact path="/cutting-boards" component={KitchenDiningRoutes} />

      <Route exact path="/kitchen-ornaments" component={KitchenDiningRoutes} />
      <Route exact path="/kitchen-textiles" component={KitchenDiningRoutes} />

      <Route exact path="/shower-systems" component={BathroomRoutes} />
      <Route exact path="/hand-showers" component={BathroomRoutes} />
      <Route exact path="/shower-faucets" component={BathroomRoutes} />
      <Route exact path="/shower-drains" component={BathroomRoutes} />
      <Route exact path="/shower-bars" component={BathroomRoutes} />
      <Route exact path="/shower-doors" component={BathroomRoutes} />
      <Route exact path="/volumne-controls" component={BathroomRoutes} />

      <Route exact path="/freestanding-tubs" component={BathroomRoutes} />
      <Route exact path="/aclover-tubs" component={BathroomRoutes} />
      <Route exact path="/whirlpool-tubs" component={BathroomRoutes} />
      <Route exact path="/combination-tubs" component={BathroomRoutes} />
      <Route exact path="/drop-tubs" component={BathroomRoutes} />
      <Route exact path="/air-tubs" component={BathroomRoutes} />
      <Route exact path="/clawfoot-tubs" component={BathroomRoutes} />
      <Route exact path="/walk-in-tubs" component={BathroomRoutes} />
      <Route exact path="/corner-tubs" component={BathroomRoutes} />
      <Route exact path="/roman-faucets" component={BathroomRoutes} />
      <Route exact path="/freestanding-fillers" component={BathroomRoutes} />
      <Route exact path="/wall-fillers" component={BathroomRoutes} />
      <Route exact path="/mounted-fillers" component={BathroomRoutes} />
      <Route exact path="/standing-clawfoot" component={BathroomRoutes} />

      <Route exact path="/pedestal-sinks" component={BathroomRoutes} />
      <Route exact path="/drop-ins" component={BathroomRoutes} />
      <Route exact path="/unermount-sinks" component={BathroomRoutes} />
      <Route exact path="/vessel-sinks" component={BathroomRoutes} />
      <Route exact path="/wall-sinks" component={BathroomRoutes} />
      <Route exact path="/utility-sinks" component={BathroomRoutes} />
      <Route exact path="/sink-combos" component={BathroomRoutes} />
      <Route exact path="/single-faucets" component={BathroomRoutes} />
      <Route exact path="/centerset-faucets" component={BathroomRoutes} />
      <Route exact path="/widespread-faucets" component={BathroomRoutes} />
      <Route exact path="/mounted-faucets" component={BathroomRoutes} />

      <Route exact path="/round-onepiece-toilets" component={BathroomRoutes} />
      <Route exact path="/elongated-onepiece-toilets" component={BathroomRoutes} />
      <Route exact path="/round-mounted-onepiece" component={BathroomRoutes} />
      <Route exact path="/elongated-mounted-onepiece" component={BathroomRoutes} />
     
      <Route exact path="/round-twopiece-toilets" component={BathroomRoutes} />
      <Route exact path="/elongated-twopiece-toilets" component={BathroomRoutes} />
      <Route exact path="/round-mounted-twopiece" component={BathroomRoutes} />
      <Route exact path="/elongated-mounted-twopiece" component={BathroomRoutes} />
      
      <Route exact path="/rince-faucets" component={KitchenPlacementRoutes} />
      <Route exact path="/bridge-faucets" component={KitchenPlacementRoutes} />
      <Route exact path="/pull-faucets" component={KitchenPlacementRoutes} />
      <Route exact path="/spray-faucets" component={KitchenPlacementRoutes} />
      <Route exact path="/electric-faucets" component={KitchenPlacementRoutes} />

      <Route exact path="/kitchen-undermounts" component={KitchenPlacementRoutes} />
      <Route exact path="/double-undermounts" component={KitchenPlacementRoutes} />
      <Route exact path="/drop-sinks" component={KitchenPlacementRoutes} />
      <Route exact path="/double-sinks" component={KitchenPlacementRoutes} />
      <Route exact path="/farmhouse-sinks" component={KitchenPlacementRoutes} />
      <Route exact path="/double-farmhouse" component={KitchenPlacementRoutes} />

      <Route exact path="/stainless-Undermounts" component={KitchenPlacementRoutes} />
      <Route exact path="/stainless-drops" component={KitchenPlacementRoutes} />
      <Route exact path="/double-basin" component={KitchenPlacementRoutes} />
      <Route exact path="/copper-sinks" component={KitchenPlacementRoutes} />
      
      <Route exact path="/wall-hoods" component={KitchenPlacementRoutes} />
      <Route exact path="/hood-inserts" component={KitchenPlacementRoutes} />
      <Route exact path="/island-hoods" component={KitchenPlacementRoutes} />
      <Route exact path="/cabinet-hoods" component={KitchenPlacementRoutes} />
      
      <Route exact path="/bed-blankets" component={BeddingRoutes} />
      <Route exact path="/bed-pillows" component={BeddingRoutes} />
      <Route exact path="/weighted-blankets" component={BeddingRoutes} />
      <Route exact path="/duvet-covers" component={BeddingRoutes} />
      <Route exact path="/comforter-sets" component={BeddingRoutes} />
      <Route exact path="/quilts" component={BeddingRoutes} />
      <Route exact path="/bed-skirts" component={BeddingRoutes} />
      <Route exact path="/kids-blankets" component={BeddingRoutes} />
      <Route exact path="/kids-duvet" component={BeddingRoutes} />
      <Route exact path="/kids-sheets" component={BeddingRoutes} />
      <Route exact path="/kids-comforters" component={BeddingRoutes} />

      {/* <Route exact path="/demo-build" component={MRoutes} /> */}
      <Route exact path="/user/cart" component={CartRoute} />
      <Route exact path="/product/:productId" component={MRoutes} />

      {/* Client */}
      <Route exact path="/overview" component={ClientPages} />
      <Route exact path="/wishlist" component={ClientPages} /> 
      <Route exact path="/track-order" component={ClientPages} />
      <Route exact path="/0settings" component={ClientPages} />

      {/* <Route exact path="/performance-tips" component={ClientPages} /> */}
      {/* <Route exact path="/notifications" component={ClientPages} /> */}

      <Route exact path="/pcbuild" component={ClientOtherPages} />
      <Route exact path="/0demo-build" component={ClientOtherPages} />

      {/* Branches Fulfillment */}
      <Route exact path="/branch" component={Fulfillment} />
      {/* <Route exact path="/chat" component={Fulfillment} /> */}

      {/* Main Operations */}
      <Route exact path="/0/:userId" component={MainOperations} />
      <Route exact path="/purchases-made" component={MainOperations} />
      <Route exact path="/fulfilments" component={MainOperations} />
      <Route exact path="/re-settings" component={MainOperations} />
      <Route exact path="/store-locations" component={MainOperations} />      
      <Route exact path="/edit/product/:productId" component={MainOperations} />
      <Route exact path="/item/upload" component={MainOperations} />
      
      <Route exact path="/windhoek-branch" component={BranchLocationRoutes} />
      <Route exact path="/walvis-bay-branch" component={BranchLocationRoutes} />
      <Route exact path="/swakopmund-branch" component={BranchLocationRoutes} />
      <Route exact path="/oshakati-branch" component={BranchLocationRoutes} />
      <Route exact path="/okahandja-branch" component={BranchLocationRoutes} />
      <Route exact path="/grootfontein-branch" component={BranchLocationRoutes} />
      <Route exact path="/rehoboth-branch" component={BranchLocationRoutes} />
      <Route exact path="/gobabis-branch" component={BranchLocationRoutes} />
      <Route exact path="/katima-mulilo-branch" component={BranchLocationRoutes} />
      <Route exact path="/rundu-branch" component={BranchLocationRoutes} />
      <Route exact path="/ongwediva-branch" component={BranchLocationRoutes} />
      <Route exact path="/otjiwarongo-branch" component={BranchLocationRoutes} />
      <Route exact path="/tsumeb-branch" component={BranchLocationRoutes} />

    </Switch>
  </div>
</Suspense>
  );
}
export default App;