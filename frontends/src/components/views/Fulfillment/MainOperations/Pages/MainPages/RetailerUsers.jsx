import React, { useEffect, useState } from 'react'
import './royalstyle.css'
import Axios from 'axios';
import RetailerSidebar from './Sections/RetailerSidebar';

function RetailerUsers() {
const [BranchLocations, setBranchLocations] = useState([])


useEffect(() => {

Axios.post('/api/users/getUsers')
.then(response => {
if (response.data.success) {
setBranchLocations(response.data.users);
}
})
}, [])

const Branches = BranchLocations.map((branch, index) => {

if(branch.operateLocation !== "User" && branch.operateLocation !== "Admin" ) {
return (
<div key={index}
    className='Branch_Location-list'>
    <div>
        <span className='Branch_Location-list_span'>{branch.userLocation} Branch</span>
    </div>
</div>
)
}
})

// const deleteUser = (userId)=>{
//     function refreshPage() {
//     window.location.reload(false);
//     }
    
//     Axios.delete(`/api/users/deleteuser/${userId}`)
//     .then(result=>{
//     const newData = BranchLocations.filter(item=>{
//     return item._id !== result._id
//     })
//     setBranchLocations(newData)
//     refreshPage()
//     })
//     }

const UsersList = BranchLocations.map((user, index) => {
if(user.operateLocation === "User") {
return (
    <div key={index} style={{ width: '100%', height: '30px', marginBottom: '10px',fontWeight: 'bolder', color: '#656481', paddingLeft: '20px', border: '4px solid #03C04A'}}>
    <div style={{ width: '100%'}}>
        <span>{user._id}</span>
        {/* <button onClick={()=>deleteUser(user._id)}>Delete</button> */}
    </div>
</div>
)
}
})


return (
<div style={{ width: '100%', display: 'flex'}}>
    <RetailerSidebar />
    <div style={{ width: '100%', display: 'block', padding: '40px 100px'}}>
        {/* {Branches} */}
        <div style={{ width: '100%', display: 'block'}}>
            <div style={{ width: '100%', borderBottom: '2px solid #cccaca'}}>
                 <span className='Branch_Location-list_branches'>Royal Computers Branches</span>
                 <p style={{ padding: '10px 0px'}} className='Branch_Location-list_user_append'>Append Role : <span className='Branch_Location-append_link'>/royalcomputerslocation</span></p>
            </div>
            <div style={{ width: '100%', marginTop: '30px', display: 'flex'}}>
                <div style={{ width: '60%', display: 'block'}}>
                    {Branches}
                </div>
                <div style={{ width: '40%', display: 'block', padding: '20px 40px'}}>
                    <div style={{ width: '100%', padding: '10px 0px'}} className='Branch_Location-list_users'> All Users</div>
                    {UsersList}
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default RetailerUsers