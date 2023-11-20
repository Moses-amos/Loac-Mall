import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const Flatscreens = lazy(() => import('./Flatscreens'));
const MediaDevices = lazy(() => import('./MediaDevices'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function TvTheaterRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/tvs" component={Auth(Flatscreens, null)} />
        <Route exact path="/media-devices" component={Auth(MediaDevices, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default TvTheaterRoutes