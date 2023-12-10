import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import './investorstyle.css'

function StatPages(props) {

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



  return (
    <div className='Investor_Container_wrapper'>
    <div className='Investor_Container'>

  <div className='Investor_Statistics_Container'>
 
      <div className='Total_Users_Box'> 
      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Total Users</span>
        </div>
        <div className='Total_Site_User_Count'>
          {AllUsers.length}
        </div>
        </div>
      </div>

      <div className='Total_Users'>
        <div>
          <div className='Total_Site_User'> 
          <span className='Total_Site_User_span'>Normal Users</span>
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
          <span className='Total_Site_User_span'>Retailer Branches</span>
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
    </div>
  )
}

export default StatPages