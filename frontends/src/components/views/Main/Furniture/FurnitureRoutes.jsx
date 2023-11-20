import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';
const Navbar = lazy(() => import('../00Components/NavMenu/NavMenu'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

//Living Room Furniture
const EntertainmentCenters = lazy(() => import('./LivingRoomFurniture/EntertainmentCenters'));
const TvStands = lazy(() => import('./LivingRoomFurniture/TvStands'));
const CoffeeTables = lazy(() => import('./LivingRoomFurniture/CoffeeTables'));
const EndTables = lazy(() => import('./LivingRoomFurniture/EndTables'));
const ConsoleTables = lazy(() => import('./LivingRoomFurniture/ConsoleTables'));
const Ottomans = lazy(() => import('./LivingRoomFurniture/Ottomans'));
const FloorPillows = lazy(() => import('./LivingRoomFurniture/FloorPillows'));
const Lounges = lazy(() => import('./LivingRoomFurniture/Lounges'));
const SofaCouches = lazy(() => import('./LivingRoomFurniture/SofasCouches'));
const SectionalSofas = lazy(() => import('./LivingRoomFurniture/SectionalSofas'));
const LoveSeats = lazy(() => import('./LivingRoomFurniture/LoveSeats'));
const SofaBeds = lazy(() => import('./LivingRoomFurniture/SofaBeds'));
const Futons = lazy(() => import('./LivingRoomFurniture/Futons'));

//Kitchen Dining Room Furniture
const DiningTables = lazy(() => import('./KitchenDiningFurniture/DiningTables'));
const DiningChairs = lazy(() => import('./KitchenDiningFurniture/DiningChairs'));
const CounterTools = lazy(() => import('./KitchenDiningFurniture/CounterTools'));
const DiningBenches = lazy(() => import('./KitchenDiningFurniture/DiningBenches'));
const KitchenIslands = lazy(() => import('./KitchenDiningFurniture/KitchenIslands'));
const KitchenCarts = lazy(() => import('./KitchenDiningFurniture/KitchenCarts'));
const SideboardBuffets = lazy(() => import('./KitchenDiningFurniture/SideboardBuffets'));
const KitchenCabinets = lazy(() => import('./KitchenDiningFurniture/KitchenCabinets'));
const PantryCabinets = lazy(() => import('./KitchenDiningFurniture/PantryCabinets'));
const BakersRacks = lazy(() => import('./KitchenDiningFurniture/BakersRacks'));
const PubTables = lazy(() => import('./KitchenDiningFurniture/PubTables'));
const BarCabinets = lazy(() => import('./KitchenDiningFurniture/BarCabinets'));
const BarCarts = lazy(() => import('./KitchenDiningFurniture/BarCarts'));
const WineRacks = lazy(() => import('./KitchenDiningFurniture/WineRacks'));
const DiningSets = lazy(() => import('./KitchenDiningFurniture/DiningSets'));

//Bedroom Room Furniture
const Beds = lazy(() => import('./BedroomFurniture/Beds'));
const Mattresses = lazy(() => import('./BedroomFurniture/Mattresses'));
const Headboards = lazy(() => import('./BedroomFurniture/Headboards'));
const StorageBeds = lazy(() => import('./BedroomFurniture/StorageBeds'));
const BedFrames = lazy(() => import('./BedroomFurniture/BedFrames'));
const BunkBeds = lazy(() => import('./BedroomFurniture/BunkBeds'));
const FoldingBeds = lazy(() => import('./BedroomFurniture/FoldingBeds'));
const DressersChest = lazy(() => import('./BedroomFurniture/DressersChest'));
const NightStands = lazy(() => import('./BedroomFurniture/NightStands'));
const JewelleryArmoires = lazy(() => import('./BedroomFurniture/JewelleryArmoires'));
const VanitySets = lazy(() => import('./BedroomFurniture/VanitySets'));
const BedroomBenches = lazy(() => import('./BedroomFurniture/BedroomBenches'));
const Wardrobes = lazy(() => import('./BedroomFurniture/Wardrobes'));
const BedroomSets = lazy(() => import('./BedroomFurniture/BedroomSets'));

//Bathroom Room Furniture
const BathroomSeating = lazy(() => import('./BathroomFurniture/BathroomSeating'));
const BathroomVanity = lazy(() => import('./BathroomFurniture/BathroomVanity'));
const FloorCabinets = lazy(() => import('./BathroomFurniture/FloorCabinets'));
const WallCabinets = lazy(() => import('./BathroomFurniture/WallCabinets'));
const ToiletEtagers = lazy(() => import('./BathroomFurniture/ToiletEtagers'));
const TowelRacks = lazy(() => import('./BathroomFurniture/TowelRacks'));

//Storage Room Furniture
const Bookshelves = lazy(() => import('./StorageFurniture/Bookshelves'));
const StorageCabinets = lazy(() => import('./StorageFurniture/StorageCabinets'));
const FilingCabinets = lazy(() => import('./StorageFurniture/FilingCabinets'));
const StorageDrawers = lazy(() => import('./StorageFurniture/StorageDrawers'));
const StorageTrunks = lazy(() => import('./StorageFurniture/StorageTrunks'));
const StorageOttomans = lazy(() => import('./StorageFurniture/StorageOttomans'));
const StorageRacks = lazy(() => import('./StorageFurniture/StorageRacks'));
const CubeStorages = lazy(() => import('./StorageFurniture/CubeStorages'));
const Desks = lazy(() => import('./StorageFurniture/Desks'));

//Bar Furniture
const CounterStools = lazy(() => import('./BarFurniture/CounterStools'));
const BarTables = lazy(() => import('./BarFurniture/BarTables'));
const CornerWallBars = lazy(() => import('./BarFurniture/CornerWallBars'));
const PubSets = lazy(() => import('./BarFurniture/PubSets'));

//Office Room Furniture
const OfficeChairs = lazy(() => import('./OfficeFurniture/OfficeChairs'));
const AdjustableDesks = lazy(() => import('./OfficeFurniture/AdjustableDesks'));
const PrinterStands = lazy(() => import('./OfficeFurniture/PrinterStands'));
const RollingDrawersCarts = lazy(() => import('./OfficeFurniture/RollingDrawersCarts'));
const BreakroomTables = lazy(() => import('./OfficeFurniture/BreakroomTables'));
const StandingPodiums = lazy(() => import('./OfficeFurniture/StandingPodiums'));
const DeskOrganisers = lazy(() => import('./OfficeFurniture/DeskOrganisers'));
const StorageBaskets = lazy(() => import('./OfficeFurniture/StorageBaskets'));

//Entryway Furniture
const EntrywayBenches = lazy(() => import('./EntrywayFurniture/EntrywayBenches'));
const HallTree = lazy(() => import('./EntrywayFurniture/HallTree'));
const ShoeStorages = lazy(() => import('./EntrywayFurniture/ShoeStorages'));
const WallShelves = lazy(() => import('./EntrywayFurniture/WallShelves'));
const CoatRacks = lazy(() => import('./EntrywayFurniture/CoatRacks'));
const StorageBenches = lazy(() => import('./EntrywayFurniture/StorageBenches'));

//Patio  Furniture
const PatioChairs = lazy(() => import('./PatioFurniture/PatioChairs'));
const PatioBenches = lazy(() => import('./PatioFurniture/PatioBenches'));
const OutdoorLounges = lazy(() => import('./PatioFurniture/OutdoorLounges'));
const OutdoorSeating = lazy(() => import('./PatioFurniture/OutdoorSeating'));
const PatioTables = lazy(() => import('./PatioFurniture/PatioTables'));
const OutdoorBistros = lazy(() => import('./PatioFurniture/OutdoorBistros'));
const OutdoorShades = lazy(() => import('./PatioFurniture/OutdoorShades'));
const BistroSets = lazy(() => import('./PatioFurniture/BistroSets'));
const ConversationSets = lazy(() => import('./PatioFurniture/ConversationSets'));
const OutdoorDining = lazy(() => import('./PatioFurniture/OutdoorDining'));
const PatioFurniture = lazy(() => import('./PatioFurniture/PatioFurniture'));

//Folding Furniture
const FoldingChairs = lazy(() => import('./FoldingFurniture/FoldingChairs'));
const FoldingTables = lazy(() => import('./FoldingFurniture/FoldingTables'));
const FoldingTrays = lazy(() => import('./FoldingFurniture/FoldingTrays'));
const FoldingSets = lazy(() => import('./FoldingFurniture/FoldingSets'));

//Gaming Furniture
const GamingChairs = lazy(() => import('./GamingFurniture/GamingChairs'));
const GamingDesks = lazy(() => import('./GamingFurniture/GamingDesks'));
const GamingFurniture = lazy(() => import('./GamingFurniture/GamingFurniture'));

//Nursery Furniture
const BabyGribs = lazy(() => import('./NurseryFurniture/BabyGribs'));
const GribMattresses = lazy(() => import('./NurseryFurniture/GribMattresses'));
const BassinetsSleepers = lazy(() => import('./NurseryFurniture/BassinetsSleepers'));
const ChangingTables = lazy(() => import('./NurseryFurniture/ChangingTables'));
const GlidersSeating = lazy(() => import('./NurseryFurniture/GlidersSeating'));
const TravelBeds = lazy(() => import('./NurseryFurniture/TravelBeds'));
const BabyDressers = lazy(() => import('./NurseryFurniture/BabyDressers'));
const ToddlerBeds = lazy(() => import('./NurseryFurniture/ToddlerBeds'));

//Kids Furniture
const KidsBeds = lazy(() => import('./KidsFurniture/KidsBeds'));
const KidsChairs = lazy(() => import('./KidsFurniture/KidsChairs'));
const KidsFurniture = lazy(() => import('./KidsFurniture/KidsFurniture'));
const KidsHeadboards = lazy(() => import('./KidsFurniture/KidsHeadboards'));
const PlayTents = lazy(() => import('./KidsFurniture/PlayTents'));
const ToyBoxes = lazy(() => import('./KidsFurniture/ToyBoxes'));
const KidsVanity = lazy(() => import('./KidsFurniture/KidsVanity'));

function FurnitureRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
    <Route exact path="/couchs-couches" component={Auth(SofaCouches, null)} />
    <Route exact path="/sectional-couchs" component={Auth(SectionalSofas, null)} />
    <Route exact path="/love-seats" component={Auth(LoveSeats, null)} />
    <Route exact path="/couch-beds" component={Auth(SofaBeds, null)} />
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
</Suspense>
  )
}

export default FurnitureRoutes