import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../hoc/auth';

import ScrollToTop from '../assets/ScrollToTop';

const MobileNav = lazy(() => import('./Main/00Components/Navbar/MobileNav'));
const MainNavbar = lazy(() => import('./Main/00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('./Main/00Components/NavMenu/NavMenu'));

const _Home = lazy(() => import('./Main/0_Home/_Home'));
// const backupHome = lazy(() => import('./Main/0_Home/backupHome'));
const AboutUs = lazy(() => import('./Main/00Components/AboutUs/AboutUs'));
const Footer = lazy(() => import('./Main/00Components/Footer/Footer'));

function MainRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <MobileNav />
        <MainNavbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/" component={Auth(_Home, null)} />
        <Route exact path="/about-us" component={Auth(AboutUs, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default MainRoutes