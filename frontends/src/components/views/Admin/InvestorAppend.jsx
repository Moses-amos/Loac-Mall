import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

const RogerRole = lazy(() => import('./InvesterRoles/RogerRole'));
const BettyRole = lazy(() => import('./InvesterRoles/BettyRole'));
const DennisRole = lazy(() => import('./InvesterRoles/DennisRole'));
const GermanRole = lazy(() => import('./InvesterRoles/GermanRole'));

function InvestorAppend() {
  return (
    <Suspense fallback={(<div></div>)}>
      <Router>
      <Switch>
            <Route exact path="/confirm/Roger" component={Auth(RogerRole, true)} />
            <Route exact path="/confirm/Betty" component={Auth(BettyRole, true)} />
            <Route exact path="/confirm/Dennis" component={Auth(DennisRole, true)} />
            <Route exact path="/confirm/German" component={Auth(GermanRole, true)} />
      </Switch>
      </Router>
    </Suspense>
  )
}

export default InvestorAppend