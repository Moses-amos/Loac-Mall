import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function DennisRole(props) {

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
                operateLocation: "Dennis",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                refreshPage()
            }
            })
            
            }, [])

      if (UserData.operateLocation === "Dennis"){
        props.history.push("/investor/Dennis")
        refreshPage()
        }

  return (
    <div>DennisRole</div>
  )
}

export default DennisRole