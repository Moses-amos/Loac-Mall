import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const WatchesPage = lazy(() => import('./WatchesPage'));
const LuxuryWatches = lazy(() => import('./LuxuryWatches'));
const PopularWatches = lazy(() => import('./PopularWatches'));
const SmartWatches = lazy(() => import('./SmartWatches'));
const WomensWatches = lazy(() => import('./WomensWatches'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function WearableTechnologyRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/watches" component={Auth(WatchesPage, null)} />
        <Route exact path="/popular-watches" component={Auth(PopularWatches, null)} />
        <Route exact path="/luxury-watches" component={Auth(LuxuryWatches, null)} />
        <Route exact path="/smart-watches" component={Auth(SmartWatches, null)} />
        <Route exact path="/womens-watches" component={Auth(WomensWatches, null)} />

        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default WearableTechnologyRoutes