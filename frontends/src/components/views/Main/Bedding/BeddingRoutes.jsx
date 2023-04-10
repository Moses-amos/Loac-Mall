import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import Navbar from '../00Components/Navbar/Navbar'
import NavMenu from '../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../assets/ScrollToTop';
import Footer from '../00Components/Footer/Footer';

// Bedding

import BedBlankets from './BedBlankets';
import BedPillows from './BedPillows';
import WeightedBlankets from './WeightedBlankets';
import DuvetCovers from './DuvetCovers';
import BedSkirts from './BedSkirts';
import Quilts from './Quilts';
import ComforterSets from './ComforterSets';
import KidsBlankets from './KidsBlankets';
import KidsDuvets from './KidsDuvets';
import KidsSheets from './KidsSheets';
import KidsComforters from './KidsComforters';


function BeddingRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/bed-blankets" component={Auth(BedBlankets, null)} />
      <Route exact path="/bed-pillows" component={Auth(BedPillows, null)} />
      <Route exact path="/weighted-blankets" component={Auth(WeightedBlankets, null)} />
      <Route exact path="/duvet-covers" component={Auth(DuvetCovers, null)} />
      <Route exact path="/comforter-sets" component={Auth(ComforterSets, null)} />
      <Route exact path="/quilts" component={Auth(Quilts, null)} />
      <Route exact path="/bed-skirts" component={Auth(BedSkirts, null)} />
      <Route exact path="/kids-blankets" component={Auth(KidsBlankets, null)} />
      <Route exact path="/kids-duvet" component={Auth(KidsDuvets, null)} />
      <Route exact path="/kids-sheets" component={Auth(KidsSheets, null)} />
      <Route exact path="/kids-comforters" component={Auth(KidsComforters, null)} />

    </Switch>
    <Footer />
    </Router>
  )
}

export default BeddingRoutes