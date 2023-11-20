import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const Earphones = lazy(() => import('./Earphones'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function HeadphonesRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/earphones-audio" component={Auth(Earphones, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default HeadphonesRoutes