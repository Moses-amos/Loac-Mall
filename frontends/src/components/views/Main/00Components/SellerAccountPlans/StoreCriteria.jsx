import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './sellerplans.css'
import '../pages.css'
import '../../../Fulfillment/MainOperations/Pages/MainPages/retailerpages.css'

function StoreCriteria(props) {

const [User, setUser] = useState([])
const [RequestShow, setRequestShow] = useState(false)

const ToggleVerification = () => setRequestShow(!RequestShow);

useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUser(response.data.doc);
        }
    })
    
    }, [])

    const FreeAccountSelect = () => {
        const variables = {
            accountTier: "Free",
          }
        
          Axios.post("/api/users/setRole", variables)
        .then(response => {
        if(response.data.success) {
            props.history.push("/free-account")
        }
        })
    }

  return (
    <div style={{ display: 'block', background: "#f7f3f6"}}>
      <div className='Criteria_container'>
      <div className='Criteria_page-banner'>
  <div className='Criteria_selectTabs_box'>
    <div className='Criteria_boxes'>
  <div className="Retailer_Criteria_header">
    <span>Verified Account</span>
  </div>
  <div className='Criteria_listed_details_first'>
    <span>For major retail stores</span>
  </div>
  <div className='Criteria_listed_details'>
    <span>Have at least 2 branch locations.</span>
  </div>
  <div className='Criteria_listed_details'>
    <span>A Namibian Registered/Affiliated Business.</span>
  </div>
  {/* <div className='Criteria_listed_details'>
    <span>The Brand should be well pronounced on Social Media.</span>
  </div> */}
  {/* <div className='Criteria_listed_details'>
    <span>Has a Returns Policy in effect.</span>
  </div> */}

  <div className='Criteria_verify_details_first'>
    <span>Includes:</span>
  </div>
  <div className='Verified_listed_details'>
    <span>Unlimited uploads</span>
  </div>
  <div className='Verified_listed_details'>
    <span>Get Verification status</span>
  </div>
  <div className='Verified_listed_details'>
    <span>Display logo on items</span>
  </div>

  <div className='Verified_listed_details'>
    <span>Landing Page</span>
  </div>

  <div className='Verified_listed_details'>
    <span> <b style={{ fontSize: '16px', color: '#333'}}>Base Plan: </b>  Starts at N$ 150/month from Jan/2024</span>
  </div>

  
  <div className='Verified_plan_First_Monthly_box'>
  <div className='Pricings_tabs_organise'>

  <div className="Pricing_options_currenty_boxes">
  <a href='https://airtable.com/appeyDtZq4bFictXf/shrQGXYLPvhGAp8DH' target='_blank' style={{ width: '100%', height: '35px'}}>
      <span className='Criteria_button_text'>Request Verification</span>
      </a>
    </div>

    </div>
  </div>

  {/* <div className='Verified_plan_Monthly_box'>
  <div className='Pricings_tabs_organise'>
    <div className="Pricing_options_boxes">
      <span>1 Month</span>
    </div>
    </div>
    <div className='Pricing_listed_details_numbers'>
      <div>
    <span className='Verify_plan_amount'><span className='Verify_plan_currency'>N$</span><span className='Verify_plan_amount'>200 ,</span><span className='Pricing_listed_details_span'> 200/month, </span></span>
      </div>
    </div>
  </div>

  <div className='Verified_plan_Monthly_box'>
  <div className='Pricings_tabs_organise'>
    <div className="Pricing_options_boxes">
      <span>1st Year</span>
    </div>
    </div>
    <div className='Pricing_listed_details_numbers'>
      <div>
    <span className='Verify_plan_amount'><span className='Verify_plan_currency'>N$</span><span className='Verify_plan_amount'>2,160 ,</span><span className='Pricing_listed_details_span'> 180/month, </span></span>
      </div>
    </div>
  </div> */}

  {/* <div className='First_month_free'> 
      <span className='All_plans_listed_details_span'>First Month Free on all plans</span>
  </div> */}


  {/* <div className='Verified_plan_Monthly_box'>
  <div className='Pricings_tabs_organise'>
    <div className="Pricing_options_boxes">
      <span>1st Year</span>
    </div>
    </div>
    <div className='Pricing_listed_details_numbers'>
    <span className='Verify_plan_amount'><span className='Verify_plan_currency'>N$</span><span className='Verify_plan_amount'>2,160 ,</span><span className='Pricing_listed_details_span'> 180/month</span></span>
    </div>
  </div> */}

  {/* <div className='Verified_plan_Monthly_box'>
  <div className='Pricings_tabs_organise'>
    </div>
  </div> */}
    </div>

    <div className='Criteria_image_right'>   
        
    <div>
      <img style={{ width: '100%',height: '400px', borderRadius: '15px' }} src='https://i.imgur.com/CmGO2ro.jpg'  />
    </div>
    <div className='Criteria_right_title_box'>
    <span>Management / Advertising Official of the Brand should Request, to be verified and granded access. </span>
  </div>   
    

      {/* <div className='WhatToDo_Box'>
        <span>TRY</span>
      </div>
      <div className='Criteria_listed_details_first'>
    <span>To get access to a Verified Account - a Management/Advertising Official  of the Brand should Connect on LinkedIn, to be verified and granded access. </span>
  </div>

  <div style={{ width: '100%', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className='Visit_image_box'>
           <div style={{ width: '150px',height: '130px', borderRadius: '15%',
            border: '1px solid #00BFFF', background: 'orange', overflow: 'hidden'}}>
           </div>
           <div style={{ width: '100%', paddingTop: '10px'}}>
           <div style={{ padding: '3px 0px 0px 0px'}}>
            <div>

            </div>
            <a href='https://www.linkedin.com/in/moses-gamaseb-357970265/' target='_blank' style={{ width: '100%', height: '35px'}}>
                   <button style={{ cursor: 'pointer',width: '150px', height: '35px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                     color: '#fff', fontSize: '17px', fontWeight: '500', background: 'royalblue',
                     borderRadius: '3px'}}>Visit</button>
                     </a>
               </div>
           </div>
              </div>
  </div>

  <div className='Criteria_listed_details_first'>
    <span>In the mean time open a <a href='/account-plans'>Free Account</a> with a gmail/other that is not affiliated with the brand, so you can have a view.</span>
  </div> */}
    </div>
  </div>

</div>

<div className='Why_join_box'>
  <div className='Why_join_title_box'>
    <div className='Why_join_title'>Why</div>
    <div className='Platform_text_box'>
      <span>The platform is to show where an item is available</span>
    </div>

    <div className='Platform_survey_text'>
    <a className='Platform_survey_text_mobile'>View Demo: On Laptop</a>
    <a href='/item/upload' target={'_blank'} className='Platform_survey_text_link'>View Demo</a> : <a href='https://airtable.com/appjhh4NJ0vW38rGA/shrOExu561nrFQx50'className='Platform_survey_text_mobile'>survey</a>
      <a href='https://airtable.com/appjhh4NJ0vW38rGA/shrOExu561nrFQx50'className='Platform_survey_text_link'>survey</a>
    </div>
  

</div>
  <div className="Why_join_right_box">
  <div>
      <img style={{ width: '100%',height: '110px', borderRadius: '15px' }} src='https://i.imgur.com/a3A7ho5.jpg'  />
    </div>
  </div>

</div>


<div className='Free_page_banner'>
  <div className='Criteria_selectTabs_box'>
    <div className='Free_account_tier'>
  <div className="Retailer_Criteria_header">
    <span>Free Account</span>
  </div>

  <div className='Criteria_listed_details_first'>
    <span>Individuals & Small Businesses</span>
  </div>

  <div className='Criteria_verify_details_first'>
    <span>Includes:</span>
  </div>
  <div className='Verified_listed_details'>
    <span>5 Items upload limit</span>
  </div>
  <div className='Verified_listed_details'>
    <span>Landing Page</span>
  </div>
  <div className='Verified_listed_details'>
    <span>Limited Access</span>
  </div>

  <div className='Verified_listed_details'>
    <span>Not Verified</span>
  </div>

  <div className='Verified_listed_details'>
    <span>Only name and contact required</span>
  </div>


  <div className='Verified_plan_First_Monthly_box'>
  <div className='Free_Pricings_tabs_organise'>

  {User._id === undefined ?
   <div className="Free_options_currenty_boxes">
   <a href='/login' style={{ width: '100%', height: '35px'}}>
       <div className='Criteria_button_text'>Free Account</div>
   </a>
     
   </div>
   :
   User.accountTier === "Verified" ?
   <div className="Active_options_currenty_boxes">
       <div 
        className='Criteria_button_text'>Account Active</div>     
   </div>
   :
   <div className="Free_options_currenty_boxes">
       <div 
        onClick={() => {FreeAccountSelect()}}
        className='Criteria_button_text'>Free Account</div>     
   </div>
  }

    </div>
  </div>


    </div>
    <div className='Criteria_image_right'>   
        <div style={{width: '100%'}}>
          <img style={{ width: '100%',height: '385px', borderRadius: '15px' }} src='https://i.imgur.com/n9fgfz4.jpg' />
        </div>
        
        </div>
  </div>

</div>

      </div>
    </div>
  )
}

export default StoreCriteria