import React, { useState, useEffect} from 'react'
import Axios from 'axios';

function StoreLocations(props) {

    const [User, setUser] = useState([])
    const [UserData, setUserData] = useState([])
    const [SelectValue, setSelectValue] = useState(true)
    const [Unselect, setUnselect] = useState(false)

    useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUser(response.data.doc);
            }
        })
        
}, [])

useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
            setUserData(response.data.doc);
        }
    })
    
    }, [])

        function refreshPage() {
            window.location.reload(false);
          }

          if (UserData.operateLocation === "Branch"){
            props.history.push("/branch")
            refreshPage()
            } else if (UserData.operateLocation === "User") {
              props.history.push("/")
              refreshPage()
            }

            const WindhoekTrue = () => {

            const variables = {
                    Windhoek: SelectValue ,
                    }
          
                    Axios.post("/api/users/setRole", variables)
                        .then(response => {
                        if(response.data.success) {
                            refreshPage()
                    }
                })
            }

            const WindhoekFalse = () => {

                const variables = {
                        Windhoek: Unselect ,
                        }
              
                        Axios.post("/api/users/setRole", variables)
                            .then(response => {
                            if(response.data.success) {
                                refreshPage()
                        }
                    })
                }

                const WalvisTrue = () => {

                  const variables = {
                          Walvis: SelectValue ,
                          }
                
                          Axios.post("/api/users/setRole", variables)
                              .then(response => {
                              if(response.data.success) {
                                  refreshPage()
                          }
                      })
                  }
      
                  const WalvisFalse = () => {
      
                      const variables = {
                              Walvis: Unselect ,
                              }
                    
                              Axios.post("/api/users/setRole", variables)
                                  .then(response => {
                                  if(response.data.success) {
                                      refreshPage()
                              }
                          })
                      }

                      const SwakopTrue = () => {

                        const variables = {
                                Swakop: SelectValue ,
                                }
                      
                                Axios.post("/api/users/setRole", variables)
                                    .then(response => {
                                    if(response.data.success) {
                                        refreshPage()
                                }
                            })
                        }
            
                        const SwakopFalse = () => {
            
                            const variables = {
                                    Swakop: Unselect ,
                                    }
                          
                                    Axios.post("/api/users/setRole", variables)
                                        .then(response => {
                                        if(response.data.success) {
                                            refreshPage()
                                    }
                                })
                            }
                            
                      const OshakatiTrue = () => {

                        const variables = {
                                Oshakati: SelectValue ,
                                }
                      
                                Axios.post("/api/users/setRole", variables)
                                    .then(response => {
                                    if(response.data.success) {
                                        refreshPage()
                                }
                            })
                        }
            
                        const OshakatiFalse = () => {
            
                            const variables = {
                                    Oshakati: Unselect ,
                                    }
                          
                                    Axios.post("/api/users/setRole", variables)
                                        .then(response => {
                                        if(response.data.success) {
                                            refreshPage()
                                    }
                                })
                            }
                                                        
                      const OkahandjaTrue = () => {

                        const variables = {
                                Okahandja: SelectValue ,
                                }
                      
                                Axios.post("/api/users/setRole", variables)
                                    .then(response => {
                                    if(response.data.success) {
                                        refreshPage()
                                }
                            })
                        }
            
                        const OkahandjaFalse = () => {
            
                            const variables = {
                                    Okahandja: Unselect ,
                                    }
                          
                                    Axios.post("/api/users/setRole", variables)
                                        .then(response => {
                                        if(response.data.success) {
                                            refreshPage()
                                    }
                                })
                            }
                                                                                    
                      const GrootfonteinTrue = () => {

                        const variables = {
                                Grootfontein: SelectValue ,
                                }
                      
                                Axios.post("/api/users/setRole", variables)
                                    .then(response => {
                                    if(response.data.success) {
                                        refreshPage()
                                }
                            })
                        }
            
                        const GrootfonteinFalse = () => {
            
                            const variables = {
                                    Grootfontein: Unselect ,
                                    }
                          
                                    Axios.post("/api/users/setRole", variables)
                                        .then(response => {
                                        if(response.data.success) {
                                            refreshPage()
                                    }
                                })
                            }
                                                                                                                
                      const RehobothTrue = () => {

                        const variables = {
                                Rehoboth: SelectValue ,
                                }
                      
                                Axios.post("/api/users/setRole", variables)
                                    .then(response => {
                                    if(response.data.success) {
                                        refreshPage()
                                }
                            })
                        }
            
                        const RehobothFalse = () => {
            
                            const variables = {
                                    Rehoboth: Unselect ,
                                    }
                          
                                    Axios.post("/api/users/setRole", variables)
                                        .then(response => {
                                        if(response.data.success) {
                                            refreshPage()
                                    }
                                })
                            }

                            const GobabisTrue = () => {

                              const variables = {
                                      Gobabis: SelectValue ,
                                      }
                            
                                      Axios.post("/api/users/setRole", variables)
                                          .then(response => {
                                          if(response.data.success) {
                                              refreshPage()
                                      }
                                  })
                              }
                  
                              const GobabisFalse = () => {
                  
                                  const variables = {
                                          Gobabis: Unselect ,
                                          }
                                
                                          Axios.post("/api/users/setRole", variables)
                                              .then(response => {
                                              if(response.data.success) {
                                                  refreshPage()
                                          }
                                      })
                                  }
                                  
                            const KatimaMuliloTrue = () => {

                              const variables = {
                                      KatimaMulilo: SelectValue ,
                                      }
                            
                                      Axios.post("/api/users/setRole", variables)
                                          .then(response => {
                                          if(response.data.success) {
                                              refreshPage()
                                      }
                                  })
                              }
                  
                              const KatimaMuliloFalse = () => {
                  
                                  const variables = {
                                          KatimaMulilo: Unselect ,
                                          }
                                
                                          Axios.post("/api/users/setRole", variables)
                                              .then(response => {
                                              if(response.data.success) {
                                                  refreshPage()
                                          }
                                      })
                                  }
                                     
                            const RunduTrue = () => {

                              const variables = {
                                      Rundu: SelectValue ,
                                      }
                            
                                      Axios.post("/api/users/setRole", variables)
                                          .then(response => {
                                          if(response.data.success) {
                                              refreshPage()
                                      }
                                  })
                              }
                  
                              const RunduFalse = () => {
                  
                                  const variables = {
                                          Rundu: Unselect ,
                                          }
                                
                                          Axios.post("/api/users/setRole", variables)
                                              .then(response => {
                                              if(response.data.success) {
                                                  refreshPage()
                                          }
                                      })
                                  }

                                  const OngwedivaTrue = () => {

                                    const variables = {
                                            Ongwediva: SelectValue ,
                                            }
                                  
                                            Axios.post("/api/users/setRole", variables)
                                                .then(response => {
                                                if(response.data.success) {
                                                    refreshPage()
                                            }
                                        })
                                    }
                        
                                    const OngwedivaFalse = () => {
                        
                                        const variables = {
                                                Ongwediva: Unselect ,
                                                }
                                      
                                                Axios.post("/api/users/setRole", variables)
                                                    .then(response => {
                                                    if(response.data.success) {
                                                        refreshPage()
                                                }
                                            })
                                        }
                                        
                                  const OtjiwarongoTrue = () => {

                                    const variables = {
                                            Otjiwarongo: SelectValue ,
                                            }
                                  
                                            Axios.post("/api/users/setRole", variables)
                                                .then(response => {
                                                if(response.data.success) {
                                                    refreshPage()
                                            }
                                        })
                                    }
                        
                                    const OtjiwarongoFalse = () => {
                        
                                        const variables = {
                                                Otjiwarongo: Unselect ,
                                                }
                                      
                                                Axios.post("/api/users/setRole", variables)
                                                    .then(response => {
                                                    if(response.data.success) {
                                                        refreshPage()
                                                }
                                            })
                                        }
                                                                                
                                  const TsumebTrue = () => {

                                    const variables = {
                                            Tsumeb: SelectValue ,
                                            }
                                  
                                            Axios.post("/api/users/setRole", variables)
                                                .then(response => {
                                                if(response.data.success) {
                                                    refreshPage()
                                            }
                                        })
                                    }
                        
                                    const TsumebFalse = () => {
                        
                                        const variables = {
                                                Tsumeb: Unselect ,
                                                }
                                      
                                                Axios.post("/api/users/setRole", variables)
                                                    .then(response => {
                                                    if(response.data.success) {
                                                        refreshPage()
                                                }
                                            })
                                        }


  return (
    <div style={{ padding: '30px 100px', minHeight: '650px', display: 'flex'}}>
    <div style={{ width: '200px', height: '300px'}}>

    <div style={{ width: '150px', height: '40px', background: '#00BFFF', display: 'flex', 
    justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
      <a href='/fulfilments' style={{ width: '100%', height: '100%', display: 'flex', 
    justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontWeight: 'bolder'}}>Back</span></a>
    </div>

    </div>
    <div
      style={{ width: '900px', height: '480px', padding: '20px 30px 0px 30px', border: '1px solid #00BFFF',
      boxShadow: '0 0px 0px 1px #00BFFF', borderRadius: '10px'}}>
      <div style={{width: '100%', height: '50px', display: 'flex'}}>
        <button  
        className="Retailer-settings_header">
          <span>Store Locations</span>
        </button>
      </div>
      <div style={{ width: '100%', height: '400px', paddingTop: '40px', paddingLeft: '0px'}}>
        <div>
            <span style={{ fontWeight: 'bold', fontSize: '19px', color: '#61606f'}}>Only Select the Locations where you have Branches</span>
        </div>
        <div>
            <div style={{ display: 'flex', marginTop: '30px'}}>
                <div>
                    <button style={{ width: '60px', height: '20px', background: '#03C04A', border: 'none', outline: 'none', borderBottomRightRadius: '7px', borderTopLeftRadius: '7px'}}></button>
                </div>
                <div style={{ marginLeft: '20px'}}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#74767c'}}>This color means - The location is Selected</span>
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5px'}}>
                <div>
                    <button style={{ width: '60px', height: '20px', background: 'royalblue', border: 'none', outline: 'none', borderBottomRightRadius: '7px', borderTopLeftRadius: '7px'}}></button>
                </div>
                <div style={{ marginLeft: '20px'}}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#74767c'}}>This color means - The location is not Selected</span>
                </div>
            </div>
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap', paddingTop: '20px' }}>
            {User && User.Windhoek === undefined ?
            <></>
            :
            User && User.Windhoek === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Windhoek} className={User.Windhoek === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          WindhoekTrue()}>Windhoek</button>
          </div>
          :
          User && User.Windhoek === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Windhoek} className={User.Windhoek === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            WindhoekFalse()}>Windhoek</button>
            </div>
            :
            <></>
            }   

{User && User.Walvis === undefined ?
            <></>
            :
            User && User.Walvis === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Walvis} className={User.Walvis === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          WalvisTrue()}>Walvis Bay</button>
          </div>
          :
          User && User.Walvis === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Walvis} className={User.Walvis === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            WalvisFalse()}>Walvis Bay</button>
            </div>
            :
            <></>
            }  

{User && User.Swakop === undefined ?
            <></>
            :
            User && User.Swakop === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Swakop} className={User.Swakop === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          SwakopTrue()}>Swakopmund</button>
          </div>
          :
          User && User.Swakop === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Swakop} className={User.Swakop === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            SwakopFalse()}>Swakopmund</button>
            </div>
            :
            <></>
            }  

{User && User.Oshakati === undefined ?
            <></>
            :
            User && User.Oshakati === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Oshakati} className={User.Oshakati === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          OshakatiTrue()}>Oshakati</button>
          </div>
          :
          User && User.Oshakati === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Oshakati} className={User.Oshakati === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            OshakatiFalse()}>Oshakati</button>
            </div>
            :
            <></>
            }  

{User && User.Okahandja === undefined ?
            <></>
            :
            User && User.Okahandja === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Okahandja} className={User.Okahandja === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          OkahandjaTrue()}>Okahandja</button>
          </div>
          :
          User && User.Okahandja === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Okahandja} className={User.Okahandja === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            OkahandjaFalse()}>Okahandja</button>
            </div>
            :
            <></>
            }  

{User && User.Grootfontein === undefined ?
            <></>
            :
            User && User.Grootfontein === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Grootfontein} className={User.Grootfontein === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          GrootfonteinTrue()}>Grootfontein</button>
          </div>
          :
          User && User.Grootfontein === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Grootfontein} className={User.Grootfontein === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            GrootfonteinFalse()}>Grootfontein</button>
            </div>
            :
            <></>
            }  

{User && User.Rehoboth === undefined ?
            <></>
            :
            User && User.Rehoboth === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Rehoboth} className={User.Rehoboth === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          RehobothTrue()}>Rehoboth</button>
          </div>
          :
          User && User.Rehoboth === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Rehoboth} className={User.Rehoboth === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            RehobothFalse()}>Rehoboth</button>
            </div>
            :
            <></>
            }  

{User && User.Gobabis === undefined ?
            <></>
            :
            User && User.Gobabis === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Gobabis} className={User.Gobabis === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          GobabisTrue()}>Gobabis</button>
          </div>
          :
          User && User.Gobabis === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Gobabis} className={User.Gobabis === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            GobabisFalse()}>Gobabis</button>
            </div>
            :
            <></>
            }  

{User && User.KatimaMulilo === undefined ?
            <></>
            :
            User && User.KatimaMulilo === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.KatimaMulilo} className={User.KatimaMulilo === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          KatimaMuliloTrue()}>Katima Mulilo</button>
          </div>
          :
          User && User.KatimaMulilo === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.KatimaMulilo} className={User.KatimaMulilo === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            KatimaMuliloFalse()}>Katima Mulilo</button>
            </div>
            :
            <></>
            }  

{User && User.Rundu === undefined ?
            <></>
            :
            User && User.Rundu === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Rundu} className={User.Rundu === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          RunduTrue()}>Rundu</button>
          </div>
          :
          User && User.Rundu === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Rundu} className={User.Rundu === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            RunduFalse()}>Rundu</button>
            </div>
            :
            <></>
            }  

{User && User.Ongwediva === undefined ?
            <></>
            :
            User && User.Ongwediva === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Ongwediva} className={User.Ongwediva === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          OngwedivaTrue()}>Ongwediva</button>
          </div>
          :
          User && User.Ongwediva === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Ongwediva} className={User.Ongwediva === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            OngwedivaFalse()}>Ongwediva</button>
            </div>
            :
            <></>
            }  

{User && User.Otjiwarongo === undefined ?
            <></>
            :
            User && User.Otjiwarongo === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Otjiwarongo} className={User.Otjiwarongo === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          OtjiwarongoTrue()}>Otjiwarongo</button>
          </div>
          :
          User && User.Otjiwarongo === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Otjiwarongo} className={User.Otjiwarongo === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            OtjiwarongoFalse()}>Otjiwarongo</button>
            </div>
            :
            <></>
            }  

{User && User.Tsumeb === undefined ?
            <></>
            :
            User && User.Tsumeb === false ?
        <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button value={User.Tsumeb} className={User.Tsumeb === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
          TsumebTrue()}>Tsumeb</button>
          </div>
          :
          User && User.Tsumeb === true ?
          <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
          <button value={User.Tsumeb} className={User.Tsumeb === true ? "BranchTabs active-BranchSelect" : "BranchTabs" } onClick={(event)=>
            TsumebFalse()}>Tsumeb</button>
            </div>
            :
            <></>
            }  
    </div>
          </div>
        </div> 
      </div>
  
  )
}

export default StoreLocations