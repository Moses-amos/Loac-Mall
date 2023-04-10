import React, { useEffect, useState } from 'react'
import './retailerstyle.css'
import Axios from 'axios';
import Loading from './Sections/SearchBar/Loading';
import RetailerSidebar from './Sections/RetailerSidebar'

function RetailerPurchases(props) {
const [UserInfo, setUserInfo] = useState([])
// const [RetailerData, setRetailerData] = useState([])
const [IsLoading, setIsLoading] = useState(true)
const [UserData, setUserData] = useState([])

function refreshPage() {
  window.location.reload(false);
}

useEffect(() => {

  Axios.post('/api/users/getHistoryProducts')
  .then(response => {
      if (response.data.success) {
        setUserInfo(response.data.doc)
      }
  })

// Axios.get('/api/users/getUser')
// .then(response => {
// if (response.data.success) {
//   setRetailerData(response.data.doc)
// }
// })

}, [])

useEffect(() => {

  Axios.get('/api/users/getUser')
  .then(response => {
      if (response.data.success) {
          setUserData(response.data.doc);
      }
  })
  
  }, [])

useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  
})

if (UserData.operateLocation === "Branch"){
  props.history.push("/branch")
  refreshPage()
  } else if (UserData.operateLocation === "User") {
    props.history.push("/")
    refreshPage()
  }

const UserHistory = UserInfo.map((user, index) => {
let history = user.history;

return (
  <>
  {history.map(his => (
    <>
  {his.orderDelivered === true?
  <div className='purchased-Item'>
    <div className='purchased-Details'>
      <div style={{ width: '100%', lineHeight: '1.3', overflow: 'hidden', fontSize: '15px', height: '71%'}}>
        <p className='purchased-Details_title_p'>{his.name}</p>
      </div>
      <div style={{ height: '29%', paddingTop: '10px', display: 'flex'}}>
      <div style={{ width: '62%'}}>
      {user.userLocation === undefined ?
        <></>
        :
        user.userLocation === "Swakop" ?
        <span className='purchased-Details_date_span'>Location: Swakopmund</span>
        :
        user.userLocation === "Walvis" ?
        <span className='purchased-Details_date_span'>Location: Walvis Bay</span>
        :
        user.userLocation === "KatimaMulilo" ?
        <span className='purchased-Details_date_span'>Location: Katima Mulilo</span>
        :
        <span className='purchased-Details_date_span'>Location: {user.userLocation}</span>
        }
        </div>
        <div style={{ width: '38%'}}>
        <span className='purchased-Details_date_span'>Price: ${his.price}</span>
        </div>
      </div>
    </div>
  </div>
    :
    <></>
    }
    </>
  ))
  }
  </>
)
})

return (
<div style={{ width: '100%', display: 'flex'}}>
  <RetailerSidebar />
  <div className='All-royal-purchases_box'>
  <div style={{ width: '100%',borderRadius: '10px', marginTop: '10px',border: '2px solid lightgray', display: 'flex', justifyContent: 'center'}}>
    <span style={{ fontWeight: '700', fontSize: '35px', color: '#1380e7'}}>Orders Delivered</span>
  </div>
  {UserInfo.length === undefined ?
  <></>
  :
  UserInfo.length === 0?
  <>
  {IsLoading === true ?
    <Loading />
    :
    <div style={{ paddingTop: '30px'}}>
    <div className='Overview_Demonstration'>
  <span className='Overview_Demonstration_Title'>Purchase Made At Store Example</span>
  </div>
  <div style={{ marginBottom: '20px'}}>
    <div>
        <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>- When a Order or Puchase made by a Customer is completed it will be shown here.</span>
    </div>
    <div>
        <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>- This is where all the Purchase History will be shown.</span>
    </div>
  </div>
  <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '5px'}}>
  <div className='purchased-Item'>
  <div className='purchased-Details'>
  <div style={{ width: '100%', lineHeight: '1.3', overflow: 'hidden', fontSize: '15px', height: '71%'}}>
  <p className='purchased-Details_title_p' style={{cursor: 'default'}}>This is were the Title of the product is shown.</p>
  </div>
  <div style={{ height: '29%', paddingTop: '10px', display: 'flex'}}>
  <div style={{ width: '62%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Location: Town/City</span>
  </div>
  <div style={{ width: '38%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Price: $ XXXXX</span>
  </div>
  </div>
  </div>
  </div>
  <div className='purchased-Item'>
  <div className='purchased-Details'>
  <div style={{ width: '100%', lineHeight: '1.3', overflow: 'hidden', fontSize: '15px', height: '71%'}}>
  <p className='purchased-Details_title_p' style={{cursor: 'default'}}>This is were the Title of the product is shown.</p>
  </div>
  <div style={{ height: '29%', paddingTop: '10px', display: 'flex'}}>
  <div style={{ width: '62%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Location: Town/City</span>
  </div>
  <div style={{ width: '38%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Price: $ XXXXX</span>
  </div>
  </div>
  </div>
  </div>
  <div className='purchased-Item'>
  <div className='purchased-Details'>
  <div style={{ width: '100%', lineHeight: '1.3', overflow: 'hidden', fontSize: '15px', height: '71%'}}>
  <p className='purchased-Details_title_p' style={{cursor: 'default'}}>This is were the Title of the product is shown.</p>
  </div>
  <div style={{ height: '29%', paddingTop: '10px', display: 'flex'}}>
  <div style={{ width: '62%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Location: Town/City</span>
  </div>
  <div style={{ width: '38%'}}>
  <span className='purchased-Details_date_span' style={{cursor: 'default'}}>Price: $ XXXXX</span>
  </div>
  </div>
  </div>
  </div>
  </div>
  
  </div>
}   
</>
  :
<></>
  }

  <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '30px'}}>
    {IsLoading === true ?
    <Loading />
    :
    <>
    {UserHistory}
    </>
    }
  </div>
  </div>
</div>
)
}

export default RetailerPurchases