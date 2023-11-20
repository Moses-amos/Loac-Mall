import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const MirrorsPage = lazy(() => import('./MirrorsPage'));
const WallArtPage = lazy(() => import('./WallArtPage'));
const ClocksPage = lazy(() => import('./ClocksPage'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));


function DecoreRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/mirrors" component={Auth(MirrorsPage, null)} />
        <Route exact path="/wall-art" component={Auth(WallArtPage, null)} />
        <Route exact path="/clocks" component={Auth(ClocksPage, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default DecoreRoutes