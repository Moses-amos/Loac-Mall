import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const XBoxConsoles = lazy(() => import('./XBoxConsoles'));
const PlayStationConsoles = lazy(() => import('./PlayStationConsoles'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function GameConsoleRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/xbox-consoles" component={Auth(XBoxConsoles, null)} />
        <Route exact path="/playStation-consoles" component={Auth(PlayStationConsoles, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default GameConsoleRoutes