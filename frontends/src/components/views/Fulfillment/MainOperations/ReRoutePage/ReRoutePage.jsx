import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function ReRoutePage(props) {


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

if (UserData.operateLocation === "User"){
    props.history.push("/")
    refreshPage()
    } else if (UserData.operateLocation === "Admin"){
    props.history.push(`/0/${UserData._id}`)
    refreshPage()
    } else if (UserData.operateLocation === "Branch"){
    props.history.push("/branch")
    refreshPage()
    }

return (
<div>
    
</div>
)
}

export default ReRoutePage