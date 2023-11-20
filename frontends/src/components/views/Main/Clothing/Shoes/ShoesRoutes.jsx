import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const SneakersPage = lazy(() => import('./Sneakers/SneakersPage'));
const SneakerDesigners = lazy(() => import('./Sneakers/SneakerDesigners'));
const PopularSneakers = lazy(() => import('./Sneakers/PopularSneakers'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function ShoesRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/sneakers" component={Auth(SneakersPage, null)} />
        <Route exact path="/sneakers-collections" component={Auth(SneakerDesigners, null)} />
        <Route exact path="/explore-sneakers" component={Auth(PopularSneakers, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default ShoesRoutes