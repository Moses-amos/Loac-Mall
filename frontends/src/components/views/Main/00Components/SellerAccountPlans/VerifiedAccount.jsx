import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './sellerplans.css'

function VerifiedAccount(props) {

    const [User, setUser] = useState([])

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUser(response.data.doc);
            }
        })
        
        }, [])

        const ConfirmSubmit = () => {
            const variables = {
            operateLocation: "Admin"
            }
            
            Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
            }
            })
            }

        const VerifiedAccountSelect = () => {
            const variables = {
                accountTier: "Verified",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                props.history.push(`/0/${User._id}`)
                refreshPage()
            }
            })
        }

  return (
    <div className='Free_Account_box_wrapper'>
        <div className='Plans_container'>
            <div className='Account_important_notice_box'>
            <div className='Account_important_open_wrapper'>
            <div className='Free_Account_Header_box'>
                    <span className='Free_Account_Header_span'>Verified Account</span>
                </div>
                <div className='Free_Account_Message_box'>
                <div className='Free_account_conditions_box'>
                            <div className='Plan_include_text_box'>
                               <div>
                                <span className='Free_account_plan_text'>The Account is not ready to be operated by Mobile Phone</span>
                               </div>
                               <div>
                                <span className='Free_account_plan_text'>It is only accessible on Desktop, Laptop and Tablet Screen Sizes</span>
                               </div>
                            </div>
                        </div>
                        <div className='Compatible_size_continue'>
                            <div className='Continue_to_page'>
                                <a 
                                // href={`/0/${User._id}`}
                                 style={{ width: '150px', height: '40px'}}>
                                    <button onClick={() => {ConfirmSubmit(); VerifiedAccountSelect()}}
                                     className='Continue_to_account_button'>Continue</button>
                                </a>
                            </div>
                            <div className='Mobile_size_page'>
                            <a href='/' style={{ width: '150px', height: '40px'}}>
                                    <button
                                     className='Continue_to_account_button'>Back To Main</button>
                                </a>

                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default VerifiedAccount