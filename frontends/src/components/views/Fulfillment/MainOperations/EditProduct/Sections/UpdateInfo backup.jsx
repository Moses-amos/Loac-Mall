import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';

import "../EditStyle.css"

function UpdateInfo(props) {
const [Product, setProduct] = useState({})
const [TitleValue, setTitleValue] = useState("")
const [SpecificationValue, setSpecificationValue] = useState("")
const [PriceValue, setPriceValue] = useState("")
const [PriceWasValue, setPriceWasValue] = useState()
const [SpecialPercent, setSpecialPercent] = useState("")
const [WarrentyValue, setWarrentyValue] = useState("")
const [ProductType, setProductType] = useState("")
const [PageRef, setPageRef] = useState("")
const [PcBuild, setPcBuild] = useState("")
const [selectWarrenty, setselectWarrenty] = useState(false)

const [ProcessorName, setProcessorName] = useState("")
const [ProcessorFrequency, setProcessorFrequency] = useState("")
const [GraphicsCardName, setGraphicsCardName] = useState("")
const [VramValue, setVramValue] = useState("")
const [CoreValue, setCoreValue] = useState("")
const [GraphicsCardGenerationValue, setGraphicsCardGenerationValue] = useState("")
const [MemoryValue, setMemoryValue] = useState("")
const [ArrangementValue, setArrangementValue] = useState("")
const [MemoryGenerationValue, setMemoryGenerationValue] = useState("")
const [HardDiskValue, setHardDiskValue] = useState("")
const [SolidStateValue, setSolidStateValue] = useState("")
const [NVMeValue, setNVMeValue] = useState("")
const [OSName, setOSName] = useState("")
const [Inclusions, setInclusions] = useState("")
const [MotherboardName, setMotherboardName] = useState("")
const [PowerSupplyName, setPowerSupplyName] = useState("")
const [WifiModule, setWifiModule] = useState("")
const [EthernetPortValue, setEthernetPortValue] = useState("")
const [USBPortValue, setUSBPortValue] = useState("")
const [DisplayPortValue, setDisplayPortValue] = useState("")
const [VGAPortValue, setVGAPortValue] = useState("")
const [PCIExpress, setPCIExpress] = useState("")
const [HDMIPortValue, setHDMIPortValue] = useState("")
const [RamSlotValue, setRamSlotValue] = useState("")
const [ModelName, setModelName] = useState("")
const [Resolution, setResolution] = useState("")
const [AspectRatio, setAspectRatio] = useState("")
const [DisplaySize, setDisplaySize] = useState("")
const [ColorValue, setColorValue] = useState("")
const [ResolutionType, setResolutionType] = useState("")
const [RefreshRate, setRefreshRate] = useState("")
const [ThreeDValue, setThreeDValue] = useState("")
const [BrandValue, setBrandValue] = useState("")
const [CTypeValue, setCTypeValue] = useState("")
const [SDSlotValue, setSDSlotValue] = useState("")
const [MemorySpeed, setMemorySpeed] = useState("")
const [CompatibleDevice, setCompatibleDevice] = useState("")
const [FanCount, setFanCount] = useState("")
const [DisplayVia, setDisplayVia] = useState("")
const [BusStandard, setBusStandard] = useState("")
const [GraphicsSpeed, setGraphicsSpeed] = useState("")
const [Wattage, setWattage] = useState("")
const [Manufacturer, setManufacturer] = useState("")
const [ThreadCount, setThreadCount] = useState("")
const [CPUStatus, setCPUStatus] = useState("")
const [MaxMemory, setMaxMemory] = useState("")
const [MemoryBandwidth, setMemoryBandwidth] = useState("")
const [IntegratedGraphics, setIntegratedGraphics] = useState("")
const [SupportedWindows, setSupportedWindows] = useState("")
const [CompatibleMotherboards, setCompatibleMotherBoards] = useState("")
const [SeriesName, setSeriesName] = useState("")
const [CPUSocket, setCPUSocket] = useState("")
const [ChipsetType, setChipsetType] = useState("")
const [ConnectorType, setConnectorType] = useState("")
const [WeightValue, setWeightValue] = useState("")
const [SataCount, setSataCount] = useState("")
const [TwentyPlus, setTwentyPlus] = useState("")
const [Molex, setMolex] = useState("")
const [Floppy, setFloppy] = useState("")
const [FourPin, setFourPin] = useState("")
const [SixPin, setSixPin] = useState("")
const [SpecialAttribute, setSpecialAttribute] = useState("")
const [Dimensions, setDimensions] = useState("")
const [HDDSlotCount, setHDDSlotCount] = useState("")
const [SSDSlotCount, setSSDSlotCount] = useState("")
const [Functions, setFunctions] = useState("")
const [InputTrayCapacity, setInputTrayCapacity] = useState("")
const [OutputTrayCapacity, setOutputTrayCapacity] = useState("")
const [CompatibleBlackInks, setCompatibleBlackInks] = useState("")
const [CompatibleColorInks, setCompatibleColorInks] = useState("")
const [StockedInk, setStockedInk] = useState("")
const [MonoPrint, setMonoPrint] = useState("")
const [ColorPrint, setColorPrint] = useState("")
const [CompatibleModel, setCompatibleModel] = useState("")
const [CableLenght, setCableLenght] = useState("")
const [Interface, setInterface] = useState("")
const [CableType, setCableType] = useState("")
const [ConnectorGender, setConnectorGender] = useState("")
const [TransferRate, setTransferRate] = useState("")
const [BodyCover, setBodyCover] = useState("")
const [StorageCapacity, setStorageCapacity] = useState("")
const [HardwareInterface, setHardwareInterface] = useState("")
const [DiskStorageValue, setDiskStorageValue] = useState("")
const [PageYield, setPageYield] = useState("")
const [SataPinCount, setSataPinCount] = useState("")
const [HDDInsert, setHDDInsert] = useState("")
const [SSDInsert, setSSDInsert] = useState("")
const [NVMeSlotCount, setNVMeSlotCount] = useState("")
const [MtwoValue, setMtwoValue] = useState("")
const [DVIValue, setDVIValue] = useState("")
const [PowerConnector, setPowerConnector] = useState("")
const [RamBusCount, setRamBusCount] = useState("")
const [NVMeBusCount, setNVMeBusCount] = useState("")
const [DVDDriveValue, setDVDDriveCount] = useState("")
const [HddCount, setHddCount] = useState("")
const [SsdCount, setSsdCount] = useState("")
const [GenderedItem, setGenderedItem] = useState("")
const [PowerSource, setPowerSource] = useState("")
const [Voltage, setVoltage] = useState("")
const [FeatureCount, setFeatureCount] = useState("")

const [SellerInfo, setSellerInfo] = useState("")
const [savedClick, setsavedClick] = useState(false)
const clickSave = () => setsavedClick(!savedClick)

function refreshPage() {
  window.location.reload(false);
}

useEffect(() => {

setProduct(props.detail)
Axios.get('/api/users/getUser')
.then(response => {
    if (response.data.success) {
    //   (response.data.doc);
      setSellerInfo(response.data.doc)
    }
})
}, [props.detail])


const UpdateProduct = () => {

const variables = {
productId: props.productId,
title: TitleValue === "" ? Product.title : TitleValue,
description: SpecificationValue === "" ? Product.description : SpecificationValue,
sellerId: SellerInfo._id,
retailerImage: SellerInfo.profileImage,
Walvis: SellerInfo.Walvis,
Swakop: SellerInfo.Swakop,
Windhoek: SellerInfo.Windhoek,
KatimaMulilo: SellerInfo.KatimaMulilo,
Grootfontein: SellerInfo.Grootfontein,
Rundu: SellerInfo.Rundu,
Otjiwarongo: SellerInfo.Otjiwarongo,
Oshakati: SellerInfo.Oshakati,
Okahandja: SellerInfo.Okahandja,
Gobabis: SellerInfo.Gobabis,
Rehoboth: SellerInfo.Rehoboth,
Ongwediva: SellerInfo.Ongwediva,
Ondangwa: SellerInfo.Ondangwa,
Tsumeb: SellerInfo.Tsumeb,
price: PriceValue === "" ? Product.price : PriceValue,
wasPrice: PriceWasValue === undefined ? Product.wasPrice : PriceWasValue,
special: SpecialPercent === "" ? Product.special : SpecialPercent,
warrenty: WarrentyValue === "" ? Product.warrenty : WarrentyValue,
product: ProductType === "" ? Product.product : ProductType,
location: PageRef === "" ? Product.location : PageRef,
buildProduct: PcBuild === "" ? Product.buildProduct : PcBuild,
processorName: ProcessorName === "" ? Product.processorName : ProcessorName,
processorFrequency: ProcessorFrequency === "" ? Product.processorFrequency : ProcessorFrequency,
graphicsCardName: GraphicsCardName === "" ? Product.graphicsCardName : GraphicsCardName,
vRam: VramValue === "" ? Product.vRam : VramValue,
coreCount: CoreValue === "" ? Product.coreCount : CoreValue,
graphicsCardGeneration: GraphicsCardGenerationValue === "" ? Product.graphicsCardGeneration :
GraphicsCardGenerationValue,
ram: MemoryValue === "" ? Product.ram : MemoryValue,
displayPort: DisplayPortValue === "" ? Product.displayPort : DisplayPortValue,
ramArrangement: ArrangementValue === "" ? Product.ramArrangement : ArrangementValue,
ramGeneration: MemoryGenerationValue === "" ? Product.ramGeneration : MemoryGenerationValue,
hardDisk: HardDiskValue === "" ? Product.hardDisk : HardDiskValue,
ssd: SolidStateValue === "" ? Product.ssd : SolidStateValue,
nvme: NVMeValue === "" ? Product.nvme : NVMeValue,
operatingSystem: OSName === "" ? Product.operatingSystem : OSName,
inclusions: Inclusions === "" ? Product.inclusions : Inclusions,
motherboard: MotherboardName === "" ? Product.motherboard : MotherboardName,
powerSupply: PowerSupplyName === "" ? Product.powerSupply : PowerSupplyName,
wifiModule: WifiModule === "" ? Product.wifiModule : WifiModule,
ethernetPort: EthernetPortValue === "" ? Product.ethernetPort : EthernetPortValue,
usbPort: USBPortValue === "" ? Product.usbPort : USBPortValue,
vgaPort: VGAPortValue === "" ? Product.vgaPort : VGAPortValue,
pciPort: PCIExpress === "" ? Product.pciPort : PCIExpress,
hdmiPort: HDMIPortValue === "" ? Product.hdmiPort : HDMIPortValue,
ramSlot: RamSlotValue === "" ? Product.ramSlot : RamSlotValue,
modelName: ModelName === "" ? Product.modelName : ModelName,
resolution: Resolution === "" ? Product.resolution : Resolution,
aspectRatio: AspectRatio === "" ? Product.aspectRatio : AspectRatio,
displaySize: DisplaySize === "" ? Product.displaySize : DisplaySize,
color: ColorValue === "" ? Product.color : ColorValue,
resolutionType: ResolutionType === "" ? Product.resolutionType : ResolutionType,
fps: RefreshRate === "" ? Product.fps : RefreshRate,
threeD: ThreeDValue === "" ? Product.threeD : ThreeDValue,
brand: BrandValue === "" ? Product.brand : BrandValue,
cType: CTypeValue === "" ? Product.cType : CTypeValue,
sdCardSlot: SDSlotValue === "" ? Product.sdCardSlot : SDSlotValue,
ramSpeed: MemorySpeed === "" ? Product.ramSpeed : MemorySpeed,
compatibleDevice: CompatibleDevice === "" ? Product.compatibleDevice : CompatibleDevice,
fan: FanCount === "" ? Product.fan : FanCount,
displayVia: DisplayVia === "" ? Product.displayVia : DisplayVia,
busStandard: BusStandard === "" ? Product.busStandard : BusStandard,
graphicsCardSpeed: GraphicsSpeed === "" ? Product.graphicsCardSpeed : GraphicsSpeed,
wattage: Wattage === "" ? Product.wattage : Wattage,
manufacturer: Manufacturer === "" ? Product.manufacturer : Manufacturer,
threads: ThreadCount === "" ? Product.threads : ThreadCount,
cpuUnlock: CPUStatus === "" ? Product.cpuUnlock : CPUStatus,
maxRam: MaxMemory === "" ? Product.maxRam : MaxMemory,
ramBandwidth: MemoryBandwidth === "" ? Product.ramBandwidth : MemoryBandwidth,
integratedGraphics: IntegratedGraphics === "" ? Product.integratedGraphics : IntegratedGraphics,
supportedOS: SupportedWindows === "" ? Product.supportedOS : SupportedWindows,
compatibleMotherboards: CompatibleMotherboards === "" ? Product.compatibleMotherboards : CompatibleMotherboards,
seriesName: SeriesName === "" ? Product.seriesName : SeriesName,
cpuSocket: CPUSocket === "" ? Product.cpuSocket : CPUSocket,
chipsetType: ChipsetType === "" ? Product.chipsetType : ChipsetType,
connectorType: ConnectorType === "" ? Product.connectorType : ConnectorType,
weight: WeightValue === "" ? Product.weight : WeightValue,
sataCount: SataCount === "" ? Product.sataCount : SataCount,
fourPinCount: FourPin === "" ? Product.fourPinCount : FourPin,
sixPinCount: SixPin === "" ? Product.sixPinCount : SixPin,
twentyPlusCount: TwentyPlus === "" ? Product.twentyPlusCount : TwentyPlus,
molexCount: Molex === "" ? Product.molexCount : Molex,
floppyCount: Floppy === "" ? Product.floppyCount : Floppy,
specialAttribute: SpecialAttribute === "" ? Product.specialAttribute : SpecialAttribute,
dimensions: Dimensions === "" ? Product.dimensions : Dimensions,
hddSlots: HDDSlotCount === "" ? Product.hddSlots : HDDSlotCount,
ssdSlots: SSDSlotCount === "" ? Product.ssdSlots : SSDSlotCount,
functions: Functions === "" ? Product.functions : Functions,
inputTray: InputTrayCapacity === "" ? Product.inputTray : InputTrayCapacity,
outputTray: OutputTrayCapacity === "" ? Product.outputTray : OutputTrayCapacity,
compatibleBlackInks: CompatibleBlackInks === "" ? Product.compatibleBlackInks : CompatibleBlackInks,
compatibleColorInks:CompatibleColorInks === "" ? Product.compatibleColorInks : CompatibleColorInks,
stockedInk: StockedInk === "" ? Product.stockedInk : StockedInk,
monoPrint: MonoPrint === "" ? Product.monoPrint : MonoPrint,
colorPrint: ColorPrint === "" ? Product.colorPrint : ColorPrint,
compatibleModel: CompatibleModel === "" ? Product.compatibleModel : ColorValue,
cableLenght: CableLenght === "" ? Product.cableLenght : CableLenght,
interface: Interface === "" ? Product.interface : Interface,
cableType: CableType === "" ? Product.cableType : CableType,
gender: ConnectorGender === "" ? Product.gender : ConnectorGender,
transferRate: TransferRate === "" ? Product.transferRate : TransferRate,
bodyCover: BodyCover === "" ? Product.bodyCover : BodyCover,
storageCapacity: StorageCapacity === "" ? Product.storageCapacity : StorageCapacity,
hardwareInterface: HardwareInterface === "" ? Product.hardwareInterface : HardwareInterface,
diskStorage: DiskStorageValue === "" ? Product.diskStorage : DiskStorageValue,
pageYield: PageYield === "" ? Product.pageYield : PageYield,
sataPin: SataPinCount === "" ? Product.sataPin : SataPinCount,
hddInsert: HDDInsert === "" ? Product.hddInsert : HDDInsert,
ssdInsert: SSDInsert === "" ? Product.ssdInsert : SSDInsert,
nvmeSlot: NVMeSlotCount === "" ? Product.nvmeSlot : NVMeSlotCount,
mdotTwo: MtwoValue === "" ? Product.mdotTwo : MtwoValue,
powerConnector: PowerConnector === "" ? Product.powerConnector : PowerConnector,
dviPort: DVIValue === "" ? Product.dviPort : DVIValue,
ramBus: RamBusCount === "" ? Product.ramBus : RamBusCount,
hddCount: HddCount === "" ? Product.hddCount : HddCount,
ssdCount: SsdCount === "" ? Product.ssdCount : SsdCount,
dvdDrive: DVDDriveValue === "" ? Product.dvdDrive : DVDDriveValue,
powerSource: PowerSource === "" ? Product.powerSource : PowerSource,
voltage: Voltage === "" ? Product.voltage : Voltage,
featureCount: FeatureCount === "" ? Product.featureCount : FeatureCount,
genderCategory: GenderedItem === "" ? Product.genderCategory : GenderedItem,
powerSource: PowerSource === "" ? Product.powerSource : PowerSource,
featureCount: FeatureCount === "" ? Product.featureCount : FeatureCount,


}

Axios.post('/api/product/getProduct', variables)
.then(response => {
if(response.data.success) {
  refreshPage()
}
}, [])
}

const onVoltageChange = (event) => {
  setVoltage(event.currentTarget.value)
  }

  const onFeatureChange = (event) => {
    setFeatureCount(event.currentTarget.value)
    }
  
  const onGenderItemChange = (event) => {
    setGenderedItem(event.currentTarget.value)
  }

  const onPowerSourceChange = (event) => {
    setPowerSource(event.currentTarget.value)
  }

const onTitleChange = (event) => {
setTitleValue(event.currentTarget.value)
}

const onPriceChange = (event) => {
setPriceValue(event.currentTarget.value)
}

const onPriceWasChange = (event) => {
setPriceWasValue(event.currentTarget.value)
}

const onSpecialChange = (event) => {
  setSpecialPercent(event.currentTarget.value)
  }

// const onWarrentyChange = (event) => {
// setWarrentyValue(event.currentTarget.value)
// }

const onProductTypeChange = (event) => {
setProductType(event.currentTarget.value)
}

const onProductLocation = (event) => {
setPageRef(event.currentTarget.value)
}


const onProcessorNameChange = (event) => {
setProcessorName(event.currentTarget.value)
}

const onProcessorFrequency = (event) => {
setProcessorFrequency(event.currentTarget.value)
}

const onCoreValueChange = (event) => {
setCoreValue(event.currentTarget.value)
}

const onGraphicsCardName = (event) => {
setGraphicsCardName(event.currentTarget.value)
}

const onVramValueChange = (event) => {
setVramValue(event.currentTarget.value)
}

const onGraphicsCardGenerationChange = (event) => {
setGraphicsCardGenerationValue(event.currentTarget.value)
}
const onMemoryChange = (event) => {
setMemoryValue(event.currentTarget.value)
}

const onBuildPc = (event) => {
  setPcBuild(event.currentTarget.value)
  }


const onArrangementChange = (event) => {
setArrangementValue(event.currentTarget.value)
}

const onMemoryGeneration = (event) => {
setMemoryGenerationValue(event.currentTarget.value)
}

const onHardDiskChange = (event) => {
setHardDiskValue(event.currentTarget.value)
}

const onSolidStateChange = (event) => {
setSolidStateValue(event.currentTarget.value)
}

const onNVMeChange = (event) => {
setNVMeValue(event.currentTarget.value)
}

const onOSChange = (event) => {
setOSName(event.currentTarget.value)
}

const onInclusionsChange = (event) => {
setInclusions(event.currentTarget.value)
}

const onMotherboardNameChange = (event) => {
setMotherboardName(event.currentTarget.value)
}

const onPowerSupplyNameChange = (event) => {
setPowerSupplyName(event.currentTarget.value)
}

const onWifiModuleChange = (event) => {
setWifiModule(event.currentTarget.value)
}

const onEthernetPortChange = (event) => {
setEthernetPortValue(event.currentTarget.value)
}

const onUSBPortChange = (event) => {
setUSBPortValue(event.currentTarget.value)
}

const onSixPinChange = (event) => {
  setSixPin(event.currentTarget.value)
  }

const onPCISlotChange = (event) => {
setPCIExpress(event.currentTarget.value)
}

const onVGAPortChange = (event) => {
setVGAPortValue(event.currentTarget.value)
}

const onHDMIPortChange = (event) => {
setHDMIPortValue(event.currentTarget.value)
}

const onRamSlotChange = (event) => {
setRamSlotValue(event.currentTarget.value)
}

const onModelNameChange = (event) => {
setModelName(event.currentTarget.value)
}

const onResolutionChange = (event) => {
setResolution(event.currentTarget.value)
}

const onAspectRatioChange = (event) => {
setAspectRatio(event.currentTarget.value)
}

const onDisplaySizeChange = (event) => {
setDisplaySize(event.currentTarget.value)
}

const onColorValueChange = (event) => {
setColorValue(event.currentTarget.value)
}

const onResolutionTypeChange = (event) => {
setResolutionType(event.currentTarget.value)
}

const onRefreshRateChange = (event) => {
setRefreshRate(event.currentTarget.value)
}

const onThreeDChange = (event) => {
setThreeDValue(event.currentTarget.value)
}

const onBrandChange = (event) => {
setBrandValue(event.currentTarget.value)
}

const onCTypeChange = (event) => {
setCTypeValue(event.currentTarget.value)
}

const onSDSlotChange = (event) => {
setSDSlotValue(event.currentTarget.value)
}

const onCompatibleDevice = (event) => {
setCompatibleDevice(event.currentTarget.value)
}

const onMemorySpeedChange = (event) => {
setMemorySpeed(event.currentTarget.value)
}

const onFanCountChange = (event) => {
setFanCount(event.currentTarget.value)
}

const onDisplayViaChange = (event) => {
setDisplayVia(event.currentTarget.value)
}

const onGraphicsSpeed = (event) => {
setGraphicsSpeed(event.currentTarget.value)
}

const onWattageChange = (event) => {
setWattage(event.currentTarget.value)
}

const onManufacturerChange = (event) => {
setManufacturer(event.currentTarget.value)
}

const onThreadCountChange = (event) => {
setThreadCount(event.currentTarget.value)
}


const onCPUStatusChange = (event) => {
setCPUStatus(event.currentTarget.value)
}

const onMaxMemory = (event) => {
setMaxMemory(event.currentTarget.value)
}

const onMemoryBandwidth = (event) => {
setMemoryBandwidth(event.currentTarget.value)
}

const onIntegratedGraphicsChange = (event) => {
setIntegratedGraphics(event.currentTarget.value)
}

const onSupportedWindows = (event) => {
setSupportedWindows(event.currentTarget.value)
}

const onCompatibleMotherboards = (event) => {
setCompatibleMotherBoards(event.currentTarget.value)
}

const onSeriesNameChange = (event) => {
setSeriesName(event.currentTarget.value)
}

const onCPUSocketChange = (event) => {
setCPUSocket(event.currentTarget.value)
}

const onChipsetType = (event) => {
setChipsetType(event.currentTarget.value)
}

const onConnectorTypeChange = (event) => {
setConnectorType(event.currentTarget.value)
}

const onWeightValueChange = (event) => {
setWeightValue(event.currentTarget.value)
}

const onSataCountChange = (event) => {
setSataCount(event.currentTarget.value)
}

const onTwentyPlusChange = (event) => {
setTwentyPlus(event.currentTarget.value)
}

const onMolexChange = (event) => {
setMolex(event.currentTarget.value)
}

const onFloppyChange = (event) => {
setFloppy(event.currentTarget.value)
}

const onFourPinChange = (event) => {
setFourPin(event.currentTarget.value)
}

const onSpecialAttributeChange = (event) => {
setSpecialAttribute(event.currentTarget.value)
}

const onDimensionsChange = (event) => {
setDimensions(event.currentTarget.value)
}

const onCompatibleBlackInksChange = (event) => {
setCompatibleBlackInks(event.currentTarget.value)
}

const onCompatibleColorInksChange = (event) => {
setCompatibleColorInks(event.currentTarget.value)
}

const onStockedInkChange = (event) => {
setStockedInk(event.currentTarget.value)
}

const onMonoPrintChange = (event) => {
setMonoPrint(event.currentTarget.value)
}

const onColorPrintChange = (event) => {
setColorPrint(event.currentTarget.value)
}

const onHDDSlotChange = (event) => {
setHDDSlotCount(event.currentTarget.value)
}

const onSSDSlotChange = (event) => {
setSSDSlotCount(event.currentTarget.value)
}

const onFunctionsChange = (event) => {
setFunctions(event.currentTarget.value)
}

const onInputTrayCapacityChange = (event) => {
setInputTrayCapacity(event.currentTarget.value)
}

const onOutputTrayCapacityChange = (event) => {
setOutputTrayCapacity(event.currentTarget.value)
}

const onBusStandardChange = (event) => {
  setBusStandard(event.currentTarget.value)
  }

const onCompatibleModel = (event) => {
setCompatibleModel(event.currentTarget.value)
}

const onCableLenghtChange = (event) => {
setCableLenght(event.currentTarget.value)
}

const onInterfaceChange = (event) => {
setInterface(event.currentTarget.value)
}

const onCableTypeChange = (event) => {
setCableType(event.currentTarget.value)
}

const onConnectorGenderChange = (event) => {
setConnectorGender(event.currentTarget.value)
}

const onTransferRateChange = (event) => {
setTransferRate(event.currentTarget.value)
}

const onBodyCoverChange = (event) => {
setBodyCover(event.currentTarget.value)
}

const onStorageCapacity = (event) => {
setStorageCapacity(event.currentTarget.value)
}

const onHardwareInterface = (event) => {
setHardwareInterface(event.currentTarget.value)
}

const onDiskStorageValueChange = (event) => {
setDiskStorageValue(event.currentTarget.value)
}

const onPageYieldChange = (event) => {
setPageYield(event.currentTarget.value)
}

const onSataPinsChange = (event) => {
setSataPinCount(event.currentTarget.value)
}

const onSsdSlotsChange = (event) => {
  setSsdCount(event.currentTarget.value)
  }

const onHddInsertSlotsChange = (event) => {
setHDDInsert(event.currentTarget.value)
}

const onSsdInsertSlotsChange = (event) => {
setSSDInsert(event.currentTarget.value)
}

const onNVMeSlotsChange = (event) => {
setNVMeSlotCount(event.currentTarget.value)
}

const onDisplayPortChange = (event) => {
  setDisplayPortValue(event.currentTarget.value)
  }

const onMtwoChange = (event) => {
setMtwoValue(event.currentTarget.value)
}

const onDVISlotChange = (event) => {
setDVIValue(event.currentTarget.value)
}

const onAddConnectorChange = (event) => {
setPowerConnector(event.currentTarget.value)
}

const onRamBusChange = (event) => {
setRamBusCount(event.currentTarget.value)
}

const onNVMeBusChange = (event) => {
setNVMeBusCount(event.currentTarget.value)
}

const onDVDDriveChange = (event) => {
setDVDDriveCount(event.currentTarget.value)
}

const onHddSlotsChange = (event) => {
  setHddCount(event.currentTarget.value)
  }

// style={{ width: '60%', height: '100%', display: 'block', paddingRight: '50px', border: '1px solid grey'}}
return (
<div className='Info_Edited_detail_box'>
  <div className='Edit_Details_text'>
    <span className='Edit_Details_text_style'>Edit Details</span>
  </div>
  <div style={{ marginTop: '5px'}}>
                        <div>
                            <span style={{ fontWeight: '700', fontSize: '13px', color: '#656481'}}>~ (was Price) is Optional.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '700', fontSize: '13px', color: '#656481'}}>~ (Discount as Amount & Discount as Percentage) is Optional.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '700', fontSize: '13px', color: '#656481'}}>~ Pick 1 Discount Method (Discount as Amount) or (Discount as Percentage) - don't enter values for both.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '700', fontSize: '13px', color: '#656481'}}>~ Be sure to Save changes made.</span>
                        </div>
                     </div>
  <ul style={{ width: '100%', display: 'block', position: 'relative', padding: '15px 5px'}}>
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Product Title:</span>
      </div>

      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <TextareaAutosize minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}}
            onChange={onTitleChange} placeholder={Product.title} value={TitleValue} />
      </div>
    </li>

    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Price:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '4px'}}>N$ </span>
        <input type="text" onChange={onPriceChange} placeholder={Product.price} value={PriceValue}
          style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
          />
      </div>
    </li>

    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>was Price:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
      <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '4px'}}>N$ </span>
        <input type="text" onChange={onPriceWasChange} placeholder={Product.wasPrice} value={PriceWasValue}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setPriceWasValue(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>

    </li>
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>Discount Amount:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
      <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '4px'}}>N$ </span>

        <input type="text" onChange={onSpecialAttributeChange} placeholder={Product.specialAttribute} value={SpecialAttribute}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setSpecialAttribute(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>

    </li>
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>Discount Percentage:</span>
      </div>
      <div className='Edit_Details_or_box'>
        <span className='Edit_Details_or'>or</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
        <input type="text" onChange={onSpecialChange} placeholder={Product.special} value={SpecialPercent}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center', marginRight: '10px'}}
           />
           <span style={{fontSize: '13px', color: '#656481', fontWeight: 'bolder'}}>include (%)</span>
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setSpecialPercent(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>
    </li>
    <li style={{ listStyle: 'none', width: '100%', marginTop: '5px', display: 'flex', padding: '10px 0px'}}>
    <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Warrenty:</span>
      </div>
      <div style={{ width: '75%', display: 'flex', justifyContent: 'space-between', padding: '0px 10px 0px 20px'}}>
        <button className='Warrenty_select_button_style' onClick={()=> (setWarrentyValue("12 Months Warrenty on Item"), setselectWarrenty(true))} value={WarrentyValue}>12
          Months</button>
          <button className='Warrenty_select_button_style' onClick={()=> (setWarrentyValue("3 Months Warrenty on Item"), setselectWarrenty(true))} value={WarrentyValue}>3
          Months</button>
        <button className='Warrenty_select_button_style' onClick={()=> (setWarrentyValue("No Warrenty on Item"), setselectWarrenty(true))}
          value={WarrentyValue}>None</button>

      </div>
    </li>
    {selectWarrenty === undefined ?
    <></>
    :
    selectWarrenty === false ?
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px', marginBottom: '15px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Warrenty Applied:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" placeholder={Product.warrenty}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
    </li>
    :
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px', marginBottom: '15px'}}>
    <div style={{ width: '25%',paddingTop: '5px'}}>
      <span className='Edit_Details_Title'>Warrenty Selected:</span>
    </div>
    <div style={{ width: '75%', paddingLeft: '20px'}}>
      <input type="text" placeholder={WarrentyValue}
       style={{ width: '250px', height: '30px', position: 'relative', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
         />
    </div>
  </li>

    }

    {/* <li style={{ listStyle: 'none', width: '100%', display: 'block', marginTop: '20px', padding: '10px 0px', borderTop: '2px solid #c5cbd5'}}>
      <div style={{ width: '100%', padding: '10px 0px'}}>
      <span className='Edit_Details_Title'>Description:</span>
      </div>
      <div style={{ width: '100%', paddingLeft: '25px'}}>
        <TextareaAutosize minRows={2} style={{ width: '570px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '10px 20px'}} onChange={onSpecificationChange}
          placeholder={Product.description} value={SpecificationValue} />
      </div>
    </li> */}
    {/* <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Product Category</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onProductTypeChange} placeholder={Product.product} value={ProductType}
          style={{ width: '150px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}}
           />
      </div>
    </li> */}

    {Product.product === "Desktop Pc" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
              value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Card</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsCardName} placeholder={Product.graphicsCardName}
              value={GraphicsCardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory (RAM)</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryChange} placeholder={Product.ram} value={MemoryValue}
              style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Arrangement</span> <input type="text"
              onChange={onArrangementChange} placeholder={Product.ramArrangement} value={ArrangementValue}
              style={{ width: '100px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span><input type="text" onChange={onMemoryGeneration}
              placeholder={Product.ramGeneration} value={MemoryGenerationValue}
              style={{ width: '50px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Memory (VRAM)</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onVramValueChange} placeholder={Product.vRam} value={VramValue}
              style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span> <input type="text" onChange={onGraphicsCardGenerationChange}
              placeholder={Product.graphicsCardGeneration} value={GraphicsCardGenerationValue} 
              style={{ width: '100px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} />
          </div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storages</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>HDD</span> <input type="text" onChange={onHardDiskChange}
              placeholder={Product.hardDisk} value={HardDiskValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '15px', color: '#74767c', fontWeight: 'bolder'}}>SSD</span> <input type="text" onChange={onSolidStateChange}
              placeholder={Product.ssd} value={SolidStateValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '15px', color: '#74767c', fontWeight: 'bolder'}}>NVMe</span> <input type="text" onChange={onNVMeChange}
              placeholder={Product.nvme} value={NVMeValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Motherboard</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMotherboardNameChange} placeholder={Product.motherboard}
              value={MotherboardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Power Supply</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSupplyNameChange} placeholder={Product.powerSupply}
              value={PowerSupplyName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Wifi Module</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWifiModuleChange} placeholder={Product.wifiModule} value={WifiModule}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
          <span className='Edit_Details_Title'>Included Items</span>
        </div>
        <div style={{ width: '100%', paddingLeft: '50px'}}>
          <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
            placeholder={Product.inclusions} value={Inclusions} />
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>C-Type</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>HDMI</span> <input type="text" onChange={onHDMIPortChange}
              placeholder={Product.hdmiPort} value={HDMIPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>Ethernet</span> <input type="text" onChange={onEthernetPortChange}
              placeholder={Product.ethernetPort} value={EthernetPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} />
          </div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>VGA</span> <input type="text" onChange={onVGAPortChange}
              placeholder={Product.vgaPort} value={VGAPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>DVD Drive</span> <input type="text" onChange={onDVDDriveChange}
              placeholder={Product.dvdDrive} value={DVDDriveValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '15%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Slots & Pins</span>
        </div>
        <div style={{ width: '85%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDD</span> <input type="text" onChange={onHddInsertSlotsChange}
              placeholder={Product.hddInsert} value={HDDInsert} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>SSD</span> <input type="text" onChange={onSsdInsertSlotsChange}
              placeholder={Product.ssdInsert} value={SSDInsert} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>NVMe</span> <input type="text" onChange={onNVMeSlotsChange}
              placeholder={Product.nvmeSlot} value={NVMeSlotCount} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Ram</span> <input type="text" onChange={onRamSlotChange}
              placeholder={Product.ramSlot} value={RamSlotValue} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
                        <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Sata Pins</span> <input type="text" onChange={onSataPinsChange}
              placeholder={Product.sataPin} value={SataPinCount} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
        </div>
      </li>
    </ul>

    :Product.product === "Laptop" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
              value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Card</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsCardName} placeholder={Product.graphicsCardName}
              value={GraphicsCardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory (RAM)</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryChange} placeholder={Product.ram} value={MemoryValue}
              style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Arrangement</span> <input type="text"
              onChange={onArrangementChange} placeholder={Product.ramArrangement} value={ArrangementValue}
              style={{ width: '100px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span><input type="text" onChange={onMemoryGeneration}
              placeholder={Product.ramGeneration} value={MemoryGenerationValue}
              style={{ width: '50px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storages</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>HDD</span> <input type="text" onChange={onHardDiskChange}
              placeholder={Product.hardDisk} value={HardDiskValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '15px', color: '#74767c', fontWeight: 'bolder'}}>SSD</span> <input type="text" onChange={onSolidStateChange}
              placeholder={Product.ssd} value={SolidStateValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '15px', color: '#74767c', fontWeight: 'bolder'}}>NVMe</span> <input type="text" onChange={onNVMeChange}
              placeholder={Product.nvme} value={NVMeValue} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%',  color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
          <span className='Edit_Details_Title'>Included Items</span>
        </div>
        <div style={{ width: '100%', paddingLeft: '50px'}}>
          <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
            placeholder={Product.inclusions} value={Inclusions} />
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%',  color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>USB Ports</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>C-Type</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>HDMI</span> <input type="text" onChange={onHDMIPortChange}
              placeholder={Product.hdmiPort} value={HDMIPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>Ethernet</span> <input type="text" onChange={onEthernetPortChange}
              placeholder={Product.ethernetPort} value={EthernetPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '15px'}} />
          </div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>VGA</span> <input type="text" onChange={onVGAPortChange}
              placeholder={Product.vgaPort} value={VGAPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>SDCard Reader</span> <input type="text" onChange={onSDSlotChange}
              placeholder={Product.sdCardSlot} value={SDSlotValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px',color: '#74767c', fontWeight: 'bolder'}}>DVD Drive</span> <input type="text" onChange={onDVDDriveChange}
              placeholder={Product.dvdDrive} value={DVDDriveValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '15%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Slots & Pins</span>
        </div>
        <div style={{ width: '85%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDD</span> <input type="text" onChange={onHddInsertSlotsChange}
              placeholder={Product.hddInsert} value={HDDInsert} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>SSD</span> <input type="text" onChange={onSsdInsertSlotsChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '20px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>NVMe</span> <input type="text" onChange={onNVMeSlotsChange}
              placeholder={Product.nvmeSlot} value={NVMeSlotCount} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Ram</span> <input type="text" onChange={onRamSlotChange}
              placeholder={Product.ramSlot} value={RamSlotValue} style={{ width: '65px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Monitor" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Aspect Ratio</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAspectRatioChange} placeholder={Product.aspectRatio} value={AspectRatio}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Refresh Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>C-Type</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDMI</span> <input type="text" onChange={onHDMIPortChange}
              placeholder={Product.hdmiPort} value={HDMIPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Ethernet</span> <input type="text" onChange={onEthernetPortChange}
              placeholder={Product.ethernetPort} value={EthernetPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '15px'}} />
          </div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>VGA</span> <input type="text" onChange={onVGAPortChange}
              placeholder={Product.vgaPort} value={VGAPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "GraphicsCard" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Card Memory (VRAM)</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onVramValueChange} placeholder={Product.vRam} value={VramValue}
              style={{ width: '60px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span> <input type="text" onChange={onGraphicsCardGenerationChange}
              placeholder={Product.graphicsCardGeneration} value={GraphicsCardGenerationValue} style={{ width: '60px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '7px'}} />
          </div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Clock Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsSpeed} placeholder={Product.graphicsCardSpeed}
              value={GraphicsSpeed} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Wattage</span> <input type="text" onChange={onWattageChange}
              placeholder={Product.wattage} value={Wattage} style={{ width: '80px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '25px'}} />
          </div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFanCountChange} placeholder={Product.fan} value={FanCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Via</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplayViaChange} placeholder={Product.displayVia} value={DisplayVia}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Additional Power</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAddConnectorChange} placeholder={Product.powerConnector}
              value={PowerConnector} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>C-Type</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDMI</span> <input type="text" onChange={onHDMIPortChange}
              placeholder={Product.hdmiPort} value={HDMIPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>DVI</span> <input type="text" onChange={onDVISlotChange}
              placeholder={Product.dviPort} value={DVIValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>DisplayPort</span> <input type="text" onChange={onDisplayPortChange}
              placeholder={Product.displayPort} value={DisplayPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "MotherBoard" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Motherboard Series</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSeriesNameChange} placeholder={Product.seriesName} value={SeriesName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>CPU Socket</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUSocketChange} placeholder={Product.cpuSocket} value={CPUSocket}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMaxMemory} placeholder={Product.maxRam} value={MaxMemory}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryGeneration} placeholder={Product.ramGeneration}
              value={MemoryGenerationValue} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDMI</span> <input type="text" onChange={onHDMIPortChange}
              placeholder={Product.hdmiPort} value={HDMIPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Ethernet</span> <input type="text" onChange={onEthernetPortChange}
              placeholder={Product.ethernetPort} value={EthernetPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} />
          </div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>VGA</span> <input type="text" onChange={onVGAPortChange}
              placeholder={Product.vgaPort} value={VGAPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>DVI</span> <input type="text" onChange={onDVISlotChange}
              placeholder={Product.dviPort} value={DVIValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '15%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Slots & Pins</span>
        </div>
        <div style={{ width: '85%', display: 'flex', paddingLeft: '20px'}}>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>NVMe</span> <input type="text" onChange={onNVMeBusChange}
              placeholder={Product.nvmeBus} value={NVMeBusCount} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}}  /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Ram</span> <input type="text" onChange={onRamBusChange}
              placeholder={Product.ramBus} value={RamBusCount} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "PcCase" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Case Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Suitable Motherboards</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSeriesNameChange} placeholder={Product.seriesName}
              value={SeriesName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFanCountChange} placeholder={Product.fan} value={FanCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
              placeholder={Product.usbPort} value={USBPortValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>C-Type</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '15%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Slots & Pins</span>
        </div>
        <div style={{ width: '85%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>HDD</span> <input type="text" onChange={onHddSlotsChange}
              placeholder={Product.hddCount} value={HddCount}  style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>SSD</span> <input type="text" onChange={onSsdSlotsChange}
              placeholder={Product.ssdCount} value={SsdCount}  style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>DVD Drive</span> <input type="text" onChange={onDVDDriveChange}
              placeholder={Product.dvdDrive} value={DVDDriveValue}  style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
              border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Printer" ?
    <ul style={{ width: '100%', display: 'block'}}>
           <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>

      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Functions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Body Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Input Tray Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInputTrayCapacityChange} placeholder={Product.inputTray}
              value={InputTrayCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Output Tray Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOutputTrayCapacityChange} placeholder={Product.outputTray}
              value={OutputTrayCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Black Cartridge</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleBlackInksChange} placeholder={Product.compatibleBlackInks}
              value={CompatibleBlackInks} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Color Cartridge</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleColorInksChange} placeholder={Product.compatibleColorInks}
              value={CompatibleColorInks} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Mono Print Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMonoPrintChange} placeholder={Product.monoPrint} value={MonoPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Mono Color Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorPrintChange} placeholder={Product.colorPrint} value={ColorPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Keyboard" || Product.product === "Mouse" || Product.product === "Joystick" || Product.product
    === "Headset" || Product.product === "Earphone" || Product.product === "Coolerpad" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Interface</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>

    </ul>
    :
    Product.product === "Ram" || Product.product === "RamLaptop" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory (RAM)</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryChange} placeholder={Product.ram} value={MemoryValue}
              style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Arrangement</span> <input type="text"
              onChange={onArrangementChange} placeholder={Product.ramArrangement} value={ArrangementValue}
              style={{ width: '100px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span><input type="text" onChange={onMemoryGeneration}
              placeholder={Product.ramGeneration} value={MemoryGenerationValue}
              style={{ width: '50px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Quantity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onArrangementChange} placeholder={Product.ramArrangement}
              value={ArrangementValue} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Processor" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onModelNameChange} placeholder={Product.modelName}
              value={ModelName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Manufacturer</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onManufacturerChange} placeholder={Product.manufacturer}
              value={Manufacturer} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Cores</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onCoreValueChange} placeholder={Product.coreCount} value={CoreValue}
          style={{ width: '200px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}}
          />
      </div>
    </li>
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Threads</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onThreadCountChange} placeholder={Product.threads} value={ThreadCount}
          style={{ width: '200px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}}
          />
      </div>
    </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMaxMemory} placeholder={Product.maxRam} value={MaxMemory}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Bandwidth</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryBandwidth} placeholder={Product.ramBandwidth}
              value={MemoryBandwidth} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Unlocked ?:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUStatusChange} placeholder={Product.cpuUnlock} value={CPUStatus}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Wattage:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWattageChange} placeholder={Product.wattage} value={Wattage}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Integrated Graphics:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onIntegratedGraphicsChange} placeholder={Product.integratedGraphics}
              value={IntegratedGraphics} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Socket Type:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUSocketChange} placeholder={Product.cpuSocket}
              value={CPUSocket} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Motherboard:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleMotherboards} placeholder={Product.compatibleMotherboards}
              value={CompatibleMotherboards} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSupportedWindows} placeholder={Product.supportedOS} value={SupportedWindows}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "ExternalDrive" || Product.product === "InternalDrive" || Product.product === "SSD" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Manufacturer</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onManufacturerChange} placeholder={Product.manufacturer}
              value={Manufacturer} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Hardware Interface</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onHardwareInterface} placeholder={Product.hardwareInterface}
              value={HardwareInterface} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBusStandardChange} placeholder={Product.busStandard}
              value={BusStandard} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Windows" || Product.product === "Office" || Product.product === "AntiVirus" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "PowerSupply" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Connector Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onConnectorTypeChange} placeholder={Product.connectorType}
              value={ConnectorType} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Wattage:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWattageChange} placeholder={Product.wattage} value={Wattage}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFanCountChange} placeholder={Product.fan} value={FanCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '15%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Connectors </span>
        </div>
        <div style={{ width: '85%', display: 'flex', paddingLeft: '20px'}}>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>ATX main 20+4-pin</span> <input type="text"
              onChange={onTwentyPlusChange} placeholder={Product.twentyPlusCount} value={TwentyPlus}
              style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div> <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Sata</span> <input type="text" onChange={onSataCountChange}
              placeholder={Product.sataCount} value={SataCount} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>ATX 12v 4-pin</span> <input type="text" onChange={onFourPinChange}
              placeholder={Product.fourPinCount} value={FourPin} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
                        <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>PCI 6-pin</span> <input type="text" onChange={onSixPinChange}
              placeholder={Product.sixPinCount} value={SixPin} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Molex 4-pin</span> <input type="text" onChange={onMolexChange}
              placeholder={Product.molexCount} value={Molex} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
          <div style={{ paddingLeft: '20px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>Floppy 4-pin</span> <input type="text" onChange={onFloppyChange}
              placeholder={Product.floppyCount} value={Floppy} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', 
              border: 'none', borderRadius: '2px', paddingLeft: '15px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Charger" || Product.product === "Battery" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Lenght</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Bag" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "DesktopProduct" || Product.product === "LaptopProduct" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Power Bank" || Product.product === "Plug Adapter" || Product.product === "USB Card Reader" ||
    Product.product === "Pc Card Reader" || Product.product === "Memory Card Reader" || Product.product === "Hub" ||
    Product.product === "Laser Presenter" || Product.product === "Webcam" || Product.product === "Mp3 Player" ||
    Product.product === "Speaker" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
              value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Cable" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Data Transfer Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onTransferRateChange} placeholder={Product.transferRate}
              value={TransferRate} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Lenght</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Gender</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onConnectorGenderChange} placeholder={Product.gender}
              value={ConnectorGender} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
              value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Connector" || Product.product === "Adapter" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Gender</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onConnectorGenderChange} placeholder={Product.gender}
              value={ConnectorGender} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "USB" || Product.product === "MemoryCard" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "CDDVD" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Windows</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSupportedWindows} placeholder={Product.supportedOS}
              value={SupportedWindows} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Ink" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Page Yield</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPageYieldChange} placeholder={Product.pageYield} value={PageYield}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Pigment</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>

    </ul>
    :
    Product.product === "ExternalCase" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
      <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '10px 0px'}}>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Pigment</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '30px'}} /></div>
        </div>
      </li>
    </ul>
    :
    <></>
    } 

  </ul>
  <div style={{ marginBottom: '10px'}} className='Submit-upload-button_box'>
      <button style={{ cursor: 'pointer'}} className={savedClick ? "Submit-upload-button_clicked": "Submit-upload-button"} onClick={() => {UpdateProduct(); clickSave()}}>
        {savedClick === false ?
        <span>Save</span>
        :
        <span>Saved</span>
        }
      </button>
  </div>
</div>
)
}

export default UpdateInfo