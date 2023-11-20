import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

// Shower
const ShowerSystems = lazy(() => import('./Showers/ShowerSystems'));
const HandShowers = lazy(() => import('./Showers/HandShowers'));
const ShowerFaucets = lazy(() => import('./Showers/ShowerFaucets'));
const ShowerDrains = lazy(() => import('./Showers/ShowerDrains'));
const ShowerBars = lazy(() => import('./Showers/ShowerBars'));
const ShowerDoors = lazy(() => import('./Showers/ShowerDoors'));
const VolumneControls = lazy(() => import('./Showers/VolumneControls'));

// Tubs / Faucets
const FreestandingTubs = lazy(() => import('./Baths/FreestandingTubs'));
const AcloverTubs = lazy(() => import('./Baths/AcloverTubs'));
const WhirlpoolTubs = lazy(() => import('./Baths/WhirlpoolTubs'));
const CombinationTubs = lazy(() => import('./Baths/CombinationTubs'));
const DropInTubs = lazy(() => import('./Baths/DropInTubs'));
const AirTubs = lazy(() => import('./Baths/AirTubs'));
const ClawfootTubs = lazy(() => import('./Baths/ClawfootTubs'));
const WalkInTubs = lazy(() => import('./Baths/WalkInTubs'));
const CornerTubs = lazy(() => import('./Baths/CornerTubs'));
const RomanTubFaucets = lazy(() => import('./Baths/RomanTubFaucets'));
const FreestandingTubFillers = lazy(() => import('./Baths/FreestandingTubFillers'));
const WallMountedTubFillers = lazy(() => import('./Baths/WallMountedTubFillers'));
const ClawfootMountedFiller = lazy(() => import('./Baths/ClawfootMountedFiller'));
const ClawfootFloorFiller = lazy(() => import('./Baths/ClawfootFloorFiller'));

// Bathroom Sinks
const PedestalSinks = lazy(() => import('./BathroomSinks/PedestalSinks'));
const DropInSinks = lazy(() => import('./BathroomSinks/DropInSinks'));
const UndermountSinks = lazy(() => import('./BathroomSinks/UndermountSinks'));
const VesselSinks = lazy(() => import('./BathroomSinks/VesselSinks'));
const WallSinks = lazy(() => import('./BathroomSinks/WallSinks'));
const UtilitySinks = lazy(() => import('./BathroomSinks/UtilitySinks'));
const SinkCombos = lazy(() => import('./BathroomSinks/SinkCombos'));
const SingleFaucets = lazy(() => import('./BathroomSinks/SingleFaucets'));
const CenterSetFaucets = lazy(() => import('./BathroomSinks/CenterSetFaucets'));
const WidespreadFaucets = lazy(() => import('./BathroomSinks/WidespreadFaucets'));
const MountedFaucets = lazy(() => import('./BathroomSinks/MountedFaucets'));

// One Piece Toilets
const RoundOnePiece = lazy(() => import('./OnePieceToilets/RoundOnePiece'));
const ElongatedOnePiece = lazy(() => import('./OnePieceToilets/ElongatedOnePiece'));
const MountedRoundOnePiece = lazy(() => import('./OnePieceToilets/MountedRoundOnePiece'));
const MountedElongatedOnePiece = lazy(() => import('./OnePieceToilets/MountedElongatedOnePiece'));

// Two Piece Toilets
const RoundTwoPiece = lazy(() => import('./TwoPieceToilets/RoundTwoPiece'));
const ElongatedTwoPiece = lazy(() => import('./TwoPieceToilets/ElongatedTwoPiece'));
const MountedRoundTwoPiece = lazy(() => import('./TwoPieceToilets/MountedRoundTwoPiece'));
const MountedElongatedTwoPiece = lazy(() => import('./TwoPieceToilets/MountedElongatedTwoPiece'));


function BathroomRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
    </Suspense>

  )
}

export default BathroomRoutes