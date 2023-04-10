import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

//Living Room Furniture

import EntertainmentCenters from './LivingRoomFurniture/EntertainmentCenters';
import TvStands from './LivingRoomFurniture/TvStands';
import CoffeeTables from './LivingRoomFurniture/CoffeeTables'
import EndTables from './LivingRoomFurniture/EndTables'
import ConsoleTables from './LivingRoomFurniture/ConsoleTables'
import Ottomans from './LivingRoomFurniture/Ottomans'
import FloorPillows from './LivingRoomFurniture/FloorPillows'
import Lounges from './LivingRoomFurniture/Lounges'
import SofaCouches from './LivingRoomFurniture/SofasCouches'
import SectionalSofas from './LivingRoomFurniture/SectionalSofas'
import LoveSeats from './LivingRoomFurniture/LoveSeats'
import SofaBeds from './LivingRoomFurniture/SofaBeds'
import Futons from './LivingRoomFurniture/Futons'

//Kitchen Dining Room Furniture

import DiningTables from './KitchenDiningFurniture/DiningTables';
import DiningChairs from './KitchenDiningFurniture/DiningChairs';
import CounterTools from './KitchenDiningFurniture/CounterTools';
import DiningBenches from './KitchenDiningFurniture/DiningBenches';
import KitchenIslands from './KitchenDiningFurniture/KitchenIslands';
import KitchenCarts from './KitchenDiningFurniture/KitchenCarts'
import SideboardBuffets from './KitchenDiningFurniture/SideboardBuffets'
import KitchenCabinets from './KitchenDiningFurniture/KitchenCabinets';
import PantryCabinets from './KitchenDiningFurniture/PantryCabinets'
import BakersRacks from './KitchenDiningFurniture/BakersRacks'
import PubTables from './KitchenDiningFurniture/PubTables'
import BarCabinets from './KitchenDiningFurniture/BarCabinets'
import BarCarts from './KitchenDiningFurniture/BarCarts'
import WineRacks from './KitchenDiningFurniture/WineRacks'
import DiningSets from './KitchenDiningFurniture/DiningSets'

//Bedroom Room Furniture

import Beds from './BedroomFurniture/Beds';
import Mattresses from './BedroomFurniture/Mattresses';
import Headboards from './BedroomFurniture/Headboards';
import StorageBeds from './BedroomFurniture/StorageBeds';
import BedFrames from './BedroomFurniture/BedFrames';
import BunkBeds from './BedroomFurniture/BunkBeds'
import FoldingBeds from './BedroomFurniture/FoldingBeds'
import DressersChest from './BedroomFurniture/DressersChest'
import NightStands from './BedroomFurniture/NightStands'
import JewelleryArmoires from './BedroomFurniture/JewelleryArmoires'
import VanitySets from './BedroomFurniture/VanitySets'
import BedroomBenches from './BedroomFurniture/BedroomBenches'
import Wardrobes from './BedroomFurniture/Wardrobes'
import BedroomSets from './BedroomFurniture/BedroomSets'

//Bathroom Room Furniture

import BathroomSeating from './BathroomFurniture/BathroomSeating';
import BathroomVanity from './BathroomFurniture/BathroomVanity';
import FloorCabinets from './BathroomFurniture/FloorCabinets';
import WallCabinets from './BathroomFurniture/WallCabinets';
import ToiletEtagers from './BathroomFurniture/ToiletEtagers';
import TowelRacks from './BathroomFurniture/TowelRacks'

//Storage Room Furniture

import Bookshelves from './StorageFurniture/Bookshelves';
import StorageCabinets from './StorageFurniture/StorageCabinets';
import FilingCabinets from './StorageFurniture/FilingCabinets';
import StorageDrawers from './StorageFurniture/StorageDrawers';
import StorageTrunks from './StorageFurniture/StorageTrunks';
import StorageOttomans from './StorageFurniture/StorageOttomans';
import StorageRacks from './StorageFurniture/StorageRacks'
import CubeStorages from './StorageFurniture/CubeStorages';
import Desks from './StorageFurniture/Desks'

//Bar Furniture

import CounterStools from './BarFurniture/CounterStools';
import BarTables from './BarFurniture/BarTables';
import CornerWallBars from './BarFurniture/CornerWallBars';
import PubSets from './BarFurniture/PubSets';

//Office Room Furniture

import OfficeChairs from './OfficeFurniture/OfficeChairs';
import AdjustableDesks from './OfficeFurniture/AdjustableDesks';
import PrinterStands from './OfficeFurniture/PrinterStands';
import RollingDrawersCarts from './OfficeFurniture/RollingDrawersCarts';
import BreakroomTables from './OfficeFurniture/BreakroomTables';
import StandingPodiums from './OfficeFurniture/StandingPodiums';
import DeskOrganisers from './OfficeFurniture/DeskOrganisers'
import StorageBaskets from './OfficeFurniture/StorageBaskets';

//Entryway Furniture

import EntrywayBenches from './EntrywayFurniture/EntrywayBenches';
import HallTree from './EntrywayFurniture/HallTree';
import ShoeStorages from './EntrywayFurniture/ShoeStorages';
import WallShelves from './EntrywayFurniture/WallShelves';
import CoatRacks from './EntrywayFurniture/CoatRacks';
import StorageBenches from './EntrywayFurniture/StorageBenches';

//Patio  Furniture

import PatioChairs from './PatioFurniture/PatioChairs';
import PatioBenches from './PatioFurniture/PatioBenches';
import OutdoorLounges from './PatioFurniture/OutdoorLounges';
import OutdoorSeating from './PatioFurniture/OutdoorSeating';
import PatioTables from './PatioFurniture/PatioTables';
import OutdoorBistros from './PatioFurniture/OutdoorBistros';
import OutdoorShades from './PatioFurniture/OutdoorShades'
import BistroSets from './PatioFurniture/BistroSets';
import ConversationSets from './PatioFurniture/ConversationSets';
import OutdoorDining from './PatioFurniture/OutdoorDining'
import PatioFurniture from './PatioFurniture/PatioFurniture';

//Folding Furniture

import FoldingChairs from './FoldingFurniture/FoldingChairs';
import FoldingTables from './FoldingFurniture/FoldingTables';
import FoldingTrays from './FoldingFurniture/FoldingTrays';
import FoldingSets from './FoldingFurniture/FoldingSets';

//Gaming Furniture

import GamingChairs from './GamingFurniture/GamingChairs';
import GamingDesks from './GamingFurniture/GamingDesks';
import GamingFurniture from './GamingFurniture/GamingFurniture';

//Nursery Furniture

import BabyGribs from './NurseryFurniture/BabyGribs';
import GribMattresses from './NurseryFurniture/GribMattresses';
import BassinetsSleepers from './NurseryFurniture/BassinetsSleepers';
import ChangingTables from './NurseryFurniture/ChangingTables';
import GlidersSeating from './NurseryFurniture/GlidersSeating';
import TravelBeds from './NurseryFurniture/TravelBeds';
import BabyDressers from './NurseryFurniture/BabyDressers'
import ToddlerBeds from './NurseryFurniture/ToddlerBeds';

//Kids Furniture

import KidsBeds from './KidsFurniture/KidsBeds';
import KidsChairs from './KidsFurniture/KidsChairs';
import KidsFurniture from './KidsFurniture/KidsFurniture';
import KidsHeadboards from './KidsFurniture/KidsHeadboards';
import PlayTents from './KidsFurniture/PlayTents';
import ToyBoxes from './KidsFurniture/ToyBoxes';
import KidsVanity from './KidsFurniture/KidsVanity'


function FurnitureRoutes() {
  return (
    <Router>
  <ScrollToTop />
  <Navbar />
  <NavMenu />
  <Switch>
    <Route exact path="/entertainment-centers" component={Auth(EntertainmentCenters, null)} />
    <Route exact path="/tv-stands" component={Auth(TvStands, null)} />
    <Route exact path="/coffee-tables" component={Auth(CoffeeTables, null)} />
    <Route exact path="/end-tables" component={Auth(EndTables, null)} />
    <Route exact path="/console-tables" component={Auth(ConsoleTables, null)} />
    <Route exact path="/ottomans" component={Auth(Ottomans, null)} />
    <Route exact path="/floor-pillows" component={Auth(FloorPillows, null)} />
    <Route exact path="/lounges" component={Auth(Lounges, null)} />
    <Route exact path="/sofas-couches" component={Auth(SofaCouches, null)} />
    <Route exact path="/sectional-sofas" component={Auth(SectionalSofas, null)} />
    <Route exact path="/love-seats" component={Auth(LoveSeats, null)} />
    <Route exact path="/sofa-beds" component={Auth(SofaBeds, null)} />
    <Route exact path="/futons" component={Auth(Futons, null)} />

    <Route exact path="/dining-tables" component={Auth(DiningTables, null)} />
    <Route exact path="/dining-chairs" component={Auth(DiningChairs, null)} />
    <Route exact path="/counter-stools" component={Auth(CounterTools, null)} />
    <Route exact path="/dining-benches" component={Auth(DiningBenches, null)} />
    <Route exact path="/kitchen-islands" component={Auth(KitchenIslands, null)} />
    <Route exact path="/kitchen-cabinets" component={Auth(KitchenCabinets, null)} />
    <Route exact path="/kitchen-carts" component={Auth(KitchenCarts, null)} />
    <Route exact path="/sideboards-buffets" component={Auth(SideboardBuffets, null)} />
    <Route exact path="/pantry-cabinets" component={Auth(PantryCabinets, null)} />
    <Route exact path="/bakers-racks" component={Auth(BakersRacks, null)} />
    <Route exact path="/pub-tables" component={Auth(PubTables, null)} />
    <Route exact path="/bar-cabinets" component={Auth(BarCabinets, null)} />
    <Route exact path="/bar-carts" component={Auth(BarCarts, null)} />
    <Route exact path="/wine-racks" component={Auth(WineRacks, null)} />
    <Route exact path="/dining-sets" component={Auth(DiningSets, null)} />
    
    <Route exact path="/beds" component={Auth(Beds, null)} />
    <Route exact path="/mattresses" component={Auth(Mattresses, null)} />
    <Route exact path="/headboards" component={Auth(Headboards, null)} />
    <Route exact path="/storage-beds" component={Auth(StorageBeds, null)} />
    <Route exact path="/bed-frames" component={Auth(BedFrames, null)} />
    <Route exact path="/bunk-beds" component={Auth(BunkBeds, null)} />
    <Route exact path="/folding-beds" component={Auth(FoldingBeds, null)} />
    <Route exact path="/dressers-chests" component={Auth(DressersChest, null)} />
    <Route exact path="/nightstands" component={Auth(NightStands, null)} />
    <Route exact path="/jewellery-armoires" component={Auth(JewelleryArmoires, null)} />
    <Route exact path="/vanity-sets" component={Auth(VanitySets, null)} />
    <Route exact path="/bedroom-benches" component={Auth(BedroomBenches, null)} />
    <Route exact path="/wardrobes" component={Auth(Wardrobes, null)} />
    <Route exact path="/bedroom-sets" component={Auth(BedroomSets, null)} />
   
    <Route exact path="/bathroom-seating" component={Auth(BathroomSeating, null)} />
    <Route exact path="/bathroom-vanity" component={Auth(BathroomVanity, null)} />
    <Route exact path="/floor-cabinets" component={Auth(FloorCabinets, null)} />
    <Route exact path="/wall-cabinets" component={Auth(WallCabinets, null)} />
    <Route exact path="/toilet-etageres" component={Auth(ToiletEtagers, null)} />
    <Route exact path="/towel-racks" component={Auth(TowelRacks, null)} />
   
    <Route exact path="/bookshelves" component={Auth(Bookshelves, null)} />
    <Route exact path="/storage-cabinets" component={Auth(StorageCabinets, null)} />
    <Route exact path="/filing-cabinets" component={Auth(FilingCabinets, null)} />
    <Route exact path="/storage-drawers" component={Auth(StorageDrawers, null)} />
    <Route exact path="/storage-trunks" component={Auth(StorageTrunks, null)} />
    <Route exact path="/storage-ottomans" component={Auth(StorageOttomans, null)} />
    <Route exact path="/storage-racks" component={Auth(StorageRacks, null)} />
    <Route exact path="/cube-storages" component={Auth(CubeStorages, null)} />
    <Route exact path="/desks" component={Auth(Desks, null)} />

    <Route exact path="/counter-stools" component={Auth(CounterStools, null)} />
    <Route exact path="/bar-tables" component={Auth(BarTables, null)} />
    <Route exact path="/corner-bars" component={Auth(CornerWallBars, null)} />
    <Route exact path="/pub-sets" component={Auth(PubSets, null)} />

    <Route exact path="/office-chairs" component={Auth(OfficeChairs, null)} />
    <Route exact path="/adjustable-desks" component={Auth(AdjustableDesks, null)} />
    <Route exact path="/printer-stands" component={Auth(PrinterStands, null)} />
    <Route exact path="/drawers-carts" component={Auth(RollingDrawersCarts, null)} />
    <Route exact path="/breakroom-table" component={Auth(BreakroomTables, null)} />
    <Route exact path="/standing-podiums" component={Auth(StandingPodiums, null)} />
    <Route exact path="/desk-organizers" component={Auth(DeskOrganisers, null)} />
    <Route exact path="/storage-baskets" component={Auth(StorageBaskets, null)} />

    <Route exact path="/entryway-benches" component={Auth(EntrywayBenches, null)} />
    <Route exact path="/hall-tree" component={Auth(HallTree, null)} />
    <Route exact path="/shoe-storages" component={Auth(ShoeStorages, null)} />
    <Route exact path="/wall-shelves" component={Auth(WallShelves, null)} />
    <Route exact path="/coat-racks" component={Auth(CoatRacks, null)} />
    <Route exact path="/storage-benches" component={Auth(StorageBenches, null)} />

    <Route exact path="/patio-chairs" component={Auth(PatioChairs, null)} />
    <Route exact path="/patio-benches" component={Auth(PatioBenches, null)} />
    <Route exact path="/outdoor-lounges" component={Auth(OutdoorLounges, null)} />
    <Route exact path="/outdoor-seating" component={Auth(OutdoorSeating, null)} />
    <Route exact path="/patio-tables" component={Auth(PatioTables, null)} />
    <Route exact path="/outdoor-bistros" component={Auth(OutdoorBistros, null)} />
    <Route exact path="/outdoor-shades" component={Auth(OutdoorShades, null)} />
    <Route exact path="/bistro-sets" component={Auth(BistroSets, null)} />
    <Route exact path="/conversation-sets" component={Auth(ConversationSets, null)} />
    <Route exact path="/outdoor-dining" component={Auth(OutdoorDining, null)} />
    <Route exact path="/patio-furniture" component={Auth(PatioFurniture, null)} />

    <Route exact path="/folding-chairs" component={Auth(FoldingChairs, null)} />
    <Route exact path="/folding-tables" component={Auth(FoldingTables, null)} />
    <Route exact path="/folding-trays" component={Auth(FoldingTrays, null)} />
    <Route exact path="/folding-sets" component={Auth(FoldingSets, null)} />

    <Route exact path="/gaming-chairs" component={Auth(GamingChairs, null)} />
    <Route exact path="/gaming-tables" component={Auth(GamingDesks, null)} />
    <Route exact path="/gaming-furniture" component={Auth(GamingFurniture, null)} />

    <Route exact path="/baby-cribs" component={Auth(BabyGribs, null)} />
    <Route exact path="/crib-mattresses" component={Auth(GribMattresses, null)} />
    <Route exact path="/bassinets-sleepers" component={Auth(BassinetsSleepers, null)} />
    <Route exact path="/changing-tables" component={Auth(ChangingTables, null)} />
    <Route exact path="/gliders-seating" component={Auth(GlidersSeating, null)} />
    <Route exact path="/travel-beds" component={Auth(TravelBeds, null)} />
    <Route exact path="/baby-dressers" component={Auth(BabyDressers, null)} />
    <Route exact path="/toddler-beds" component={Auth(ToddlerBeds, null)} />

    <Route exact path="/kids-beds" component={Auth(KidsBeds, null)} />
    <Route exact path="/kids-chairs" component={Auth(KidsChairs, null)} />
    <Route exact path="/kids-furniture" component={Auth(KidsFurniture, null)} />
    <Route exact path="/kids-headboards" component={Auth(KidsHeadboards, null)} />
    <Route exact path="/play-tents" component={Auth(PlayTents, null)} />
    <Route exact path="/toy-boxes" component={Auth(ToyBoxes, null)} />
    <Route exact path="/kids-vanities" component={Auth(KidsVanity, null)} />

    <Route exact path="/throw-pillows" component={Auth(FoldingChairs, null)} />
    <Route exact path="/throw-blankets" component={Auth(FoldingTables, null)} />
    <Route exact path="/backrest-pillows" component={Auth(FoldingTrays, null)} />
    <Route exact path="/floor-pillows" component={Auth(FoldingSets, null)} />
    <Route exact path="/decorative-cases" component={Auth(FoldingSets, null)} />

  </Switch>
  <Footer />
</Router>
  )
}

export default FurnitureRoutes