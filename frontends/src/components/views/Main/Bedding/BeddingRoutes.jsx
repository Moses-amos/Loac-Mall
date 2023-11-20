import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

// Bedding
const BedBlankets = lazy(() => import('./BedBlankets'));
const BedPillows = lazy(() => import('./BedPillows'));
const WeightedBlankets = lazy(() => import('./WeightedBlankets'));
const DuvetCovers = lazy(() => import('./DuvetCovers'));
const BedSkirts = lazy(() => import('./BedSkirts'));
const Quilts = lazy(() => import('./Quilts'));
const ComforterSets = lazy(() => import('./ComforterSets'));
const KidsBlankets = lazy(() => import('./KidsBlankets'));
const KidsDuvets = lazy(() => import('./KidsDuvets'));
const KidsSheets = lazy(() => import('./KidsSheets'));
const KidsComforters = lazy(() => import('./KidsComforters'));

function BeddingRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
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
    </Suspense>
  )
}

export default BeddingRoutes