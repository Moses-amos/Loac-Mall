import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

import ScrollToTop from '../../assets/ScrollToTop';

const RetailerNav = lazy(() => import('./Components/RetailerNav/RetailerNav'));
const RogerInvestor = lazy(() => import('./InvestorPages/RogerInvestor'));
const BettyInvestor = lazy(() => import('./InvestorPages/BettyInvestor'));
const GermanInvestor = lazy(() => import('./InvestorPages/GermanInvestor'));
const DennisInvestor = lazy(() => import('./InvestorPages/DennisInvestor'));

function InvestorRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
      <Router>
      <ScrollToTop />
      <RetailerNav />
      <Switch>
            <Route exact path="/investor/Roger" component={Auth(RogerInvestor, true)} />
            <Route exact path="/investor/Betty" component={Auth(BettyInvestor, true)} />
            <Route exact path="/investor/Dennis" component={Auth(DennisInvestor, true)} />
            <Route exact path="/investor/German" component={Auth(GermanInvestor, true)} />
      </Switch>
      </Router>
    </Suspense>
  )
}

export default InvestorRoutes