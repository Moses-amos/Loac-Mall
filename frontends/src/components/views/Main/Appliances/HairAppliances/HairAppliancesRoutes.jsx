import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const Clippers = lazy(() => import('./Clippers'));
const CurlingIrons = lazy(() => import('./CurlingIrons'));
const HairDryers = lazy(() => import('./HairDryers'));
const ElectricShavers = lazy(() => import('./ElectricShavers'));
const Trimmers = lazy(() => import('./Trimmers'));
const HairStraighteners = lazy(() => import('./HairStraighteners'));
const Epilators = lazy(() => import('./Epilators'));
const NoseEarTrimmers = lazy(() => import('./NoseEarTrimmers'));

function HairAppliancesRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/straighteners-brushes" component={Auth(HairStraighteners, null)} />
      <Route exact path="/curling-irons" component={Auth(CurlingIrons, null)} />
      <Route exact path="/hair-dryers" component={Auth(HairDryers, null)} />
      <Route exact path="/clippers" component={Auth(Clippers, null)} />
      <Route exact path="/hair-trimmers" component={Auth(Trimmers, null)} />
      <Route exact path="/epilators" component={Auth(Epilators, null)} />
      <Route exact path="/electric-shavers" component={Auth(ElectricShavers, null)} />
      <Route exact path="/facial-trimmers" component={Auth(NoseEarTrimmers, null)} />
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default HairAppliancesRoutes