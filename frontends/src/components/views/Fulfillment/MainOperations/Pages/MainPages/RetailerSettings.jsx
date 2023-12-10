import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import './retailerstyle.css'
import './retailerpages.css'
import ProfileImage from './Sections/ProfileImage';
import LogoImage from './Sections/LogoImage';


function RetailerSettings() {

    const [User, setUser] = useState([])
    const [Image, setImage] = useState([])
    const [NameValue, setNameValue] = useState("")
    const [ContactValue, setContactValue] = useState("")

    const [toggleImageBox, settoggleImageBox] = useState(1)
    const [toggleNameBox, settoggleNameBox] = useState(1)
    const [toggleContactBox, settoggleContactBox] = useState(1)

    const ImageSelectBox = (index) => {
      settoggleImageBox(index)
    }

    const NameSelectBox = (index) => {
      settoggleNameBox(index)
    }

    const ContactSelectBox = (index) => {
      settoggleContactBox(index)
    }

    useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUser(response.data.doc);
            }
        })
        
        }, [])

        function refreshPage() {
          window.location.reload(false);
        }

        const SaveDetails = () => {

            const variables = {
                name: NameValue === "" ? User.name: NameValue,
                profileImage: Image.length === 0 ? User.profileImage : Image,
                contact: ContactValue === "" ? User.contact: ContactValue,
              }
      
                Axios.post("/api/users/setRole", variables)
                    .then(response => {
                    if(response.data.success) {
                }
            })
        }

        const onNameChange = (event) => {
            setNameValue(event.currentTarget.value)
            }

            const onContactChange = (event) => {
              setContactValue(event.currentTarget.value)
              }

        const updateImage = (newImage) => {
            setImage(newImage)
            }


  return (
    <div className='Retailer_Settings_container'>
  <div className='Profile_details_page_box'>
    <div style={{width: '100%', height: '50px', display: 'flex'}}>
      <div  
      className="Retailer-settings_header">
        <span>Profile Information</span>
      </div>
    </div>
    <div style={{ width: '100%', height: '500px', paddingTop: '40px'}}>
      <div className="ShowProfile_box">
        <div style={{ width: '100%', display: 'flex'}}>
          <div style={{ width: '70%'}}>

            {User.accountTier === "Verified" ?
            <>
            {User.profileImage === undefined ?
              <></>
              :
              User.profileImage && User.profileImage.length === 0 ?
              
            <div className="Brand_account_detail_box">
            <div className='Brand_account_image_box'>
            <div className='Brand_account_title_left_box'>Brand Logo:</div>
        </div>
          <div style={{ listStyle: 'none', width: '100%', display: 'flex'}}>
        <div style={{ minWidth: '170px',height: '72px', borderRadius: '7px',
         border: '1px solid #c5cbd5', background: '#fff', overflow: 'hidden'}}>
          <LogoImage refreshFunction={updateImage} />
        </div>
        <div style={{ width: '100%', marginLeft: '40px', paddingTop: '40px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Update</button>
            </div>
        </div>
  
      </div>
            </div>
  
            :
            <>
            <div className={toggleImageBox === 1 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
            <div className='Brand_account_image_box'>
            <div className='Brand_account_title_left_box'>Brand Logo:</div>
          <div className="Brand_account_title_right_box Brand_logo_edit" onClick={() => {ImageSelectBox(2)}}>Edit</div>
        </div>
          <div style={{ width: '100%', height: '100%'}}>
        <div style={{ width: '170px', height: '72px', borderRadius: '7px',
         border: '1px solid #c5cbd5', background: '#fff', overflow: 'hidden'}}>
          <ProfileImage images={User.profileImage} />
        </div>
      </div>
            </div>
  
            <div className={toggleImageBox === 2 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
            <div className='Brand_account_image_box'>
          <div className='Brand_account_title_left_box'>Brand Logo:</div>
          <div className="Brand_account_title_right_cancel_box Brand_logo_edit" onClick={() => {ImageSelectBox(1)}}>Cancel</div>
        </div>
          <div style={{ listStyle: 'none', width: '100%', display: 'flex'}}>
        <div style={{ minWidth: '170px',height: '68px', borderRadius: '7px',
         border: '1px solid #c5cbd5', background: '#fff', overflow: 'hidden'}}>
          <LogoImage refreshFunction={updateImage} />
        </div>
        <div style={{ width: '100%', marginLeft: '40px', paddingTop: '40px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Update</button>
            </div>
        </div>
  
      </div>
            </div>
            </>
            }
            </>
            :
            <></>
            }
          
          {User.accountTier === "Verified" ?
          <>
          {User.name === undefined ?
        <></>
        :
          User.name && User.name === "" ?
        <div className="Brand_account_detail_box">
        <div className='Brand_account_title_box'>
           <span className='Brand_account_title_left_box'>Brand Name:</span>
        </div>
        <div style={{ width: '100%', display: 'flex'}}>
          <div>
            <input type="text" onChange={onNameChange} value={NameValue} maxLength={20}
            style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
          </div>
          
            <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
            <div style={{ padding: '0px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
            </div>
        </div>
        </div>
      </div>
        :
        <>
        <div className={toggleNameBox === 1 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
        <div className='Brand_account_title_box'>
        <div className='Brand_account_title_left_box'>Brand Name:</div>
        <div className="Brand_account_title_right_box" onClick={() => {NameSelectBox(2)}}>Edit</div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '450px', height: '35px', fontSize: '16.8px', color: '#656481', outline: '1px solid #c5cbd5',
             border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {User.name}
              </div>
        </div>
      </div>

      <div className={toggleNameBox === 2 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
        <div className='Brand_account_title_box'>
        <div className='Brand_account_title_left_box'>Brand Name:</div>
        <div className="Brand_account_title_right_cancel_box" onClick={() => {NameSelectBox(1)}}>Cancel</div>
        </div>
        <div style={{ width: '100%', display: 'flex'}}>
          <div>
            <input type="text" onChange={onNameChange} value={NameValue} maxLength={20}
            style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
          </div>
          
            <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
            <div style={{ padding: '0px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
            </div>
        </div>
        </div>
      
      </div>
        </>
        }
          </>
          :
          <>
          {User.name === undefined ?
        <></>
        :
          User.name && User.name === "" ?
        <div className="Brand_account_detail_box">
        <div className='Brand_account_title_box'>
           <span className='Brand_account_title_left_box'>Name:</span>
        </div>
        <div style={{ width: '100%', display: 'flex'}}>
          <div>
            <input type="text" onChange={onNameChange} value={NameValue} maxLength={20}
            style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
          </div>
          
            <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
            <div style={{ padding: '0px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
            </div>
        </div>
        </div>
      </div>
        :
        <>
        <div className={toggleNameBox === 1 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
        <div className='Brand_account_title_box'>
        <div className='Brand_account_title_left_box'>Name:</div>
        <div className="Brand_account_title_right_box" onClick={() => {NameSelectBox(2)}}>Edit</div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '450px', height: '35px', fontSize: '16.8px', color: '#656481', outline: '1px solid #c5cbd5',
             border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {User.name}
              </div>
        </div>
      </div>

      <div className={toggleNameBox === 2 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
        <div className='Brand_account_title_box'>
        <div className='Brand_account_title_left_box'>Name:</div>
        <div className="Brand_account_title_right_cancel_box" onClick={() => {NameSelectBox(1)}}>Cancel</div>
        </div>
        <div style={{ width: '100%', display: 'flex'}}>
          <div>
            <input type="text" onChange={onNameChange} value={NameValue} maxLength={20}
            style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
          </div>
          
            <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
            <div style={{ padding: '0px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
            </div>
        </div>
        </div>
      
      </div>
        </>
        }
          </>
          
          }



        {User.contact === undefined ?
        <></>
        :
        User.contact && User.contact === "" ?
        <div className="Brand_account_detail_box">
      <div className='Brand_account_title_box'>
        <span className='Brand_account_title_left_box'>Contact nr:</span>
      </div>
      <div style={{ width: '100%', display: 'flex'}}>
        <div>
          <input type="text" onChange={onContactChange} value={ContactValue} maxLength={20}
          style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
        <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
      <div style={{ padding: '0px 0px 0px 0px'}}>
              <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
          </div>
      </div>
      </div>
    </div>
        :
        <>
        <div className={toggleContactBox === 1 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
        <div className='Brand_account_title_box'>
          <div className='Brand_account_title_left_box'>Contact nr:</div>
        <div className="Brand_account_title_right_box" onClick={() => {ContactSelectBox(2)}}>Edit</div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '450px', height: '35px', fontSize: '16.8px', color: '#656481', outline: '1px solid #c5cbd5',
             border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {User.contact}
              </div>
        </div>
      </div>

      <div className={toggleContactBox === 2 ? "Brand_account_detail_box" : "Brand_account_detail_box_hide"}>
      <div className='Brand_account_title_box'>
        <div className='Brand_account_title_left_box'>Contact nr:</div>
        <div className="Brand_account_title_right_cancel_box" onClick={() => {ContactSelectBox(1)}}>Cancel</div>
      </div>
      <div style={{ width: '100%', display: 'flex'}}>
        <div>
          <input type="text" onChange={onContactChange} value={ContactValue} maxLength={20}
          style={{ width: '450px', height: '35px', fontWeight: '500', border: 'none', fontSize: '16.8px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
        <div style={{ width: '100%', margin: '10px 0px 0px 20px'}}>
      <div style={{ padding: '0px 0px 0px 0px'}}>
              <button onClick={() => {SaveDetails(); refreshPage()}} className='Brand_account_information_save'>Save</button>
          </div>
      </div>
      </div>
      
    </div>
        </>
        }
      
          </div>
          
        </div>
      </div> 
    </div>

  </div>
</div>
  )
}

export default RetailerSettings