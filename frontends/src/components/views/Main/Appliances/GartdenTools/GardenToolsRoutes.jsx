import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import LawnMowers from './LawnMowers';
import LeafBlowers from './LeafBlowers';
import LogSplitters from './LogSplitters';
import MoreTools from './MoreTools';
import PressureWashers from './PressureWashers';
import TrimmersEdgers from './TrimmersEdgers';

function GardenToolsRoutes() {
  return (
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
  )
}

export default GardenToolsRoutes