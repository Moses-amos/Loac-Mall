import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import Clippers from './Clippers';
import CurlingIrons from './CurlingIrons';
import HairDryers from './HairDryers';
import ElectricShavers from './ElectricShavers';
import Trimmers from './Trimmers';
import HairStraighteners from './HairStraighteners';
import Epilators from './Epilators';
import NoseEarTrimmers from './NoseEarTrimmers';


function HairAppliancesRoutes() {
  return (
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
  )
}

export default HairAppliancesRoutes