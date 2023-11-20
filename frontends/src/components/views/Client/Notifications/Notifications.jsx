import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import NotificationImage from './NotificationImage'

import './notifications.css'

function Notifications() {

const [Notifications, setNotifications] = useState([])

useEffect(() => {

Axios.post('/api/notification/getNotifications')
.then(response => {
if (response.data.success) {
setNotifications(response.data.notification);
}
})

}, [])

const RenderNotifications = Notifications.map((notification, index) => {

return(
<div key={index} className='Notification_listed'>
  <div className='Notification-title_section'>
    <span className='Notification-title_span'>{notification.title}</span>
  </div>
  <div className='Notification_listed-mid_section'>
    <div className='Notification_images'>
      <NotificationImage images={notification.images} />
    </div>
    <div className='Notification_info'>
      <div className='Notification_info_span'>
        {notification.description}
      </div>
      <div className='Notification_info_span'>
        {notification.subDescription}
      </div>
    </div>
    <div>
    </div>
  </div>
</div>
)
})

return (
<div className='Notifications-container'>
<div style={{ width: '100%', height: '70px', borderBottom: '3px solid #e7e7e7', padding: '15px 20px 5px 20px', borderLeft: '2px solid #e7e7e7'}}>
    <span style={{ fontWeight: 'bolder', fontSize: '32px', color: '#1380e7'}}>Notifications</span>
  </div>

  <div className='Notifications_listing'>
    {RenderNotifications}
  </div>

</div>
)
}

export default Notifications