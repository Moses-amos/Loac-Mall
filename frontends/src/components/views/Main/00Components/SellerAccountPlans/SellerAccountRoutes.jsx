import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import ScrollToTop from '../../../../assets/ScrollToTop';


const MobileNav = lazy(() => import('../Navbar/MobileNav'));
const Navbar = lazy(() => import('./Navbar/Navbar'));
// const SellerPlans = lazy(() => import('./SellerPlans'));
const StoreCriteria = lazy(() => import('./StoreCriteria'));

const Footer = lazy(() => import('../Footer/Footer'));

function SellerAccountRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <MobileNav />
        <Navbar />
        <Switch> 
        <Route exact path="/account-plans" component={Auth(StoreCriteria, null)} />
        {/* <Route exact path="/retailer-criteria" component={Auth(StoreCriteria, null)} /> */}
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default SellerAccountRoutes