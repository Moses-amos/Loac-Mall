import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function UserLogged(props) {

    const [UserData, setUserData] = useState([])


useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUserData(response.data.doc);
        }
    })
})

if (UserData === undefined){
    props.history.push("/login")
    }
    else {
    props.history.push("/pcbuild")
    }

return (
    <div>
    </div>

)
}



export default UserLogged