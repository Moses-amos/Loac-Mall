import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../retailernav.css'

function RightMenu(props) {

  // const [toggleProfile, setToggleProfile] = useState(false);
  // const [dropdownColor, setdropdownColor] = useState(0)


  // const dropdownHover = (index) => {
  //   setdropdownColor(index)
  // }

  // const dropdownProfile = () => setToggleProfile(!toggleProfile);

  function refreshPage() {
    window.location.reload(false);
  }

  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
    <div className='Navbar-login_Signup_user' mode={props.mode}>
    <div className='Navbar-login_Signup_box'>
    <a style={{ width: '100%', height: '100%', display: 'flex',
         justifyContent: 'center', alignItems: 'center'}} className='Navbar-login_Signup_span'  href="/login">
      <span style={{ color: '#fff'}}>Login</span>
    </a>
    </div>

    <div className='Navbar-login_Signup_box'>
        <a style={{ width: '100%', height: '100%', display: 'flex',
         justifyContent: 'center', alignItems: 'center'}} className='Navbar-login_Signup_span' href="/register">
          <span style={{ color: '#fff'}}>Signup</span>
        </a>
    </div>

</div>
    )
  } else if ((user.userData && user.userData.isAuth)) {
    return (
        <div className='Navbar-selects-logout' mode={props.mode}>
          <div className='User-account-nav-branch'> 
          <div  className='Account-User-user'>
            <div onClick={() => { refreshPage(); logoutHandler() }} className='Account-span-user'>
              <div>
              <span className='Account-span_title'>Logout</span>
            </div>
            </div>
          </div>
          </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default withRouter(RightMenu);