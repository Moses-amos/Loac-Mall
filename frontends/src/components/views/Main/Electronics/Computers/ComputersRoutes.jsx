import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const MainNavbar = lazy(() => import('../../00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const Desktops = lazy(() => import('./Desktops'));
const Laptops = lazy(() => import('./Laptops'));
const Monitors = lazy(() => import('./Monitors'));
const SpecifyPcPage = lazy(() => import('./SpecifyPcPage'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function ComputersRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <MainNavbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/desktops" component={Auth(Desktops, null)} />
        <Route exact path="/laptops" component={Auth(Laptops, null)} />
        <Route exact path="/monitors" component={Auth(Monitors, null)} />
        <Route exact path="/specify-pc" component={Auth(SpecifyPcPage, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default ComputersRoutes