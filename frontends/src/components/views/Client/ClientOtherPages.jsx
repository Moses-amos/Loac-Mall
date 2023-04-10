import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth'
import ScrollToTop from '../../assets/ScrollToTop';

import Navbar from '../Main/00Components/Navbar/Navbar';
import BuildPc from './BuildPc/BuildPc';
// import DemoBuild from './BuildPc/DemoBuild/DemoBuild';
// import UserSettings from './DropdownPages/Settings/UserSettings'

function ClientOtherPages() {
return (
<Router>
    <Navbar />
    <ScrollToTop />
    <Switch>
        <Route exact path="/pcbuild" component={Auth(BuildPc, true)} />
        {/* <Route exact path="/0demo-build" component={Auth(DemoBuild, true)} /> */}
        {/* <Route exact path="/0settings" component={Auth(UserSettings, true)} /> */}
    </Switch>
</Router>
)
}

export default ClientOtherPages