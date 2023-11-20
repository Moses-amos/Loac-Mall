import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../hoc/auth';
import ScrollToTop from '../../../assets/ScrollToTop';


const MobileNav = lazy(() => import('../00Components/Navbar/MobileNav'));
const MainNavbar = lazy(() => import('../00Components/Navbar/MainNavbar'));
const NavMenu = lazy(() => import('../00Components/NavMenu/NavMenu'));

const BluetoothSpeakersPage = lazy(() => import('./BluetoothSpeakersPage'));
const IPhonesPage = lazy(() => import('./IPhonesPage'));
const LivingRoomPage = lazy(() => import('./LivingRoomPage'));
const KitchenAppliancesPage = lazy(() => import('./KitchenAppliancesPage'));
const HomeDecorePage = lazy(() => import('./HomeDecorePage'));
const SpecialDealsPage = lazy(() => import('./SpecialDealsPage'));

const Footer = lazy(() => import('../00Components/Footer/Footer'));

function NavCategoryRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
        <ScrollToTop />
        <MobileNav />
        <MainNavbar />
        <NavMenu />
        <Switch> 
        <Route exact path="/portable-speakers" component={Auth(BluetoothSpeakersPage, null)} />
        <Route exact path="/iPhones" component={Auth(IPhonesPage, null)} />
        <Route exact path="/living-room" component={Auth(LivingRoomPage, null)} />
        <Route exact path="/kitchen-appliances" component={Auth(KitchenAppliancesPage, null)} />
        <Route exact path="/home-decore" component={Auth(HomeDecorePage, null)} />
        <Route exact path="/special-deals" component={Auth(SpecialDealsPage, null)} />

        </Switch>
        <Footer />
    </Router>
    </Suspense>
  )
}

export default NavCategoryRoutes