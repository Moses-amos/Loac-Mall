import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './appendStyle.css'

function AppendRole(props) {
  const [UserData, setUserData] = useState([])
  const [BrancheValue, setBrancheValue] = useState("Branch")
  const [Windhoek, setWindhoek] = useState("Windhoek")
  const [RetailerId, setRetailerId] = useState("6364bca60a97a628b88e9c35")
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

  function refreshPage() {
    window.location.reload(false);
  }

useEffect(() => {

Axios.get('/api/users/getUser')
.then(response => {
    if (response.data.success) {
        setUserData(response.data.doc);
    }
})

}, [])

if (UserData.operateLocation === "Branch"){
  props.history.push("/branch")
  refreshPage()
  } else if (UserData.operateLocation === "Admin") {
    props.history.push(`/0/${UserData._id}`)
  }


const WindhoekSubmit = () => {
  const variables = {
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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
    retailer: RetailerId,
    operateLocation: BrancheValue,
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

return (
<div style={{ padding: '50px 30px', display: 'block'}}>
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
    <span style={{ fontWeight: '800', fontSize: '32px', color: '#1380e7'}}>Select the Branch Location</span>
  </div>
  <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', 
  justifyContent: 'space-between', padding: '60px 40px 30px 40px'}}>
    <div className='Allocate-branch' onChange={onWindhoekValue} value={Windhoek} onClick={() => { refreshPage(); WindhoekSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Windhoek Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onWalvisValue} value={Walvis}
     onClick={() => { refreshPage(); WalvisSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Walvis Bay Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onSwakopValue} value={Swakop}
     onClick={() => { refreshPage(); SwakopSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Swakopmund Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onOkahandjaValue} value={Okahandja}
     onClick={() => { refreshPage(); OkahandjaSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Okahandja Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onOshakatiValue} value={Oshakati}
     onClick={() => { refreshPage(); OshakatiSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Oshakati Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    </div>
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap',
     justifyContent: 'space-between', padding: '30px 40px 30px 40px'}}>
    <div className='Allocate-branch' onChange={onGrootfonteinValue} value={Grootfontein} 
    onClick={() => { refreshPage(); GrootfonteinSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Grootfontein Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onRehobothValue} value={Rehoboth}
     onClick={() => { refreshPage(); RehobothSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Rehoboth Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onKatimaMuliloValue} value={Swakop}
     onClick={() => { refreshPage(); KatimaMuliloSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Katima Mulilo Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onOngwedivaValue} value={Ongwediva}
     onClick={() => { refreshPage(); OngwedivaSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Ongwediva Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch' onChange={onOtjiwarongoValue} value={Otjiwarongo}
     onClick={() => { refreshPage(); OtjiwarongoSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Otjiwarongo Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    </div>
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap',
     justifyContent: 'center', padding: '30px 40px 30px 55px'}}>
    <div className='Allocate-branch-center' onChange={onTsumebValue} value={Tsumeb} 
    onClick={() => { refreshPage(); TsumebSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Tsumeb Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch-center' onChange={onRunduValue} value={Rundu}
     onClick={() => { refreshPage(); RunduSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Rundu Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    <div className='Allocate-branch-center' onChange={onGobabisValue} value={Gobabis}
     onClick={() => { refreshPage(); GobabisSubmit() }}>
      <div style={{ width: '100%',cursor: 'pointer', height: '60%', display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px'}}>Gobabis Branch</span>
      </div>
      <div style={{ width: '100%',cursor: 'pointer', height: '40%', display: 'flex', justifyContent: 'center'}}>
      <span style={{ color: 'orange', fontWeight: '800'}}>Click</span>
      </div>
    </div>
    </div>
</div>
)
}

export default AppendRole