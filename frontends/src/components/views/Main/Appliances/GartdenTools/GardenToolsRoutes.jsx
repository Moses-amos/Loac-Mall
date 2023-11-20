import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const LawnMowers = lazy(() => import('./LawnMowers'));
const LeafBlowers = lazy(() => import('./LeafBlowers'));
const LogSplitters = lazy(() => import('./LogSplitters'));
const MoreTools = lazy(() => import('./MoreTools'));
const PressureWashers = lazy(() => import('./PressureWashers'));
const TrimmersEdgers = lazy(() => import('./TrimmersEdgers'));

function GardenToolsRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/leaf-blowers" component={Auth(LeafBlowers, null)} />
      <Route exact path="/trimmers-edgers" component={Auth(TrimmersEdgers, null)} />
      <Route exact path="/pressure-washers" component={Auth(PressureWashers, null)} />
      <Route exact path="/log-splitters" component={Auth(LogSplitters, null)} />
      <Route exact path="/lawn-mowers" component={Auth(LawnMowers, null)} />
      <Route exact path="/more-tools" component={Auth(MoreTools, null)} />
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default GardenToolsRoutes