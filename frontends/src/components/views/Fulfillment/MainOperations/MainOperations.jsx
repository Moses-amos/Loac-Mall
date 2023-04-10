import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';

import ScrollToTop from '../../../assets/ScrollToTop';
import RetailerNav from '../Components/RetailerNav/RetailerNav';
import FulfilmentBranches from './Pages/MainPages/FulfilmentBranches';
import RetailerOverview from './Pages/MainPages/RetailerOverview';

import EditProduct from './EditProduct/EditProduct';
import ProductsUpload from './UploadProducts/ProductsUpload'
import RetailerSettings from './Pages/MainPages/RetailerSettings';
import StoreLocations from './Pages/MainPages/StoreLocations';
 
function MainOperations() {
return (
<Router>
  <RetailerNav />
  <ScrollToTop />
  <Switch>
    <Route exact path="/0/:userId" component={Auth(RetailerOverview, true)} />
    <Route exact path="/fulfilments" component={Auth(FulfilmentBranches, true)} />
    <Route exact path="/re-settings" component={Auth(RetailerSettings, true)} />
    <Route exact path="/edit/product/:productId" component={Auth(EditProduct, true)} />
    <Route exact path="/store-locations" component={Auth(StoreLocations, true)} />
    <Route exact path="/item/upload" component={Auth(ProductsUpload, true)} />
  </Switch>
</Router>
)
}

export default MainOperations