import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {
addPcBuild,
getPcBuildItems,
removePcBuildItem,
} from '../../../../_actions/user_actions';
import { useDispatch } from 'react-redux';

import './buildPc.css'
import BuildImages from './BuildImages'

function BuildPc(props) {

const [toggleSelects, settoggleSelects] = useState(1)
const [Products, setProducts] = useState([])
const [Total, setTotal] = useState(0)
const [ShowTotal, setShowTotal] = useState(false)
const [hoverBoard, sethoverBoard] = useState()
const [toggleInfo, settoggleInfo] = useState(false)
const [viewPc, setviewPc] = useState(false)
const dispatch = useDispatch();
const [viewSpecs, setViewSpecs] = useState()

const showPcBuild = () => setviewPc(!viewPc)

const showInfo = () => settoggleInfo(!toggleInfo)

const [toggleImage, settoggleImage] = useState(1);

const toggleImageTab = (index) => {
settoggleImage(index);
}

const [toggleNav, setToggleNav] = useState(1);

const toggleNavTab = (index) => {
  setToggleNav(index);
  }

const toggleSelectTabs = (index) => {
settoggleSelects(index)
}

const toggleSelectedImagesTabs = (index) => {
   settoggleImage(index)
   }

const viewSpecsSelect = (index) => {
setViewSpecs(index)
}

const hoverMark = (index) => {
   sethoverBoard(index)
   }

useEffect(() => {

let pcBuildItems = [];
if (props.user.userData && props.user.userData.pcBuild) {
if (props.user.userData.pcBuild.length > 0) {
props.user.userData.pcBuild.forEach(item => {
pcBuildItems.push(item.id)
});
dispatch(getPcBuildItems(pcBuildItems, props.user.userData.pcBuild))
.then((response) => {
if (response.payload.length > 0) {
calculateTotal(response.payload)
}
})
}
} 

}, [props.user.userData])

useEffect(() => {
Axios.post('./api/product/getProducts')
.then(response => {
if (response.data.success) {
setProducts(response.data.products)
}
})
}, [])

const calculateTotal = (cartDetail) => {
let total = 0;

cartDetail.map(item => {
total += parseInt(item.price, 10) * item.quantity
});

setTotal(total)
setShowTotal(true)
}

const removeFromPcBuild = (productId) => {

dispatch(removePcBuildItem(productId))
.then((response) => {
if (response.payload.pcBuildDetail.length <= 0) { setShowTotal(false) } else {
   calculateTotal(response.payload.pcBuildDetail) } }) } 
   
   const selectProduct=(productId)=> {
   dispatch(addPcBuild(productId))
   }

   const Cabinets = Products.map((product, index) => {
   if(product.buildProduct === 'BuildCabinet') {
   let selectId = product._id
   return (
   <div key={index}
      style={{ width: '480px',marginRight: '10px', marginBottom: '5px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
       alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
      <div style={{ width: '260px', height: '240px'}}>
         <BuildImages images={product.images} />
      </div>
      <div style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
         <div style={{ display: 'block'}}>
            <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
               <div className='Build-cabinet_title'><a target='blank' href={`/royal/product/${product._id}`}> <span
                     className='Build-cabinet_title'>{product.title}</span>
                  </a></div>
            </div>
            <div style={{ paddingTop: '10px'}}>
               <div style={{ display: 'flex'}}>
                  <div className='Info-product_more_click'>
                     <span className='Info-product_more_span' onClick={()=> viewSpecsSelect(product._id)}
                        onMouseEnter={() => viewSpecsSelect(0)}>case</span>
                  </div>
                  <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                     <span className='Build-cabinet_price'>N$</span>
                     <span style={{ marginLeft: '5px'}} className='Build-cabinet_price'>{product.price}</span>
                  </div>
               </div>

               <div className={ viewSpecs===selectId ? "Case-product_ports_slots" :"Info-product_ports_slots-hide"}>
                  <table style={{ marginRight: '5px'}}>
                     <thead>
                        <tr>
                           <th>Ports</th>
                           <th>Number of:</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>USB</td>
                           <td className='Info-product_table'>{product.usbPort}</td>
                        </tr>
                        <tr>
                           <td>C-Type</td>
                           <td className='Info-product_table'>{product.cType}</td>
                        </tr>
                        <tr>
                           <td>Audio</td>
                           <td className='Info-product_table'>1</td>
                        </tr>
                        <tr>
                           <td>-</td>
                           <td>-</td>
                        </tr>
                     </tbody>
                  </table>
                  <table>
                     <thead>
                        <tr>
                           <th>Slots</th>
                           <th>Number of:</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>HDD/SSD</td>
                           <td className='Info-product_table'>{product.hddSsd}</td>

                        </tr>
                        <tr>
                           <td>DVD Drive</td>
                           <td className='Info-product_table'>{product.dvdDrive}</td>
                        </tr>
                        <tr>
                           <td>FANS</td>
                           <td className='Info-product_table'>{product.fan}</td>
                        </tr>
                        <tr>
                           <td>-</td>
                           <td>-</td>
                        </tr>
                        <tr>
                           <td></td>
                           <td><button
                                 style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                    style={{ color: '#fff'}} target='blank' href={`/royal/product/${product._id}`}>more
                                    info</a> </button> </td> </tr> </tbody> </table> </div> </div> </div> <div
                                    style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                    <button onClick={()=> selectProduct(product._id)}
                                       style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                       alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                       background: '#03C04A'}}>
                                       <span className='Build_select_button'>
                                          Select
                                       </span>
                                    </button>
               </div>
            </div>
         </div>
         )
         }
         })

         const MotherboardsDDRThree = Products.map((product, index) => {
         if(product.buildProduct === 'BuildMotherBoard DDR3') {
         let selectId = product._id
         return (
            <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
            alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
            <div style={{ width: '260px', height: '240px'}}>
               <BuildImages images={product.images} />
            </div>
            <div style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
               <div style={{ display: 'block'}}>
                  <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                     <div className='Build-cabinet_title'><a target='blank' href={`/royal/product/${product._id}`}>
                           <span className='Build-cabinet_title'>{product.title}</span>
                        </a></div>
                  </div>
                  <div style={{ paddingTop: '10px'}}>
                     <div style={{ display: 'flex'}}>
                        <div className='Motherboard-product_more_click'>
                           <span className='Motherboard-product_more_span' onClick={()=> viewSpecsSelect(product._id)}
                              onMouseEnter={() => viewSpecsSelect(0)}
                              >motherboard</span>
                        </div>
                        <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                           <span className='Build-cabinet_price'>N$</span>
                           <span style={{ marginLeft: '5px'}} className='Build-cabinet_price'>{product.price}</span>
                        </div>
                     </div>

                     <div className={viewSpecs===selectId? "Case-product_ports_slots" :"Info-product_ports_slots-hide"}>
                        <table style={{ marginRight: '5px'}}>
                           <thead>
                              <tr>
                                 <th>Ports</th>
                                 <th>Number of:</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>USB</td>
                                 <td className='Info-product_table'>{product.usbPort}</td>
                              </tr>
                              <tr>
                                 <td>HDMI</td>
                                 <td className='Info-product_table'>{product.hdmiPort}</td>
                              </tr>
                              <tr>
                                 <td>DVI</td>
                                 <td className='Info-product_table'>{product.dviPort}</td>
                              </tr>
                              <tr>
                                 <td>Ethernet</td>
                                 <td className='Info-product_table'>{product.ethernetPort}</td>
                              </tr>
                              <tr>
                                 <td>VGA</td>
                                 <td className='Info-product_table'>{product.vgaPort}</td>
                              </tr>
                           </tbody>
                        </table>
                        <table>
                           <thead>
                              <tr>
                                 <th>Slots</th>
                                 <th>Number of:</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Ram</td>
                                 <td className='Info-product_table'>{product.ramBus}</td>

                              </tr>
                              <tr>
                                 <td>NVMe</td>
                                 <td className='Info-product_table'>{product.nvmeBus}</td>
                              </tr>
                              <tr>
                                 <td></td>
                                 <td className='Info-product_table'>-</td>
                              </tr>
                              <tr>
                                 <td></td>
                                 <td className='Info-product_table'>-</td>
                              </tr>
                              <tr>
                                 <td></td>
                                 <td><button
                                       style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                          style={{ color: '#fff'}} target='blank'
                                          href={`/royal/product/${product._id}`}>more info</a> </button> </td> </tr>
                                          </tbody> </table> </div> </div> </div> 
                                          <div style={{ display: 'block'}}>
                                             <div style={{ margin: '10px 0px', position: 'relative'}}>
                                             <button onMouseEnter={()=> hoverMark(product._id)} onMouseLeave={()=> hoverMark()} style={{ cursor: 'pointer',width: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', background: 'red', border: 'none', borderRadius: '50%',
                                              color: '#fff', fontWeight: 'bolder'}}>?</button>
                                             </div>
                                             <div className={hoverBoard===selectId? "Motherboard-selection_hover":"Motherboard-selection_hover-hide"}>
                                                <span style={{ fontWeight: 'bolder', color: '#fff'}}>If you choose a DDR3 Motherboard - you will see only see DDR3 Memory when you go to Select the Memory Size for your Build</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ width: '100%', height: '50px', paddingLeft: '60px'}}>
                                          <button onClick={()=> selectProduct(product._id)}
                                             style={{ width: '100px', display: 'flex', justifyContent: 'center',
                   alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                    background: '#03C04A'}}>
                                             <span className='Build_select_button'>Select</span>
                                          </button>
                     </div>

                  </div>
               </div>
               )
               }
               })

               const MotherboardsDDRFour = Products.map((product, index) => {
                  if(product.buildProduct === 'BuildMotherBoard DDR4') {
                  let selectId = product._id
                  return (
                     <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                     alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                     <div style={{ width: '260px', height: '240px'}}>
                        <BuildImages images={product.images} />
                     </div>
                     <div style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                        <div style={{ display: 'block'}}>
                           <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                              <div className='Build-cabinet_title'><a target='blank' href={`/royal/product/${product._id}`}>
                                    <span className='Build-cabinet_title'>{product.title}</span>
                                 </a></div>
                           </div>
                           <div style={{ paddingTop: '10px'}}>
                              <div style={{ display: 'flex'}}>
                                 <div className='Motherboard-product_more_click'>
                                    <span className='Motherboard-product_more_span' onClick={()=> viewSpecsSelect(product._id)}
                                       onMouseEnter={() => viewSpecsSelect(0)}
                                       >motherboard</span>
                                 </div>
                                 <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                    <span className='Build-cabinet_price'>N$</span>
                                    <span style={{ marginLeft: '5px'}} className='Build-cabinet_price'>{product.price}</span>
                                 </div>
                              </div>
         
                              <div className={viewSpecs===selectId? "Case-product_ports_slots" :"Info-product_ports_slots-hide"}>
                                 <table style={{ marginRight: '5px'}}>
                                    <thead>
                                       <tr>
                                          <th>Ports</th>
                                          <th>Number of:</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>USB</td>
                                          <td className='Info-product_table'>{product.usbPort}</td>
                                       </tr>
                                       <tr>
                                          <td>HDMI</td>
                                          <td className='Info-product_table'>{product.hdmiPort}</td>
                                       </tr>
                                       <tr>
                                          <td>DVI</td>
                                          <td className='Info-product_table'>{product.dviPort}</td>
                                       </tr>
                                       <tr>
                                          <td>Ethernet</td>
                                          <td className='Info-product_table'>{product.ethernetPort}</td>
                                       </tr>
                                       <tr>
                                          <td>VGA</td>
                                          <td className='Info-product_table'>{product.vgaPort}</td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table>
                                    <thead>
                                       <tr>
                                          <th>Slots</th>
                                          <th>Number of:</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>Ram</td>
                                          <td className='Info-product_table'>{product.ramBus}</td>
         
                                       </tr>
                                       <tr>
                                          <td>NVMe</td>
                                          <td className='Info-product_table'>{product.nvmeBus}</td>
                                       </tr>
                                       <tr>
                                          <td></td>
                                          <td className='Info-product_table'>-</td>
                                       </tr>
                                       <tr>
                                          <td></td>
                                          <td className='Info-product_table'>-</td>
                                       </tr>
                                       <tr>
                                          <td></td>
                                          <td><button
                                                style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                   style={{ color: '#fff'}} target='blank'
                                                   href={`/royal/product/${product._id}`}>more info</a> </button> </td> </tr>
                                                   </tbody> </table> </div> </div> </div> 
                                                   <div style={{ display: 'block'}}>
                                             <div style={{ margin: '10px 0px', position: 'relative'}}>
                                             <button onMouseEnter={()=> hoverMark(product._id)} onMouseLeave={()=> hoverMark()} style={{ cursor: 'pointer',width: '20px',display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20px', background: 'red', border: 'none', borderRadius: '50%',
                                              color: '#fff', fontWeight: 'bolder'}}>?</button>
                                             </div>
                                             <div className={hoverBoard===selectId? "Motherboard-selection_hover":"Motherboard-selection_hover-hide"}>
                                                <span style={{ fontWeight: 'bolder', color: '#fff'}}>If you choose a DDR4 Motherboard - you will see only see DDR4 Memory when you go to Select the Memory Size for your Build</span>
                                             </div>
                                          </div>
                                                   <div
                                                   style={{ width: '100%', height: '50px', paddingLeft: '60px'}}>
                                                   <button onClick={()=> selectProduct(product._id)}
                                                      style={{ width: '100px', display: 'flex', justifyContent: 'center',
                            alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                             background: '#03C04A'}}>
                                                      <span className='Build_select_button'>Select</span>
                                                   </button>
                              </div>
         
                           </div>
                        </div>
                        )
                        }
                        })

               const Processors = Products.map((product, index) => {
               if(product.buildProduct === 'BuildProcessor') {
               let selectId = product._id
               return (
               <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
               alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                  <div style={{ width: '260px', height: '240px'}}>
                     <BuildImages images={product.images} />
                  </div>
                  <div
                     style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                     <div style={{ display: 'block'}}>
                        <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                           <div className='Build-cabinet_title'><a target='blank'
                                 href={`/royal/product/${product._id}`}> <span
                                 className='Build-cabinet_title'>{product.title}</span>
                              </a></div>
                        </div>
                        <div style={{ paddingTop: '10px'}}>
                           <div style={{ display: 'flex'}}>
                              <div className='Motherboard-product_more_click'>
                                 <span className='Motherboard-product_more_span' onClick={()=>
                                    viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                    >processor</span>
                              </div>
                              <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                 <span className='Build-cabinet_price'>N$</span>
                                 <span style={{ marginLeft: '5px'}}
                                    className='Build-cabinet_price'>{product.price}</span>
                              </div>
                           </div>

                           <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                              :"Info-product_ports_slots-hide"}>
                              <table style={{ marginRight: '5px'}}>
                                 <thead>
                                    <tr>
                                       <th>Info</th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Manufacturer:</td>
                                       <td className='Info-product_table'>{product.manufacturer}</td>
                                    </tr>
                                    <tr>
                                       <td>Cores:</td>
                                       <td className='Info-product_table'>{product.coreCount}</td>
                                    </tr>
                                    <tr>
                                       <td>Threads:</td>
                                       <td className='Info-product_table'>{product.threads}</td>
                                    </tr>
                                    <tr>
                                       <td>Max Memory:</td>
                                       <td className='Info-product_table'>{product.maxRam}</td>
                                    </tr>
                                    <tr>
                                       <td>Unlocked ?:</td>
                                       <td className='Info-product_table'>{product.cpuUnlock}</td>
                                    </tr>
                                    <tr>
                                       <td>Socket:</td>
                                       <td className='Info-product_table'>{product.cpuSocket}</td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table>
                                 <thead>
                                    <tr>
                                       <th>Details</th>
                                       <th></th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Graphics</td>
                                       <td className='Info-product_table'>{product.integratedGraphics}</td>
                                    </tr>
                                    <tr>
                                       <td>Wattage</td>
                                       <td className='Info-product_table'>{product.wattage}</td>
                                    </tr>
                                    <tr>
                                       <td>Supported OS</td>
                                       <td className='Info-product_table'>{product.supportedOS}</td>
                                    </tr>
                                    <tr>
                                       <td></td>
                                       <td className='Info-product_table'>-</td>
                                    </tr>
                                    <tr>
                                       <td></td>
                                       <td className='Info-product_table'>-</td>
                                    </tr>
                                    <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr> </tbody> </table> </div> </div> </div> <div
                                                style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                <button onClick={()=> selectProduct(product._id)}
                                                   style={{ width: '100px', display: 'flex', justifyContent: 'center',
                       alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                       background: '#03C04A'}}>
                                                   <span className='Build_select_button'>Select</span>
                                                </button>
                           </div>

                        </div>
                     </div>
                     )
                     }
                     }
                     )

                     const GraphicsCards = Products.map((product, index) => {
                     if(product.buildProduct === 'BuildGraphics') {
                     let selectId = product._id
                     return (
                        <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                        alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                        <div style={{ width: '260px', height: '240px'}}>
                           <BuildImages images={product.images} />
                        </div>
                        <div
                           style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                           <div style={{ display: 'block'}}>
                              <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                 <div className='Build-cabinet_title'><a target='blank'
                                       href={`/royal/product/${product._id}`}> <span
                                       className='Build-cabinet_title'>{product.title}</span>
                                    </a></div>
                              </div>
                              <div style={{ paddingTop: '10px'}}>
                                 <div style={{ display: 'flex'}}>
                                    <div className='Motherboard-product_more_click'>
                                       <span className='Motherboard-product_more_span' onClick={()=>
                                          viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                          >graphics card</span>
                                    </div>
                                    <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                       <span className='Build-cabinet_price'>N$</span>
                                       <span style={{ marginLeft: '5px'}}
                                          className='Build-cabinet_price'>{product.price}</span>
                                    </div>
                                 </div>

                                 <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                    :"Info-product_ports_slots-hide"}>
                                    <table style={{ marginRight: '5px'}}>
                                       <thead>
                                          <tr>
                                             <th>Info</th>
                                             <th></th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>Memory:</td>
                                             <td className='Info-product_table'>{product.vRam}</td>
                                          </tr>
                                          <tr>
                                             <td>Generation:</td>
                                             <td className='Info-product_table'>{product.graphicsCardGeneration}</td>
                                          </tr>
                                          <tr>
                                             <td>Fans:</td>
                                             <td className='Info-product_table'>{product.fan}</td>
                                          </tr>
                                          <tr>
                                             <td>Display Via:</td>
                                             <td className='Info-product_table'>{product.displayVia}</td>
                                          </tr>
                                          <tr>
                                             <td>Max Resolution:</td>
                                             <td className='Info-product_table'>{product.resolution}</td>
                                          </tr>
                                          <tr>
                                             <td>Clock:</td>
                                             <td className='Info-product_table'>{product.graphicsCardSpeed}</td>
                                          </tr>
                                          <tr>
                                             <td>Wattage:</td>
                                             <td className='Info-product_table'>{product.wattage}</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Ports</th>
                                             <th> Number of</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td>C-Type</td>
                                             <td className='Info-product_table'>{product.cType}</td>
                                          </tr>
                                          <tr>
                                             <td>HDMI</td>
                                             <td className='Info-product_table'>{product.hdmiPort}</td>
                                          </tr>
                                          <tr>
                                             <td>USB</td>
                                             <td className='Info-product_table'>{product.usbPort}</td>
                                          </tr>
                                          <tr>
                                             <td>DVI</td>
                                             <td className='Info-product_table'>{product.dviPort}</td>
                                          </tr>
                                          <tr>
                                             <td>-</td>
                                             <td>-</td>
                                          </tr>
                                          <tr>
                                             <td></td>
                                             <td><button
                                                   style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                      style={{ color: '#fff'}} target='blank'
                                                      href={`/royal/product/${product._id}`}>more info</a> </button>
                                                      </td> </tr> </tbody> </table> </div> </div> </div> <div
                                                      style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                      <button onClick={()=> selectProduct(product._id)}
                                                         style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                     alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                      background: '#03C04A'}}>
                                                         <span className='Build_select_button'>Select</span>
                                                      </button>
                                 </div>

                              </div>
                           </div>
                           )
                           }
                           })

                           const Memory = Products.map((product, index) => {
                           if(product.buildProduct === 'BuildMemory DDR3' || product.buildProduct === 'BuildMemory DDR4') {
                           let selectId = product._id
                           return (
                           <>
                              {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                              <>
                                 {item.buildProduct === "BuildMotherBoard DDR3" && product.buildProduct === 'BuildMemory DDR3' ?
                        <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                        alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                    <div style={{ width: '260px', height: '240px'}}>
                                       <BuildImages images={product.images} />
                                    </div>
                                    <div
                                       style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                       <div style={{ display: 'block'}}>
                                          <div
                                             style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                             <div className='Build-cabinet_title'><a target='blank'
                                                   href={`/royal/product/${product._id}`}> <span
                                                   className='Build-cabinet_title'>{product.title}</span>
                                                </a></div>
                                          </div>
                                          <div style={{ paddingTop: '10px'}}>
                                             <div style={{ display: 'flex'}}>
                                                <div className='Motherboard-product_more_click'>
                                                   <span className='Motherboard-product_more_span' onClick={()=>
                                                      viewSpecsSelect(product._id)} onMouseEnter={() =>
                                                      viewSpecsSelect(0)}
                                                      >memory ddr3</span>
                                                </div>
                                                <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                   <span className='Build-cabinet_price'>N$</span>
                                                   <span style={{ marginLeft: '5px'}}
                                                      className='Build-cabinet_price'>{product.price}</span>
                                                </div>
                                             </div>

                                             <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                :"Info-product_ports_slots-hide"}>
                                                <table style={{ marginRight: '5px'}}>
                                                   <thead>
                                                      <tr>
                                                         <th>Info</th>
                                                         <th></th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                         <tr>
                                                               <td>Brand:</td>
                                                               <td className='Info-product_table'>{product.brand}</td>
                                                         </tr>
                                                            <tr>
                                                               <td>Memory Gen:</td>
                                                               <td className='Info-product_table'>
                                                                  {product.ramGeneration}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Clock Speed:</td>
                                                               <td className='Info-product_table'>{product.ramSpeed}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Arrangement:</td>
                                                               <td className='Info-product_table'>{product.ramArrangement}
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td>Device For:</td>
                                                               <td className='Info-product_table'>{product.compatibleDevice}
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td></td>
                                                               <td className='Info-product_table'>-</td>
                                                            </tr>
                                                            <tr>
                                                               <td></td>
                                                               <td><button
                                                                     style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                                        style={{ color: '#fff'}} target='blank'
                                                                        href={`/royal/product/${product._id}`}>more
                                                                        info</a> </button> </td></tr>
                                                         </tbody>
                                                            </table>

 </div> </div>
                                                                  </div> <div
                                                                  style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                  <button onClick={()=> selectProduct(product._id)}
                                                                     style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                        alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                        background: '#03C04A'}}>
                                                                     <span className='Build_select_button'>Select</span>
                                                                  </button>
                                             </div>

                                          </div>
                                       </div>
                                       :
                                       item.buildProduct === "BuildMotherBoard DDR4" && product.buildProduct ===
                                       'BuildMemory DDR4' ?
                                       <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                       alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                          <div style={{ width: '260px', height: '240px'}}>
                                             <BuildImages images={product.images} />
                                          </div>
                                          <div
                                             style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                             <div style={{ display: 'block'}}>
                                                <div
                                                   style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                   <div className='Build-cabinet_title'><a target='blank'
                                                         href={`/royal/product/${product._id}`}> <span
                                                         className='Build-cabinet_title'>{product.title}</span>
                                                      </a></div>
                                                </div>
                                                <div style={{ paddingTop: '10px'}}>
                                                   <div style={{ display: 'flex'}}>
                                                      <div className='Motherboard-product_more_click'>
                                                         <span className='Motherboard-product_more_span' onClick={()=>
                                                            viewSpecsSelect(product._id)} onMouseEnter={() =>
                                                            viewSpecsSelect(0)}
                                                            >memory ddr4</span>
                                                      </div>
                                                      <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                         <span className='Build-cabinet_price'>N$</span>
                                                         <span style={{ marginLeft: '5px'}}
                                                            className='Build-cabinet_price'>{product.price}</span>
                                                      </div>
                                                   </div>

                                                   <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                      :"Info-product_ports_slots-hide"}>
                                                      <table style={{ marginRight: '5px'}}>
                                                         <thead>
                                                            <tr>
                                                               <th>Info</th>
                                                               <th></th>
                                                            </tr>
                                                         </thead>
                                                         <tbody>
                                                         <tr>
                                                                                 <td>Brand:</td>
                                                                                 <td className='Info-product_table'>{product.brand}</td>
                                                                              </tr>
                                                            <tr>
                                                               <td>Memory Gen:</td>
                                                               <td className='Info-product_table'>
                                                                  {product.ramGeneration}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Clock Speed:</td>
                                                               <td className='Info-product_table'>{product.ramSpeed}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Arrangement:</td>
                                                               <td className='Info-product_table'>{product.ramArrangement}
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td>Device For:</td>
                                                               <td className='Info-product_table'>{product.compatibleDevice}
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td></td>
                                                               <td className='Info-product_table'>-</td>
                                                            </tr>
                                                            <tr>
                                                               <td></td>
                                                               <td><button
                                                                     style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                                        style={{ color: '#fff'}} target='blank'
                                                                        href={`/royal/product/${product._id}`}>more
                                                                        info</a> </button> </td></tr>
                                                         </tbody>
                                                      </table>
                                                                        </div> </div> </div> <div
                                                                        style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                        <button onClick={()=>
                                                                           selectProduct(product._id)}
                                                                           style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                        alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                        background: '#03C04A'}}>
                                                                           <span
                                                                              className='Build_select_button'>Select</span>
                                                                        </button>
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
                           }
                           })

                           const HardDisk = Products.map((product, index) => {
                              if(product.buildProduct === 'BuildHDD') {
                              let selectId = product._id
                              return (
                                 <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                 alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                 <div style={{ width: '260px', height: '240px'}}>
                                    <BuildImages images={product.images} />
                                 </div>
                                 <div
                                    style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                    <div style={{ display: 'block'}}>
                                       <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                          <div className='Build-cabinet_title'><a target='blank'
                                                href={`/royal/product/${product._id}`}> <span
                                                className='Build-cabinet_title'>{product.title}</span>
                                             </a></div>
                                       </div>
                                       <div style={{ paddingTop: '10px'}}>
                                          <div style={{ display: 'flex'}}>
                                             <div className='Motherboard-product_more_click'>
                                                <span className='Motherboard-product_more_span' onClick={()=>
                                                   viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                   >hard disk drive</span>
                                             </div>
                                             <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                <span className='Build-cabinet_price'>N$</span>
                                                <span style={{ marginLeft: '5px'}}
                                                   className='Build-cabinet_price'>{product.price}</span>
                                             </div>
                                          </div>
         
                                          <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                             :"Info-product_ports_slots-hide"}>
                                             <table>
                                                <thead>
                                                   <tr>
                                                      <th>Info</th>
                                                      <th></th>
                                                   </tr>
                                                </thead>
                                                <tbody>
                                                   <tr>
                                                      <td>Manufacturer:</td>
                                                      <td className='Info-product_table'>{product.manufacturer}</td>
                                                   </tr>
                                                   <tr>
                                                      <td>Storage:</td>
                                                      <td className='Info-product_table'>{product.storageCapacity}</td>
                                                   </tr>
                                                   <tr>
                                                      <td>Interface:</td>
                                                      <td className='Info-product_table'>{product.hardwareInterface}</td>
                                                   </tr>
                                                   <tr>
                                                      <td>Dimensions:</td>
                                                      <td className='Info-product_table'>{product.dimensions}</td>
                                                   </tr>
                                                   <tr>
                                                      <td>Device For:</td>
                                                      <td className='Info-product_table'>{product.compatibleDevice}</td>
                                                   </tr>
                                                   <tr>
                                                      <td>Rotation:</td>
                                                      <td className='Info-product_table'>{product.busStandard}</td>
                                                   </tr>
                                                   <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr>
                                                </tbody>
                                             </table>
                                                                </div> </div> </div> <div
                                                               style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                               <button onClick={()=> selectProduct(product._id)}
                                                                  style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                              alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                               background: '#03C04A'}}>
                                                                  <span className='Build_select_button'>Select</span>
                                                               </button>
                                          </div>
         
                                       </div>
                                    </div>
                                    )
                                    }
                                    })

                                    const SolidState = Products.map((product, index) => {
                                       if(product.buildProduct === 'BuildSataSSD') {
                                       let selectId = product._id
                                       return (
                                          <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                          alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                          <div style={{ width: '260px', height: '240px'}}>
                                             <BuildImages images={product.images} />
                                          </div>
                                          <div
                                             style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                             <div style={{ display: 'block'}}>
                                                <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                   <div className='Build-cabinet_title'><a target='blank'
                                                         href={`/royal/product/${product._id}`}> <span
                                                         className='Build-cabinet_title'>{product.title}</span>
                                                      </a></div>
                                                </div>
                                                <div style={{ paddingTop: '10px'}}>
                                                   <div style={{ display: 'flex'}}>
                                                      <div className='Motherboard-product_more_click'>
                                                         <span className='Motherboard-product_more_span' onClick={()=>
                                                            viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                            >solid state drive</span>
                                                      </div>
                                                      <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                         <span className='Build-cabinet_price'>N$</span>
                                                         <span style={{ marginLeft: '5px'}}
                                                            className='Build-cabinet_price'>{product.price}</span>
                                                      </div>
                                                   </div>
                  
                                                   <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                      :"Info-product_ports_slots-hide"}>
                                                      <table>
                                                         <thead>
                                                            <tr>
                                                               <th>Info</th>
                                                               <th></th>
                                                            </tr>
                                                         </thead>
                                                         <tbody>
                                                            <tr>
                                                               <td>Manufacturer:</td>
                                                               <td className='Info-product_table'>{product.manufacturer}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Storage:</td>
                                                               <td className='Info-product_table'>{product.storageCapacity}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Interface:</td>
                                                               <td className='Info-product_table'>{product.hardwareInterface}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Dimensions:</td>
                                                               <td className='Info-product_table'>{product.dimensions}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Device For:</td>
                                                               <td className='Info-product_table'>{product.compatibleDevice}</td>
                                                            </tr>
                                                            <tr>
                                                               <td>Speed:</td>
                                                               <td className='Info-product_table'>{product.busStandard}</td>
                                                            </tr>
                                                            <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr>
                                                            
                                                         </tbody>
                                                      </table>
                                                                         </div> </div> </div> <div
                                                                        style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                        <button onClick={()=> selectProduct(product._id)}
                                                                           style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                       alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                        background: '#03C04A'}}>
                                                                           <span className='Build_select_button'>Select</span>
                                                                        </button>
                                                   </div>
                  
                                                </div>
                                             </div>
                                             )
                                             }
                                             })

                                             const NvmeSsd = Products.map((product, index) => {
                                                if(product.buildProduct === 'BuildNVME') {
                                                let selectId = product._id
                                                return (
                                                   <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                                   alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                                   <div style={{ width: '260px', height: '240px'}}>
                                                      <BuildImages images={product.images} />
                                                   </div>
                                                   <div
                                                      style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                                      <div style={{ display: 'block'}}>
                                                         <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                            <div className='Build-cabinet_title'><a target='blank'
                                                                  href={`/royal/product/${product._id}`}> <span
                                                                  className='Build-cabinet_title'>{product.title}</span>
                                                               </a></div>
                                                         </div>
                                                         <div style={{ paddingTop: '10px'}}>
                                                            <div style={{ display: 'flex'}}>
                                                               <div className='Motherboard-product_more_click'>
                                                                  <span className='Motherboard-product_more_span' onClick={()=>
                                                                     viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                                     >nvme ssd</span>
                                                               </div>
                                                               <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                                  <span className='Build-cabinet_price'>N$</span>
                                                                  <span style={{ marginLeft: '5px'}}
                                                                     className='Build-cabinet_price'>{product.price}</span>
                                                               </div>
                                                            </div>
                           
                                                            <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                               :"Info-product_ports_slots-hide"}>
                                                               <table>
                                                                  <thead>
                                                                     <tr>
                                                                        <th>Info</th>
                                                                        <th></th>
                                                                     </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                     <tr>
                                                                        <td>Manufacturer:</td>
                                                                        <td className='Info-product_table'>{product.manufacturer}</td>
                                                                     </tr>
                                                                     <tr>
                                                                        <td>Storage:</td>
                                                                        <td className='Info-product_table'>{product.storageCapacity}</td>
                                                                     </tr>
                                                                     <tr>
                                                                        <td>Interface:</td>
                                                                        <td className='Info-product_table'>{product.hardwareInterface}</td>
                                                                     </tr>
                                                                     <tr>
                                                                        <td>Dimensions:</td>
                                                                        <td className='Info-product_table'>{product.dimensions}</td>
                                                                     </tr>
                                                                     <tr>
                                                                        <td>Device For:</td>
                                                                        <td className='Info-product_table'>{product.compatibleDevice}</td>
                                                                     </tr>
                                                                     <tr>
                                                               <td>Speed:</td>
                                                               <td className='Info-product_table'>{product.busStandard}</td>
                                                            </tr>
                                                            <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr>
                                                                  </tbody>
                                                               </table>
                                                                                  </div> </div> </div> <div
                                                                                 style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                                 <button onClick={()=> selectProduct(product._id)}
                                                                                    style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                 background: '#03C04A'}}>
                                                                                    <span className='Build_select_button'>Select</span>
                                                                                 </button>
                                                            </div>
                           
                                                         </div>
                                                      </div>
                                                      )
                                                      }
                                                      })

                                                      const PowerSupply = Products.map((product, index) => {
                                                         if(product.buildProduct === 'BuildPowersupply') {
                                                         let selectId = product._id
                                                         return (
                                                            <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                                            alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                                            <div style={{ width: '260px', height: '240px'}}>
                                                               <BuildImages images={product.images} />
                                                            </div>
                                                            <div
                                                               style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                                               <div style={{ display: 'block'}}>
                                                                  <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                                     <div className='Build-cabinet_title'><a target='blank'
                                                                           href={`/royal/product/${product._id}`}> <span
                                                                           className='Build-cabinet_title'>{product.title}</span>
                                                                        </a></div>
                                                                  </div>
                                                                  <div style={{ paddingTop: '10px'}}>
                                                                     <div style={{ display: 'flex'}}>
                                                                        <div className='Motherboard-product_more_click'>
                                                                           <span className='Motherboard-product_more_span' onClick={()=>
                                                                              viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                                              >power supply</span>
                                                                        </div>
                                                                        <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                                           <span className='Build-cabinet_price'>N$</span>
                                                                           <span style={{ marginLeft: '5px'}}
                                                                              className='Build-cabinet_price'>{product.price}</span>
                                                                        </div>
                                                                     </div>
                                    
                                                                     <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                                        :"Info-product_ports_slots-hide"}>
                                                                        <table style={{ marginRight: '5px'}}>
                                                                           <thead>
                                                                              <tr>
                                                                                 <th>Info</th>
                                                                                 <th></th>
                                                                              </tr>
                                                                           </thead>
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td>Brand:</td>
                                                                                 <td className='Info-product_table'>{product.brand}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Connector Type:</td>
                                                                                 <td className='Info-product_table'>{product.connectorType}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Wattage (Watt):</td>
                                                                                 <td className='Info-product_table'>{product.wattage}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Cooling:</td>
                                                                                 <td className='Info-product_table'>{product.fan}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Weight:</td>
                                                                                 <td className='Info-product_table'>{product.weight}</td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table>
                                                                           <thead>
                                                                              <tr>
                                                                                 <th>Pins</th>
                                                                                 <th></th>
                                                                              </tr>
                                                                           </thead>
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td>20+4-pin Connector:</td>
                                                                                 <td className='Info-product_table'>{product.twentyPlusCount}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>SATA Connector:</td>
                                                                                 <td className='Info-product_table'>{product.sataCount}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>4-pin + 4-pin 12V:</td>
                                                                                 <td className='Info-product_table'>{product.sixPinCount}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>4-pin Molex:</td>
                                                                                 <td className='Info-product_table'>{product.molexCount}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>4-pin Floppy:</td>
                                                                                 <td className='Info-product_table'>{product.floppyCount}</td>
                                                                              </tr>
                                                                     <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr>
                                                                           </tbody>
                                                                        </table>
                                                                                           </div> </div> </div> <div
                                                                                          style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                                          <button onClick={()=> selectProduct(product._id)}
                                                                                             style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                         alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                          background: '#03C04A'}}>
                                                                                             <span className='Build_select_button'>Select</span>
                                                                                          </button>
                                                                     </div>
                                    
                                                                  </div>
                                                               </div>
                                                               )
                                                               }
                                                               })

                                                               const Windows = Products.map((product, index) => {
                                                                  if(product.product === 'Windows') {
                                                                  let selectId = product._id
                                                                  return (
                                                                     <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                                                     alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                                                     <div style={{ width: '260px', height: '240px'}}>
                                                                        <BuildImages images={product.images} />
                                                                     </div>
                                                                     <div
                                                                        style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                                                        <div style={{ display: 'block'}}>
                                                                           <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                                              <div className='Build-cabinet_title'><a target='blank'
                                                                                    href={`/royal/product/${product._id}`}> <span
                                                                                    className='Build-cabinet_title'>{product.title}</span>
                                                                                 </a></div>
                                                                           </div>
                                                                           <div style={{ paddingTop: '10px'}}>
                                                                              <div style={{ display: 'flex'}}>
                                                                                 <div className='Motherboard-product_more_click'>
                                                                                    <span className='Motherboard-product_more_span' onClick={()=>
                                                                                       viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                                                       >window</span>
                                                                                 </div>
                                                                                 <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                                                    <span className='Build-cabinet_price'>N$</span>
                                                                                    <span style={{ marginLeft: '5px'}}
                                                                                       className='Build-cabinet_price'>{product.price}</span>
                                                                                 </div>
                                                                              </div>
                                             
                                                                              <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                                                 :"Info-product_ports_slots-hide"}>
                                                                                 <table>
                                                                                    <thead>
                                                                                       <tr>
                                                                                          <th>Info</th>
                                                                                          <th></th>
                                                                                       </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td>Name:</td>
                                                                                          <td className='Info-product_table'>{product.modelName}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                <td></td>
                                                <td><button
                                                      style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                         style={{ color: '#fff'}} target='blank'
                                                         href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                         </tr>
                                                                                       
                                                                                    
                                                                                    </tbody>
                                                                                 </table>
                                                                                                    </div> </div> </div> <div
                                                                                                   style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                                                   <button onClick={()=> selectProduct(product._id)}
                                                                                                      style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                                  alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                                   background: '#03C04A'}}>
                                                                                                      <span className='Build_select_button'>Select</span>
                                                                                                   </button>
                                                                              </div>
                                             
                                                                           </div>
                                                                        </div>
                                                                        )
                                                                        }
                                                                        })

                                                                        const Monitor = Products.map((product, index) => {
                                                                           if(product.buildProduct === 'BuildMonitor') {
                                                                           let selectId = product._id
                                                                           return (
                                                                              <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                                                              alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                                                              <div style={{ width: '260px', height: '240px'}}>
                                                                                 <BuildImages images={product.images} />
                                                                              </div>
                                                                              <div
                                                                                 style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                                                                 <div style={{ display: 'block'}}>
                                                                                    <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                                                       <div className='Build-cabinet_title'><a target='blank'
                                                                                             href={`/royal/product/${product._id}`}> <span
                                                                                             className='Build-cabinet_title'>{product.title}</span>
                                                                                          </a></div>
                                                                                    </div>
                                                                                    <div style={{ paddingTop: '10px'}}>
                                                                                       <div style={{ display: 'flex'}}>
                                                                                          <div className='Motherboard-product_more_click'>
                                                                                             <span className='Motherboard-product_more_span' onClick={()=>
                                                                                                viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                                                                >monitor</span>
                                                                                          </div>
                                                                                          <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                                                             <span className='Build-cabinet_price'>N$</span>
                                                                                             <span style={{ marginLeft: '5px'}}
                                                                                                className='Build-cabinet_price'>{product.price}</span>
                                                                                          </div>
                                                                                       </div>
                                                      
                                                                                       <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                                                          :"Info-product_ports_slots-hide"}>
                                                                                    <table style={{ marginRight: '5px'}}>
                                                                           <thead>
                                                                              <tr>
                                                                                 <th>Info</th>
                                                                                 <th></th>
                                                                              </tr>
                                                                           </thead>
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td>Display Size:</td>
                                                                                 <td className='Info-product_table'>{product.displaySize}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Resolution:</td>
                                                                                 <td className='Info-product_table'>{product.resolution}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Aspect Ratio:</td>
                                                                                 <td className='Info-product_table'>{product.aspectRatio}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Color:</td>
                                                                                 <td className='Info-product_table'>{product.color}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Refresh Rate:</td>
                                                                                 <td className='Info-product_table'>{product.fps}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td></td>
                                                                                 <td className='Info-product_table'>-</td>
                                                                              </tr>
                                                                           </tbody>
                                                                        </table>
                                                                        <table>
                                                                           <thead>
                                                                              <tr>
                                                                                 <th>Details</th>
                                                                                 <th></th>
                                                                              </tr>
                                                                           </thead>
                                                                           <tbody>
                                                                              <tr>
                                                                                 <td>USB:</td>
                                                                                 <td className='Info-product_table'>{product.usbPort}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>C-Type:</td>
                                                                                 <td className='Info-product_table'>{product.cType}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Hdmi:</td>
                                                                                 <td className='Info-product_table'>{product.hdmiPort}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Ethernet:</td>
                                                                                 <td className='Info-product_table'>{product.ethernetPort}</td>
                                                                              </tr>
                                                                              <tr>
                                                                                 <td>Vga:</td>
                                                                                 <td className='Info-product_table'>{product.vgaPort}</td>
                                                                              </tr>
                                                                     <tr>
                                       <td></td>
                                       <td><button
                                             style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                style={{ color: '#fff'}} target='blank'
                                                href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                </tr>
                                                                           </tbody>
                                                                        </table>
                                                                                                             </div> </div> </div> <div
                                                                                                            style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                                                            <button onClick={()=> selectProduct(product._id)}
                                                                                                               style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                                           alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                                            background: '#03C04A'}}>
                                                                                                               <span className='Build_select_button'>Select</span>
                                                                                                            </button>
                                                                                       </div>
                                                      
                                                                                    </div>
                                                                                 </div>
                                                                                 )
                                                                                 }
                                                                                 })

                                                                                 const Accessory = Products.map((product, index) => {
                                                                                    if(product.buildProduct === 'BuildMouse' || product.buildProduct === 'BuildKeyboard' ||
                                                                                    product.buildProduct === 'BuildSpeaker') {
                                                                                    let selectId = product._id
                                                                                    return (
                                                                                       <div key={index} style={{ width: '480px', marginRight: '10px', marginBottom: '10px', height: '260px', display: 'flex', boxShadow: '2px 2px 2px 1px lightgray',
                                                                                       alignItems: 'center',padding: '0px 10px', border: '1px solid lightgray', borderRadius: '2px'}}>
                                                                                       <div style={{ width: '260px', height: '240px'}}>
                                                                                          <BuildImages images={product.images} />
                                                                                       </div>
                                                                                       <div
                                                                                          style={{ display: 'block', paddingLeft: '5px', paddingTop: '10px', height: '240px', width: '190px'}}>
                                                                                          <div style={{ display: 'block'}}>
                                                                                             <div style={{ width: '100%', display: 'flex', height: '100px', overflow: 'hidden'}}>
                                                                                                <div className='Build-cabinet_title'><a target='blank'
                                                                                                      href={`/royal/product/${product._id}`}> <span
                                                                                                      className='Build-cabinet_title'>{product.title}</span>
                                                                                                   </a></div>
                                                                                             </div>
                                                                                             <div style={{ paddingTop: '10px'}}>
                                                                                                <div style={{ display: 'flex'}}>
                                                                                                   <div className='Motherboard-product_more_click'>
                                                                                                      <span className='Motherboard-product_more_span' onClick={()=>
                                                                                                         viewSpecsSelect(product._id)} onMouseEnter={() => viewSpecsSelect(0)}
                                                                                                         >monitor</span>
                                                                                                   </div>
                                                                                                   <div style={{ marginLeft: '20px', marginTop: '5px'}}>
                                                                                                      <span className='Build-cabinet_price'>N$</span>
                                                                                                      <span style={{ marginLeft: '5px'}}
                                                                                                         className='Build-cabinet_price'>{product.price}</span>
                                                                                                   </div>
                                                                                                </div>
                                                               
                                                                                                <div className={viewSpecs===selectId ? "Case-product_ports_slots"
                                                                                                   :"Info-product_ports_slots-hide"}>
                                                                                             <table style={{ marginRight: '5px'}}>
                                                                                    <thead>
                                                                                       <tr>
                                                                                          <th>Info</th>
                                                                                          <th></th>
                                                                                       </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td>Display Size:</td>
                                                                                          <td className='Info-product_table'>{product.displaySize}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Resolution:</td>
                                                                                          <td className='Info-product_table'>{product.resolution}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Aspect Ratio:</td>
                                                                                          <td className='Info-product_table'>{product.aspectRatio}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Color:</td>
                                                                                          <td className='Info-product_table'>{product.color}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Refresh Rate:</td>
                                                                                          <td className='Info-product_table'>{product.fps}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td></td>
                                                                                          <td className='Info-product_table'>-</td>
                                                                                       </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                                 <table>
                                                                                    <thead>
                                                                                       <tr>
                                                                                          <th>Details</th>
                                                                                          <th></th>
                                                                                       </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                       <tr>
                                                                                          <td>USB:</td>
                                                                                          <td className='Info-product_table'>{product.usbPort}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>C-Type:</td>
                                                                                          <td className='Info-product_table'>{product.cType}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Hdmi:</td>
                                                                                          <td className='Info-product_table'>{product.hdmiPort}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Ethernet:</td>
                                                                                          <td className='Info-product_table'>{product.ethernetPort}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                          <td>Vga:</td>
                                                                                          <td className='Info-product_table'>{product.vgaPort}</td>
                                                                                       </tr>
                                                                              <tr>
                                                <td></td>
                                                <td><button
                                                      style={{ width: '90px', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '30px'}}><a
                                                         style={{ color: '#fff'}} target='blank'
                                                         href={`/royal/product/${product._id}`}>more info</a> </button> </td>
                                                         </tr>
                                                                                    </tbody>
                                                                                 </table>
                                                                                                                      </div> </div> </div> <div
                                                                                                                     style={{ width: '100%', height: '50px',marginTop: '40px', paddingLeft: '60px'}}>
                                                                                                                     <button onClick={()=> selectProduct(product._id)}
                                                                                                                        style={{ width: '100px', display: 'flex', justifyContent: 'center',
                                                                                                    alignItems: 'center', cursor: 'pointer', height: '40px', border: '4px solid #00BFFF', borderRadius: '5px',
                                                                                                     background: '#03C04A'}}>
                                                                                                                        <span className='Build_select_button'>Select</span>
                                                                                                                     </button>
                                                                                                </div>
                                                               
                                                                                             </div>
                                                                                          </div>
                                                                                          )
                                                                                          }
                                                                                          })

                           return (
                           <div className='Build-pc_container'>
                              <div className='Build-pc_box'>
                                 <div
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '30px', padding: '0px 10px'}}>
                                    <button className={toggleSelects===1
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(1)}
                                       >SETUP</button>
                                    <button className={toggleSelects===2
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(2)}
                                       >PROCESSOR</button>
                                    <button className={toggleSelects===3
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(3)}
                                       >GRAPHIC CARD</button>
                                    <button className={toggleSelects===4
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(4)}
                                       >MEMORY</button>
                                    <button className={toggleSelects===5
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(5)}
                                       >STORAGE</button>
                                    <button className={toggleSelects===6
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(6)}
                                       >POWER SUPPLY</button>
                                    <button className={toggleSelects===7
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(7)}
                                       >WINDOW (OS)</button>
                                    <button className={toggleSelects===8
                                       ? "active-Build-pc_button Build-pc_button_tabs " : "Build-pc_button_tabs" }
                                       onClick={()=>
                                       toggleSelectTabs(8)}
                                       >ACCESSORIES</button>
                                 </div>
                                 <div style={{ display: 'block', padding: '0px 10px'}}>
                                    <div className={toggleSelects===1 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                         <div
    style={{ width: '100%', padding: '10px 0px'}}>
    <div style={{width: '100%', height: '50px', display: 'flex', justifyContent: 'center'}}>
      <button  
      className={toggleNav===1 ? "Pctoggle_tab_button PcBoardtoggle_tab-active ": "Pctoggle_tab_button"}
      onClick={()=>
        toggleNavTab(1)}>
        <span>PC CASE</span>
      </button>
      <button
       className={toggleNav===2 ? "Boardtoggle_tab_button PcBoardtoggle_tab-active ": "Boardtoggle_tab_button"}
       onClick={()=>
        toggleNavTab(2)}
        >
        <span>MOTHERBOARD</span>
      </button>
    </div>
    <div style={{ width: '100%', paddingTop: '20px'}}>
      <div className={toggleNav===1 ? "ShowProfile_box": "ShowProfile_box-hide"}>
        <div style={{ width: '100%'}}>
        <div
            style={{ padding: '5px 0px 0px 7px', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
               {Cabinets}
         </div>
        </div>
      </div> 
      <div className={toggleNav===2 ? "ShowProfile_box": "ShowProfile_box-hide"}>
      <div style={{ padding: '10px', width: '100%', display: 'flex'}}>
         <div style={{ display: 'block'}}>
         <div style={{ padding: '0px 0px 0px 0px'}}>
                                             <div style={{ width: '100%', height: '35px'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>[DDR3] (Recommended platform) </span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '0px 0px 5px 0px', width: '100%'}}>
                                          {MotherboardsDDRThree}
                                       </div>
                                         </div>
                                          <div style={{ display: 'block'}}>
                                          <div style={{ padding: '0px 0px 0px 0px'}}>
                                             <div style={{ width: '100%', height: '35px'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>[DDR4] (Newer platform) </span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '0px 0px 5px 0px', width: '100%'}}>
                                          {MotherboardsDDRFour}
                                       </div>
                                          </div>
                                       </div>
                                      </div>
                                     </div>
 
                                      </div>
                                    </div>
                                    <div className={toggleSelects===2 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                       <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {Processors}
                                       </div>
                                    </div>
                                    <div className={toggleSelects===3 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                       <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {GraphicsCards}
                                       </div>
                                    </div>
                                    <div className={toggleSelects===4 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                       <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {Memory}
                                       </div>
                                    </div>
                                    <div className={toggleSelects===5 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                          <div style={{ padding: '10px 10px 0px 10px'}}>
                                             <div style={{ width: '100%', height: '35px', borderBottom: '4px solid orange'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>Select Hard Disk Drive/Drives (HHD) [Optional]</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {HardDisk}
                                       </div>
                                       <div style={{ padding: '10px 10px 0px 10px'}}>
                                             <div style={{ width: '100%', height: '35px', borderBottom: '4px solid orange'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>Select Solid State Drive (SSD) [Optional]</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {SolidState}
                                       </div>
                                       <div style={{ padding: '10px 10px 0px 10px'}}>
                                             <div style={{ width: '100%', height: '35px', borderBottom: '4px solid orange'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>Select NVMe SSD [Optional]</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {NvmeSsd}
                                       </div>
                                          
                                    </div>
                                    <div className={toggleSelects===6 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                       <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {PowerSupply}
                                       </div>
                                    </div>
                                    <div className={toggleSelects===7 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                       <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {Windows}
                                       </div>
                                    </div>
                                    <div className={toggleSelects===8 ? "Build-pc_Items_box"
                                       :"Build-pc_Items_box-hide"}>
                                          <div style={{ padding: '10px 10px 0px 10px'}}>
                                             <div style={{ width: '100%', height: '35px', borderBottom: '4px solid orange'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>Choose Monitor [Optional]</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {Monitor}
                                       </div>
                                          <div style={{ padding: '10px 10px 0px 10px'}}>
                                             <div style={{ width: '100%', height: '35px', borderBottom: '4px solid orange'}}>
                                             <span style={{ fontWeight: 'Bolder', fontSize: '20px', color: 'royalblue'}}>Choose Accessories [Optional]</span>
                                             </div>
                                          </div>
                                          <div
                                          style={{ padding: '10px 0px 0px 0px', width: '100%', display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
                                          {Accessory}
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div
                                 style={{ width: '320px', marginLeft: '15px'}}>
                                    <div style={{ width: '100%', display: 'flex', height: '60px'}}>
                                       <div style={{ height: '60px',display: 'flex', alignItems: 'center', paddingLeft: '5px',position: 'relative'}}>
                                       <span style={{ fontSize: '20px', fontWeight: 'bolder', color: '#fff'}}>TOTAL: N$ {Total}</span>
                                       </div>
                                       <div style={{ height: '60px',position: 'relative',display: 'flex', alignItems: 'center', paddingLeft: '30px'}}>
                                          <button onClick={showPcBuild} style={{ cursor: 'pointer',width: '70px', height: '25px',display: 'flex',border: '3px solid #fff', borderRadius: '10px',
                                          color: '#fff',outline: 'none', background: 'royalblue', alignItems: 'center', justifyContent: 'center',fontWeight: 'bolder'}}>
                                             {viewPc?
                                             <span>CLOSE</span>
                                             :
                                             <span>VIEW</span>
                                             }
                                          </button>
                                       </div>
                                       <div className={viewPc? "Show-pcBuild":"Show-pcBuild-hide"}>
                                       <div style={{ width: '1000px', height: '100%', display: 'block'}}>
                                                                                                <div style={{ width: '100%', height: '150px',display: 'flex', flexWrap: 'wrap',padding: '0px 10px'}}>
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildCabinet" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                   <button className={toggleImage===1 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(1)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === 'BuildMotherBoard DDR3'
                                                                                                   ||item.buildProduct === 'BuildMotherBoard DDR4' ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===2 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(2)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildProcessor" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===3 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(3)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildGraphics" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===4 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(4)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === 'BuildMemory DDR3' ||
                                                                                                   item.buildProduct === 'BuildMemory DDR4' ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===6 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(6)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildHDD" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===7 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(7)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildSataSSD" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===11 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(11)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildNVME" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===15 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(15)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div> 
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildPowersupply" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===19 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(19)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.product === "Windows" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===20 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(20)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildMonitor" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===21 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(21)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildKeyboard" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===22 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(22)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildMouse" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===23 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(23)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                   
                                                                                                   <div style={{ marginBottom: '5px', display: 'flex', marginRight: '10px'}}>
                                                                                                   {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildSpeaker" ?
                                                                                                   <div style={{ width: '65px', height: '65px', marginBottom: '5px', marginRight: '10px'}}>
                                                                                                      <button className={toggleImage===24 ? "Top-image_tabs_build active-Top-image_tabs_build" :"Top-image_tabs_build"}
                                                                                                         onMouseOver={()=> toggleImageTab(24)}><img className='Top-img_pcbuild'
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </button>
                                                                                                   </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                   </div>
                                                                                                   
                                                                                                </div>
                                                                                                <div style={{ width: '100%', display: 'flex', marginBottom: '10px'}}>
                                                                                                   <div style={{  width: '600px', height: '340px', padding: '20px 50px 10px 50px', borderTop: '3px solid #e7e7e7'}}>
                                                                                                      <div className={toggleImage===1 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildCabinet" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===2 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === 'BuildMotherBoard DDR3'
                                                                                                   ||item.buildProduct === 'BuildMotherBoard DDR4'?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===3 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildProcessor" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===4 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildGraphics" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===6 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === 'BuildMemory DDR3' ||
                                                                                                   item.buildProduct === 'BuildMemory DDR4'?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===7 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildHDD" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===11 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildSataSSD" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===15 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildNVME" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===19 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildPowersupply" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===20 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.product === "Windows" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===21 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildMonitor" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===22 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildKeyboard" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===23 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildMouse" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                      <div className={toggleImage===24 ? "active-Main-image_tabs_build active-Main-image_tabs_build-flex" :"Main-image_tabs_build"}>
                                                                                                      {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                                                                                      <>
                                                                                                   {item.buildProduct === "BuildSpeaker" ?
                                                                                                   <div style={{ width: '100%', height: '100%'}}>
                                                                                                   <div className="active-Main-image_tabs_build"
                                                                                                      ><img style={{ width: '100%', height: '100%'}}
                                                                                                         src={`http://localhost:5000/${item.images[0]}`}
                                                                                                         />
                                                                                                      </div>
                                                                                                      </div>
                                                                                                   :
                                                                                                   <></>
                                                                                                   }
                                                                                                      </>
                                                                                                   ))
                                                                                                   }  
                                                                                                      </div>
                                                                                                   </div>
                     <div style={{ width: '400px', minHeight: '340px', borderTop: '3px solid #e7e7e7', padding: '10px 5px 0px 0px'}}>
                        <table >
                           <thead>
                              <tr>
                                 <th>SPECIFICATIONS</th>
                                 <th><button
                                 onClick={showInfo}
                                             style={{ width: '150px', float: 'right', fontWeight: 'bolder', borderRadius: '5px', border: '2px solid #fff', background: 'inherit', height: '25px'}}><a
                                                style={{ color: '#fff', fontSize: '12px'}}>
                                                   {toggleInfo? 
                                                      <span>Hide Ports & Slots</span>
                                                      :
                                                      <span>Show Ports & Slots</span>
                                                   }
                                                   </a> </button> </th>
                              </tr>
                           </thead>

                           {toggleInfo? 
                        <tbody >
                           <tr>
                              <td>
                                 <div style={{ display: 'flex'}}>
                                    <div>Ram Slots:</div>
                                    <div className='tbody-right'>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.ramBus}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>Motherboard USB:</div>
                                    <div style={{ paddingLeft: '13px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.usbPort}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>HDD Slots:</div>
                                    <div className='tbody-right'>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildCabinet" ?
                                       <div>
                                          {item.hddCount}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>C-Type:</div>
                                    <div style={{ paddingLeft: '85px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildCabinet" ?
                                       <div>
                                          {item.cType}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>SSD Slots:</div>
                                    <div className='tbody-right'>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildCabinet" ?
                                       <div>
                                          {item.ssdCount}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>HDMI Ports:</div>
                                    <div style={{ paddingLeft: '57px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.hdmiPort}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>NVMe Slots:</div>
                                    <div style={{ paddingLeft: '50px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.nvmeBus}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>Ethernet Ports:</div>
                                    <div style={{ paddingLeft: '35px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.ethernetPort}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>

                           </tr>
                           <tr>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>Sata Pins:</div>
                                    <div style={{ paddingLeft: '65px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildPowersupply" ?
                                       <div>
                                          {item.sataCount}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>VGA Ports:</div>
                                    <div style={{ paddingLeft: '62px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMotherBoard DDR3" || item.buildProduct === "BuildMotherBoard DDR4" ?
                                       <div>
                                          {item.vgaPort}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>Cabinet USB:</div>
                                    <div style={{ paddingLeft: '43px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildCabinet" ?
                                       <div>
                                          {item.usbPort}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                              </td>
                              <td>
                              <div style={{ display: 'flex'}}>
                                    <div>DVD Drive:</div>
                                    <div style={{ paddingLeft: '62px'}}>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildCabinet" ?
                                       <div>
                                          {item.dvdDrive}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                    </div>
                                 </div>
                                 </td>
                           </tr>
                        </tbody>
                           :
                           <tbody>
                              <tr>
                                 <td>Processor:</td>
                                 <td className='Build-product_table-right'>
                                    {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildProcessor" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>

                              </tr>
                              <tr>
                                 <td>Graphics Card:</td>
                                 <td className='Build-product_table-right'>
                                 {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildGraphics" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>
                              </tr>
                              <tr>
                                 <td>Memory:</td>
                                 <td className='Build-product_table-right'>
                                 {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildMemory DDR3" || item.buildProduct === "BuildMemory DDR4" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>
                              </tr>
                              <tr>
                                 <td>Storage:</td>
                                 <td className='Build-product_table-right'>
                                 {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildHDD" || item.buildProduct === "BuildSataSSD"
                                       || item.buildProduct === "BuildNVME" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>
                              </tr>
                              <tr>
                                 <td>Power Supply:</td>
                                 <td className='Build-product_table-right'>
                                 {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.buildProduct === "BuildPowersupply" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>
                              </tr>
                              <tr>
                                 <td>Window:</td>
                                 <td className='Build-product_table-right'>
                                 {props.user.pcBuildDetail && props.user.pcBuildDetail.map(item => (
                                       <>
                                       {item.product === "Windows" ?
                                       <div>
                                          {item.modelName}
                                       </div>
                                       :
                                       <></>
                                       }
                                          </>
                                    ))}
                                 </td>
                              </tr>
                           </tbody>
                           }
                        </table>
                                                                                                   </div>
                                                                                                </div>
                                                                                                <div style={{ width: '100%', display: 'flex', padding: '10px 30px'}}>
                                                                                                   <div>
                                                                                                      <button style={{ cursor: 'pointer',width: '200px', height: '50px',display: 'flex',border: '4px solid #00BFFF', borderRadius: '10px',
                                                                                                        color: '#fff',outline: 'none', background: 'orange', alignItems: 'center', justifyContent: 'center',fontWeight: 'bolder'}}>Buy Your Pc Build Online</button>

                                                                                                   </div>
                                                                                                   <div style={{ marginLeft: '70px'}}>
                                                                                                      <button style={{ cursor: 'pointer',width: '200px', height: '50px',display: 'flex',border: '4px solid orange', borderRadius: '10px',
                                                                                                        color: '#fff',outline: 'none', background: '#00BFFF', alignItems: 'center', justifyContent: 'center',fontWeight: 'bolder'}}>Print Your Pc Build Details</button>

                                                                                                   </div>
                                                                                                   <div style={{ width: '440px', lineHeight: '1.2', padding: '0px 20px'}}>
                                                                                                      <span style={{ fontWeight: 'bolder', fontSize: '12px', color: 'orange'}}>If you PRINT YOUR PC DETAILS: you will get a
                                                                                                       detailed list of all the Components that are in your Pc Build. You can use the print out page to go and order you Pc at any Local Royal Computers Branch.</span>
                                                                                                   </div>

                                                                                                </div>
                                                                                                {/* <div style={{ width: '100%', height: '600px', border: '1px solid red', marginTop: '20px'}}>
                                                                                                
                                                                                                </div> */}
                                                                                             </div>
                                       </div>

                                    </div>
                                    <div style={{width: '100%', height: '500px', background: '#1380e7',
                                    border: '2px solid #1380e7',borderTopLeftRadius: '50px',borderBottomLeftRadius: '5px'}}>
                                 <div
                                    style={{ width: '100%', marginBottom: '20px', display: 'flex', paddingTop: '25px', justifyContent: 'center', alignItems: 'center'}}>
                                    <span className='Your-build_span'>YOUR BUILD</span>
                                 </div>
                                 <div style={{ displa: 'block'}}>
                                    <div className='Build-select_listings'>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildCabinet' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block', padding: '5px 0px 5px 5px', 
                                                listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                             <div
                                                style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                                <span className='Your-build_listings'>{item.title}</span>
                                             </div>
                                             <div style={{ width: '100%', display: 'flex'}}>
                                                <div style={{ display: 'flex', width: '210px'}}>
                                                   <div
                                                      style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                                      <button style={{ height: '20px',
                                                border: 'none', borderRadius: '5px',
                                                background: '#03C04A',
                                                 display: 'flex',
                                                  alignItems: 'center'}}>
                                                   <span
                                                         style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                                      <span>PC CASING</span>
                                                   </span>
                                                      </button>
                                                   </div>
                                                   <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                                      <span
                                                         style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                         {item.price}</span>
                                                   </div>
                                                </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildMotherBoard DDR3'
                                             ||item.buildProduct === 'BuildMotherBoard DDR4'  ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>MOTHERBOARD</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildProcessor' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>PROCESSOR</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildGraphics' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>GRAPHICS CARD</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildMemory DDR3' || 
                                             item.buildProduct === 'BuildMemory DDR4'  ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>MEMORY</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildHDD' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>HDD</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildSataSSD' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>SATA SSD</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildNVME' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>NVMe SSD</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildPowersupply' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>POWER SUPPLY</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.product === 'Windows' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>WINDOW</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildMonitor'  ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>MONITOR</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                       <div>
                                          {props.user.pcBuildDetail && props.user.pcBuildDetail.map( item => (
                                             <>
                                             {item.buildProduct === 'BuildMouse' || item.buildProduct === 'BuildKeyboard' 
                                             || item.buildProduct === 'BuildSpeaker' ?
                                       <div style={{marginBottom: '8px', width: '100%',display: 'block',padding: '5px 0px 5px 5px', 
                                       listStyle: 'none',borderBottom: '2px solid #fff'}}>
                                    <div
                                       style={{width: '100%', height: '30px',paddingRight: '2px', overflow: 'hidden',lineHeight: '1.0'}}>
                                       <span className='Your-build_listings'>{item.title}</span>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex'}}>
                                       <div style={{ display: 'flex', width: '210px'}}>
                                          <div
                                             style={{ padding: '5px 0px 1px 0px', width: '90px', overflow: 'hidden'}}>
                                             <button style={{ height: '20px',
                                       border: 'none', borderRadius: '5px',
                                       background: '#03C04A',
                                        display: 'flex',
                                         alignItems: 'center'}}>
                                          <span
                                                style={{ padding: '0px 5px',fontWeight: 'bolder', color: '#fff', fontSize: '10px'}}>
                                             <span>ACCESSORY</span>
                                          </span>
                                             </button>
                                          </div>
                                          <div style={{ padding: '4px 0px 0px 15px', marginLeft: '10px'}}>
                                             <span
                                                style={{fontWeight: 'bolder', color: '#fff', fontSize: '14px'}}>N$
                                                {item.price}</span>
                                          </div>
                                       </div>
                                                <div style={{ padding: '5px 0px 1px 0px'}}>
                                                   <button onClick={()=> removeFromPcBuild(item._id)} style={{ height: '20px', width: '60px',
                                                borderRadius: '3px',
                                                border: 'none', cursor: 'pointer',
                                                background: 'red',
                                                 display: 'flex', justifyContent: 'center',
                                                  alignItems: 'center'}}><span
                                                         style={{ fontWeight: 'bolder', color: '#fff', fontSize: '13px'}}>remove</span></button>
                                                </div>
                                             </div>
                                          </div>
                                             :
                                             <></>
                                          }
                                          </>
                                          ))
                                          }
                                       </div>
                                    </div>
                                 </div>
                                    </div>
                              </div>
                           </div>
                           )
                           }

                           export default BuildPc