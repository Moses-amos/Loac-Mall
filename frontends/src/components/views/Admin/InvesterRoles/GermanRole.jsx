import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function GermanRole(props) {

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
                operateLocation: "German",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                refreshPage()
            }
            })
            
            }, [])

      if (UserData.operateLocation === "German"){
        props.history.push("/investor/German")
        refreshPage()
        }

  return (
    <div>GermanRole</div>
  )
}

export default GermanRole