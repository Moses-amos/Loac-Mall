import React, { Suspense, lazy }  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';

const RetailerNav = lazy(() => import('../Components/RetailerNav/RetailerNav'));
const EditProduct = lazy(() => import('./EditProduct/EditProduct'));

function MainOperations() {
return (
  <Suspense fallback={(<div></div>)}>
<Router>
  <RetailerNav />
  <ScrollToTop />
  <Switch>
    <Route exact path="/edit/product/:productId" component={Auth(EditProduct, true)} />
  </Switch>
</Router>
</Suspense>
)
}

export default MainOperations