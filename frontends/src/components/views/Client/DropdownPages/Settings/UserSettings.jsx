import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import '../../../Fulfillment/MainOperations/EditProduct/EditStyle.css'

import './usersettings.css'

function UserSettings() {

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
  const [email, setemail] = useState("")
  const [ContactValue, setContactValue] = useState("")
  const [savedClick, setsavedClick] = useState(false)
  const clickSave = () => setsavedClick(!savedClick)

  useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUserData(response.data.doc);
        }
    })
    
    }, [])

    console.log(UserData);

    const ClickOption = () => {

      const variables = {
          email: email === "" ? UserData.email: email,
          name: NameValue === "" ? UserData.name: NameValue,
          lastname: LastNameValue === "" ? UserData.lastname: LastNameValue,
          contact: ContactValue === "" ? UserData.contact : ContactValue,
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

  const onEmailChange = (event) => {
    setemail(event.currentTarget.value)
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
<div style={{ padding: '30px 110px 0px 110px', minHeight: '600px', display: 'flex'}}>
  <div
    style={{ width: '900px', height: '500px', padding: '30px 30px 0px 30px', border: '1px solid #00BFFF',
    boxShadow: '0 0px 0px 1px #00BFFF', borderRadius: '10px'}}>
    <div style={{width: '100%', height: '50px', display: 'flex'}}>
    <button
       className={toggleNav===1 ? "ProfileTab_button ProfileTab_button-active ": "ProfileTab_button"}
       onClick={()=>
        toggleNavTab(1)}
        >
        <span>Location</span>
      </button>
      <button  
      className={toggleNav===2 ? "ProfileTab_button ProfileTab_button-active ": "ProfileTab_button"}
      onClick={()=>
        toggleNavTab(2)}>
        <span>Email</span>
      </button>
    </div>
    <div style={{ width: '100%', height: '400px', paddingTop: '10px'}}>
    <div className={toggleNav===1 ? "ShowProfile_box": "ShowProfile_box-hide"}>
        <div style={{ paddingTop: '30px', paddingBottom: '20px'}}>
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
        <div style={{ width: '100%', display: 'flex', paddingLeft: '20px'}}>
          <div style={{ width: '50%'}}>
          <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Email:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {UserData.email}
              </div>
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {UserData.name}
              </div>
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Last Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {UserData.lastname}
              </div>
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Contact Number:</span>
        </div>
        <div style={{ width: '100%'}}>
          <div
            style={{ width: '300px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            border: 'none', fontWeight: '700', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}} >
                {UserData.contact}
              </div>
        </div>
      </div>
          </div>
          <div style={{ width: '50%', paddingLeft: '85px'}}>
          <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Email:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onEmailChange} value={email}
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onNameChange} value={NameValue}
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Name:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onLastNameChange} value={LastNameValue}
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit Contact:</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text" onChange={onContactsChange} value={ContactValue}
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div>
      {/* <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Edit-Password</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text"
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div>
      <div style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', fontSize: '18px', color: '#070606', fontWeight: '700', marginBottom: '5px'}}>
          <span>Confirm Edit-Password</span>
        </div>
        <div style={{ width: '100%'}}>
          <input type="text"
             style={{ width: '300px', height: '30px', fontWeight: '700', border: 'none', fontSize: '13px', color: '#656481', 
            outline: '2px solid #656481', borderRadius: '2px', paddingLeft: '15px'}} />
        </div>
      </div> */}
          </div>
        </div>
      </div> 

      <div style={{ marginTop: '20px', paddingLeft: '20px'}} className='Submit-upload-button_box'>
      <button style={{ cursor: 'pointer'}} className={savedClick ? "Submit-upload-button_clicked": "Submit-upload-button"} onClick={() => {ClickOption();clickSave()}}>
        {savedClick === false ?
        <span>Save</span>
        :
        <span>Saved</span>
        }
      </button>
  </div>

    </div>

  </div>
</div>
)
}

export default UserSettings