import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../hoc/auth';

import ScrollToTop from '../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../00Components/Navbar/Navbar'));
const NavMenu = lazy(() => import('../../00Components/NavMenu/NavMenu'));
const Footer = lazy(() => import('../../00Components/Footer/Footer'));

const Chainsaws = lazy(() => import('./Chainsaws'));
const Drills = lazy(() => import('./Drills'));
const ElectricPlaners = lazy(() => import('./ElectricPlaners'));
const ElectricSanders = lazy(() => import('./ElectricSanders'));
const Jigsaws = lazy(() => import('./Jigsaws'));
const NailGuns = lazy(() => import('./NailGuns'));
const PowerTools = lazy(() => import('./PowerTools'));

function PowerToolsRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <ScrollToTop />
    <Navbar />
    <NavMenu />
    <Switch>
      <Route exact path="/power-tools" component={Auth(PowerTools, null)} />
      <Route exact path="/electric-drills" component={Auth(Drills, null)} />
      <Route exact path="/electric-chainsaws" component={Auth(Chainsaws, null)} />
      <Route exact path="/electric-planers" component={Auth(ElectricPlaners, null)} />
      <Route exact path="/electric-sanders" component={Auth(ElectricSanders, null)} />
      <Route exact path="/jig-saws" component={Auth(Jigsaws, null)} />
      <Route exact path="/nail-guns" component={Auth(NailGuns, null)} />
    </Switch>
    <Footer />
    </Router>
    </Suspense>
  )
}

export default PowerToolsRoutes