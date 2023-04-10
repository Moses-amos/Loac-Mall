import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

// Shower

import ShowerSystems from './Showers/ShowerSystems';
import HandShowers from './Showers/HandShowers';
import ShowerFaucets from './Showers/ShowerFaucets';
import ShowerDrains from './Showers/ShowerDrains';
import ShowerBars from './Showers/ShowerBars';
import ShowerDoors from './Showers/ShowerDoors';
import VolumneControls from './Showers/VolumneControls';

// Tubs / Faucets

import FreestandingTubs from './Baths/FreestandingTubs';
import AcloverTubs from './Baths/AcloverTubs';
import WhirlpoolTubs from './Baths/WhirlpoolTubs';
import CombinationTubs from './Baths/CombinationTubs';
import DropInTubs from './Baths/DropInTubs';
import AirTubs from './Baths/AirTubs';
import ClawfootTubs from './Baths/ClawfootTubs';
import WalkInTubs from './Baths/WalkInTubs';
import CornerTubs from './Baths/CornerTubs';
import RomanTubFaucets from './Baths/RomanTubFaucets';
import FreestandingTubFillers from './Baths/FreestandingTubFillers';
import WallMountedTubFillers from './Baths/WallMountedTubFillers';
import ClawfootMountedFiller from './Baths/ClawfootMountedFiller';
import ClawfootFloorFiller from './Baths/ClawfootFloorFiller';

// Bathroom Sinks

import PedestalSinks from './BathroomSinks/PedestalSinks';
import DropInSinks from './BathroomSinks/DropInSinks';
import UndermountSinks from './BathroomSinks/UndermountSinks';
import VesselSinks from './BathroomSinks/VesselSinks';
import WallSinks from './BathroomSinks/WallSinks';
import UtilitySinks from './BathroomSinks/UtilitySinks';
import SinkCombos from './BathroomSinks/SinkCombos';
import SingleFaucets from './BathroomSinks/SingleFaucets';
import CenterSetFaucets from './BathroomSinks/CenterSetFaucets';
import WidespreadFaucets from './BathroomSinks/WidespreadFaucets';
import MountedFaucets from './BathroomSinks/MountedFaucets';

// One Piece Toilets

import RoundOnePiece from './OnePieceToilets/RoundOnePiece';
import ElongatedOnePiece from './OnePieceToilets/ElongatedOnePiece';
import MountedRoundOnePiece from './OnePieceToilets/MountedRoundOnePiece';
import MountedElongatedOnePiece from './OnePieceToilets/MountedElongatedOnePiece';

// Two Piece Toilets

import RoundTwoPiece from './TwoPieceToilets/RoundTwoPiece';
import ElongatedTwoPiece from './TwoPieceToilets/ElongatedTwoPiece';
import MountedRoundTwoPiece from './TwoPieceToilets/MountedRoundTwoPiece';
import MountedElongatedTwoPiece from './TwoPieceToilets/MountedElongatedTwoPiece';


function BathroomRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/shower-systems" component={Auth(ShowerSystems, null)} />
      <Route exact path="/hand-showers" component={Auth(HandShowers, null)} />
      <Route exact path="/shower-faucets" component={Auth(ShowerFaucets, null)} />
      <Route exact path="/shower-drains" component={Auth(ShowerDrains, null)} />
      <Route exact path="/shower-bars" component={Auth(ShowerBars, null)} />
      <Route exact path="/shower-doors" component={Auth(ShowerDoors, null)} />
      <Route exact path="/volumne-controls" component={Auth(VolumneControls, null)} />
      
      <Route exact path="/freestanding-tubs" component={Auth(FreestandingTubs, null)} />
      <Route exact path="/aclover-tubs" component={Auth(AcloverTubs, null)} />
      <Route exact path="/whirlpool-tubs" component={Auth(WhirlpoolTubs, null)} />
      <Route exact path="/combination-tubs" component={Auth(CombinationTubs, null)} />
      <Route exact path="/drop-tubs" component={Auth(DropInTubs, null)} />
      <Route exact path="/air-tubs" component={Auth(AirTubs, null)} />
      <Route exact path="/clawfoot-tubs" component={Auth(ClawfootTubs, null)} />
      <Route exact path="/walk-in-tubs" component={Auth(WalkInTubs, null)} />
      <Route exact path="/corner-tubs" component={Auth(CornerTubs, null)} />
      <Route exact path="/roman-faucets" component={Auth(RomanTubFaucets, null)} />
      <Route exact path="/freestanding-fillers" component={Auth(FreestandingTubFillers, null)} />
      <Route exact path="/wall-fillers" component={Auth(WallMountedTubFillers, null)} />
      <Route exact path="/mounted-fillers" component={Auth(ClawfootMountedFiller, null)} />
      <Route exact path="/standing-clawfoot" component={Auth(ClawfootFloorFiller, null)} />
      
      <Route exact path="/pedestal-sinks" component={Auth(PedestalSinks, null)} />
      <Route exact path="/drop-ins" component={Auth(DropInSinks, null)} />
      <Route exact path="/unermount-sinks" component={Auth(UndermountSinks, null)} />
      <Route exact path="/vessel-sinks" component={Auth(VesselSinks, null)} />
      <Route exact path="/wall-sinks" component={Auth(WallSinks, null)} />
      <Route exact path="/utility-sinks" component={Auth(UtilitySinks, null)} />
      <Route exact path="/sink-combos" component={Auth(SinkCombos, null)} />
      <Route exact path="/single-faucets" component={Auth(SingleFaucets, null)} />
      <Route exact path="/centerset-faucets" component={Auth(CenterSetFaucets, null)} />
      <Route exact path="/widespread-faucets" component={Auth(WidespreadFaucets, null)} />
      <Route exact path="/mounted-faucets" component={Auth(MountedFaucets, null)} />

      <Route exact path="/round-onepiece-toilets" component={Auth(RoundOnePiece, null)} />
      <Route exact path="/elongated-onepiece-toilets" component={Auth(ElongatedOnePiece, null)} />
      <Route exact path="/round-mounted-onepiece" component={Auth(MountedRoundOnePiece, null)} />
      <Route exact path="/elongated-mounted-onepiece" component={Auth(MountedElongatedOnePiece, null)} />
      
      <Route exact path="/round-twopiece-toilets" component={Auth(RoundTwoPiece, null)} />
      <Route exact path="/elongated-twopiece-toilets" component={Auth(ElongatedTwoPiece, null)} />
      <Route exact path="/round-mounted-twopiece" component={Auth(MountedRoundTwoPiece, null)} />
      <Route exact path="/elongated-mounted-twopiece" component={Auth(MountedElongatedTwoPiece, null)} />

    </Switch>
    <Footer />
    </Router>

  )
}

export default BathroomRoutes