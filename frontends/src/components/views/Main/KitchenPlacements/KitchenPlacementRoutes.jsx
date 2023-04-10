import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

// Kitchen Sink Faucets

import RinceFaucets from './KitchenFaucets/RinceFaucets';
import BridgeFaucets from './KitchenFaucets/BridgeFaucets';
import PullFaucets from './KitchenFaucets/PullFaucets';
import SprayFaucets from './KitchenFaucets/SprayFaucets';
import ElectricFaucets from './KitchenFaucets/ElectricFaucets';

// Kitchen Sinks

import KitchenUndermounts from './KitchenSinks/KitchenUndermounts';
import DoubleUndermounts from './KitchenSinks/DoubleUndermounts';
import DropSinks from './KitchenSinks/DropSinks';
import DoubleDropSinks from './KitchenSinks/DoubleDropSinks';
import FarmhouseSinks from './KitchenSinks/FarmhouseSinks';
import DoubleFarmhouseSinks from './KitchenSinks/DoubleFarmhouseSinks';

// Kitchen Sinks Stainless

import StainlessUndermounts from './StainlessSinks/StainlessUndermounts';
import StainlessDropIn from './StainlessSinks/StainlessDropIn';
import StainlessDoubleBasin from './StainlessSinks/StainlessDoubleBasin';
import CopperSinks from './StainlessSinks/CopperSinks';

// Range Hoods

import WallHoods from './RangeHoods/WallHoods';
import HoodInserts from './RangeHoods/HoodInserts';
import IslandHoods from './RangeHoods/IslandHoods';
import CabinetHoods from './RangeHoods/CabinetHoods';

function KitchenPlacementRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/rince-faucets" component={Auth(RinceFaucets, null)} />
      <Route exact path="/bridge-faucets" component={Auth(BridgeFaucets, null)} />
      <Route exact path="/pull-faucets" component={Auth(PullFaucets, null)} />
      <Route exact path="/spray-faucets" component={Auth(SprayFaucets, null)} />
      <Route exact path="/electric-faucets" component={Auth(ElectricFaucets, null)} />

      <Route exact path="/kitchen-undermounts" component={Auth(KitchenUndermounts, null)} />
      <Route exact path="/double-undermounts" component={Auth(DoubleUndermounts, null)} />
      <Route exact path="/drop-sinks" component={Auth(DropSinks, null)} />
      <Route exact path="/double-sinks" component={Auth(DoubleDropSinks, null)} />
      <Route exact path="/farmhouse-sinks" component={Auth(FarmhouseSinks, null)} />
      <Route exact path="/double-farmhouse" component={Auth(DoubleFarmhouseSinks, null)} />

      <Route exact path="/stainless-Undermounts" component={Auth(StainlessUndermounts, null)} />
      <Route exact path="/stainless-drops" component={Auth(StainlessDropIn, null)} />
      <Route exact path="/double-basin" component={Auth(StainlessDoubleBasin, null)} />
      <Route exact path="/copper-sinks" component={Auth(CopperSinks, null)} />

      <Route exact path="/wall-hoods" component={Auth(WallHoods, null)} />
      <Route exact path="/hood-inserts" component={Auth(HoodInserts, null)} />
      <Route exact path="/island-hoods" component={Auth(IslandHoods, null)} />
      <Route exact path="/cabinet-hoods" component={Auth(CabinetHoods, null)} />

    </Switch>
    <Footer />
    </Router>
  )
}

export default KitchenPlacementRoutes