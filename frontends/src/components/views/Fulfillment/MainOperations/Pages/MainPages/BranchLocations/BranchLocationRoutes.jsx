import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../../../../../../hoc/auth';

import ScrollToTop from '../../../../../../assets/ScrollToTop';
import RetailerNav from '../../../../Components/RetailerNav/RetailerNav';

import Windhoek from './WindhoekLocation'
import Walvis from './WalvisLocation'
import Swakopmund from './SwakopmundLocation'
import Oshakati from './OshakatiLocation'
import Okahandja from './OkahandjaLocation'
import Grootfontein from './GrootfonteinLocation'
import Rehoboth from './RehobothLocation'
import Gobabis from './GobabisLocation'
import KatimaMulilo from './KatimaMuliloLocation'
import Rundu from './RunduLocation'
import Ongwediva from './GrootfonteinLocation'
import Otjiwarongo from './RehobothLocation'
import Tsumeb from './TsumebLocation'
import BranchSidebar from '../Sections/BranchSidebar';

function BranchLocationRoutes() {
  return (
    <Router>
    <RetailerNav />
    <ScrollToTop />
    <div style={{ width: '100%', display: 'flex'}}>
        <div style={{ width: '210px'}}>
           <BranchSidebar /> 
        </div>
        <div style={{ width: '1130px', padding: '10px', background: "#fff", zIndex: '2'}}>
            <Switch>
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
        </div>
    </div>
    {/* <Switch>
      <Route exact path="/windhoek-branch" component={Auth(Windhoek, true)} />
      <Route exact path="/walvis-bay-branch" component={Auth(Walvis, true)} />
      <Route exact path="/swakopmund-branch" component={Auth(Swakopmund, true)} />
      <Route exact path="/oshakati-branch" component={Auth(Oshakati, true)} />
      <Route exact path="/okahandja-branch" component={Auth(Okahandja, true)} />
      <Route exact path="/grootfontein-branch" component={Auth(Grootfontein, true)} />
      <Route exact path="/rehoboth-branch" component={Auth(Rehoboth, true)} />
      <Route exact path="/gobabis--branch" component={Auth(Gobabis, true)} />
      <Route exact path="/katima-mulilo-branch" component={Auth(KatimaMulilo, true)} />
      <Route exact path="/rundu-branch" component={Auth(Rundu, true)} />
      <Route exact path="/ongwediva-branch" component={Auth(Ongwediva, true)} />
      <Route exact path="/otjiwarongo-branch" component={Auth(Otjiwarongo, true)} />
      <Route exact path="/tsumeb-branch" component={Auth(Tsumeb, true)} />
   
    </Switch> */}
  </Router>
  )
}

export default BranchLocationRoutes