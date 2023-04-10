import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';

import ScrollToTop from '../../assets/ScrollToTop';
import RetailerNav from './RegionalPages/Components/RetailerNav/RetailerNav'
import Branches from './RegionalPages/Branches';

function Fulfillment() {
return (
<Router>
  <RetailerNav />
  <ScrollToTop />
  <Switch>
    <Route exact path="/branch" component={Auth(Branches, true)} />
    {/* <Route exact path="/chat" component={Auth(ChatCustomer, true)} /> */}
  </Switch>
</Router>
)
}

export default Fulfillment