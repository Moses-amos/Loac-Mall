import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

import ScrollToTop from '../../assets/ScrollToTop';

const RetailerNav = lazy(() => import('./Components/RetailerNav/RetailerNav'));
const StatPages = lazy(() => import('./InvestorPages/StatPages'));

function InvestorRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
      <Router>
      <ScrollToTop />
      <RetailerNav />
      <Switch>
            <Route exact path="/investor/stat" component={Auth(StatPages, true)} />
      </Switch>
      </Router>
    </Suspense>
  )
}

export default InvestorRoutes