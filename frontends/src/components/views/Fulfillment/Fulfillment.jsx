import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

import ScrollToTop from '../../assets/ScrollToTop';

const RetailerNav = lazy(() => import('./RegionalPages/Components/RetailerNav/RetailerNav'));
const Branches = lazy(() => import('./RegionalPages/Branches'));


function Fulfillment() {
return (
  <Suspense fallback={(<div></div>)}>
<Router>
  <RetailerNav />
  <ScrollToTop />
  <Switch>
    <Route exact path="/branch" component={Auth(Branches, true)} />
    {/* <Route exact path="/chat" component={Auth(ChatCustomer, true)} /> */}
  </Switch>
</Router>
</Suspense>
)
}

export default Fulfillment