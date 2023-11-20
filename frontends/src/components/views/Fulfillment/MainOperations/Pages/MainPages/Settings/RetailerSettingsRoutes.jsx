import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../../../hoc/auth';

const Navbar = lazy(() => import('../../../../Components/RetailerNav/RetailerNav'));
const SettingSidebar = lazy(() => import('./SettingSidebar'));
const RetailerSettings = lazy(() => import('../RetailerSettings'));
const BillingPage = lazy(() => import('../BillingPage'));
const StoreLocations = lazy(() => import('../StoreLocations'));


function RetailerSettingsRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <Navbar />
    <div style={{ width: '100%', display: 'flex'}}>
        <div style={{ width: '230px'}}>
            <SettingSidebar />
        </div>
        <div style={{ width: '1130px', background: "#f7f3f6"}}>
    <Switch>
          <Route exact path="/re-settings" component={Auth(RetailerSettings, true)} />
          <Route exact path="/manage-account" component={Auth(BillingPage, true)} />
          <Route exact path="/store-locations" component={Auth(StoreLocations, true)} />
    </Switch>
    </div>
    </div>
    </Router>
  </Suspense>
  )
}

export default RetailerSettingsRoutes