import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth';
import ScrollToTop from '../../assets/ScrollToTop';

import Navbar from '../Main/00Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

import Overview from './Overview/Overview';
import TrackOrder from './TrackOrder/TrackOrder';
import Wishlist from './Wishlist/Wishlist';
import UserSettings from './DropdownPages/Settings/UserSettings'

function ClientPages() {
return (
<Router>
    <Navbar />
    <ScrollToTop />
    <div style={{ width: '100%', display: 'flex'}}>
        <div style={{ width: '220px'}}>
            <Sidebar />
        </div>
        <div style={{ width: '1130px'}}>
            <Switch>
                <Route exact path="/overview" component={Auth(Overview, true)} />
                <Route exact path="/wishlist" component={Auth(Wishlist, true)} />
                <Route exact path="/track-order" component={Auth(TrackOrder, true)} />
                <Route exact path="/0settings" component={Auth(UserSettings, true)} />
            </Switch>
        </div>
    </div>
</Router>
)
}

export default ClientPages