import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import IndoorAppliances from './IndoorAppliances';
import CarpetCleaners from './CarpetCleaners';
import IronsSteams from './IronsSteams';
import SteamMobsVacuums from './SteamMobsVacuums';
import VacuumCleaners from './VacuumCleaners';

function IndoorApplianceRoutes() {
  return (
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
  )
}

export default IndoorApplianceRoutes