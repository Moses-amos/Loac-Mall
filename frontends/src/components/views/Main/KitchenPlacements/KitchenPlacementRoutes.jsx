import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';
const Navbar = lazy(() => import('../00Components/NavMenu/NavMenu'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

// Kitchen Sink Faucets
const RinceFaucets = lazy(() => import('./KitchenFaucets/RinceFaucets'));
const BridgeFaucets = lazy(() => import('./KitchenFaucets/BridgeFaucets'));
const PullFaucets = lazy(() => import('./KitchenFaucets/PullFaucets'));
const SprayFaucets = lazy(() => import('./KitchenFaucets/SprayFaucets'));
const ElectricFaucets = lazy(() => import('./KitchenFaucets/ElectricFaucets'));

// Kitchen Sinks
const KitchenUndermounts = lazy(() => import('./KitchenSinks/KitchenUndermounts'));
const DoubleUndermounts = lazy(() => import('./KitchenSinks/DoubleUndermounts'));
const DropSinks = lazy(() => import('./KitchenSinks/DropSinks'));
const DoubleDropSinks = lazy(() => import('./KitchenSinks/DoubleDropSinks'));
const FarmhouseSinks = lazy(() => import('./KitchenSinks/FarmhouseSinks'));
const DoubleFarmhouseSinks = lazy(() => import('./KitchenSinks/DoubleFarmhouseSinks'));

// Kitchen Sinks Stainless
const StainlessUndermounts = lazy(() => import('./StainlessSinks/StainlessUndermounts'));
const StainlessDropIn = lazy(() => import('./StainlessSinks/StainlessDropIn'));
const StainlessDoubleBasin = lazy(() => import('./StainlessSinks/StainlessDoubleBasin'));
const CopperSinks = lazy(() => import('./StainlessSinks/CopperSinks'));

// Range Hoods
const WallHoods = lazy(() => import('./RangeHoods/WallHoods'));
const HoodInserts = lazy(() => import('./RangeHoods/HoodInserts'));
const IslandHoods = lazy(() => import('./RangeHoods/IslandHoods'));
const CabinetHoods = lazy(() => import('./RangeHoods/CabinetHoods'));

function KitchenPlacementRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
    </Suspense>
  )
}

export default KitchenPlacementRoutes