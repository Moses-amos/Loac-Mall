import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

const ReRoutePage = lazy(() => import('./ReRoutePage/ReRoutePage'));
const AppendRole = lazy(() => import('./AppendRole/AppendRole'));
const ConfirmPage = lazy(() => import('./ConfirmPage/ConfirmPage'));
const UserLogged = lazy(() => import('../Main/0_Home/components/UserLogged'));
const RetailerRole = lazy(() => import('./AppendRole/RetailerRole'));


function AuthenticationRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <Switch>
          <Route exact path="/reroute" component={Auth(ReRoutePage, true)} />
          <Route exact path="/branch-location" component={Auth(AppendRole, true)} />
          <Route exact path="/confirm" component={Auth(ConfirmPage, null)} />
          <Route exact path="/logged" component={Auth(UserLogged, true)} />
          <Route exact path="/0/admin" component={Auth(RetailerRole, true)} />
    </Switch>
    </Router>
  </Suspense>
  )
}

export default AuthenticationRoutes