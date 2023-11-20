import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function RogerRole(props) {
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

        useEffect(() => {

            const variables = {
                operateLocation: "Roger",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                refreshPage()
            }
            })
            
            }, [])

      if (UserData.operateLocation === "Roger"){
        props.history.push("/investor/Roger")
        refreshPage()
        }

  return (
    <div></div>
  )
}

export default RogerRole