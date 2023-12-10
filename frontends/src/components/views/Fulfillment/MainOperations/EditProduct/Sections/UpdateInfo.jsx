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
const [DeliveryStatus, setDeliveryStatus] = useState("")
const [ProductType, setProductType] = useState("")
const [PageRef, setPageRef] = useState("")
const [PcBuild, setPcBuild] = useState("")
const [selectWarrenty, setselectWarrenty] = useState(false)
const [selectDeliveryStatus, setselectDeliveryStatus] = useState(false)

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
const [TempDetails, setTempDetails] = useState()
const [Changed, setChanged] = useState(false)

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
deliveryStatus: DeliveryStatus === "" ? Product.deliveryStatus : DeliveryStatus,
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

const onTitleChange = (event) => {
  setTitleValue(event.currentTarget.value)
  }

const onVoltageChange = (event) => {
  setVoltage(event.currentTarget.value)
  }

  const onFeatureCountChange = (event) => {
    setFeatureCount(event.currentTarget.value)
    }
  
  const onGenderItemChange = (event) => {
    setGenderedItem(event.currentTarget.value)
  }

  const onPowerSourceChange = (event) => {
    setPowerSource(event.currentTarget.value)
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
      <div className='Edit-upload-button_box'>
      <button style={{ cursor: 'pointer'}} className={savedClick ? "Edit-upload-button_clicked": "Edit-upload-button"} onClick={() => {UpdateProduct(); clickSave()}}>
        {savedClick === false ?
        <span>Save</span>
        :
        <span>Saved</span>
        }
      </button>
  </div>
  <div className='Edit_Details_text'>
    <span className='Edit_Details_text_style'>Edit Details</span>
  </div>
  <div style={{ marginTop: '5px'}}>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>was Price is Optional.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>Discount as Amount & Discount as Percentage is Optional.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>(Discount as Amount) or (Discount as Percentage) - don't enter values for both.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>Be sure to Save changes made.</span>
                        </div>
                     </div>
  <ul style={{ width: '100%', display: 'block', position: 'relative', padding: '15px 5px'}}>
    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Product Title:</span>
      </div>

      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <TextareaAutosize minRows={2} 
           style={{ width: '465px', fontSize: '15px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}}
            onChange={onTitleChange} placeholder={Product.title} value={TitleValue} />
      </div>
    </li>

    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Price:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '8px'}}>N$ </span>
        <input type="text" onChange={onPriceChange} placeholder={Product.price} value={PriceValue}
          style={{ width: '250px', height: '35px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
          />
      </div>
    </li>

    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>was Price:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
      <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '8px'}}>N$ </span>
        <input type="text" onChange={onPriceWasChange} placeholder={Product.wasPrice} value={PriceWasValue}
         style={{ width: '250px', height: '35px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setPriceWasValue(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>

    </li>
    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>Discount Amount:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
      <span style={{ position: 'absolute', zIndex: '9', marginLeft: '50px', color: '#74767c', fontWeight: 'bolder', marginTop: '8px'}}>N$ </span>

        <input type="text" onChange={onSpecialAttributeChange} placeholder={Product.specialAttribute} value={SpecialAttribute}
         style={{ width: '250px', height: '35px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setSpecialAttribute(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>

    </li>
    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px', position: 'relative'}}>
        <span className='Edit_Details_Title'>Discount Percentage:</span>
      </div>
      <div className='Edit_Details_or_box'>
        <span className='Edit_Details_or'>or</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px', position: 'relative'}}>
        <input type="text" onChange={onSpecialChange} placeholder={Product.special} value={SpecialPercent}
         style={{ width: '250px', height: '35px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center', marginRight: '10px'}}
           />
           <span style={{fontSize: '13px', color: '#656481', fontWeight: 'bolder'}}>include (%)</span>
      </div>
      <div className='Was_Price_zero'>
      <button onClick={()=> setSpecialPercent(0)} className='Was_Price_zero_button'>
        Set to zero
      </button>
      </div>
    </li>
    {/* <li style={{ listStyle: 'none', width: '100%', marginTop: '5px', display: 'flex', padding: '10px 0px'}}>
    <div style={{ width: '20%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Delivery Status:</span>
      </div>
      <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', padding: '0px 10px 0px 20px'}}>
        <button className={DeliveryStatus === "Free Delivery" ? 'active_Delivery_select_button_style' : 'Delivery_select_button_style'}  
        onClick={()=> (setDeliveryStatus("Free Delivery"), setselectDeliveryStatus(true))}
          value={DeliveryStatus}>Free Delivery</button>
        <button className={DeliveryStatus === "Free Same-Day Delivery" ? 'active_Delivery_select_button_style' : 'Delivery_select_button_style'}  
          onClick={()=> (setDeliveryStatus("Free Same-Day Delivery"), setselectDeliveryStatus(true))} 
          value={DeliveryStatus}>
          Free Same-Day</button> 
        <button className={DeliveryStatus === "Delivery Charged" ? 'active_Delivery_select_button_style' : 'Delivery_select_button_style'} 
        onClick={()=> (setDeliveryStatus("Delivery Charged"), setselectDeliveryStatus(true))} 
        value={DeliveryStatus}>
          Delivery Charged</button>  
      </div>
    </li>
    {selectDeliveryStatus === undefined ?
    <></>
    :
    selectDeliveryStatus === false ?
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '15px 0px', marginBottom: '15px5}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Option Applied:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" placeholder={Product.deliveryStatus}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
    </li>
    :
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '15px 0px', marginBottom: '15px5}}>
    <div style={{ width: '25%',paddingTop: '5px'}}>
      <span className='Edit_Details_Title'>Option Selected:</span>
    </div>
    <div style={{ width: '75%', paddingLeft: '20px'}}>
      <input type="text" placeholder={DeliveryStatus}
       style={{ width: '250px', height: '30px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
         />
    </div>
  </li>
    }
    <li style={{ listStyle: 'none', width: '100%', marginTop: '5px', display: 'flex', padding: '10px 0px'}}>
    <div style={{ width: '15%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Warrenty:</span>
      </div>
      <div style={{ width: '85%', display: 'flex', justifyContent: 'space-between', padding: '0px 10px 0px 20px'}}>
        <button className={WarrentyValue === "No Warrenty on Item" ? 'active_Warrenty_select_button_style' : 'Warrenty_select_button_style'}  
        onClick={()=> (setWarrentyValue("No Warrenty on Item"), setselectWarrenty(true))}
          value={WarrentyValue}>None</button>
        <button className={WarrentyValue === "6 Months Warrenty on Item" ? 'active_Warrenty_select_button_style' : 'Warrenty_select_button_style'}  
          onClick={()=> (setWarrentyValue("6 Months Warrenty on Item"), setselectWarrenty(true))} value={WarrentyValue}>6
          Months</button> 
        <button className={WarrentyValue === "12 Months Warrenty on Item" ? 'active_Warrenty_select_button_style' : 'Warrenty_select_button_style'} 
        onClick={()=> (setWarrentyValue("12 Months Warrenty on Item"), setselectWarrenty(true))} value={WarrentyValue}>12
          Months</button>  
        <button className={WarrentyValue === "3 Years Warrenty on Item" ? 'active_Warrenty_select_button_style' : 'Warrenty_select_button_style'} 
        onClick={()=> (setWarrentyValue("3 Years Warrenty on Item"), setselectWarrenty(true))} value={WarrentyValue}>3
          Years</button>
      </div>
    </li>
    {selectWarrenty === undefined ?
    <></>
    :
    selectWarrenty === false ?
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '15px 0px', marginBottom: '15px5}}>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span className='Edit_Details_Title'>Warrenty Applied:</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" placeholder={Product.warrenty}
         style={{ width: '250px', height: '30px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
    </li>
    :
    <li style={{ listStyle: 'none', width: '100%', display: 'flex', padding: '15px 0px', marginBottom: '15px5}}>
    <div style={{ width: '25%',paddingTop: '5px'}}>
      <span className='Edit_Details_Title'>Warrenty Selected:</span>
    </div>
    <div style={{ width: '75%', paddingLeft: '20px'}}>
      <input type="text" placeholder={WarrentyValue}
       style={{ width: '250px', height: '30px', position: 'relative', fontSize: '15px', color: '#333', outline: '1px solid #c4c3c3', fontWeight: '600', border: 'none', borderRadius: '2px', textAlign: 'center'}}
         />
    </div>
  </li>
    } */}

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
    {/* <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Product Category</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onProductTypeChange} placeholder={Product.product} value={ProductType}
          style={{ width: '150px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
           />
      </div>
    </li> */}

    {Product.product === "Battery" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Battery Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Reachargeable?</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Units Count</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount}
              value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Tool Accessory" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Power Tool" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Data Transfer Rate</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onVoltageChange} placeholder={Product.voltage}
                      value={Voltage} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li> 
            
        </ul>
    :
    Product.product === "Nail Gun" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Fasteners</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Jig Saw" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Blade Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Electric Sander" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Rotational Speed</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Voltage</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onVoltageChange} placeholder={Product.voltage}
                      value={Voltage} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            
        </ul>
    :
    Product.product === "Electric Planer" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
        </ul>
    :
    Product.product === "Electric Chainsaw" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Horsepower</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Chain Length</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Power Drill" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Rotational Speed</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Data Transfer Rate</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onVoltageChange} placeholder={Product.voltage}
                      value={Voltage} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Outdoor Tool" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Medal Detector" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Lawn Mower" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Cutting Width</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Positions</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            

        </ul>
    :
    Product.product === "Pressure Washer" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Pressure</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Flow Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}><div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            
        </ul>
    :
    Product.product === "Trimmer Tool" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Cutting Width</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            

        </ul>
    :
    Product.product === "Leaf Blower" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Maximum Speed</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Outdoor Grill" || Product.product === "Outdoor Smoker" 
    || Product.product === "Grill Accessory" || Product.product === "Outdoor Kitchen"
    || Product.product === "Log Splitter" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Fire Place" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Installation Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Method</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Heater" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Method</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Electric Fan" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Electric Fan Design</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Method</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Evaporative Cooler" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Air Flow Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Floor Area</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Reservoir Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Method</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Dehumidifier" || Product.product === "Humidifier" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Floor Area</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Kitchen Thermometer" || Product.product === "Kitchen Torch" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Air Purifier" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Air Conditioner" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling Power</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Floor Area</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Method</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product=== "Steam Cleaner" ||
    Product.product=== "Carpet Cleaner" || Product.product=== "Thermostat" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Robot Vacuum" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Controller Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Vacuum Cleaner" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Form Factor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Special Features</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Wash Machine" || Product.product === "Dryer" || Product.product === "Washer Dryer Combo" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Access Location</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Clothing Iron" || Product.product === "Steamer"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Air Fryer Oven" || Product.product === "Air Fryer" || Product.product === "Deep Fryer"
    || Product.product === "Kettle"|| Product.product === "Mixer Attachment" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Oil Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Indoor Grill" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Juicer" || Product.product === "Food Processor" ||
     Product.product === "Food Chopper" || Product.product === "Toaster" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Griddle" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Settings</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Bread Maker" || Product.product === "Waffle Maker" || Product.product === "Hand Blender"
    || Product.product === "Blender" || Product.product === "Pancake Maker" || Product.product === "Ice Cream Shaver" 
    || Product.product === "Popcorn Machine" || Product.product === "Ice Cream Machine" || Product.product === "Cotton Candy Machine" ||
    Product.product === "Ice Shaver" || Product.product === "Fondue Maker" || Product.product === "Dehydrator" || Product.product === "Dry Ager" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
        </ul>
    :
    Product.product === "Hand Mixer" || Product.product === "Mixer Machine" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Speeds</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Kitchen Appliance Package" || Product.product === "Appliance Bundle" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Bundle Includes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
        </ul>
    :
    Product.product === "Wall Oven" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Coffee Maker" || Product.product === "Tea Maker" || Product.product === "Expresso Machine" ||
    Product.product === "Soda Maker" || Product.product === "Ice Maker" || Product.product === "Water Cooler Dispenser" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Instant Pot" || Product.product === "Multi Cooker" || Product.product === "Slow Cooker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooker Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Cooking Appliance" || Product.product === "Cooktop" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Burner Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Dishwasher" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Installation Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Microwave" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Freezer" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Door Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Refrigerator" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Installation Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Doors</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Configuration</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Auto Remote Start" || Product.product === "Auto Navigation" || Product.product === "Auto Accessory" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Auto Phone Accessory" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Devices</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel} value={CompatibleModel}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Auto Speaker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Auto Audio" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Auto Electronic" || Product.product === "Auto Amplifier" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Channels</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Batteries</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Auto Cam" || Product.product === "Auto Backup Cam" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Mounting Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Mounting Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Video Capture Resolution</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Media Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Hair Straightner" || Product.product === "Straightner Comb" || Product.product === "Curling Iron" || Product.product === "Health Item"
    || Product.product === "Hair Dryer" || Product.product === "Hair Steamer" || Product.product === "Hair Trimmer" || Product.product === "Hair Clipper"
    || Product.product === "Electric Shaver" || Product.product === "Epilator" || Product.product === "Nose Hair Trimmer" || Product.product === "Body Hair Trimmer"
    || Product.product === "Steam Vaporizer" || Product.product === "Vape" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Blood Monitor" || Product.product === "Heart Monitor" || Product.product === "Hearing Aid" || Product.product === "Mobility Aid"
    || Product.product === "Massage Device" || Product.product === "Thermometer Device" || Product.product === "Weight Device"
    || Product.product === "Inhaler" || Product.product === "Vaporizer" ?
    <ul style={{ width: '100%', display: 'block'}}>
<li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
        </ul>
    :
    Product.product === "Treadmill Machine" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onProcessorFrequency} placeholder={Product.processorFrequency} value={ProcessorFrequency}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Stationery Bike" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Maximum Weight</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onProcessorFrequency} placeholder={Product.processorFrequency} value={ProcessorFrequency}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Elliptical Machine" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Rowing Machine" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Maximum Weight</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onProcessorFrequency} placeholder={Product.processorFrequency} value={ProcessorFrequency}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Exercise Machine" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Console Accessory" || Product.product === "Console Controller" || Product.product === "Console Remote"
    || Product.product === "Console Camera" || Product.product === "Controller Accessory" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Console</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice} value={CompatibleDevice}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ width: '100%', display: 'flex'}}>
                <div
                    className='Details-Title_Text_style'>
                    Compatible Console:</div>
                <div className="Details-Input_Box_style">
                <div style={{ paddingTop: '10px'}}>
                    <TextareaAutosize minRows={2} placeholder='example (Remote Control)' style={{ width: '450px', outline: '2px solid orange', fontSize: '15px',
                     fontWeight: '600', border: 'none', color: '#656481', borderRadius: '2px', padding: '5px 8px'}}
                     value={Inclusions} onChange={onInclusionsChange} />
                    </div>
                </div>
            </li>
            
        </ul>
    :
    Product.product === "Game Disc" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Media Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Console</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice} value={CompatibleDevice}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
        </ul>
    :
    Product.product === "Wearable Tech" || Product.product === "Smart Assistant" || Product.product === "Smart Security System"
    || Product.product === "Cool Tech" || Product.product === "Smart Door System"
    || Product.product === "Baby Monitor" || Product.product === "Motion Sensor" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
            
        </ul>
    :
    Product.product === "Fitness Tracker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Band Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Battery Life</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
            
        </ul>
    :
    Product.product === "Stop Watch" || Product.product === "Muscle Trainer" || Product.product === "Muscle Massager" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
            
        </ul>
    :
    Product.product === "Watch"?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Band Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Audio Recorder" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Microphone Form Factor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Guitar Amp" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Devices</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel} value={CompatibleModel}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Audio Device" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Device</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSeriesNameChange} placeholder={Product.seriesName} value={SeriesName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "PlayStation Console" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Brand</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
        </ul>
    :
    Product.product === "XBOX Console" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Brand</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
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
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Processor Name</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
                      value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory (RAM)</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onMemorySpeedChange} placeholder={Product.ramSpeed}
                      value={MemorySpeed} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Controller Batteries:</div>
                <div className='Info-productdetail_li-right'>AA Batteries</div>
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
        </ul>
    :
    Product.product === "Nintendo" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Brand</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Play Modes</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
        </ul>
    :
    Product.product === "Steam Deck" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Brand</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
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
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Play Modes</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
        </ul>
    :
    Product.product === "Handheld Console" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Play Modes</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Processor</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
                      value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Graphics Card</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onGraphicsCardName} placeholder={Product.graphicsCardName}
                      value={GraphicsCardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
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
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory (RAM)</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onMemoryChange} placeholder={Product.ram} value={MemoryValue}
                      style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
                  <div style={{ paddingLeft: '30px'}}>
                    <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Generation</span><input type="text" onChange={onMemoryGeneration}
                      placeholder={Product.ramGeneration} value={MemoryGenerationValue}
                      style={{ width: '50px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
        </ul>
    :
    Product.product === "Game Console" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
        </ul>
    :
    Product.product === "Digital Clock" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
        :
        Product.product === "Vinyl Record" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Artist</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
        </ul>
    :
    Product.product === "Audio Mixer" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Channels</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Turntable" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Audio Player" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Media Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Vlogger Kit" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Photo Background" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Camera Film" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Film Format Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Exposures per Roll</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Photo Frame" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Camera Flash , Lighting" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Mountings</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Gimbal" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Mountings</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Camera Lense" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Focal Length Description</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Lens Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Mountings</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Tripod, Stabilizer" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Devices</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel} value={CompatibleModel}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Weight Limit</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Max and Min Height</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Binocular" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Objective Lens Diameter</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Drone" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Video Capture Resolution</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Battery Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onVoltageChange} placeholder={Product.voltage} value={Voltage}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Camcorder" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Video Capture Resolution</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Optical Zoom</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Control Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            

            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
        :
        Product.product === "Action Camera" ?
      <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Video Capture Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Screen Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Optical Zoom</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
              value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

                <li className='Edit_Details_Title_box'>
                    <div style={{ width: '25%',paddingTop: '5px'}}>
                      <span className='Edit_Details_Title'>Connectivity</span>
                    </div>
                    <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                      <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                          style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                    </div>
                  </li>

                  <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                    <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                      <span className='Edit_Details_Title'>Special Features</span>
                    </div>
                    <div style={{ width: '100%', paddingLeft: '50px'}}>
                      <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                        fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                        placeholder={Product.inclusions} value={Inclusions} />
                    </div>
                  </li>
                  </ul>
    :
    Product.product === "Camera" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Form Factor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Effective Still Resolution</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Optical Zoom</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Photo Sensor Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Dish Antenna" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Range</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Projector Mount" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Mounting Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
            
        </ul>
    :
    Product.product === "Sound Bar Mount" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Tv Mount" || Product.product === "Tv Frame" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>TV Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Minimum Compatible Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Tilt Angle</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Blue-Ray Player" || Product.product === "CD/DVD Player" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Media Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Bluetooth Speaker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Sound Bar" || Product.product === "Decoder" || Product.product === "Streaming Device" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
        :
        Product.product === "Stereo System" ?
                <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                <li className='Edit_Details_Title_box'>
                    <div style={{ width: '25%',paddingTop: '5px'}}>
                      <span className='Edit_Details_Title'>Connectivity</span>
                    </div>
                    <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                      <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                          style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                    </div>
                  </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            </ul>
            :
        Product.product === "Projector" ?
                <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

                <li className='Edit_Details_Title_box'>
                    <div style={{ width: '25%',paddingTop: '5px'}}>
                      <span className='Edit_Details_Title'>Connectivity</span>
                    </div>
                    <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                      <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                          style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                    </div>
                  </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Flatscreen Tv" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Refresh Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAspectRatioChange} placeholder={Product.aspectRatio} value={AspectRatio}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Storage</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Internet Support</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flexnorm'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ethernet Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    :
    Product.product === "Small Keyboard" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Stylus" || Product.product === "Selfie Stick" || Product.product === "Mobile Tracker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "WiFi Hotspot" || Product.product === "Surge Protector" || Product.product === "Remote Control" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Tablet Stand Mount" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Mounting Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Phone Mount" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Mounting Type</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Phone Case" || Product.product === "Phone Grip" || Product.product === "Popsocket" || Product.product === "Tablet Case Sleeve" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Screen Protector" || Product.product === "Tablet Screen Protector"
    || Product.product === "Nintendo Screen Protector" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Models</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
                      value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Powerbank" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Battery Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Phone Charger" || Product.product === "Charge Cable" ||
     Product.product === "Charging Dock" || Product.product === "Controller Charger" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Connector Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "iPhone" || Product.product === "Smartphone"  || Product.product === "E Reader" 
    || Product.product === "Tablet" || Product.product === "iPad" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Memory (RAM)</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onMemorySpeedChange} placeholder={Product.ramSpeed}
                      value={MemorySpeed} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cellular Technology</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
         <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>SIM Card Slot</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>SDCard Slot</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
        </ul>
    :
    Product.product === "Calculator"
    || Product.product === "SIM Card" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Projector" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Photo Edit Software" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Software Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Devices</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel} value={CompatibleModel}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Computer Software" || Product.product === "Anti-Virus Software"
    || Product.product === "System Software" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Software Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>

        </ul>
    :
    Product.product === "Monitor" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Aspect Ratio</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAspectRatioChange} placeholder={Product.aspectRatio} value={AspectRatio}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Refresh Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onRefreshRateChange} placeholder={Product.fps} value={RefreshRate}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '5%', color: '#74767c', fontWeight: 'bolder',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ports</span>
        </div>
        <div style={{ width: '95%', display: 'flex', paddingLeft: '20px'}}>
        <div style={{ paddingLeft: '10px'}}>
            <span style={{ paddingRight: '10px', color: '#74767c', fontWeight: 'bolder'}}>3D</span> <input type="text" onChange={onCTypeChange}
              placeholder={Product.cType} value={CTypeValue} style={{ width: '40px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder',
               border: 'none', borderRadius: '2px', paddingLeft: '10px'}} /></div>
          <div> <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>USB</span> <input type="text" onChange={onUSBPortChange}
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
        </div>
      </li>
    </ul>
    :
    Product.product === "Desktop Pc" ?
    <ul style={{ width: '100%', display: 'block'}}>
    <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
              value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Card</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsCardName} placeholder={Product.graphicsCardName}
              value={GraphicsCardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
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
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Total Storage</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBusStandardChange} placeholder={Product.busStandard}
              value={BusStandard} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Motherboard</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMotherboardNameChange} placeholder={Product.motherboard}
              value={MotherboardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Power Supply</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSupplyNameChange} placeholder={Product.powerSupply}
              value={PowerSupplyName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Wifi Module</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWifiModuleChange} placeholder={Product.wifiModule} value={WifiModule}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Slots & Pins</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onNVMeSlotsChange}
              placeholder={Product.nvmeSlot} value={NVMeSlotCount}
              style={{ width: '50px', height: '30px',display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
          <div style={{ paddingLeft: '30px'}}>
            <span style={{ paddingRight: '20px', color: '#74767c', fontWeight: 'bolder'}}>Arrangement</span> <input type="text"
              onChange={onRamSlotChange} placeholder={Product.ramSlot} value={RamSlotValue}
              style={{ width: '100px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '6px'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Laptop" || Product.product === "MacBook" ? 
    <ul className='Info-left-product_details'>
    <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onProcessorNameChange} placeholder={Product.processorName}
              value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Graphics Card</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsCardName} placeholder={Product.graphicsCardName}
              value={GraphicsCardName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
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
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Total Storage</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBusStandardChange} placeholder={Product.busStandard}
              value={BusStandard} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Camera</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
      <li className='Edit_Details_Title_box'>
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
        </ul>
    :
    Product.product === "Ethernet Range Extender" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Range</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Cable Modem" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Ethernet Switch" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Ports</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Shell Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Wifi Adapter" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Data Transfer Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onTransferRateChange} placeholder={Product.transferRate}
              value={TransferRate} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Router" || Product.product === "Mesh WiFi System" || Product.product === "WiFi Range Extender" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Frequency Band Class</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Frequency</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWifiModuleChange} placeholder={Product.wifiModule} value={WifiModule}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Ethernet Cable" || Product.product === "HDMI Related" || Product.product === "VGA Related"
    || Product.product === "DVI Related" || Product.product === "DisplayPort Related"|| Product.product === "USB Related"
    || Product.product === "Unlisted Cable" || Product.product === "Auxilary Cable"
    || Product.product === "Sata Cable" || Product.product === "Molex Related" || Product.product === "Audio Splitter" ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableTypeChange} placeholder={Product.cableType} value={CableType}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Lenght</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Ink" || Product.product === "Toner" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Compatible Devices</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel} value={CompatibleModel}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Page Yield</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPageYieldChange} placeholder={Product.pageYield} value={PageYield}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Pigment</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Label Printer" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Printing Technology</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Printer Output</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMonoPrintChange} placeholder={Product.monoPrint} value={MonoPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Photo Printer" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Printing Technology</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Print Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorPrintChange} placeholder={Product.colorPrint} value={ColorPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Print Speed Monochrome</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMonoPrintChange} placeholder={Product.monoPrint} value={MonoPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Scanner" ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Scanner Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Printer" ?
    <ul style={{ width: '100%', display: 'block'}}>
           <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Functions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Body Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Input Tray Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInputTrayCapacityChange} placeholder={Product.inputTray}
              value={InputTrayCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Output Tray Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOutputTrayCapacityChange} placeholder={Product.outputTray}
              value={OutputTrayCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Black Cartridge</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleBlackInksChange} placeholder={Product.compatibleBlackInks}
              value={CompatibleBlackInks} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Color Cartridge</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleColorInksChange} placeholder={Product.compatibleColorInks}
              value={CompatibleColorInks} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Mono Print Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMonoPrintChange} placeholder={Product.monoPrint} value={MonoPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Mono Color Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorPrintChange} placeholder={Product.colorPrint} value={ColorPrint}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Playstation Storage Drive" || Product.product === "Memory Card Holder" || Product.product === "Xbox Storage Drive"
    || Product.product === "USB Drive" || Product.product === "Memory Card" ||
    Product.product === "Recordable CD Disc" || Product.product === "Console Memory Card" || Product.product === "Recordable DVD Disc"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Console</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Disc Units</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount}
                      value={ProcessorName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Laptop HDD Drive" || Product.product === "SSD Drive"
    || Product.product === "External SSD" || Product.product === "External HDD Drive"
    || Product.product === "Desktop HDD Drive" || Product.product === "NVMe SSD"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Storage Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onStorageCapacity} placeholder={Product.storageCapacity}
              value={StorageCapacity} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Interface</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onHardwareInterface} placeholder={Product.hardwareInterface}
              value={HardwareInterface} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Case Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBusStandardChange} placeholder={Product.busStandard}
              value={BusStandard} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Virtual Reality"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Field of View</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onOSChange} placeholder={Product.operatingSystem} value={OSName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Webcam"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Video Capture Resolution</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Camcorder type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Headset" || Product.product === "Headphone" || Product.product === "Earphones" 
    || Product.product === "Earbuds" || Product.product === "AirPods" || Product.product === "AirPod Max"
    || Product.product === "EarPods"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Ear Placement</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "USB Speaker" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Maximum Output Power</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBusStandardChange} placeholder={Product.busStandard}
              value={BusStandard} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Audio Output Mode</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount}
              value={FeatureCount} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Connectivity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
        </ul>
    :
    Product.product === "Power Supply" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Connector Type:</div>
                <div className='Info-productdetail_li-right'>{Product.connectorType}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Wattage:</div>
                <div className='Info-productdetail_li-right'>{Product.wattage}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cooling:</div>
                <div className='Info-productdetail_li-right'>{Product.fan}</div>
            </li>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex_two'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>ATX Power Connectors 20+4-pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.twentyPlusCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>ATX 12v Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.fourPinCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid_two'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>Floppy Drive Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.floppyCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Molex Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.molexCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow_two'>
            <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>SATA Connectors:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.sataCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>PCI Express Connectors 6-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.sixPinCount}</span>
                    </div>
                </div>
            </li>
        </ul>
    :
    Product.product === "Desktop Casing" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Case Type</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Suitable Motherboards</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSeriesNameChange} placeholder={Product.seriesName}
              value={SeriesName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFanCountChange} placeholder={Product.fan} value={FanCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
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
    Product.product === "WiFi Card" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Hardware Interface</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Data Transfer Rate</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onTransferRateChange} placeholder={Product.transferRate}
              value={TransferRate} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Windows</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSupportedWindows} placeholder={Product.supportedOS} value={SupportedWindows}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Device</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAddConnectorChange} placeholder={Product.powerConnector}
              value={PowerConnector} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

        </ul>
    :
    Product.product === "Motherboard" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Motherboard Series</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSeriesNameChange} placeholder={Product.seriesName} value={SeriesName}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>CPU Socket</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUSocketChange} placeholder={Product.cpuSocket} value={CPUSocket}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMaxMemory} placeholder={Product.maxRam} value={MaxMemory}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryGeneration} placeholder={Product.ramGeneration}
              value={MemoryGenerationValue} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
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
    Product.product === "Graphics Card" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Model Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cooling</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFanCountChange} placeholder={Product.fan} value={FanCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Display Via</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDisplayViaChange} placeholder={Product.displayVia} value={DisplayVia}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Additional Power</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onAddConnectorChange} placeholder={Product.powerConnector}
              value={PowerConnector} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
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
    Product.product === "Processor" ?
    <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Processor</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onModelNameChange} placeholder={Product.modelName}
              value={ModelName} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Manufacturer</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onManufacturerChange} placeholder={Product.manufacturer}
              value={Manufacturer} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Cores</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onCoreValueChange} placeholder={Product.coreCount} value={CoreValue}
          style={{ width: '200px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
          />
      </div>
    </li>
    <li className='Edit_Details_Title_box'>
      <div style={{ width: '25%',paddingTop: '5px'}}>
        <span>Threads</span>
      </div>
      <div style={{ width: '75%', paddingLeft: '20px'}}>
        <input type="text" onChange={onThreadCountChange} placeholder={Product.threads} value={ThreadCount}
          style={{ width: '200px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}}
          />
      </div>
    </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Memory Supported</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMaxMemory} placeholder={Product.maxRam} value={MaxMemory}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Memory Bandwidth</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onMemoryBandwidth} placeholder={Product.ramBandwidth}
              value={MemoryBandwidth} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Unlocked ?:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUStatusChange} placeholder={Product.cpuUnlock} value={CPUStatus}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Wattage:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWattageChange} placeholder={Product.wattage} value={Wattage}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Integrated Graphics:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onIntegratedGraphicsChange} placeholder={Product.integratedGraphics}
              value={IntegratedGraphics} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Socket Type:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCPUSocketChange} placeholder={Product.cpuSocket}
              value={CPUSocket} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Motherboard:</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleMotherboards} placeholder={Product.compatibleMotherboards}
              value={CompatibleMotherboards} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Supported Operating System</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onSupportedWindows} placeholder={Product.supportedOS} value={SupportedWindows}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      </ul>

    :
    Product.product === "Laptop Battery" || Product.product === "Laptop Charger"
     || Product.product === "Laptop Disc Drive" || Product.product === "Optical Disc Drive" 
    || Product.product ==="External Disc Drive" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            

        </ul>
    :
    Product.product === "Phone Battery" || Product.product === "Tablet Battery" 
    || Product.product === "Camera Battery" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Models</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleModel} placeholder={Product.compatibleModel}
              value={CompatibleModel} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product ==="Laptop Stand" || Product.product ==="Webcam Cover" || Product.product ==="Speaker Stand" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Laptop Fan" || Product.product ==="Laptop Screen" || Product.product ==="Desktop Heatsink" 
    || Product.product ==="Portable Power Station" || Product.product ==="Cooling Pad" || Product.product ==="Desktop Cooling Fan" 
    || Product.product ==="Desk Pad" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Clover Power Cable" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Lenght</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "3 Pin Round Power Cable"   ?
        <ul style={{ width: '100%', display: 'block'}}>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cable Name:</div>
                <div className='Info-productdetail_li-right'>3 Pin Round Power Cable</div>
            </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Cable Lenght</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCableLenghtChange} placeholder={Product.cableLenght} value={CableLenght}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        </ul>
    :
    Product.product === "Keyboard" || Product.product === "Mouse" || Product.product === "Mouse Keyboard Combo" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Interface</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "USB Hub" || Product.product === "Docking Station"  ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    
    Product.product === "Laptop Sleeve" || Product.product ==="Laptop Backpack" 
    || Product.product ==="Console Bag" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Designed For</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product ==="USB Microphone" || Product.product ==="Camera Microphone" || Product.product ==="Memory Card Reader" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Connectivity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Laptop Cleaner" ?
        <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Volume</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                  <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Compatible Devices</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onCompatibleDevice} placeholder={Product.compatibleDevice}
              value={CompatibleDevice} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        </ul>
    :
    Product.product === "Laptop DDR3 Ram" || Product.product === "Laptop DDR4 Ram" || Product.product === "Laptop DDR5 Ram" ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Clock Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsSpeed} placeholder={Product.graphicsCardSpeed}
              value={GraphicsSpeed} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
   
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Quantity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onArrangementChange} placeholder={Product.ramArrangement}
              value={ArrangementValue} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
    </ul>
    :
    Product.product === "Desktop DDR3 Ram" || Product.product === "Desktop DDR4 Ram" || Product.product === "Desktop DDR5 Ram" ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Clock Speed</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGraphicsSpeed} placeholder={Product.graphicsCardSpeed}
              value={GraphicsSpeed} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Quantity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onArrangementChange} placeholder={Product.ramArrangement}
              value={ArrangementValue} style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

    </ul>
    :
    Product.product === "Kids Quilt Set" || Product.product === "Quilt Set" || Product.product === "Duvet Cover Set" ||
     Product.product === "Kids Duvet Set" || Product.product === "Throw Blanket" || Product.product === "Bed Skirt"
    || Product.product === "Kids Comforter Set" || Product.product === "Comforter Set" || Product.product === "Bed Sheet Set"
    || Product.product === "Kids Sheet Set" || Product.product === "Throw Pillow Cases" || Product.product === "Pillow Case Set"
    || Product.product === "Bath Towel Set" || Product.product === "Face Towel Set" || Product.product === "Bathroom Rug" ||
    Product.product === "Shower Curtain" || Product.product === "Seat Cover" || Product.product === "Bedspread Set"
    || Product.product === "Tablecloth Set" || Product.product === "Table Runner Set" || Product.product === "Table Skirt Set" || Product.product === "Kitchen Apron Set" 
    || Product.product === "Potholder Mittens Set" || Product.product === "Dishcloth Set" || Product.product === "Placemat Set"  ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li> 
            
                        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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

</ul>
:
            Product.product === "Throw Pillow Set" || Product.product === "Bed Pillow" || Product.product === "Backrest Pillow Set" ?
      <ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Fill Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li> 

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
      </ul>
                    
    :
    Product.product === "Floor Pillow" || Product.product === "Pouf" ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Fill Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
    Product.product === "Floor Ornament" || Product.product === "Table Top Ornament" || Product.product === "Wall Ornament" ?
        <ul style={{ width: '100%', display: 'block'}}>
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Curtains" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Opacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Fabric Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Wall Unit" || Product.product === "Tv Stand Cabinet" || Product.product === "Storage Cabinet"
|| Product.product === "Dining Table" || Product.product === "Dining Chair Set" || Product.product === "Counter Stool Set"
|| Product.product === "Dining Bench" || Product.product === "Buffet Table" || Product.product === "Sideboard Table"
|| Product.product === "Wall Cabinet" || Product.product === "Toilet Cabinet" || Product.product === "Shower Bench"
|| Product.product === "Bathroom Stool" || Product.product === "Filing Cabinet" || Product.product === "Storage Drawer"
|| Product.product === "Storage Trunk" || Product.product === "Storage Ottoman" || Product.product === "Standing Podium" 
|| Product.product === "Office Chair" || Product.product === "Breakroom Set" || Product.product === "Breakroom Table"
|| Product.product === "Entryway Bench" || Product.product === "Bar Cabinet" || Product.product === "Corner Bar"
|| Product.product === "Patio Chair Set" || Product.product === "Patio Bench" || Product.product === "Folding Chair Set"
|| Product.product === "Tray Table Set" || Product.product === "Folding Bed" || Product.product === "Gaming Chair"
|| Product.product === "Kids Furniture Set" || Product.product === "Coffee Table" || Product.product === "End, Side Table" 
|| Product.product === "Console Table" || Product.product === "Ottoman Table" || Product.product === "Pantry Cabinet"
 ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Accent Chair" || Product.product === "Recliner Chair" || Product.product === "Chaise Lounge"
|| Product.product === "Rocking Chair" || Product.product === "Glider Chair" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            

</ul>
:
Product.product === "Sofa Bed" || Product.product === "Love Seat" || Product.product === "Futon" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Design</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            

</ul>
:
Product.product === "Dinette Set" || Product.product === "Table Set" || Product.product === "Patio Bistro Set" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Table Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Chairs</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Table Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Kitchen Island" || Product.product === "Bakers Rack" || Product.product === "Wine Rack"
|| Product.product === "Kitchen Cart" || Product.product === "Bar Cart" || Product.product === "Storage Rack"
|| Product.product === "Towel Rack" || Product.product === "Coat Rack" || Product.product === "Play Tent"
|| Product.product === "Toy Chest" || Product.product === "Toy Box" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Design</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Bedroom Suite" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Headboard" || Product.product === "Kids Headboard" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Wardrobe" || Product.product === "Storage Bench" || Product.product === "Printer Stand" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Drawar Dresser" || Product.product === "Nightstand" || Product.product === "Jewellery Armoire" ||
 Product.product === "Vanity Set" || Product.product === "Shoe Storage" || Product.product === "Bathroom Vanity"
 || Product.product === "Office Desk" || Product.product === "Adjustable Desk" || Product.product === "Hall Tree"
 || Product.product === "Wall Shelve Set" || Product.product === "Desk" || Product.product === "Gaming Desk"
 || Product.product === "Baby Dresser" || Product.product === "Kids Vanity"  ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Drawars</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Bookshelf" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Shelves</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Cube Storage Organizer" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Cubes</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Desk Organizer" || Product.product === "Storage Basket" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Outdoor Loveseat" || Product.product === "Outdoor Couch Set"  || Product.product === "2 Piece Set"
|| Product.product === "3 Piece Set" || Product.product === "4 Piece Set" || Product.product === "5 Piece Set"
|| Product.product === "6 Piece Set" || Product.product === "Sectional Sofa" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Shape</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Pieces</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Gazebo" || Product.product === "Pergola" || Product.product === "Outdoor Umbrella"
|| Product.product === "Portable Shed" || Product.product === "Patio Awning" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Baby Crib" || Product.product === "Toddler Bed" || Product.product === "Changing Table" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Target Gender</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onGenderItemChange} placeholder={Product.genderCategory} value={GenderedItem}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Crib Mattress" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Fill Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Bassinet Bedside-Sleeper" || Product.product === "Travel Bed" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Max Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Table Lamp" || Product.product === "Floor Lamp" || Product.product === "Smart Lamp"
|| Product.product === "Decorative Lighting" || Product.product === "Lamp Shade" || Product.product === "Reading Lamp"
|| Product.product === "Ceiling Light" || Product.product === "Track Lighting" || Product.product === "Chandelier"
|| Product.product === "Outdoor Light" || Product.product === "Wall Hanging" || Product.product === "Wallpaper" || Product.product === "Tapestry"
|| Product.product === "Wall Decore" || Product.product === "Canvas Art" || Product.product === "Framed Art"
|| Product.product === "Inspirational Decore" || Product.product === "Painting Art" || Product.product === "Photographic Art"
|| Product.product === "Metal Wall Art"  ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Ceiling Fan" || Product.product === "Fandelier"    ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Number of Speeds</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
        <div style={{ width: '100%',  color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
          <span className='Edit_Details_Title'>Controller Type</span>
        </div>
        <div style={{ width: '100%', paddingLeft: '50px'}}>
          <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
            placeholder={Product.inclusions} value={Inclusions} />
        </div>
      </li>
</ul>
:
Product.product === "Table Mirror" || Product.product === "Wall Mirror" || Product.product === "Floor Mirror"
|| Product.product === "LED Mirror" || Product.product === "Wall Clock" || Product.product === "Table Clock" || Product.product === "Cuckoo Clock"
|| Product.product === "Digital Clock" || Product.product === "Accent Clock" || Product.product === "Table Top Frame"
|| Product.product === "Wall Frame" || Product.product === "Gallary Frame" || Product.product === "Digital Frame"    ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Frame Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Screen Size</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDisplaySizeChange} placeholder={Product.displaySize} value={DisplaySize}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Resolution</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onResolutionChange} placeholder={Product.resolution} value={Resolution}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Scented Candles" || Product.product === "Flameless Candles" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Frame Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Frame Material</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>

              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Scent</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>

            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Burning Duration</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.function} value={Function}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Features</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
</ul>
:
Product.product === "Candle Holder Set" || Product.product === "Pillar Candle Stand" || Product.product === "Candelabra Candle Stand"
|| Product.product === "Bookend Set" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Pieces</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
</ul>
:
Product.product === "Oil Diffuser" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Capacity</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
</ul>
:
Product.product === "Artificial Plant" || Product.product === "Artificial Tree" || Product.product === "Fake Succulent"
|| Product.product === "Plant Stand" || Product.product === "Plant Basket" || Product.product === "Plant Vase"
|| Product.product === "Planter Set" || Product.product === "Globe" || Product.product === "Sculpture" || Product.product === "Decorative Tray"
|| Product.product === "Decorative Bowl Sets" || Product.product === "Room Divider" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Marble Tiles" || Product.product === "Ceramic Tiles" || Product.product === "Porcelain Tiles"
|| Product.product === "Stone Tiles" || Product.product === "Cement Tiles" || Product.product === "Granite Tiles" || Product.product === "Brick Mold"
|| Product.product === "Travertine Tiles" || Product.product === "Quarry Tiles" || Product.product === "Marble Tiles"
|| Product.product === "Terracotta Tiles" || Product.product === "Resin Tiles" || Product.product === "Metal Tiles"
|| Product.product === "Glass Tiles" || Product.product === "Mosaic Tiles" || Product.product === "Cork Tiles"
|| Product.product === "Carpet Tiles" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Pack Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Shape</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Linoleum Flooring" || Product.product === "Vinyl Flooring" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Pack Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Shape</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
                   
</ul>
:
Product.product === "Cookware Set" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Set Pieces</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
</ul>
:
Product.product === "Instant Pot" || Product.product === "Dutch Oven" || Product.product === "Frying Pan"
|| Product.product === "Skillet" || Product.product === "Roaster Pan" || Product.product === "Steel Pressure Cooker" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Dinner Set" || Product.product === "Plate Set" || Product.product === "Dessert Plate Set"
|| Product.product === "Bowl Set" || Product.product === "Baking Pan" || Product.product === "Baking Dish"
|| Product.product === "Baking Sheet Set" || Product.product === "Mixing Bowl" || Product.product === "Baking Cups"
|| Product.product === "Baking Utensil Set" || Product.product === "Tea Cup Set" || Product.product === "Mug Set" || Product.product === "Drinking Glass Set"
|| Product.product === "Bowl Set" || Product.product === "Baking Pan" || Product.product === "Champagne Glass Set"
|| Product.product === "Wine Glass Set" || Product.product === "Cocktail Glass Set" || Product.product === "Beer Glass Set"
|| Product.product === "Beverage Dispenser" || Product.product === "Serveware Set" || Product.product === "Cake Stand" ||
Product.product === "Serving Tray" || Product.product === "Serving Platter" || Product.product === "Silverware Set" ||
Product.product === "Silverware Chest" || Product.product === "Kitchen Utensils Set" || Product.product === "Tiered Server" ||
Product.product === "Storage Canister Set" || Product.product === "Storage Container Set" || Product.product === "Canning Jar Set"
|| Product.product === "Refrigerator Organizer Bin" || Product.product === "Storage Bin" || Product.product === "Dish Rack" 
|| Product.product === "Pot Rack" || Product.product === "Cake Pan" || Product.product === "Cupcake Pan" || Product.product === "Travel Mug"
|| Product.product === "Pie Plate" || Product.product === "Pizza Pan" || Product.product === "Loaf Pan" || Product.product === "Blender Bottle"
|| Product.product === "Eletric Blender Bottle" || Product.product === "Kettle Bottle" || Product.product === "Glass & Pitcher Set"
|| Product.product === "Casserole Dish Set" || Product.product === "Butter Dish Set" || Product.product === "Gravy Boat Set" 
|| Product.product === "Serving Bowl Set" || Product.product === "Butter Dish Set" || Product.product === "Gravy Boat Set"
|| Product.product === "Sugar & Creamer Set" || Product.product === "Salt & Pepper Shakers" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Collection Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Pieces</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Capacity</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Silverware Set" || Product.product === "Silverware Chest" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Pieces</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Special Features</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Food Scale" || Product.product === "Cooking Timer" || Product.product === "Water Filter Dispenser"
|| Product.product === "Fruit Slicer" || Product.product === "Measuring Spoon Set" || Product.product === "Measuring Cup Set" || Product.product === "Slice Tool"
|| Product.product === "Mandoline" || Product.product === "Knife Sharpener" || Product.product === "Cutting Board"
|| Product.product === "Shower Drain" || Product.product === "Shower Bars" || Product.product === "Shower Doors"
|| Product.product === "Freestanding Tub" || Product.product === "Aclover Tub" || Product.product === "Whirlpool Tub"
|| Product.product === "Combination Tub" || Product.product === "Drop In Tub" || Product.product === "Air Tub"
|| Product.product === "Clawfoot Tub" || Product.product === "Walk In Tub" || Product.product === "Corner Tub"
|| Product.product === "Freestanding Tub" || Product.product === "Aclover Tub" || Product.product === "Whirlpool Tub"
|| Product.product === "Pedestal Sink" || Product.product === "Drop In Sink" || Product.product === "Undermount Sink"
|| Product.product === "Vessel Sink" || Product.product === "Wall Mount Sink" || Product.product === "Utility Sink"
|| Product.product === "One Piece Round" || Product.product === "One Piece Elongated" || Product.product === "Wall Mount Round One Piece"
|| Product.product === "Wall Mount Elongated One Piece" || Product.product === "Volumne Handle Valve" || Product.product === "Wall Mount Faucet"
|| Product.product === "Single Hole Faucet" || Product.product === "Centerset Faucet" || Product.product === "Widespread Faucet"
|| Product.product === "Single Handle Faucet" || Product.product === "Pre-Rince Faucet" || Product.product === "Bridge Faucet"
|| Product.product === "Pull Down Faucet" || Product.product === "Side Spray Faucet" || Product.product === "Touch Faucet"
|| Product.product === "Undermount Sink" || Product.product === "Two Basin Undermount" || Product.product === "Two Basin Drop In"
|| Product.product === "Farmhouse Sink" || Product.product === "Two Basin Farmhouse" || Product.product === "Touchless Faucet"
|| Product.product === "Wall Mount Hood" || Product.product === "Range Hood Insert" || Product.product === "Island Range Hood"
|| Product.product === "Under Cabinet Hood" || Product.product === "Copper Sink" || Product.product === "Utensil Caddy Set"
|| Product.product === "Stainless Steel Undermount" || Product.product === "Stainless Steal Drop In" || Product.product === "Stainless Steal Double Basin"
|| Product.product === "Roman Tub Faucets" || Product.product === "Freestanding Tub Filler" || Product.product === "Wall Mount Filler"
|| Product.product === "Mount Clawfoot Filler" || Product.product === "Floor Clawfoot Filler"
|| Product.product === "Kids Blanket" || Product.product === "Weighted Blanket" || Product.product === "Electric Blanket" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Knife Set" || Product.product === "Cleaver Set" || Product.product === "Electric Knife" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Blade Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Blade Edge</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onInterfaceChange} placeholder={Product.interface} value={Interface}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Number of Pieces</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
              <li className='Edit_Details_Title_box'>
                <div style={{ width: '25%',paddingTop: '5px'}}>
                  <span className='Edit_Details_Title'>Power Source</span>
                </div>
                <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
                  <div> <input type="text" onChange={onPowerSourceChange} placeholder={Product.powerSource} value={PowerSource}
                      style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
                </div>
              </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
</ul>
:
Product.product === "Base Set" || Product.product === "Bed Frame" || Product.product === "Bedroom Suite" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
                <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Collection Name</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <TextareaAutosize type="text" onChange={onModelNameChange} placeholder={Product.modelName} value={ModelName}
              minRows={1} 
           style={{ width: '465px', fontSize: '13px', color: '#333', outline: '1px solid orange',
            fontWeight: '600', border: 'none', borderRadius: '2px', padding: '5px 15px'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
            
</ul>
:
Product.product === "Mattress" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Fill Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
        <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Size</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li style={{ listStyle: 'none', width: '100%', display: 'block', padding: '10px 0px'}}>
                <div style={{ width: '100%', color: '#74767c', fontWeight: 'bolder',padding: '10px 0px'}}>
                  <span className='Edit_Details_Title'>Special Attributes</span>
                </div>
                <div style={{ width: '100%', paddingLeft: '50px'}}>
                  <TextareaAutosize minRows={1} style={{ width: '610px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
                    fontWeight: 'bolder', border: 'none', borderRadius: '2px', padding: '5px 15px'}} onChange={onInclusionsChange}
                    placeholder={Product.inclusions} value={Inclusions} />
                </div>
              </li>
            
</ul>
:
Product.product === "Bunk Bed" || Product.product === "Loft Bed" || Product.product === "Kids Bed"
|| Product.product === "Toddler Bed" || Product.product === "Folding Bed" || Product.product === "Adjustable Bed" ?
<ul style={{ width: '100%', display: 'block'}}>
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Brand</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBrandChange} placeholder={Product.brand} value={BrandValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Material</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onBodyCoverChange} placeholder={Product.bodyCover} value={BodyCover}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Assembly</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFeatureCountChange} placeholder={Product.featureCount} value={FeatureCount}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Color</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onColorValueChange} placeholder={Product.color} value={ColorValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
            <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Design</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onFunctionsChange} placeholder={Product.functions} value={Functions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
        
          <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Weight</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onWeightValueChange} placeholder={Product.weight} value={WeightValue}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
        </div>
      </li>
            
      <li className='Edit_Details_Title_box'>
        <div style={{ width: '25%',paddingTop: '5px'}}>
          <span className='Edit_Details_Title'>Item Dimensions</span>
        </div>
        <div style={{ width: '75%', display: 'flex', paddingLeft: '20px'}}>
          <div> <input type="text" onChange={onDimensionsChange} placeholder={Product.dimensions} value={Dimensions}
              style={{ width: '465px', height: '30px', fontSize: '13px', color: '#656481', outline: '2px solid #656481', fontWeight: 'bolder', border: 'none', borderRadius: '2px', textAlign: 'center'}} /></div>
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
</ul>
    :
    <></>
    } 

  </ul>
</div>
)
}

export default UpdateInfo