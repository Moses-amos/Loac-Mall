import React, { useState, useEffect} from 'react'
import './sellerplans.css'
import Axios from 'axios'
import { SpaceBarRounded } from '@material-ui/icons';

function SellerPlans(props) {

    function refreshPage() {
        window.location.reload(false);
      }

    const [User, setUser] = useState([])

    useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUser(response.data.doc);
            }
        })
        
        }, [])

        // const FreeAccountSelect = () => {
        //     const variables = {
        //         accountTier: "Free",
        //       }
            
        //       Axios.post("/api/users/setRole", variables)
        //     .then(response => {
        //     if(response.data.success) {
        //         props.history.push("/free-account")
        //         refreshPage()
        //     }
        //     })
        // }

        const VerifiedAccountSelect = () => {
            const variables = {
                accountTier: "Verified",
              }
            
              Axios.post("/api/users/setRole", variables)
            .then(response => {
            if(response.data.success) {
                props.history.push("/free-account")
            }
            })
        }

  return (
    <>
    <div className='Plans_container-wrapper'>
    {/* <div className='Seller_Account_box'>
            <span className='Seller_Account_plans_text'>Become a Seller on loacmall</span>
        </div> */}
        <div className='Plans_container'>
            <div className='Plans_box'>
                {/* <div className='Plans_Header_box'>
                    <span className='Plans_Header_span'>Seller Plans</span>
                </div> */}
                <div className='Plans_listed_box'>

                    <div className='Plan_offered_box'>
                        <div className='Plan_top_box'>
                            <div className='Plan_top_box_header_box'>
                                <span className='Plan_top_header'>Free Plan</span>
                            </div>
                            
                        </div>
                        <div className='Plan_include_box'>
                            <div className='Plan_include_text_box'>
                            <div>
                                <span className='Plan_include_text'>4 Items Upload Limit</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>Get own Store Page</span>
                               </div>
                               {/* <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>No Online Payments</span>
                               </div> */}
                               <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>Verification not required</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>Name and Contact required</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>2 Clicks to open account</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>Limited features</span>
                               </div>

                            </div>
                            
                        </div>

                        {User._id === undefined ?
                        <div className='Plan_choice_box'>
                            <a href='/login' style={{ width: '100%', height: '35px'}}>
                                <button className='Plan_choice_button'>Try Free</button>
                            </a>
                        </div>
                        :
                        <div className='Plan_choice_box'>
                            <button 
                            onClick={() => {VerifiedAccountSelect()}}
                             className='Plan_choice_button'>Try Free</button>
                        </div>
                        }

                        {User.accountTier === "Verified" ?
                        <div className='Active_subscription_Free'>
                          <div className='Active_subscription_Free_box'>Active</div>
                        </div>
                        :
                        <></>
                        }
                        
                    </div>

                    <div className='Plan_offered_box'>
                        <div className='Plan_top_box'>
                        <div className='Plan_top_box_header_box'>
                                <span className='Plan_top_header'>Verified Plan</span>
                            </div>
                        </div>
                        <div className='Plan_include_box'>
                            <div className='Plan_include_text_box'>
                            <div>
                                <span className='Plan_include_text'>For Major retail stores</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Unlimited Items Upload</span>
                               </div>
                               {/* <div style={{marginTop: '4px'}}>
                               <span className='Plan_include_text'>Get own Store Page</span>
                               </div> */}
                               <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Get verification status</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Display Logo on Items</span>
                               </div>
                               {/* <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Promotion of Brochure</span>
                               </div>
                               <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Recieve Online Payments</span>
                               </div> */}
                               <div style={{marginTop: '4px'}}>
                                <span className='Plan_include_text'>Multiple fulfilment accounts</span>
                               </div>
                               
                            </div>
                        </div>
                        <div className='Plan_price_verify_box'>
                                <div className='Verify_plan_price'>
                                    <span className='Verify_plan_currency'>N$</span><span className='Verify_plan_amount'>200 /month</span>
                                </div>
                                <div className='Verify_benefit_box'>
                                    <span className='Verify_benefit_text'>First Month is FREE</span>
                                </div>
                            </div>

                        {/* {User._id === undefined ? */}
                            <div className='Plan_choice_box'>
                            <a href='/retailer-criteria' style={{ width: '100%', height: '35px'}}>
                            <span className='Plan_choice_paid_button'>View</span>
                            </a>
                        </div>
                        {/* // :
                        // <div className='Plan_choice_box'>
                        //     <span onClick={() => {VerifiedAccountSelect()}} style={{ width: '100%', height: '35px'}}>
                        //     <button className='Plan_choice_paid_button'>View</button>
                        //     </span>
                        // </div>
                            
                        //  */}

                        {/* {User.accountTier === "Verified" ?
                        <div className='Active_subscription_Verify'>
                          <div className='Active_subscription_Verify_box'>Active</div>
                        </div>
                        :
                        <>
                        </>
                        } */}
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SellerPlans