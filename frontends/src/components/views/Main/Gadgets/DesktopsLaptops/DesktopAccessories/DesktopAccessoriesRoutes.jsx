import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import Navbar from '../../00Components/Navbar/Navbar'
import NavMenu from '../../00Components/NavMenu/NavMenu'
import ScrollToTop from '../../../../assets/ScrollToTop';
import Footer from '../../00Components/Footer/Footer';

function DesktopAccessoriesRoutes() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      {/* <Route exact path="/desktops-laptops" component={Auth(PowerTools, null)} /> */}
    </Switch>
    <Footer />
    </Router>
  )
}

export default DesktopAccessoriesRoutes