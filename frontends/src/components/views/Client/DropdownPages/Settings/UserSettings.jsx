import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import '../../../Fulfillment/MainOperations/EditProduct/EditStyle.css'
import '../../../Main/CartPage/cartpage.css'
import './usersettings.css'
import '../../sidemenu.css'
import { TextareaAutosize } from '@material-ui/core';
import Sidemenu from '../../Sidemenu'

function UserSettings(props) {

  const [UserData, setUserData] = useState([])
  const [Windhoek, setWindhoek] = useState("Windhoek")
  const [KatimaMulilo, setKatimaMulilo] = useState("KatimaMulilo")
  const [Swakop, setSwakop] = useState("Swakop")
  const [Walvis, setWalvis] = useState("Walvis")
  const [Oshakati, setOshakati] = useState("Oshakati")
  const [Grootfontein, setGrootfontein] = useState("Grootfontein")
  const [Rundu, setRundu] = useState("Rundu")
  const [Otjiwarongo, setOtjiwarongo] = useState("Otjiwarongo")
  const [Ongwediva, setOngwediva] = useState("Ongwediva")
  const [Okahandja, setOkahandja] = useState("Okahandja")
  const [Gobabis, setGobabis] = useState("Gobabis")
  const [Rehoboth, setRehoboth] = useState("Rehoboth")
  const [Tsumeb, setTsumeb] = useState("Tsumeb")
  const [NameValue, setNameValue] = useState("")
  const [LastNameValue, setLastNameValue] = useState("")
  const [AddressValue, setAddressValue] = useState("")
  const [ContactValue, setContactValue] = useState("")

  const [savedClick, setsavedClick] = useState(false)
  const clickSave = () => setsavedClick(!savedClick)

  const [toggleName, settoggleName] = useState(0)
  const [toggleLastname, settoggleLastname] = useState(0)
  const [toggleContact, settoggleContact] = useState(0)
  const [toggleAddress, settoggleAddress] = useState(0)

  const ontoggleNameClick = (index) => {
    settoggleName(index)
  }

  const ontoggleLastnameClick = (index) => {
    settoggleLastname(index)
  }

  const ontoggleContactClick = (index) => {
    settoggleContact(index)
  }

  const ontoggleAddressClick = (index) => {
    settoggleAddress(index)
  }

  useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUserData(response.data.doc);
        }
    })
    
    }, [])

    const ClickOption = () => {

      const variables = {
          name: NameValue === "" ? UserData.name: NameValue,
          lastname: LastNameValue === "" ? UserData.lastname: LastNameValue,
          contact: ContactValue === "" ? UserData.contact : ContactValue,
          address: AddressValue === "" ? UserData.address : AddressValue,
          }

          Axios.post("/api/users/setRole", variables)
              .then(response => {
              if(response.data.success) {
                refreshPage()
          }
      })
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value)
  }

  const onLastNameChange = (event) => {
    setLastNameValue(event.currentTarget.value)
  }

  const onContactsChange = (event) => {
    setContactValue(event.currentTarget.value)
  }

  const onAddressChange = (event) => {
    setAddressValue(event.currentTarget.value)
  }


  const WindhoekSubmit = () => {
    const variables = {
      userLocation: Windhoek
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }
  
  const KatimaMuliloSubmit = () => {
    const variables = {
      userLocation: KatimaMulilo
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }
  
  const SwakopSubmit = () => {
    const variables = {
      userLocation: Swakop
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }
  
  const WalvisSubmit = () => {
    const variables = {
      userLocation: Walvis
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }
  
  const OshakatiSubmit = () => {
    const variables = {
      userLocation: Oshakati
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const RunduSubmit = () => {
    const variables = {
      userLocation: Rundu
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const GrootfonteinSubmit = () => {
    const variables = {
      userLocation: Grootfontein
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const OtjiwarongoSubmit = () => {
    const variables = {
      userLocation: Otjiwarongo
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const OngwedivaSubmit = () => {
    const variables = {
      userLocation: Ongwediva
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const OkahandjaSubmit = () => {
    const variables = {
      userLocation: Okahandja
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const GobabisSubmit = () => {
    const variables = {
      userLocation: Gobabis
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const RehobothSubmit = () => {
    const variables = {
      userLocation: Rehoboth
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }

  const TsumebSubmit = () => {
    const variables = {
      userLocation: Tsumeb
    }
  
    Axios.post("/api/users/setRole", variables)
  .then(response => {
  if(response.data.success) {
  }
  })
  }


  const onWindhoekValue = (event) => {
    setWindhoek(event.currentTarget.value)
    }
  
    const onKatimaMuliloValue = (event) => {
      setKatimaMulilo(event.currentTarget.value)
      }
  
      const onSwakopValue = (event) => {
        setSwakop(event.currentTarget.value)
        }
  
      const onWalvisValue = (event) => {
        setWalvis(event.currentTarget.value)
        }
  
          const onGrootfonteinValue = (event) => {
            setGrootfontein(event.currentTarget.value)
            }
                  
          const onOshakatiValue = (event) => {
            setOshakati(event.currentTarget.value)
            }
                                  
          const onRunduValue = (event) => {
            setRundu(event.currentTarget.value)
            }
                                                  
          const onOtjiwarongoValue = (event) => {
            setOtjiwarongo(event.currentTarget.value)
            }
                                                                  
          const onOngwedivaValue = (event) => {
            setOngwediva(event.currentTarget.value)
            }
                                                                                  
          const onOkahandjaValue = (event) => {
            setOkahandja(event.currentTarget.value)
            }
                                                                                                  
          const onGobabisValue = (event) => {
            setGobabis(event.currentTarget.value)
            }
                                                                                                                  
          const onRehobothValue = (event) => {
            setRehoboth(event.currentTarget.value)
            }
                                                                                                                                  
          const onTsumebValue = (event) => {
            setTsumeb(event.currentTarget.value)
            }


            const [toggleNav, setToggleNav] = useState(1);

            const toggleNavTab = (index) => {
              setToggleNav(index);
              }

return (
<div className='User_settings_container'>
<div className='User_settings_layout'>
<div className='Client_page_sidebar_box'>
      <div className='Cliet_sidebar_left_box_'>
      <Sidemenu />
      </div>
    </div>
    <div
    className='User_settings_box'>
      <div style={{width: '100%'}}>
<div style={{width: '100%', height: '40px', display: 'flex'}}>
    <button
       className={toggleNav===1 ? "Profile_button_main Profile_button-active ": "Profile_button_main"}
       onClick={()=>
        toggleNavTab(1)}
        >
        <span>Location</span>
      </button>
      <button  
      className={toggleNav===2 ? "Profile_button_main Profile_button-active ": "Profile_button_main"}
      onClick={()=>
        toggleNavTab(2)}>
        <span>Email</span>
      </button>
    </div>
    <div style={{ width: '100%', paddingTop: '10px'}}>
    <div className={toggleNav===1 ? "ShowProfile_box": "ShowProfile_box-hide"}>
        <div style={{ paddingTop: '30px', paddingBottom: '56px'}}>
      <div className='UserLocations_box'>
      <div className='UserLocations_title'>
          <span>Which Town/City are you in or which is close to you?</span>
          </div>
      <ul className='UserLocations-select_boxes'>
            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Windhoek" ?
            <li onChange={onWindhoekValue} value={Windhoek} onClick={() => { refreshPage(); WindhoekSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Windhoek</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Windhoek" ?
          <li onChange={onWindhoekValue} value={Windhoek} onClick={() => { refreshPage(); WindhoekSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Windhoek</span> </div>
          </li>
            :
            <></>
            }   

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Walvis" ?
            <li onChange={onWalvisValue} value={Walvis} onClick={() => { refreshPage(); WalvisSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Walvis Bay</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Walvis" ?
          <li onChange={onWalvisValue} value={Walvis} onClick={() => { refreshPage(); WalvisSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Walvis Bay</span> </div>
          </li>
            :
            <></>
            }  

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Swakop" ?
            <li onChange={onSwakopValue} value={Swakop} onClick={() => { refreshPage(); SwakopSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Swakopmund</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Swakop" ?
          <li onChange={onSwakopValue} value={Swakop} onClick={() => { refreshPage(); SwakopSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Swakopmund</span> </div>
          </li>
            :
            <></>
            }  
            
            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Okahandja" ?
            <li onChange={onOkahandjaValue} value={Okahandja} onClick={() => { refreshPage(); OkahandjaSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Okahandja</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Okahandja" ?
          <li onChange={onOkahandjaValue} value={Okahandja} onClick={() => { refreshPage(); OkahandjaSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Okahandja</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Oshakati" ?
            <li onChange={onOshakatiValue} value={Oshakati} onClick={() => { refreshPage(); OshakatiSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Oshakati</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Oshakati" ?
          <li onChange={onOshakatiValue} value={Oshakati} onClick={() => { refreshPage(); OshakatiSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Oshakati</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Grootfontein" ?
            <li onChange={onGrootfonteinValue} value={Grootfontein} onClick={() => { refreshPage(); GrootfonteinSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Grootfontein</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Grootfontein" ?
          <li onChange={onGrootfonteinValue} value={Grootfontein} onClick={() => { refreshPage(); GrootfonteinSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Grootfontein</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Rehoboth" ?
            <li onChange={onRehobothValue} value={Rehoboth} onClick={() => { refreshPage(); RehobothSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Rehoboth</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Rehoboth" ?
          <li onChange={onRehobothValue} value={Rehoboth} onClick={() => { refreshPage(); RehobothSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Rehoboth</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "KatimaMulilo" ?
            <li onChange={onKatimaMuliloValue} value={KatimaMulilo} onClick={() => { refreshPage(); KatimaMuliloSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Katima Mulilo</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "KatimaMulilo" ?
          <li onChange={onKatimaMuliloValue} value={KatimaMulilo} onClick={() => { refreshPage(); KatimaMuliloSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Katima Mulilo</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Otjiwarongo" ?
            <li onChange={onOtjiwarongoValue} value={Otjiwarongo} onClick={() => { refreshPage(); OtjiwarongoSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Otjiwarongo</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Otjiwarongo" ?
          <li onChange={onOtjiwarongoValue} value={Otjiwarongo} onClick={() => { refreshPage(); OtjiwarongoSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Otjiwarongo</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Ongwediva" ?
            <li onChange={onOngwedivaValue} value={Ongwediva} onClick={() => { refreshPage(); OngwedivaSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Ongwediva</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Ongwediva" ?
          <li onChange={onOngwedivaValue} value={Ongwediva} onClick={() => { refreshPage(); OngwedivaSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Ongwediva</span> </div>
          </li>
            :
            <></>
            } 

            {UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Tsumeb" ?
            <li onChange={onTsumebValue} value={Tsumeb} onClick={() => { refreshPage(); TsumebSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Tsumeb</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Tsumeb" ?
          <li onChange={onTsumebValue} value={Tsumeb} onClick={() => { refreshPage(); TsumebSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Tsumeb</span> </div>
          </li>
            :
            <></>
            } 

{UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Rundu" ?
            <li onChange={onRunduValue} value={Rundu} onClick={() => { refreshPage(); RunduSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Rundu</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Rundu" ?
          <li onChange={onRunduValue} value={Rundu} onClick={() => { refreshPage(); RunduSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Rundu</span> </div>
          </li>
            :
            <></>
            } 

{UserData && UserData.userLocation === undefined ?
            <></>
            :
            UserData && UserData.userLocation !== "Gobabis" ?
            <li onChange={onGobabisValue} value={Gobabis} onClick={() => { refreshPage(); GobabisSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Gobabis</span> </div>
            </li>
          :
          UserData && UserData.userLocation === "Gobabis" ?
          <li onChange={onGobabisValue} value={Gobabis} onClick={() => { refreshPage(); GobabisSubmit() }} className='UserLocations-select_li'>
          <div className='UserLocations-active_select_Tabs'><span>Gobabis</span> </div>
          </li>
            :
            <></>
            } 

      </ul>
  </div>
        </div>

        </div>
      <div className={toggleNav===2 ? "ShowProfile_box": "ShowProfile_box-hide"}>
        <div className='Edit_toggle_box'>
          <div className='Edit_user_info_left'>
            <div>
      {UserData.name === "" || UserData.name === undefined ?
      <div className="User_info_box">
        <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onNameChange} value={NameValue}
             style={{ width: '300px', height: '35px', fontWeight: '500', border: 'none', fontSize: '15px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
        </div>
      </div>
      :
      <>
      <div className={toggleName === 0 ? "User_info_box" : "Title_info_hide"}>
        <div className='Title_info_box'>
          <div className='Title_info_left_box'>Name:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleNameClick(1)}} className='Title_info_edit_button'>
              Edit
            </button>
          </div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.name}
              </div>
        </div>
      </div>

      <div className={toggleName === 1 ? "User_info_box" : "Title_info_hide"}>
      <div className='Title_info_box'>
          <div className='Title_info_left_box'>Edit Name:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleNameClick(0); setNameValue("")}} className='Title_info_cancel_button'>
              Cancel
            </button>
          </div>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onNameChange} value={NameValue}
             style={{ width: '300px', height: '35px', fontWeight: '500', border: 'none', fontSize: '15px', color: '#656481', 
            outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '10px'}} />
        </div>
      </div>
      </>
      }

{UserData.lastname === "" || UserData.lastname === undefined ?
    <div className="User_info_box">
      <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
        <span>Edit Last Name:</span>
      </div>
      <div style={{ width: '100%'}}>
        <input type="text" onChange={onLastNameChange} value={LastNameValue}
           style={{ width: '300px', height: '35px', fontWeight: '600', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
      </div>
    </div>
:
<>
      <div className={toggleLastname === 0 ? "User_info_box" : "Title_info_hide"}>
<div className='Title_info_box'>
          <div className='Title_info_left_box'>Last Name:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleLastnameClick(1)}} className='Title_info_edit_button'>
              Edit
            </button>
          </div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.lastname}
              </div>
        </div>
      </div>
      <div className={toggleLastname === 1 ? "User_info_box" : "Title_info_hide"}>
      <div className='Title_info_box'>
          <div className='Title_info_left_box'>Edit Last Name:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleLastnameClick(0); setLastNameValue("")}} className='Title_info_cancel_button'>
              Cancel
            </button>
          </div>
        </div>
      <div style={{ width: '100%'}}>
        <input type="text" onChange={onLastNameChange} value={LastNameValue}
           style={{ width: '300px', height: '35px', fontWeight: '600', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
      </div>
    </div>
</>
    }

{UserData.contact === "" || UserData.contact === undefined ?
    <div className="User_info_box">
      <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
        <span>Edit Contact:</span>
      </div>
      <div style={{ width: '100%'}}>
        <input type="text" onChange={onContactsChange} value={ContactValue}
           style={{ width: '300px', height: '35px', fontWeight: '600', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
      </div>
    </div>
:
<>
<div className={toggleContact === 0 ? "User_info_box" : "Title_info_hide"}>
<div className='Title_info_box'>
          <div className='Title_info_left_box'>Contact Number:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleContactClick(1)}} className='Title_info_edit_button'>
              Edit
            </button>
          </div>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.contact}
              </div>
        </div>
      </div>
      <div className={toggleContact === 1 ? "User_info_box" : "Title_info_hide"}>
      <div className='Title_info_box'>
          <div className='Title_info_left_box'>Edit Contact Nr:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleContactClick(0); setContactValue("")}} className='Title_info_cancel_button'>
              Cancel
            </button>
          </div>
        </div>
      <div style={{ width: '100%'}}>
        <input type="text" onChange={onContactsChange} value={ContactValue}
           style={{ width: '300px', height: '35px', fontWeight: '600', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', paddingLeft: '15px'}} />
      </div>
    </div>
</>
  }

{UserData.address === "" || UserData.address === undefined ?
    <div className="User_info_box">
      <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
        <span>Edit Address:</span>
      </div>
      <div style={{ width: '100%'}}>
        <TextareaAutosize minRows={2} onChange={onAddressChange} value={AddressValue}
           style={{ width: '300px', resize: 'none', fontWeight: '700', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', padding: '5px'}} />
      </div>
    </div>
:
<>
<div className={toggleAddress === 0 ? "User_info_box" : "Title_info_hide"}>
<div className='Title_info_box'>
          <div className='Title_info_left_box'>Address:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleAddressClick(1)}} className='Title_info_edit_button'>
              Edit
            </button>
          </div>
        </div>
        <div style={{ width: '100%'}}>
        <TextareaAutosize minRows={2} readOnly value={UserData.address}
           style={{ width: '300px', resize: 'none', fontWeight: '700', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', padding: '5px'}} />
        </div>
      </div>

      <div className={toggleAddress === 1 ? "User_info_box" : "Title_info_hide"}>
      <div className='Title_info_box'>
          <div className='Title_info_left_box'>Edit Address:</div>
          <div className='Title_info_edit_box'>
            <button onClick={() => {ontoggleAddressClick(0); setAddressValue("")}} className='Title_info_cancel_button'>
              Cancel
            </button>
          </div>
        </div>
      <div style={{ width: '100%'}}>
      <TextareaAutosize minRows={2} onChange={onAddressChange} value={AddressValue}
           style={{ width: '300px', resize: 'none', fontWeight: '700', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', padding: '5px'}} />
      </div>
    </div>
</>
  }
            </div>

          </div>
          {/* <div className='Edit_user_info_right'>
            <div>
      <div className="User_info_box">
        <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
          <span>Name:</span>
        </div>
        <div style={{ width: '100%'}}>
        <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.name}
              </div>
        </div>
      </div>
      <div className="User_info_box">
        <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
          <span>Last Name:</span>
        </div>
        <div style={{ width: '100%'}}>
        <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.lastname}
              </div>
        </div>
      </div>
      <div className="User_info_box">
        <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Contact:</span>
        </div>
        <div style={{ width: '100%'}}>
        <div
            style={{ width: '300px', height: '35px', fontSize: '15px', color: '#656481', outline: '1px solid #c5cbd5',
            border: 'none', fontWeight: '600', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}} >
                {UserData.contact}
              </div>
        </div>
      </div>
      <div className="User_info_box">
      <div style={{ width: '100%', fontSize: '18px', color: '#333', fontWeight: '700', marginBottom: '5px'}}>
        <span>Edit Address:</span>
      </div>
      <div style={{ width: '100%'}}>
      <TextareaAutosize minRows={2} readOnly value={UserData.address}
           style={{ width: '300px', resize: 'none', fontWeight: '700', border: 'none', fontSize: '15px', color: '#656481', 
          outline: '1px solid #c5cbd5', borderRadius: '2px', padding: '5px'}} />
      </div>
    </div>
            </div>
          </div> */}
        </div>
      </div> 

      <div style={{ marginTop: '20px'}} className='Save-upload-button_box'>
      <button style={{ cursor: 'pointer'}} className={savedClick ? "Save-upload-button_clicked": "Save-profile-button"} onClick={() => {ClickOption();clickSave()}}>
        {savedClick === false ?
        <span style={{ fontWeight: '600', fontSize: '16px'}}>Save</span>
        :
        <span style={{ fontWeight: '600', fontSize: '16px'}}>Saved</span>
        }
      </button>
  </div>

    </div>
      </div>
    

  </div>
</div>
  
  
</div>
)
}

export default UserSettings