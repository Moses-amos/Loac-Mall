import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const CamerasPage = lazy(() => import('./CamerasPage'));

const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function CameraDevicesRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/cameras" component={Auth(CamerasPage, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default CameraDevicesRoutes