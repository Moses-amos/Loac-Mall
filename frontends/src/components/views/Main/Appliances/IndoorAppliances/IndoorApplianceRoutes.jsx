import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const IndoorAppliances = lazy(() => import('./IndoorAppliances'));
const CarpetCleaners = lazy(() => import('./CarpetCleaners'));
const IronsSteams = lazy(() => import('./IronsSteams'));
const SteamMobsVacuums = lazy(() => import('./SteamMobsVacuums'));
const VacuumCleaners = lazy(() => import('./VacuumCleaners'));

function IndoorApplianceRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/indoor-appliances" component={Auth(IndoorAppliances, null)} />
      <Route exact path="/vacuums" component={Auth(VacuumCleaners, null)} />
      <Route exact path="/steam-cleaning" component={Auth(SteamMobsVacuums, null)} />
      <Route exact path="/carpet-cleaning" component={Auth(CarpetCleaners, null)} />
      <Route exact path="/essential-tools" component={Auth(IronsSteams, null)} />
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default IndoorApplianceRoutes