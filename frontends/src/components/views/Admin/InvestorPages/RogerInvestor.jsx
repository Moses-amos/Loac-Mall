import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import './investorstyle.css'
import BackgroundImage from '../../Main/Images/babyblue background.jpg'
import InvestorLogo from '../Components/ProfileImage/InvestorLogo'
import IconImage from '../Components/ProfileImage/IconImage';


function RogerInvestor(props) {

  const [User, setUser] = useState([])
  const [Image, setImage] = useState([])
  const [imageToggle, setimageToggle] = useState(1)
  const [AllUsers, setAllUsers] = useState([])
  const [BranchLocations, setBranchLocations] = useState([])
  const [NormalUsers, setNormalUsers] = useState([])
  const [Retailers, setRetailers] = useState([])

  const ShowImage = (index) => {
    setimageToggle(index);
  }

  useEffect(() => {

    Axios.post('/api/users/getUsers')
    .then(response => {
    if (response.data.success) {
      setAllUsers(response.data.users);
    }
    })

    Axios.post('/api/users/getNormalUsers')
    .then(response => {
    if (response.data.success) {
      setNormalUsers(response.data.users);
    }
    })

    Axios.post('/api/users/getRetailers')
    .then(response => {
    if (response.data.success) {
      setRetailers(response.data.users);
    }
    })

    Axios.post('/api/users/getBranches')
.then(response => {
if (response.data.success) {
setBranchLocations(response.data.users);
}
})

    }, [])

  useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUser(response.data.doc);
        }
    })
    
    }, [])

    const SaveDetails = () => {

      const variables = {
          profileImage: Image.length === 0 ? User.profileImage : Image
          }

          Axios.post("/api/users/setRole", variables)
              .then(response => {
              if(response.data.success) {
          }
      })
  }

    function refreshPage() {
      window.location.reload(false);
    }

    const updateImage = (newImage) => {
      setImage(newImage)
      }

  return (
    <div className='Investor_Container_wrapper'>
    <div className='Investor_Container'>
    <div className='Investor_Profile_Container'>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #c5cbd5'}}>
            <span className='Investor_Profile_span'>Investor Profile</span>
            </div>
           <div style={{ width: '100%', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <div className={imageToggle === 1 ? 'Default_Image_Profile' : 'Default_Image_Profile_hide'}>
           <div style={{ width: '150px',height: '110px', borderRadius: '50%',
            border: '1px solid #00BFFF', background: '#fff', overflow: 'hidden'}}>
             <InvestorLogo images={User.profileImage} />
           </div>
           <div style={{ width: '100%', paddingTop: '10px'}}>
           <div style={{ padding: '3px 0px 0px 0px'}}>
                   <button onClick={()=> { ShowImage(2)}} style={{ cursor: 'pointer',width: '150px', height: '25px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                     color: '#fff', fontSize: '15px', fontWeight: 'bold', background: 'orange',
                     borderRadius: '3px'}}>Update Image</button>
               </div>
           </div>
              </div>

        <div className={imageToggle === 2 ? 'Active_Image_Profile' : 'Default_Image_Profile_hide'}>
        <div style={{ width: '150px',height: '110px', borderRadius: '50%',
         border: '1px solid #00BFFF', background: '#fff', overflow: 'hidden'}}>
          <IconImage refreshFunction={updateImage} />
        </div>
        {Image && Image.length === undefined ?
        <></>
        :
        Image && Image.length === 0 ?
        <div style={{ width: '100%', paddingTop: '10px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {ShowImage(1)}} style={{ cursor: 'pointer',width: '150px', height: '25px', display: 'flex',
                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                  color: '#fff', fontSize: '15px', fontWeight: 'bold', background: 'orange',
                  borderRadius: '3px'}}>Cancel Update</button>
            </div>
        </div>
        :
        Image && Image.length === 1 ?
        <div style={{ width: '100%', paddingTop: '10px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} style={{ cursor: 'pointer',width: '150px', height: '25px', display: 'flex',
                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                  color: '#fff', fontSize: '15px', fontWeight: 'bold', background: 'orange',
                  borderRadius: '3px'}}>Save Image</button>
            </div>
        </div>
        :
        <></>
        }
           </div>
            
              </div>
              <div style={{ width: '100%',marginTop: '20px', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '17px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span className='Investor_Profile_Details_span'>Full Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '245px', height: '30px', fontSize: '14px', color: '#656481', outline: '2px solid orange',
             border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                Rogerio Nuwuseb
              </div>
        </div>
      </div>
      <div style={{ width: '100%',marginTop: '5px', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '17px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span className='Investor_Profile_Details_span'>Contact Mail:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '245px', height: '30px', fontSize: '14px', color: '#656481', outline: '2px solid orange',
             border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
               {User.email}
              </div>
        </div>
         </div>
         <div style={{ width: '100%',marginTop: '5px', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '17px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span className='Investor_Profile_Details_span'>Nationality:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '245px', height: '30px', fontSize: '14px', color: '#656481', outline: '2px solid orange',
             border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
               Namibian
              </div>
        </div>
          </div>
    </div>

  <div className='Investor_Statistics_Container'>
      <div className='Investor_Stats_Header'>
        <span className='Investor_Stats_Header_span'>Loac Mall Investor Overview</span>
      </div>
 
      <div className='Total_Users_Box'> 
      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Total Site User</span>
        </div>
        <div className='Total_Site_User_Count'>
          {AllUsers.length}
        </div>
        </div>
      </div>

      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Total Normal User</span>
        </div>
        <div className='Total_Site_User_Count'>
          {NormalUsers.length}
        </div>
        </div>
      </div>
      <div>

      </div>
      </div>

      <div className='Total_Users_Box'> 
      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Total Retailers</span>
        </div>
        <div className='Total_Site_User_Count'>
          {Retailers.length}
        </div>
        </div>
      </div>

      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Total Retailer Branches</span>
        </div>
        <div className='Total_Site_User_Count'>
          {BranchLocations.length}
        </div>
        </div>
      </div>

      <div>

      </div>
      </div>
  </div>
</div>

<div className='Background_investor'>
<img src={BackgroundImage} className='Background_Image_investor' />
</div>
    </div>
  )
}

export default RogerInvestor