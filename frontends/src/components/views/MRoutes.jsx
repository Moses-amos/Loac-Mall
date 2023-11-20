import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../hoc/auth';

import Navbar from'./Main/00Components/Navbar/Navbar'
import NavMenu from './Main/00Components/NavMenu/NavMenu'
import  ScrollToTop from '../assets/ScrollToTop'

const DesktopsLaptops = lazy(() => import('./Main/01Desktops&Laptops/DesktopsLaptops'));
const DesktopComponents = lazy(() => import('./Main/02DesktopComponents/DesktopComponents'));
const DesktopAccessories = lazy(() => import('./Main/03DesktopAccessories/DesktopAccessories'));
const LaptopComponents = lazy(() => import('./Main/04LaptopComponents/LaptopComponents'));
const DesktopLaptopDrives = lazy(() => import('./Main/06DesktopLaptopStorage/DesktopLaptopDrives'));
const NetworkingCables = lazy(() => import('./Main/07NetworkingCables/NetworkingCables'));
const CDDVD = lazy(() => import('./Main/10CDDVD/CDDVD'));
const DesktopProcessors = lazy(() => import('./Main/11DesktopProcessor/DesktopProcessors'));
const DesktopCabinet = lazy(() => import('./Main/12DesktopCabinet/DesktopCabinet'));
const GraphicsCards = lazy(() => import('./Main/13GraphicsCard/GraphicsCards'));

const PowerSupplies = lazy(() => import('./Main/14PowerSupplies/PowerSupplies'));
const Motherboards = lazy(() => import('./Main/15Motherboards/Motherboards'));
const DesktopMemory = lazy(() => import('./Main/16DesktopMemory/DesktopMemory'));
const WifiCards = lazy(() => import('./Main/17WifiCards/WifiCards'));
const ComputerCooling = lazy(() => import('./Main/18ComputerCooling/ComputerCooling'));
const LaptopMemory = lazy(() => import('./Main/20LaptopMemory/LaptopMemory'));

const LaptopPeripherals = lazy(() => import('./Main/21LaptopPeripherals/LaptopPeripherals'));
const StorageDevices = lazy(() => import('./Main/22StorageDevices/StorageDevices'));
const CablesAdapters = lazy(() => import('./Main/23CableAdapters/CablesAdapters'));
const Printers = lazy(() => import('./Main/26Printers/Printers'));
const ComputerSoftware = lazy(() => import('./Main/27ComputerSoftware/ComputerSoftware'));

const CellularPhones = lazy(() => import('./Main/28CellularPhones/CellularPhones'));
const CellularAccesssories = lazy(() => import('./Main/29CellularAccessories/CellularAccessories'));
const Tablets = lazy(() => import('./Main/30Tablets/Tablets'));
const Smartphones = lazy(() => import('./Main/32Smartphones/Smartphones'));
const CellularComponents = lazy(() => import('./Main/34CellularComponents/CellularComponents'));

const TabletAccessories = lazy(() => import('./Main/35TabletAccessories/TabletAccessories'));
const Theater = lazy(() => import('./Main/36Theater/Theater'));
const TvAccessories = lazy(() => import('./Main/38TvAccessories/TvAccessories'));
const CameraOther = lazy(() => import('./Main/40CameraOther/CameraOther'));

const CameraAccessories = lazy(() => import('./Main/CameraAccessories/CameraAccessories'));
const CameraComponents = lazy(() => import('./Main/43CameraComponents/CameraComponents'));
const AudioInstruments = lazy(() => import('./Main/44AudioInstruments/AudioInstruments'));
const Headphones = lazy(() => import('./Main/45Headphones/Headphones'));
const HeaphoneAccessories = lazy(() => import('./Main/46HeadphoneAccessories/HeadphoneAccessories'));

const AudioSystems = lazy(() => import('./Main/47AudioSystems/AudioSystems'));
// const PortableSpeakers = lazy(() => import('./Main/48PortableSpeakers/PortableSpeakers'));
const GameConsoles = lazy(() => import('./Main/49GameConsoles/GameConsoles'));
const Playstations = lazy(() => import('./Main/50Playstations/Playstations'));
const Xbox = lazy(() => import('./Main/51Xbox/Xbox'));
const Nintendos = lazy(() => import('./Main/52Nintendos/Nintendos'));

const OtherConsoles = lazy(() => import('./Main/53OtherConsoles/OtherConsoles'));
const WearableTech = lazy(() => import('./Main/54WearableTech/WearableTech'));
const WearGadgets = lazy(() => import('./Main/55WearGadgets/WearGadgets'));
const FitnessTracker = lazy(() => import('./Main/56FitnessTracker/FitnessTracker'));
const HairTools = lazy(() => import('./Main/57HairTools/HairTools'));
const HealthDevice = lazy(() => import('./Main/58HealthDevices/HealthDevice'));

const FitnessEquipment = lazy(() => import('./Main/59FitnessEquipment/FitnessEquipment'));
const AutoElectronics = lazy(() => import('./Main/60AutoElectronics/AutoElectronics'));
const HomeSystems = lazy(() => import('./Main/62HomeSystems/HomeSystems'));
const KitchenAppliances = lazy(() => import('./Main/63KitchenAppliances/KitchenAppliances'));
const CookingAppliances = lazy(() => import('./Main/65CookingAppliances/CookingAppliances'));
const Freezers = lazy(() => import('./Main/66Freezers/Freezers'));

const Dishwashers = lazy(() => import('./Main/67Dishwashers/Dishwashers'));
const Microwaves = lazy(() => import('./Main/68Microwaves/Microwaves'));
const Washers = lazy(() => import('./Main/70Washers/Washers'));
const Dryers = lazy(() => import('./Main/71Dryers/Dryers'));
const LaundryPackages = lazy(() => import('./Main/72LaundryPackages/LaundryPackages'));

const Ambiance = lazy(() => import('./Main/74Ambiance/Ambiance'));
const AirConditioners = lazy(() => import('./Main/75AirConditioners/AirConditioners'));
const Purifiers = lazy(() => import('./Main/76Purifiers/Purifiers'));
const Fans = lazy(() => import('./Main/77Fans/Fans'));
const Heaters = lazy(() => import('./Main/78Heaters/Heaters'));
const IndoorAppliances = lazy(() => import('./Main/79IndoorAppliances/IndoorAppliances'));

const Vacuums = lazy(() => import('./Main/80Vacuums/Vacuums'));
const SteamCleaners = lazy(() => import('./Main/81SteamCleaners/SteamCleaners'));
const EssentialTools = lazy(() => import('./Main/82EssentialTools/EssentialTools'));
const PowerTools = lazy(() => import('./Main/85PowerTools/PowerTools'));
const OutdoorTools = lazy(() => import('./Main/86OutdoorTools/OutdoorTools'));
const Drones = lazy(() => import('./Main/Drones/Drones'));

const Projectors = lazy(() => import('./Main/Projectors/Projectors'));
const Binoculars = lazy(() => import('./Main/Binoculars/Binoculars'));
const IpodMpthree = lazy(() => import('./Main/IpodMpthree/IpodMpthree'));
const MouseKeyboard = lazy(() => import('./Main/MouseKeyboard/MouseKeyboard'));
const CardReaders = lazy(() => import('./Main/CardReaders/CardReaders'));
const DeskPads = lazy(() => import('./Main/DeskPads/DeskPads'));

const PowerCables = lazy(() => import('./Main/PowerCables/PowerCables'));
const ChargersBatteries = lazy(() => import('./Main/ChargersBatteries/ChargersBatteries'));
const HardDrives = lazy(() => import('./Main/HardDrives/HardDrives'));
const SolidStateDrives = lazy(() => import('./Main/SolidStateDrives/SolidStateDrives'));
const ExternalDrives = lazy(() => import('./Main/ExternalDrives/ExternalDrives'));
const Camcorders = lazy(() => import('./Main/Camcorders/Camcorders'));

const Webcams = lazy(() => import('./Main/Webcams/Webcams'));
const HandheldVr = lazy(() => import('./Main/HandheldVR/HandheldVr'));
const Refrigerators = lazy(() => import('./Main/Refrigerators/Refrigerators'));
const Cooktops = lazy(() => import('./Main/Cooktops/Cooktops'));
const WallOvens = lazy(() => import('./Main/WallOvens/WallOvens'));

const AppliancePackages = lazy(() => import('./Main/AppliancePackages/AppliancePackages'));
const TvMounts = lazy(() => import('./Main/TvMounts/TvMounts'));
const PressureCookers = lazy(() => import('./Main/PressureCookers/PressureCookers'));

const Footer = lazy(() => import('./Main/00Components/Footer/Footer'));

function MRoutes() {
return (
  <Suspense fallback={(<div></div>)}>
<Router>
      <ScrollToTop />
      <Navbar />
      <NavMenu />
  <Switch>
      <Route exact path="/desktops-laptops" component={Auth(DesktopsLaptops, null)} />

    <Route exact path="/desktop-components" component={Auth(DesktopComponents, null)} />

    <Route exact path="/computer-accessories" component={Auth(DesktopAccessories, null)} />

    <Route exact path="/mouse-keyboard" component={Auth(MouseKeyboard, null)} />

    <Route exact path="/power-cables" component={Auth(PowerCables, null)} />

    <Route exact path="/laptop-components" component={Auth(LaptopComponents, null)} />

    <Route exact path="/card-readers" component={Auth(CardReaders, null)} />

    <Route exact path="/computer-pads" component={Auth(DeskPads, null)} />

    <Route exact path="/chargers-batteries" component={Auth(ChargersBatteries, null)} />

    <Route exact path="/storage-drives" component={Auth(DesktopLaptopDrives, null)} />

    <Route exact path="/networking" component={Auth(NetworkingCables, null)} />

    <Route exact path="/cd-dvd-drives" component={Auth(CDDVD, null)} />

    <Route exact path="/hard-disk-drives" component={Auth(HardDrives, null)} />

    <Route exact path="/solid-state-drives" component={Auth(SolidStateDrives, null)} />

    <Route exact path="/external-drives" component={Auth(ExternalDrives, null)} />

    <Route exact path="/processors" component={Auth(DesktopProcessors, null)} />

    <Route exact path="/desktop-cabinets" component={Auth(DesktopCabinet, null)} />

    <Route exact path="/graphic-cards" component={Auth(GraphicsCards, null)} />

    <Route exact path="/power-supplies" component={Auth(PowerSupplies, null)} />

    <Route exact path="/motherboards" component={Auth(Motherboards, null)} />

    <Route exact path="/desktop-memory" component={Auth(DesktopMemory, null)} />

    <Route exact path="/wifi-cards" component={Auth(WifiCards, null)} />

    <Route exact path="/cooling" component={Auth(ComputerCooling, null)} />

    <Route exact path="/laptop-memory" component={Auth(LaptopMemory, null)} />

    <Route exact path="/laptop-accessory" component={Auth(LaptopPeripherals, null)} />

    <Route exact path="/storage-devices" component={Auth(StorageDevices, null)} />

    <Route exact path="/cables-adapters" component={Auth(CablesAdapters, null)} />

    <Route exact path="/printers" component={Auth(Printers, null)} />

    <Route exact path="/computer-software" component={Auth(ComputerSoftware, null)} />

    <Route exact path="/cellular-phones" component={Auth(CellularPhones, null)} />

    <Route exact path="/cellular-accessories" component={Auth(CellularAccesssories, null)} />

    <Route exact path="/cellular-components" component={Auth(CellularComponents, null)} />

    <Route exact path="/tablet-accessories" component={Auth(TabletAccessories, null)} />


    <Route exact path="/smartphones" component={Auth(Smartphones, null)} />

    <Route exact path="/tablets" component={Auth(Tablets, null)} />

    <Route exact path="/home-theater" component={Auth(Theater, null)} />

    <Route exact path="/sound-bars" component={Auth(TvAccessories, null)} />

    <Route exact path="/cameras-other" component={Auth(CameraOther, null)} />

    <Route exact path="/camcorders" component={Auth(Camcorders, null)} />

    <Route exact path="/webcams" component={Auth(Webcams, null)} />

    <Route exact path="/drones" component={Auth(Drones, null)} />

    <Route exact path="/projectors" component={Auth(Projectors, null)} />

    <Route exact path="/binoculars" component={Auth(Binoculars, null)} />

    <Route exact path="/camera-accessories" component={Auth(CameraAccessories, null)} />

    <Route exact path="/camera-components" component={Auth(CameraComponents, null)} />

    <Route exact path="/audio" component={Auth(AudioInstruments, null)} />

    <Route exact path="/headphones" component={Auth(Headphones, null)} />

    <Route exact path="/headphone-accessories" component={Auth(HeaphoneAccessories, null)} />

    <Route exact path="/audio-systems" component={Auth(AudioSystems, null)} />

    <Route exact path="/audio-players" component={Auth(IpodMpthree, null)} /> 

    <Route exact path="/game-consoles" component={Auth(GameConsoles, null)} />

    <Route exact path="/playstations" component={Auth(Playstations, null)} />

    <Route exact path="/xbox" component={Auth(Xbox, null)} />

    <Route exact path="/nintendo" component={Auth(Nintendos, null)} />

    <Route exact path="/other-consoles" component={Auth(OtherConsoles, null)} />

    <Route exact path="/handheld-vr" component={Auth(HandheldVr, null)} />

    <Route exact path="/wearable-tech" component={Auth(WearableTech, null)} />

    <Route exact path="/wearable-gadgets" component={Auth(WearGadgets, null)} />

    <Route exact path="/fitness-trackers" component={Auth(FitnessTracker, null)} />

    <Route exact path="/hair-devices" component={Auth(HairTools, null)} />

    <Route exact path="/health-devices" component={Auth(HealthDevice, null)} />

    <Route exact path="/fitness-equipment" component={Auth(FitnessEquipment, null)} />

    <Route exact path="/auto-electronics" component={Auth(AutoElectronics, null)} />

    <Route exact path="/home-systems" component={Auth(HomeSystems, null)} />

    <Route exact path="/appliances" component={Auth(KitchenAppliances, null)} />

    <Route exact path="/cooking-appliances" component={Auth(CookingAppliances, null)} />

    <Route exact path="/freezers" component={Auth(Freezers, null)} />

    <Route exact path="/dishwashers" component={Auth(Dishwashers, null)} />

    <Route exact path="/microwaves" component={Auth(Microwaves, null)} />

    <Route exact path="/cooktops" component={Auth(Cooktops, null)} />

    <Route exact path="/ovens" component={Auth(WallOvens, null)} />

    <Route exact path="/refrigerators" component={Auth(Refrigerators, null)} />

    <Route exact path="/appliance-packages" component={Auth(AppliancePackages, null)} />

    <Route exact path="/wash-machines" component={Auth(Washers, null)} />

    <Route exact path="/dryers" component={Auth(Dryers, null)} />

    <Route exact path="/appliance-bundles" component={Auth(LaundryPackages, null)} />

    <Route exact path="/ambiance-devices" component={Auth(Ambiance, null)} />

    <Route exact path="/air-conditioners" component={Auth(AirConditioners, null)} />

    <Route exact path="/air-purifiers" component={Auth(Purifiers, null)} />

    <Route exact path="/fans" component={Auth(Fans, null)} />

    <Route exact path="/heaters" component={Auth(Heaters, null)} />

    <Route exact path="/indoor-appliances" component={Auth(IndoorAppliances, null)} />

    <Route exact path="/vacuums" component={Auth(Vacuums, null)} />

    <Route exact path="/steam-cleaning" component={Auth(SteamCleaners, null)} />

    <Route exact path="/essential-tools" component={Auth(EssentialTools, null)} />

    <Route exact path="/essential-tools" component={Auth(EssentialTools, null)} />

    <Route exact path="/power-tools" component={Auth(PowerTools, null)} />

    <Route exact path="/outdoor-tools" component={Auth(OutdoorTools, null)} />

    <Route exact path="/tv-mounts" component={Auth(TvMounts, null)} />

    <Route exact path="/pressure-cookers" component={Auth(PressureCookers, null)} />

  </Switch>
      <Footer />
</Router>
</Suspense>
)
}

export default MRoutes