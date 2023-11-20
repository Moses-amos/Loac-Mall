import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const MainNavbar = lazy(() => import('../../Main/00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('../../Main/00Components/NavMenu/NavMenu'));

const LandingPage = lazy(() => import('./Pages/MainPages/LandingPage'));
const Footer = lazy(() => import('../../Main/00Components/Footer/Footer'));


function LandingpageRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <MainNavbar />
        <NavMenu />
        <ScrollToTop />
        <Switch> 
        <Route exact path="/home/:userId" component={Auth(LandingPage, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default LandingpageRoutes