import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

const FreeAccountPage = lazy(() => import('./FreeAccountPage'));
const VerifiedAccount = lazy(() => import('./VerifiedAccount'));

function ClickedAccountRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <Switch> 
        <Route exact path="/free-account" component={Auth(FreeAccountPage, true)} />
        <Route exact path="/verified-account" component={Auth(VerifiedAccount, true)} />

        </Switch>
    </Router>
    </Suspense>  )
}

export default ClickedAccountRoutes