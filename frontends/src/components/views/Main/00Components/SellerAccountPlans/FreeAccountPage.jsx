import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './sellerplans.css'

function FreeAccountPage() {

    const [User, setUser] = useState([])

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

  return (
    <div className='Free_Account_box_wrapper'>
        <div className='Plans_container'>
            <div className='Account_important_notice_box'>
                <div className='Account_important_open_wrapper'>
                <div className='Free_Account_Header_box'>
                    <span className='Free_Account_Header_span'>Important Notice</span>
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
                                <a href={`/0/${User._id}`} style={{ width: '150px', height: '40px'}}>
                                    <button onClick={() => {ConfirmSubmit()}}
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

export default FreeAccountPage