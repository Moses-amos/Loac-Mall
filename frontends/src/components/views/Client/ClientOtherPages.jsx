import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../hoc/auth'
import ScrollToTop from '../../assets/ScrollToTop';

const Navbar = lazy(() => import('../Main/00Components/Navbar/Navbar'));
const BuildPc = lazy(() => import('./BuildPc/BuildPc'));

// import DemoBuild from './BuildPc/DemoBuild/DemoBuild';
// import UserSettings from './DropdownPages/Settings/UserSettings'

function ClientOtherPages() {
return (
    <Suspense fallback={(<div></div>)}>
<Router>
    <Navbar />
    <ScrollToTop />
    <Switch>
        <Route exact path="/pcbuild" component={Auth(BuildPc, null)} />
        {/* <Route exact path="/0demo-build" component={Auth(DemoBuild, true)} /> */}
        {/* <Route exact path="/0settings" component={Auth(UserSettings, true)} /> */}
    </Switch>
</Router>
</Suspense>
)
}

export default ClientOtherPages