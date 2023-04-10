import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

// Throw Pillow/Blankets

import ThrowPillow from './ThrowPillowsBlankets/ThrowPillow';
import ThrowBlankets from './ThrowPillowsBlankets/ThrowBlankets';
import BackrestPillows from './ThrowPillowsBlankets/BackrestPillows';
import DecorativeCases from './ThrowPillowsBlankets/DecorativeCases';

// Lights Lamps

import TableLamps from './LightsLamps/TableLamps';
import FloorLamps from './LightsLamps/FloorLamps';
import DeskLamps from './LightsLamps/DeskLamps';
import DecorativeLighting from './LightsLamps/DecorativeLighting';
import LampShades from './LightsLamps/LampShades'; 
import LampSets from './LightsLamps/LampSets';
import CeilingLight from './LightsLamps/CeilingLight';
import CeilingFans from './LightsLamps/CeilingFans';
import Chandeliers from './LightsLamps/Chandeliers'; 
import Fandeliers from './LightsLamps/Fandeliers';
import TrackLights from './LightsLamps/TrackLights';
import OutdoorLight from './LightsLamps/OutdoorLight';

// Wall Decore

import Tapestries from './WallDecore/Tapestries';
import WallHangings from './WallDecore/WallHangings';
import WallPaperDecals from './WallDecore/WallPaperDecals';

// Wall Art

import CanvasArts from './WallArt/CanvasArts';
import FramedArts from './WallArt/FramedArts';
import InspirationalArts from './WallArt/InspirationalArts';
import Paintings from './WallArt/Paintings';
import Photography from './WallArt/Photography';
import MetalArt from './WallArt/MetalArt';

// Carpets/Rugs

import ThrowRugs from './RugsCarpets/ThrowRugs';
import AreaRugs from './RugsCarpets/AreaRugs';
import BedroomRugs from './RugsCarpets/BedroomRugs';
import DoorMats from './RugsCarpets/DoorMats';
import RunnerRugs from './RugsCarpets/RunnerRugs';
import KidsRugs from './RugsCarpets/KidsRugs';
import RoundRugs from './RugsCarpets/RoundRugs';
import OutdoorRugs from './RugsCarpets/OutdoorRugs';

// Mirrors

import RoundMirrors from './Mirriors/RoundMirrors';
import FloorMirrors from './Mirriors/FloorMirrors';
import WallMirrors from './Mirriors/WallMirrors';
import LedMirrors from './Mirriors/LedMirrors';

// Clocks

import WallClocks from './Clocks/WallClocks';
import TableClocks from './Clocks/TableClocks';
import CuckooClocks from './Clocks/CuckooClocks';
import DigitalClocks from './Clocks/DigitalClocks';
import AlarmClocks from './Clocks/AlarmClocks';

// Frames/Albums

import TableFrames from './FramesAlbums/TableFrames';
import WallFrames from './FramesAlbums/WallFrames';
import GallaryFrames from './FramesAlbums/GallaryFrames';
import DigitalFrames from './FramesAlbums/DigitalFrames';

// Candles/Fragrance

import Candles from './CandlesFragrance/Candles';
import FramelessCandles from './CandlesFragrance/FramelessCandles';
import CandleHolders from './CandlesFragrance/CandleHolders';
import OilDiffusers from './CandlesFragrance/OilDiffusers';

// Artificial Vegetation

import ArtificialPlants from './ArtificialPlantsFlowers/ArtificialPlants';
import ArtificialTrees from './ArtificialPlantsFlowers/ArtificialTrees';
import FakeSucculents from './ArtificialPlantsFlowers/FakeSucculents';
import PlantStands from './ArtificialPlantsFlowers/PlantStands';
import Planters from './ArtificialPlantsFlowers/Planters';
import Vases from './ArtificialPlantsFlowers/Vases';

// Decoratives

import Globes from './DecorativeAccessories/Globes';
import Sculptures from './DecorativeAccessories/Sculptures';
import DecorativeTrays from './DecorativeAccessories/DecorativeTrays';
import DecorativeBowls from './DecorativeAccessories/DecorativeBowls';
import DecorativeItems from './DecorativeAccessories/DecorativeItems';
import RoomDividers from './DecorativeAccessories/RoomDividers';
import Bookends from './DecorativeAccessories/Bookends';

// Flooring/Tiles

import Flooring from './FlooringTiles/Flooring';
import FloorTiles from './FlooringTiles/FloorTiles';
import WallTiles from './FlooringTiles/WallTiles';
import StoneTiles from './FlooringTiles/StoneTiles';
import Tiles from './FlooringTiles/Tiles';
import Vinyl from './FlooringTiles/Vinyl';


function HomeDecoreRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/throw-pillows" component={Auth(ThrowPillow, null)} />
      <Route exact path="/throw-blankets" component={Auth(ThrowBlankets, null)} />
      <Route exact path="/backrest-pillows" component={Auth(BackrestPillows, null)} />
      <Route exact path="/decorative-cases" component={Auth(DecorativeCases, null)} />
  
      <Route exact path="/table-lamps" component={Auth(TableLamps, null)} />
      <Route exact path="/floor-lamps" component={Auth(FloorLamps, null)} />
      <Route exact path="/desk-lamps" component={Auth(DeskLamps, null)} />
      <Route exact path="/decorative-lighting" component={Auth(DecorativeLighting, null)} />
      <Route exact path="/lamp-shades" component={Auth(LampShades, null)} />
      <Route exact path="/lamp-sets" component={Auth(LampSets, null)} />
      <Route exact path="/ceiling-lights" component={Auth(CeilingLight, null)} />
      <Route exact path="/ceiling-fans" component={Auth(CeilingFans, null)} />
      <Route exact path="/chandeliers" component={Auth(Chandeliers, null)} />
      <Route exact path="/fandeliers" component={Auth(Fandeliers, null)} />
      <Route exact path="/track-lights" component={Auth(TrackLights, null)} />
      <Route exact path="/outdoor-lights" component={Auth(OutdoorLight, null)} />
  
      <Route exact path="/tapestries" component={Auth(Tapestries, null)} />
      <Route exact path="/wall-hangings" component={Auth(WallHangings, null)} />
      <Route exact path="/decals-wallpaper" component={Auth(WallPaperDecals, null)} />
  
      <Route exact path="/canvas-art" component={Auth(CanvasArts, null)} />
      <Route exact path="/framed-art" component={Auth(FramedArts, null)} />
      <Route exact path="/inspirational-arts" component={Auth(InspirationalArts, null)} />
      <Route exact path="/paintings" component={Auth(Paintings, null)} />
      <Route exact path="/photography" component={Auth(Photography, null)} />
      <Route exact path="/metal-art" component={Auth(MetalArt, null)} />
     
      <Route exact path="/throw-rugs" component={Auth(ThrowRugs, null)} />
      <Route exact path="/area-rugs" component={Auth(AreaRugs, null)} />
      <Route exact path="/bedroom-rugs" component={Auth(BedroomRugs, null)} />
      <Route exact path="/door-mats" component={Auth(DoorMats, null)} />
      <Route exact path="/runner-rugs" component={Auth(RunnerRugs, null)} />
      <Route exact path="/round-rugs" component={Auth(RoundRugs, null)} />
      <Route exact path="/kids-rugs" component={Auth(KidsRugs, null)} />
      <Route exact path="/outdoor-rugs" component={Auth(OutdoorRugs, null)} />
  
      <Route exact path="/round-mirrors" component={Auth(RoundMirrors, null)} />
      <Route exact path="/floor-mirrors" component={Auth(FloorMirrors, null)} />
      <Route exact path="/wall-mirrors" component={Auth(WallMirrors, null)} />
      <Route exact path="/led-mirrors" component={Auth(LedMirrors, null)} />
  
      <Route exact path="/wall-clocks" component={Auth(WallClocks, null)} />
      <Route exact path="/table-clocks" component={Auth(TableClocks, null)} />
      <Route exact path="/cuckoo-clocks" component={Auth(CuckooClocks, null)} />
      <Route exact path="/digital-clocks" component={Auth(DigitalClocks, null)} />
      <Route exact path="/alarm-clocks" component={Auth(AlarmClocks, null)} />
     
      <Route exact path="/table-frames" component={Auth(TableFrames, null)} />
      <Route exact path="/wall-frames" component={Auth(WallFrames, null)} />
      <Route exact path="/gallary-frames" component={Auth(GallaryFrames, null)} />
      <Route exact path="/digital-frames" component={Auth(DigitalFrames, null)} />
     
      <Route exact path="/candles" component={Auth(Candles, null)} />
      <Route exact path="/frameless-candles" component={Auth(FramelessCandles, null)} />
      <Route exact path="/candle-holders" component={Auth(CandleHolders, null)} />
      <Route exact path="/oil-diffusers" component={Auth(OilDiffusers, null)} />
     
      <Route exact path="/artificial-plants" component={Auth(ArtificialPlants, null)} />
      <Route exact path="/artificial-trees" component={Auth(ArtificialTrees, null)} />
      <Route exact path="/fake-succulents" component={Auth(FakeSucculents, null)} />
      <Route exact path="/plant-stands" component={Auth(PlantStands, null)} />
      <Route exact path="/planters" component={Auth(Planters, null)} />
      <Route exact path="/vases" component={Auth(Vases, null)} />

      <Route exact path="/globes" component={Auth(Globes, null)} />
      <Route exact path="/sculptures" component={Auth(Sculptures, null)} />
      <Route exact path="/decorative-trays" component={Auth(DecorativeTrays, null)} />
      <Route exact path="/decorative-bowls" component={Auth(DecorativeBowls, null)} />
      <Route exact path="/decorative-items" component={Auth(DecorativeItems, null)} />
      <Route exact path="/room-dividers" component={Auth(RoomDividers, null)} />
      <Route exact path="/bookends" component={Auth(Bookends, null)} />

      <Route exact path="/flooring" component={Auth(Flooring, null)} />
      <Route exact path="/floor-tiles" component={Auth(FloorTiles, null)} />
      <Route exact path="/wall-tiles" component={Auth(WallTiles, null)} />
      <Route exact path="/stone-tiles" component={Auth(StoneTiles, null)} />
      <Route exact path="/tiles" component={Auth(Tiles, null)} />
      <Route exact path="/vinyl-flooring" component={Auth(Vinyl, null)} />


    </Switch>
    <Footer />
  </Router>
  )
}

export default HomeDecoreRoutes