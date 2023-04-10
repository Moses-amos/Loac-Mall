import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import Chainsaws from './Chainsaws';
import Drills from './Drills';
import ElectricPlaners from './ElectricPlaners';
import ElectricSanders from './ElectricSanders';
import Jigsaws from './Jigsaws';
import NailGuns from './NailGuns';
import PowerTools from './PowerTools';

function PowerToolsRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/power-tools" component={Auth(PowerTools, null)} />
      <Route exact path="/electric-drills" component={Auth(Drills, null)} />
      <Route exact path="/electric-chainsaws" component={Auth(Chainsaws, null)} />
      <Route exact path="/electric-planers" component={Auth(ElectricPlaners, null)} />
      <Route exact path="/electric-sanders" component={Auth(ElectricSanders, null)} />
      <Route exact path="/jig-saws" component={Auth(Jigsaws, null)} />
      <Route exact path="/nail-guns" component={Auth(NailGuns, null)} />
    </Switch>
    <Footer />
    </Router>
  )
}

export default PowerToolsRoutes