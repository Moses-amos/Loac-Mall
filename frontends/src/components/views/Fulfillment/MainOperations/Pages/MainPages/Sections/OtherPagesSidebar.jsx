import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import SidebarLogo from './SidebarLogo';
import Loading from './SearchBar/Loading';

function OtherPagesSidebar(props) {
    const [User, setUser] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const [toggleHeader, settoggleHeader] = useState()

    const switchHeader = (index) => {
        settoggleHeader(index)
    }


useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 0);
  
})
    
    useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUser(response.data.doc)
              }
        })
    }, [])
  return (
    <div className='sidebar-conatiner'>
    <div>
                {User.name === undefined ?
                <></>
                :
                User.name ?
        <div style={{width: '100%', height: '80px', borderRadius: '7px',
          background: '#fff', border: '3px solid royalblue'}}>
            <div style={{ width: '100%', height: '100%'}}>
                {IsLoading === true ?
                      <Loading />
                      :
                      <SidebarLogo images={User.profileImage} />
                }   
                </div>
                </div>
                :
                <> 
                </>  
                }
        <div style={{ width: '100%', padding: '15px 0px 0px 0px', display: 'flex'}}>
            {User.name === undefined ?
            <></>
            :
            User.name === "" ?
                                            <div style={{ padding: '3px 0px 0px 0px', marginLeft: '5px'}}>
                                                <div style={{ cursor: 'pointer',width: '170px', height: '30px', display: 'flex',
                                                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',color: '#fff', fontSize: '13px', fontWeight: '500',
                                                  background: 'orange', borderRadius: '3px'}}><a style={{ width: '100%', height: '100%', display: 'flex', 
                                                  justifyContent: 'center', alignItems: 'center' }} href='/re-settings'>
                                                    <span style={{ color: '#fff', fontSize: '13px', fontWeight: '500'}}>Insert Name and Logo</span> </a> </div>
                                            </div>
                                            :
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '2px solid #fff'}}>
                                <span style={{fontSize: '16px', color: '#fff',
                             fontWeight: '700'}}>{User.name}</span>
                            </div>

            }
        </div>
    </div>
    <ul className='sidebar-box'>
        <li className={toggleHeader===2 ? "Retailer-sidebar-header_hover Retailer-sidebar-header": "Retailer-sidebar-header"}
            onMouseEnter={() => switchHeader(2)} onMouseLeave={() => switchHeader()} >
                <span className='Retailer-sidebar-titles'><a style={{ width: '100%', height: '100%', display: 'flex',
            alignItems: 'center', padding: '10px 0px'}} href={`/0/${User._id}`}>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9.00021H17.0017" stroke="#FFCE73" 
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path><path d="M6.99609 8.72507L7.91548 9.55341L9.76625 7.88672" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" 
                    strokeLinejoin="round"></path>
                    <path d="M9.99901 20.0036H7.99818C5.2356 20.0036 2.99609 17.7641 2.99609 15.0015V6.99818C2.99609 4.2356 5.2356 1.99609 7.99818 1.99609H16.0015C17.3281 1.99609 18.6004 2.5231 19.5385 3.46117C20.4766 4.39924 21.0036 5.67154 21.0036 6.99818V9.99943" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.99609 13.729L7.91548 14.5573L9.76625 12.8906" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 13.9023V19.6051C14.001 20.3783 15.5674 21.0055 17.501 21.0055C19.4345 21.0055 21.0009 20.3783 21.0019 19.6051V13.9023" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 16.7539C14 17.5271 15.5674 18.1543 17.501 18.1543C19.4345 18.1543 21.0019 17.5271 21.0019 16.7539" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.001 13.9004C14.001 14.6736 15.5684 15.3008 17.502 15.3008C19.4355 15.3008 21.0019 14.6736 21.0019 13.9004C21.0019 13.1262 19.4335 12.5 17.501 12.5C15.5684 12.5 14.001 13.1272 14 13.9004" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>               
                 <div style={{marginLeft: '5px'}}>
                    <span style={{color: '#fff'}}>Listings</span>
                </div></a></span>
        </li>
        <li className={toggleHeader===3 ? "Retailer-sidebar-header_hover Retailer-sidebar-header": "Retailer-sidebar-header"}
    onMouseEnter={() => switchHeader(3)} onMouseLeave={() => switchHeader()}>
        <span className='Retailer-sidebar-titles'><a style={{ width: '100%', height: '100%', display: 'flex',
            alignItems: 'center', padding: '10px 0px'}} href="/purchases-made">
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 10.0002H17.0017" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path><path d="M6.99609 9.72507L7.91548 10.5534L9.76625 8.88672" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        </path><path d="M6.99609 14.729L7.91548 15.5573L9.76625 13.8906" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path><path d="M20.0019 20.0058L18.1211 18.125" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <circle cx="16.0012" cy="16.0012" r="3.00125" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                </circle><path d="M21.0036 11.1658V7.49797C21.0036 5.01165 18.988 2.99609 16.5017 2.99609H7.49797C5.01165 2.99609 2.99609 5.01165 2.99609 7.49797V16.5017C2.99609 18.988 5.01165 21.0036 7.49797 21.0036H10.9994" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>               
                 <div style={{marginLeft: '5px'}}>
                    <span style={{color: '#fff'}}>Purchases</span>
                </div>
            </a></span>
            </li>
        <li className={toggleHeader===4 ? "Retailer-sidebar-header_hover Retailer-sidebar-header": "Retailer-sidebar-header"}
    onMouseEnter={() => switchHeader(4)} onMouseLeave={() => switchHeader()} ><span className='Retailer-sidebar-titles'><a style={{ width: '100%', height: '100%', display: 'flex',
            alignItems: 'center', padding: '10px 0px'}} href="/fulfilments">
                <div style={{ paddingTop: '3px'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" 
                d="M17.2545 3.92271L16.0762 2.74437C15.7504 2.41854 15.2229 2.41854 14.8979 2.74437L6.0762 11.566C5.91953 11.7219 5.83203 11.9344 5.83203 12.1552V14.1669H7.8437C8.06453 14.1669 8.27703 14.0794 8.43286 13.9227L17.2545 5.10104C17.5804 4.77604 17.5804 4.24854 17.2545 3.92271V3.92271Z" 
                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.7602 6.59219L13.4102 4.24219" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.5 9.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H10.8333" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>               
                <div style={{marginLeft: '5px'}}>
                    <span style={{color: '#fff'}}>Fullfilments</span>
                </div>
                </a></span></li>
                
        <li className={toggleHeader===5 ? "Retailer-sidebar-header_hover-add Retailer-sidebar-header_hover": "Retailer-sidebar-header_hover-add"}
    onMouseEnter={() => switchHeader(5)} onMouseLeave={() => switchHeader()} ><span className='Retailer-sidebar-titles'><a style={{ width: '100%', height: '100%', display: 'flex',
    alignItems: 'center', justifyContent: 'center', padding: '10px 0px 10px 0px'}} href="/item/upload"><span style={{color: '#fff', fontWeight: '600'}}>Add Product</span></a></span></li>
    </ul>
</div>
  )
}

export default OtherPagesSidebar