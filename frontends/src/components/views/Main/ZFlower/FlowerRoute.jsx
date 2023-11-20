import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

const FlowerPage = lazy(() => import('./FlowerPage'));

function FlowerRoute() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <Switch> 
        <Route exact path="/Memory" component={Auth(FlowerPage, null)} />
        </Switch>
    </Router>
    </Suspense>
  )
}

export default FlowerRoute