import React, { useEffect, useState } from 'react'
import RetailerSidebar from './Sections/RetailerSidebar';
import Axios from 'axios';
import "./retailerstyle.css"
import TextareaAutosize from 'react-textarea-autosize';


function RetailerNotifications() {

const [Notification, setNotification] = useState("")
const [UserData, setUserData] = useState([])
const [addNotification, setaddNotification] = useState(false)

const showAdd = () => setaddNotification(!addNotification)

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


const NotificationSubmit = () => {
const variables = {
notifications: Notification
}

Axios.post("/api/users/updateUsers", variables)
.then(response => {
if(response.data.success) {
console.log(response.data)
}
})
}

const onNotification = (event) => {
setNotification(event.currentTarget.value)
}

return (
<div style={{ width: '100%', display: 'flex'}}>
    <RetailerSidebar />
    <div style={{ width: '100%', display: 'block', padding: '20px 80px'}}>
        <div style={{ width: '100%', paddingBottom: '20px', display: 'flex', height: '100px', border: '1px solid red'}}>
            <div style={{ width: '60%', padding: '10px 0px'}}>
                <h2>Notifications</h2>
            </div>
            <div style={{ width: '40%', paddingTop: '40px', display: 'bloxk'}}>
                <span onClick={showAdd}>Add Notification</span>
            </div>
        </div>
        <div className={addNotification ? "AddNotify-show" : "AddNotify-hide" }>
            <div style={{ width: '100%', height: '30px', marginBottom: '10px'}}>
                <span onClick={showAdd} style={{ float: 'right'}}>X</span>
            </div>
            <div style={{ width: '100%', height: '200px'}}>
                <TextareaAutosize value={Notification} onChange={onNotification} minRows={9}
                    style={{ width: '100%', borderRadius: '10px'}} />
            </div>
            <div style={{ width: '100%', padding: '20px 30px'}}>
                <button style={{ float: 'right', width: '100px'}} onClick={() => { refreshPage(); NotificationSubmit() }}>Send</button>
            </div>
        </div>
        <div style={{ width: '100%', padding: '25px 50px', display: 'block'}}>
            <div
                style={{ width: '100%', border: '1px solid red', marginBottom: '20px', padding: '15px', height: '150px'}}>
                <p style={{ fontSize: '20px'}}>{UserData.notifications}</p>
            </div>
        </div>
    </div>
</div>
)
}

export default RetailerNotifications