import React, { Suspense, lazy }  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';
import ScrollToTop from '../../assets/ScrollToTop';
import MobileNav from '../Main/00Components/Navbar/MobileNav';

const Navbar = lazy(() => import('../Main/00Components/Navbar/Navbar'));

const Overview = lazy(() => import('./Overview/Overview'));
const TrackOrder = lazy(() => import('./TrackOrder/TrackOrder'));
const Wishlist = lazy(() => import('./Wishlist/Wishlist'));
const UserSettings = lazy(() => import('./DropdownPages/Settings/UserSettings'));
const Footer = lazy(() => import('../Main/00Components/Footer/Footer'));

function ClientPages() {
return (
    <Suspense fallback={(<div></div>)}>
<Router>
    <Navbar />
    <MobileNav />

    <ScrollToTop />
            <Switch>
                <Route exact path="/overview" component={Auth(Overview, true)} />
                <Route exact path="/wishlist" component={Auth(Wishlist, true)} />
                <Route exact path="/request-made" component={Auth(TrackOrder, true)} />
                <Route exact path="/0settings" component={Auth(UserSettings, true)} />
            </Switch>
            <Footer />
</Router>
</Suspense>
)
}

export default ClientPages