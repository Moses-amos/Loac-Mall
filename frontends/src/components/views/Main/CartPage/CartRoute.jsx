import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const MobileNav = lazy(() => import('../00Components/Navbar/MobileNav'));
const MainNavbar = lazy(() => import('../00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../00Components/Footer/Footer'));
const CartPage = lazy(() => import('./CartPage'));

function CartRoute() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
  <ScrollToTop />
  <MobileNav />
  <MainNavbar />
  <NavMenu />
  <Switch>
    <Route exact path="/user/cart" component={Auth(CartPage, null)} />
  </Switch>
  <Footer />
</Router>
</Suspense>
  )
}

export default CartRoute