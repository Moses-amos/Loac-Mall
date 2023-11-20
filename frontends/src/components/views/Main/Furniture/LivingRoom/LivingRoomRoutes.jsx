import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';
import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));

const RoomChairs = lazy(() => import('./RoomChairs'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

function LivingRoomRoutes() {
 
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <Navbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/room-chairs" component={Auth(RoomChairs, null)} />
        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default LivingRoomRoutes