import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function BettyRole(props) {

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
                operateLocation: "Betty",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                refreshPage()
            }
            })
            
            }, [])

      if (UserData.operateLocation === "Betty"){
        props.history.push("/investor/Betty")
        refreshPage()
        }

  return (
    <div>BettyRole</div>
  )
}

export default BettyRole