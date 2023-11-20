import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../hoc/auth'
import 'react-multi-carousel/lib/styles.css';

// General Routes
import MRoutes from './views/MRoutes';
import MainRoutes from './views/MainRoutes';

// Client Routes
import ClientPages from './views/Client/ClientPages';
import ClientOtherPages from './views/Client/ClientOtherPages';

// Fulfillment Routes
import Fulfillment from './views/Fulfillment/Fulfillment.jsx';

// Authentic Route Imports
import InvestorRoutes from './views/Admin/InvestorRoutes';
import InvestorAppend from './views/Admin/InvestorAppend';

// Main Routes
import RetailerSettingsRoutes from './views/Fulfillment/MainOperations/Pages/MainPages/Settings/RetailerSettingsRoutes';
import MainOperations from './views/Fulfillment/MainOperations/MainOperations';
import BranchLocationRoutes from './views/Fulfillment/MainOperations/Pages/MainPages/BranchLocationRoutes';
// import OverViewRoute from './views/Fulfillment/MainOperations/Pages/MainPages/OverViewRoute';

// Ungrouped Routes
import CartRoute from './views/Main/CartPage/CartRoute';
import LandingpageRoutes from './views/Fulfillment/MainOperations/LandingpageRoutes';
import SellerAccountRoutes from './views/Main/00Components/SellerAccountPlans/SellerAccountRoutes.jsx'
import ClickedAccountRoutes from './views/Main/00Components/SellerAccountPlans/ClickedAccountRoutes';

//Authentication
import LoginPage from './views/Authentication/LoginPage/LoginPage';
import RegisterPage from './views/Authentication/RegisterPage/RegisterPage.jsx'
import AuthenticationRoutes from './views/Authentication/AuthenticationRoutes';

import ClickedProductRoute from './views/Main/ClickedDetails/ClickedProductRoute';
import NavCategoryRoutes from './views/Main/NavCategories/NavCategoryRoutes';
import ComputersRoutes from './views/Main/Electronics/Computers/ComputersRoutes';
import TvTheaterRoutes from './views/Main/Electronics/TVTheater/TvTheaterRoutes';
import HeadphonesRoutes from './views/Main/Electronics/Headphones/HeadphonesRoutes';
import CameraDevicesRoutes from './views/Main/Electronics/CameraDevices/CameraDevicesRoutes';
import WearableTechnologyRoutes from './views/Main/Electronics/WearbleTechnology/WearableTechnologyRoutes';
import GameConsoleRoutes from './views/Main/Electronics/GameConsoles/GameConsoleRoutes';
// const CartRoute = lazy(() => import('./views/Main/CartPage/CartRoute'));
import ShoesRoutes from './views/Main/Clothing/Shoes/ShoesRoutes';
import LivingRoomRoutes from './views/Main/Furniture/LivingRoom/LivingRoomRoutes'
import DecoreRoutes from './views/Main/Furniture/Decore/DecoreRoutes'
import MissingPage from './views/Main/MissingPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
    return (
      <Suspense fallback={(<div></div>)}>
      <Router>
  <div>
    <Switch>
    <Route exact path="/" component={MainRoutes} />
    {/* <Route exact path="*" component={MissingPage} /> */}

      <Route exact path="/account-plans" component={SellerAccountRoutes} />
      <Route exact path="/free-account" component={ClickedAccountRoutes} />
      <Route exact path="/retailer-criteria" component={SellerAccountRoutes} />
      <Route exact path="/verified-account" component={ClickedAccountRoutes} />

      <Route exact path="/about-us" component={MainRoutes} />
      <Route exact path="/product/:productId" component={ClickedProductRoute} />

      <Route exact path="/login" component={Auth(LoginPage, null)} />
      <Route exact path="/register" component={Auth(RegisterPage, null)} />
        
      <Route exact path="/reroute" component={AuthenticationRoutes} />
      <Route exact path="/branch-location" component={AuthenticationRoutes} />
      <Route exact path="/confirm" component={AuthenticationRoutes} />
      <Route exact path="/logged" component={AuthenticationRoutes} />
      <Route exact path="/0/admin" component={AuthenticationRoutes} />
      
      <Route exact path="/user/cart" component={CartRoute} />

      {/* Retailer LandingPage */}
      <Route exact path="/home/:userId" component={LandingpageRoutes} />

      {/* Investor Routes */}
      <Route exact path="/investor/Roger" component={InvestorRoutes} />
      <Route exact path="/investor/Betty" component={InvestorRoutes} />
      <Route exact path="/investor/Dennis" component={InvestorRoutes} />
      <Route exact path="/investor/German" component={InvestorRoutes} />

      {/* Investor Roles */}
      <Route exact path="/confirm/Roger" component={InvestorAppend} />
      <Route exact path="/confirm/Betty" component={InvestorAppend} />
      <Route exact path="/confirm/Dennis" component={InvestorAppend} />
      <Route exact path="/confirm/German" component={InvestorAppend} />

      {/* Nav Menu Categories */}
      <Route exact path="/portable-speakers" component={NavCategoryRoutes} />
      <Route exact path="/iPhones" component={NavCategoryRoutes} />
      <Route exact path="/living-room" component={NavCategoryRoutes} />
      <Route exact path="/kitchen-appliances" component={NavCategoryRoutes} />
      <Route exact path="/home-decore" component={NavCategoryRoutes} />
      <Route exact path="/special-deals" component={NavCategoryRoutes} />

      {/*Main */}
      <Route exact path="/desktops" component={ComputersRoutes} />
      <Route exact path="/laptops" component={ComputersRoutes} />
      <Route exact path="/specify-pc" component={ComputersRoutes} />
      <Route exact path="/monitors" component={ComputersRoutes} />
      <Route exact path="/tvs" component={TvTheaterRoutes} />
      <Route exact path="/media-devices" component={TvTheaterRoutes} />
      <Route exact path="/earphones-audio" component={HeadphonesRoutes} />
      <Route exact path="/cameras" component={CameraDevicesRoutes} />
      <Route exact path="/watches" component={WearableTechnologyRoutes} />
      <Route exact path="/popular-watches" component={WearableTechnologyRoutes} />
      <Route exact path="/luxury-watches" component={WearableTechnologyRoutes} />
      <Route exact path="/womens-watches" component={WearableTechnologyRoutes} />
      <Route exact path="/smart-watches" component={WearableTechnologyRoutes} />

      <Route exact path="/playStation-consoles" component={GameConsoleRoutes} />
      <Route exact path="/xbox-consoles" component={GameConsoleRoutes} />
      <Route exact path="/sneakers" component={ShoesRoutes} />
      <Route exact path="/sneakers-collections" component={ShoesRoutes} />
      <Route exact path="/explore-sneakers" component={ShoesRoutes} />
      <Route exact path="/soccer-cleats" component={ShoesRoutes} />

      <Route exact path="/room-chairs" component={LivingRoomRoutes} />

      <Route exact path="/mirrors" component={DecoreRoutes} />
      <Route exact path="/wall-art" component={DecoreRoutes} />
      <Route exact path="/clocks" component={DecoreRoutes} />


      {/* <Route exact path="/demo-build" component={MRoutes} /> */}

      {/* Client */}
      <Route exact path="/overview" component={ClientPages} />
      <Route exact path="/wishlist" component={ClientPages} /> 
      <Route exact path="/request-made" component={ClientPages} />
      <Route exact path="/0settings" component={ClientPages} />

      {/* <Route exact path="/performance-tips" component={ClientPages} /> */}
      {/* <Route exact path="/notifications" component={ClientPages} /> */}

      <Route exact path="/pcbuild" component={ClientOtherPages} />
      <Route exact path="/0demo-build" component={ClientOtherPages} />

      {/* Branches Fulfillment */}
      <Route exact path="/branch" component={Fulfillment} />
      {/* <Route exact path="/chat" component={Fulfillment} /> */}



      {/* Main Operations */}
      <Route exact path="/0/:userId" component={BranchLocationRoutes} />
      <Route exact path="/request/:userId" component={BranchLocationRoutes} />
      <Route exact path="/activity" component={BranchLocationRoutes} />
      <Route exact path="/brochure-deals" component={BranchLocationRoutes} />
      <Route exact path="/item/upload" component={BranchLocationRoutes} />
      <Route exact path="/edit/product/:productId" component={MainOperations} />
      
      <Route exact path="/re-settings" component={RetailerSettingsRoutes} />
      <Route exact path="/manage-account" component={RetailerSettingsRoutes} />   
      <Route exact path="/store-locations" component={RetailerSettingsRoutes} />   

      <Route exact path="/windhoek-branch" component={BranchLocationRoutes} />
      <Route exact path="/walvis-bay-branch" component={BranchLocationRoutes} />
      <Route exact path="/swakopmund-branch" component={BranchLocationRoutes} />
      <Route exact path="/oshakati-branch" component={BranchLocationRoutes} />
      <Route exact path="/okahandja-branch" component={BranchLocationRoutes} />
      <Route exact path="/grootfontein-branch" component={BranchLocationRoutes} />
      <Route exact path="/rehoboth-branch" component={BranchLocationRoutes} />
      <Route exact path="/gobabis-branch" component={BranchLocationRoutes} />
      <Route exact path="/katima-mulilo-branch" component={BranchLocationRoutes} />
      <Route exact path="/rundu-branch" component={BranchLocationRoutes} />
      <Route exact path="/ongwediva-branch" component={BranchLocationRoutes} />
      <Route exact path="/otjiwarongo-branch" component={BranchLocationRoutes} />
      <Route exact path="/tsumeb-branch" component={BranchLocationRoutes} />

      <Route exact path="*" component={Auth(MissingPage, null)} />

    </Switch>
  </div>
  </Router>
    </Suspense>
  );
}
export default App;