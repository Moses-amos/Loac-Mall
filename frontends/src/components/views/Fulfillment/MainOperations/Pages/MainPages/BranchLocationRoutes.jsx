import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../../hoc/auth';

import ScrollToTop from '../../../../../assets/ScrollToTop';

const Navbar = lazy(() => import('../../../Components/RetailerNav/RetailerNav'));

const RetailerOverview = lazy(() => import('./RetailerOverview'));
const RequestMade = lazy(() => import('./BranchLocations/RequestMade.jsx'));

const Fulfillment = lazy(() => import('./FulfilmentBranches.jsx'));
const BrochureDeals = lazy(() => import('./BrochureDeals'));
const ProductsUpload = lazy(() => import('../../UploadProducts/ProductsUpload'));

const Windhoek = lazy(() => import('./BranchLocations/WindhoekLocation'));
const Walvis = lazy(() => import('./BranchLocations/WalvisLocation'));
const Swakopmund = lazy(() => import('./BranchLocations/SwakopmundLocation'));
const Oshakati = lazy(() => import('./BranchLocations/OshakatiLocation'));
const Okahandja = lazy(() => import('./BranchLocations/OkahandjaLocation'));
const Grootfontein = lazy(() => import('./BranchLocations/GrootfonteinLocation'));
const Rehoboth = lazy(() => import('./BranchLocations/RehobothLocation'));
const Gobabis = lazy(() => import('./BranchLocations/GobabisLocation'));
const KatimaMulilo = lazy(() => import('./BranchLocations/KatimaMuliloLocation'));
const Rundu = lazy(() => import('./BranchLocations/RunduLocation'));
const Ongwediva = lazy(() => import('./BranchLocations/OngwedivaLocation'));
const Otjiwarongo = lazy(() => import('./BranchLocations/OtjiwarongoLocation'));
const Tsumeb = lazy(() => import('./BranchLocations/TsumebLocation'));

function BranchLocationRoutes() {
  return (
    <Suspense fallback={(<div></div>)}>
    <Router>
    <Navbar />
    <ScrollToTop />
            <Switch>
            <Route exact path="/0/:userId" component={Auth(RetailerOverview, true)} />
            <Route exact path="/request/:userId" component={Auth(RequestMade, true)} />

            <Route exact path="/activity" component={Auth(Fulfillment, true)} />
            <Route exact path="/brochure-deals" component={Auth(BrochureDeals, true)} />
            <Route exact path="/item/upload" component={Auth(ProductsUpload, true)} />

            <Route exact path="/windhoek-branch" component={Auth(Windhoek, true)} />
            <Route exact path="/walvis-bay-branch" component={Auth(Walvis, true)} />
            <Route exact path="/swakopmund-branch" component={Auth(Swakopmund, true)} />
            <Route exact path="/oshakati-branch" component={Auth(Oshakati, true)} />
            <Route exact path="/okahandja-branch" component={Auth(Okahandja, true)} />
            <Route exact path="/grootfontein-branch" component={Auth(Grootfontein, true)} />
            <Route exact path="/rehoboth-branch" component={Auth(Rehoboth, true)} />
            <Route exact path="/gobabis-branch" component={Auth(Gobabis, true)} />
            <Route exact path="/katima-mulilo-branch" component={Auth(KatimaMulilo, true)} />
            <Route exact path="/rundu-branch" component={Auth(Rundu, true)} />
            <Route exact path="/ongwediva-branch" component={Auth(Ongwediva, true)} />
            <Route exact path="/otjiwarongo-branch" component={Auth(Otjiwarongo, true)} />
            <Route exact path="/tsumeb-branch" component={Auth(Tsumeb, true)} />
            </Switch>
  </Router>
  </Suspense>
  )
}

export default BranchLocationRoutes