import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../hoc/auth';

import Navbar from './Main/00Components/Navbar/Navbar'
import NavMenu from './Main/00Components/NavMenu/NavMenu'
import ScrollToTop from '../assets/ScrollToTop';

import _Home from './Main/0_Home/_Home'
import backupHome from './Main/0_Home/backupHome'


import ClickedProduct from './Main/ClickedDetails/ClickedPc/ClickedProduct';
import Footer from './Main/00Components/Footer/Footer';

import DesktopsLaptops from './Main/01Desktops&Laptops/DesktopsLaptops';
import DesktopComponents from './Main/02DesktopComponents/DesktopComponents';
import DesktopAccessories from './Main/03DesktopAccessories/DesktopAccessories';
import LaptopComponents from './Main/04LaptopComponents/LaptopComponents';
import DesktopLaptopDrives from './Main/06DesktopLaptopStorage/DesktopLaptopDrives';
import NetworkingCables from './Main/07NetworkingCables/NetworkingCables';
import Desktops from './Main/08Desktops/Desktops';
import Laptops from './Main/09Laptops/Laptops';
import CDDVD from './Main/10CDDVD/CDDVD';
import DesktopProcessors from './Main/11DesktopProcessor/DesktopProcessors';
import DesktopCabinet from './Main/12DesktopCabinet/DesktopCabinet';
import GraphicsCards from './Main/13GraphicsCard/GraphicsCards';
import PowerSupplies from './Main/14PowerSupplies/PowerSupplies'
import Motherboards from './Main/15Motherboards/Motherboards';
import DesktopMemory from './Main/16DesktopMemory/DesktopMemory';
import WifiCards from './Main/17WifiCards/WifiCards'
import ComputerCooling from './Main/18ComputerCooling/ComputerCooling';
import LaptopMemory from './Main/20LaptopMemory/LaptopMemory';
import LaptopPeripherals from './Main/21LaptopPeripherals/LaptopPeripherals'
import StorageDevices from './Main/22StorageDevices/StorageDevices';
import CablesAdapters from './Main/23CableAdapters/CablesAdapters';
import Monitors from './Main/25Monitors/Monitors'
import Printers from './Main/26Printers/Printers'
import ComputerSoftware from './Main/27ComputerSoftware/ComputerSoftware'
import CellularPhones from './Main/28CellularPhones/CellularPhones'
import CellularAccesssories from './Main/29CellularAccessories/CellularAccessories'
import Tablets from './Main/30Tablets/Tablets'
import Iphones from './Main/31Iphones/Iphones'
import Smartphones from './Main/32Smartphones/Smartphones'
import CellularComponents from './Main/34CellularComponents/CellularComponents'
import TabletAccessories from './Main/35TabletAccessories/TabletAccessories'
import Theater from './Main/36Theater/Theater';
import Flatscreens from './Main/37Flatscreens/Flatscreens'
import TvAccessories from './Main/38TvAccessories/TvAccessories'
import StreamDevice from './Main/39StreamDevice/StreamDevice'
import CameraOther from './Main/40CameraOther/CameraOther'
import Cameras from './Main/41Cameras/Cameras'
import CameraAccessories from './Main/CameraAccessories/CameraAccessories'
import CameraComponents from './Main/43CameraComponents/CameraComponents'
import AudioInstruments from './Main/44AudioInstruments/AudioInstruments'
import Headphones from './Main/45Headphones/Headphones'
import HeaphoneAccessories from './Main/46HeadphoneAccessories/HeadphoneAccessories'
import AudioSystems from './Main/47AudioSystems/AudioSystems'
import PortableSpeakers from './Main/48PortableSpeakers/PortableSpeakers'
import GameConsoles from './Main/49GameConsoles/GameConsoles'
import Playstations from './Main/50Playstations/Playstations';
import Xbox from './Main/51Xbox/Xbox'
import Nintendos from './Main/52Nintendos/Nintendos'
import OtherConsoles from './Main/53OtherConsoles/OtherConsoles'
import WearableTech from './Main/54WearableTech/WearableTech';
import WearGadgets from './Main/55WearGadgets/WearGadgets'
import FitnessTracker from './Main/56FitnessTracker/FitnessTracker'
import HairTools from './Main/57HairTools/HairTools'
import HealthDevice from './Main/58HealthDevices/HealthDevice'
import FitnessEquipment from './Main/59FitnessEquipment/FitnessEquipment'
import AutoElectronics from './Main/60AutoElectronics/AutoElectronics'
import HomeSystems from './Main/62HomeSystems/HomeSystems'
import KitchenAppliances from './Main/63KitchenAppliances/KitchenAppliances'
import CookingAppliances from './Main/65CookingAppliances/CookingAppliances'
import Freezers from './Main/66Freezers/Freezers'
import Dishwashers from './Main/67Dishwashers/Dishwashers'
import Microwaves from './Main/68Microwaves/Microwaves'
import Washers from './Main/70Washers/Washers'
import Dryers from './Main/71Dryers/Dryers'
import LaundryPackages from './Main/72LaundryPackages/LaundryPackages'
import Appliances from './Main/73Appliances/Appliances'
import Ambiance from './Main/74Ambiance/Ambiance'
import AirConditioners from './Main/75AirConditioners/AirConditioners'
import Purifiers from './Main/76Purifiers/Purifiers'
import Fans from './Main/77Fans/Fans'
import Heaters from './Main/78Heaters/Heaters'
import IndoorAppliances from './Main/79IndoorAppliances/IndoorAppliances'
import Vacuums from './Main/80Vacuums/Vacuums'
import SteamCleaners from './Main/81SteamCleaners/SteamCleaners'
import EssentialTools from './Main/82EssentialTools/EssentialTools'
import CarpetTools from './Main/83CarpetTools/CarpetTools'
import PowerTools from './Main/85PowerTools/PowerTools'
import OutdoorTools from './Main/86OutdoorTools/OutdoorTools'
import Drones from './Main/Drones/Drones';
import Projectors from './Main/Projectors/Projectors';
import Binoculars from './Main/Binoculars/Binoculars';
import AboutUs from './Main/00Components/AboutUs/AboutUs';
import IpodMpthree from './Main/IpodMpthree/IpodMpthree';
import MouseKeyboard from './Main/MouseKeyboard/MouseKeyboard';
import CardReaders from './Main/CardReaders/CardReaders';
import DeskPads from './Main/DeskPads/DeskPads';
import PowerCables from './Main/PowerCables/PowerCables'
import ChargersBatteries from './Main/ChargersBatteries/ChargersBatteries';
import HardDrives from './Main/HardDrives/HardDrives';
import SolidStateDrives from './Main/SolidStateDrives/SolidStateDrives';
import ExternalDrives from './Main/ExternalDrives/ExternalDrives';
import Camcorders from './Main/Camcorders/Camcorders';
import Webcams from './Main/Webcams/Webcams';
import HandheldVr from './Main/HandheldVR/HandheldVr';
import Watches from './Main/Watches/Watches';
import Refrigerators from './Main/Refrigerators/Refrigerators';
import Cooktops from './Main/Cooktops/Cooktops';
import WallOvens from './Main/WallOvens/WallOvens';
import AppliancePackages from './Main/AppliancePackages/AppliancePackages';
import TvMounts from './Main/TvMounts/TvMounts'
import PressureCookers from './Main/PressureCookers/PressureCookers'


function MRoutes() {
return (
<Router>
  <ScrollToTop />
  <Navbar />
  <NavMenu />
  <Switch>
    <Route exact path="/" component={Auth(_Home, null)} />
    <Route exact path="/e" component={Auth(backupHome, null)} />
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
    <Route exact path="/desktops" component={Auth(Desktops, null)} />
    <Route exact path="/laptops" component={Auth(Laptops, null)} />
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
    <Route exact path="/monitors" component={Auth(Monitors, null)} />
    <Route exact path="/printers" component={Auth(Printers, null)} />
    <Route exact path="/computer-software" component={Auth(ComputerSoftware, null)} />
    <Route exact path="/cellular-phones" component={Auth(CellularPhones, null)} />
    <Route exact path="/cellular-accessories" component={Auth(CellularAccesssories, null)} />
    <Route exact path="/cellular-components" component={Auth(CellularComponents, null)} />
    <Route exact path="/tablet-accessories" component={Auth(TabletAccessories, null)} />
    <Route exact path="/iphones" component={Auth(Iphones, null)} />
    <Route exact path="/smartphones" component={Auth(Smartphones, null)} />
    <Route exact path="/tablets" component={Auth(Tablets, null)} />
    <Route exact path="/home-theater" component={Auth(Theater, null)} />
    <Route exact path="/flatscreens" component={Auth(Flatscreens, null)} />
    <Route exact path="/sound-bars" component={Auth(TvAccessories, null)} />
    <Route exact path="/streaming-device" component={Auth(StreamDevice, null)} />
    <Route exact path="/cameras-other" component={Auth(CameraOther, null)} />
    <Route exact path="/cameras" component={Auth(Cameras, null)} />
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
    <Route exact path="/portable-speakers" component={Auth(PortableSpeakers, null)} />
    <Route exact path="/game-consoles" component={Auth(GameConsoles, null)} />
    <Route exact path="/playstations" component={Auth(Playstations, null)} />
    <Route exact path="/xbox" component={Auth(Xbox, null)} />
    <Route exact path="/nintendo" component={Auth(Nintendos, null)} />
    <Route exact path="/other-consoles" component={Auth(OtherConsoles, null)} />
    <Route exact path="/handheld-vr" component={Auth(HandheldVr, null)} />
    <Route exact path="/wearable-tech" component={Auth(WearableTech, null)} />
    <Route exact path="/wearable-gadgets" component={Auth(WearGadgets, null)} />
    <Route exact path="/watches" component={Auth(Watches, null)} />
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

    <Route exact path="/kitchen-appliances" component={Auth(Appliances, null)} />
    <Route exact path="/ambiance-devices" component={Auth(Ambiance, null)} />
    <Route exact path="/air-conditioners" component={Auth(AirConditioners, null)} />
    <Route exact path="/air-purifiers" component={Auth(Purifiers, null)} />
    <Route exact path="/fans" component={Auth(Fans, null)} />
    <Route exact path="/heaters" component={Auth(Heaters, null)} />

    <Route exact path="/indoor-appliances" component={Auth(IndoorAppliances, null)} />
    <Route exact path="/vacuums" component={Auth(Vacuums, null)} />
    <Route exact path="/steam-cleaning" component={Auth(SteamCleaners, null)} />
    <Route exact path="/essential-tools" component={Auth(EssentialTools, null)} />
    <Route exact path="/carpet-cleaning" component={Auth(CarpetTools, null)} />
    <Route exact path="/power-tools" component={Auth(PowerTools, null)} />
    <Route exact path="/outdoor-tools" component={Auth(OutdoorTools, null)} />
    <Route exact path="/tv-mounts" component={Auth(TvMounts, null)} />
    <Route exact path="/pressure-cookers" component={Auth(PressureCookers, null)} />

    <Route exact path="/about-us" component={Auth(AboutUs, null)} />
    <Route exact path="/product/:productId" component={Auth(ClickedProduct, null)} />
  </Switch>
  <Footer />
</Router>
)
}

export default MRoutes