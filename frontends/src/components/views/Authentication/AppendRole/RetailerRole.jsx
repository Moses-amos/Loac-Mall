import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './appendStyle.css'

function RetailerRole(props) {

const [Confirm, setConfirm] = useState("Admin")
const [UserData, setUserData] = useState([])


function refreshPage() {
window.location.reload(false);
}

useEffect(() => {

Axios.get('/api/users/getUser')
.then(response => {
if (response.data.success) {
setUserData(response.data.doc);
}
})

}, [])


if (UserData.operateLocation === "Admin"){
props.history.push(`/0/${UserData._id}`)
refreshPage()
}


const ConfirmSubmit = () => {
const variables = {
operateLocation: Confirm
}

Axios.post("/api/users/setRole", variables)
.then(response => {
if(response.data.success) {
}
})
}

const onConfirm = (event) => {
setConfirm(event.currentTarget.value)
}

return (
<div className='Royal-confirm_container'>
    <div onChange={onConfirm} value={Confirm} 
    onClick={() => { refreshPage(); ConfirmSubmit() }}
        className='Royal-confirm_box'>
        <span className='Royal-confirm_span'>CONFIRM</span>
    </div>
</div>
)
}

export default RetailerRole