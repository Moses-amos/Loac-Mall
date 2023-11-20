import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const MainNavbar = lazy(() => import('../00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));

const ClickedProduct = lazy(() => import('./ClickedPc/ClickedProduct'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));

function ClickedProductRoute() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <MainNavbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/product/:productId" component={Auth(ClickedProduct, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default ClickedProductRoute