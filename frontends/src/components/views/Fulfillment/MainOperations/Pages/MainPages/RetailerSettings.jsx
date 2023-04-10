import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import './retailerstyle.css'
import ProfileImage from './Sections/ProfileImage';
import LogoImage from './Sections/LogoImage';


function RetailerSettings() {

    const [User, setUser] = useState([])
    const [Image, setImage] = useState([])
    const [NameValue, setNameValue] = useState("")

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
                profileImage: Image.length === 0 ? User.profileImage : Image
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

        const updateImage = (newImage) => {
            setImage(newImage)
            }

  return (
    <div style={{ padding: '30px 70px', minHeight: '650px', display: 'flex'}}>
  <div style={{ width: '230px', height: '300px'}}>
  <div style={{ width: '150px', height: '40px', background: '#00BFFF', display: 'flex', 
    justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
      <a href={`/0/${User._id}`} style={{ width: '100%', height: '100%', display: 'flex', 
    justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontWeight: '700'}}>Back</span></a>
    </div>
  </div>
  <div
    style={{ width: '900px', height: '430px', padding: '20px 30px 0px 30px', border: '1px solid #00BFFF',
     boxShadow: '0 0px 0px 1px #00BFFF', borderRadius: '10px'}}>
    <div style={{width: '100%', height: '50px', display: 'flex'}}>
      <button  
      className="Retailer-settings_header">
        <span>Logo & Company Name</span>
      </button>
    </div>
    <div style={{ width: '100%', height: '400px', paddingTop: '40px', paddingLeft: '20px'}}>
      <div className="ShowProfile_box">
        <div style={{ width: '100%', display: 'flex'}}>
          <div style={{ width: '50%'}}>
          <div style={{ width: '100%', height: '68px'}}>
        <div style={{ width: '171px', height: '100%', borderRadius: '7px',
         border: '1px solid orange', background: '#fff', overflow: 'hidden'}}>
          <ProfileImage images={User.profileImage} />
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%',marginTop: '20px', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Retailer Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '30px', fontSize: '14px', color: '#656481', outline: '2px solid orange',
             border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {User.name}
              </div>
        </div>
      </div>
          </div>
          <div style={{ width: '50%'}}>

          <div style={{ listStyle: 'none', width: '100%', display: 'flex'}}>
        <div style={{ minWidth: '178px',height: '68px', borderRadius: '7px',
         border: '1px solid #00BFFF', background: '#fff', overflow: 'hidden'}}>
          <LogoImage refreshFunction={updateImage} />
        </div>
        <div style={{ width: '100%', marginLeft: '40px', paddingTop: '40px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} style={{ cursor: 'pointer',width: '70px', height: '25px', display: 'flex',
                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                  color: '#fff', fontSize: '15px', fontWeight: 'bold', background: 'orange',
                  borderRadius: '3px'}}>Save </button>
            </div>
        </div>

      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block',marginTop: '20px', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Retailer Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onNameChange} value={NameValue} maxLength={50}
            style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
        <div style={{ width: '100%', marginTop: '10px'}}>
        <div style={{ padding: '3px 0px 0px 0px'}}>
                <button onClick={() => {SaveDetails(); refreshPage()}} style={{ cursor: 'pointer',width: '70px', height: '25px', display: 'flex',
                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                  color: '#fff', fontSize: '15px', fontWeight: 'bold', background: 'orange',
                  borderRadius: '3px'}}>Save</button>
            </div>
        </div>
      </div>
          </div>
        </div>
      </div> 
    </div>

  </div>
</div>
  )
}

export default RetailerSettings