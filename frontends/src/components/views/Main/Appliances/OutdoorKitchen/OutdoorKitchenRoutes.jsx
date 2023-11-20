import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const Grills = lazy(() => import('./Grills'));
const GrillTorches = lazy(() => import('./GrillTorches'));
const MeatThermometers = lazy(() => import('./MeatThermometers'));
const Smokers = lazy(() => import('./Smokers'));

function OutdoorKitchenRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/kitchen-thermometers" component={Auth(MeatThermometers, null)} />
      <Route exact path="/kitchen-torches" component={Auth(GrillTorches, null)} />
      <Route exact path="/outdoor-grills" component={Auth(Grills, null)} />
      <Route exact path="/smokers" component={Auth(Smokers, null)} />
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default OutdoorKitchenRoutes