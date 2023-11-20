import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';
const Navbar = lazy(() => import('../00Components/NavMenu/NavMenu'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

// Throw Pillow/Blankets
const ThrowPillow = lazy(() => import('./ThrowPillowsBlankets/ThrowPillow'));
const ThrowBlankets = lazy(() => import('./ThrowPillowsBlankets/ThrowBlankets'));
const BackrestPillows = lazy(() => import('./ThrowPillowsBlankets/BackrestPillows'));
const DecorativeCases = lazy(() => import('./ThrowPillowsBlankets/DecorativeCases'));

// Lights Lamps
const TableLamps = lazy(() => import('./LightsLamps/TableLamps'));
const FloorLamps = lazy(() => import('./LightsLamps/FloorLamps'));
const DeskLamps = lazy(() => import('./LightsLamps/DeskLamps'));
const DecorativeLighting = lazy(() => import('./LightsLamps/DecorativeLighting'));
const LampShades = lazy(() => import('./LightsLamps/LampShades'));
const LampSets = lazy(() => import('./LightsLamps/LampSets'));
const CeilingLight = lazy(() => import('./LightsLamps/CeilingLight'));
const CeilingFans = lazy(() => import('./LightsLamps/CeilingFans'));
const Chandeliers = lazy(() => import('./LightsLamps/Chandeliers'));
const Fandeliers = lazy(() => import('./LightsLamps/Fandeliers'));
const TrackLights = lazy(() => import('./LightsLamps/TrackLights'));
const OutdoorLight = lazy(() => import('./LightsLamps/OutdoorLight'));

// Wall Decore
const Tapestries = lazy(() => import('./WallDecore/Tapestries'));
const WallHangings = lazy(() => import('./WallDecore/WallHangings'));
const WallPaperDecals = lazy(() => import('./WallDecore/WallPaperDecals'));

// Wall Art
const CanvasArts = lazy(() => import('./WallArt/CanvasArts'));
const FramedArts = lazy(() => import('./WallArt/FramedArts'));
const InspirationalArts = lazy(() => import('./WallArt/InspirationalArts'));
const Paintings = lazy(() => import('./WallArt/Paintings'));
const Photography = lazy(() => import('./WallArt/Photography'));
const MetalArt = lazy(() => import('./WallArt/MetalArt'));

// Carpets/Rugs
const ThrowRugs = lazy(() => import('./RugsCarpets/ThrowRugs'));
const AreaRugs = lazy(() => import('./RugsCarpets/AreaRugs'));
const BedroomRugs = lazy(() => import('./RugsCarpets/BedroomRugs'));
const DoorMats = lazy(() => import('./RugsCarpets/DoorMats'));
const RunnerRugs = lazy(() => import('./RugsCarpets/RunnerRugs'));
const KidsRugs = lazy(() => import('./RugsCarpets/KidsRugs'));
const RoundRugs = lazy(() => import('./RugsCarpets/RoundRugs'));
const OutdoorRugs = lazy(() => import('./RugsCarpets/OutdoorRugs'));

// Mirrors
const RoundMirrors = lazy(() => import('./Mirriors/RoundMirrors'));
const FloorMirrors = lazy(() => import('./Mirriors/FloorMirrors'));
const WallMirrors = lazy(() => import('./Mirriors/WallMirrors'));
const LedMirrors = lazy(() => import('./Mirriors/LedMirrors'));

// Clocks
const WallClocks = lazy(() => import('./Clocks/WallClocks'));
const TableClocks = lazy(() => import('./Clocks/TableClocks'));
const CuckooClocks = lazy(() => import('./Clocks/CuckooClocks'));
const DigitalClocks = lazy(() => import('./Clocks/DigitalClocks'));
const AlarmClocks = lazy(() => import('./Clocks/AlarmClocks'));

// Frames/Albums
const TableFrames = lazy(() => import('./FramesAlbums/TableFrames'));
const WallFrames = lazy(() => import('./FramesAlbums/WallFrames'));
const GallaryFrames = lazy(() => import('./FramesAlbums/GallaryFrames'));
const DigitalFrames = lazy(() => import('./FramesAlbums/DigitalFrames'));

// Candles/Fragrance
const Candles = lazy(() => import('./CandlesFragrance/Candles'));
const FramelessCandles = lazy(() => import('./CandlesFragrance/FramelessCandles'));
const CandleHolders = lazy(() => import('./CandlesFragrance/CandleHolders'));
const OilDiffusers = lazy(() => import('./CandlesFragrance/OilDiffusers'));

// Artificial Vegetation

const ArtificialPlants = lazy(() => import('./ArtificialPlantsFlowers/ArtificialPlants'));
const ArtificialTrees = lazy(() => import('./ArtificialPlantsFlowers/ArtificialTrees'));
const FakeSucculents = lazy(() => import('./ArtificialPlantsFlowers/FakeSucculents'));
const PlantStands = lazy(() => import('./ArtificialPlantsFlowers/PlantStands'));
const Planters = lazy(() => import('./ArtificialPlantsFlowers/Planters'));
const Vases = lazy(() => import('./ArtificialPlantsFlowers/Vases'));

// Decoratives
const Globes = lazy(() => import('./DecorativeAccessories/Globes'));
const Sculptures = lazy(() => import('./DecorativeAccessories/Sculptures'));
const DecorativeTrays = lazy(() => import('./DecorativeAccessories/DecorativeTrays'));
const DecorativeBowls = lazy(() => import('./DecorativeAccessories/DecorativeBowls'));
const DecorativeItems = lazy(() => import('./DecorativeAccessories/DecorativeItems'));
const RoomDividers = lazy(() => import('./DecorativeAccessories/RoomDividers'));
const Bookends = lazy(() => import('./DecorativeAccessories/Bookends'));

// Flooring/Tiles
const Flooring = lazy(() => import('./FlooringTiles/Flooring'));
const FloorTiles = lazy(() => import('./FlooringTiles/FloorTiles'));
const WallTiles = lazy(() => import('./FlooringTiles/WallTiles'));
const StoneTiles = lazy(() => import('./FlooringTiles/StoneTiles'));
const Tiles = lazy(() => import('./FlooringTiles/Tiles'));
const Vinyl = lazy(() => import('./FlooringTiles/Vinyl'));

function HomeDecoreRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
  </Suspense>
  )
}

export default HomeDecoreRoutes