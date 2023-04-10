import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

import Grills from './Grills';
import GrillTorches from './GrillTorches';
import MeatThermometers from './MeatThermometers';
import Smokers from './Smokers';

function OutdoorKitchenRoutes() {
  return (
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
  )
}

export default OutdoorKitchenRoutes