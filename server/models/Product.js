const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 180
    },
    description: {
        type: String
    },
    sellerId: {
        type: String
    },
    brochure: {
        type: String,
        default: ""
    },
    accountTier: {
        type: String,
        default: ""
    },
    clothMaterial: {
        type: String
    },
    clothesColor: {
        type: String,
        default: ""
    },
    womenClothSleeves: {
        type: String
    },
    menClothSleeves: {
        type: String
    },
    extraSmallSize: {
        type: Boolean,
        default: false
    },
    smallSize: {
        type: Boolean,
        default: false
    },
    mediumSize: {
        type: Boolean,
        default: false
    },
    largeSize: {
        type: Boolean,
        default: false
    },
    extraLargeSize: {
        type: Boolean,
        default: false
    },
    doubleExtraLargeSize: {
        type: Boolean,
        default: false
    },

    sevenToEightSize: {
        type: Boolean,
        default: false
    },
    eightToNineSize: {
        type: Boolean,
        default: false
    },
    nineToTenSize: {
        type: Boolean,
        default: false
    },
    elevenToTwelveSize: {
        type: Boolean,
        default: false
    },
    twelveToThirteenSize: {
        type: Boolean,
        default: false
    },
    thirteenToFourteenSize: {
        type: Boolean,
        default: false
    },
    threeToFourSize: {
        type: Boolean,
        default: false
    },
    fourToFiveSize: {
        type: Boolean,
        default: false
    },
    fiveToSixSize: {
        type: Boolean,
        default: false
    },
    sixToSevenSize: {
        type: Boolean,
        default: false
    },
    threeToSixMonthsSize: {
        type: Boolean,
        default: false
    },
    sixToTwelveMonthsSize: {
        type: Boolean,
        default: false
    },
    twelveToThirtySixMonthsSize: {
        type: Boolean,
        default: false
    },
    zeroToSixMonthsSize: {
        type: Boolean,
        default: false
    },
    sixToYearSize: {
        type: Boolean,
        default: false
    },
    sockHeight: {
        type: String
    },
    landingPage: {
        type: String,
        default: ""
    },
    activeSeller: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        default: 0
    },
    warrenty: {
        type: String
    },
    deliveryStatus: {
        type: String
    },
    wasPrice: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    imageOne: {
        type: Array
    },
    imageTwo: {
        type: Array
    },
    imageThree: {
        type: Array
    },
    imageFour: {
        type: Array
    },
    imageFive: {
        type: Array
    },
    manufacturerImages: {
        type: Array,
        default: []
    },
    product: {
        type: String
    },
    storeAddress: {
        type: String,
        default: ""
    },
    special: {
        type: String
    },
    retailerImage: {
        type: Array
    },
    powerSource: {
        type: String
    },
    voltage: {
        type: String
    },
    featureCount: {
        type: String
    },
    displayPort: {
        type: String
    },
    dviPort: {
        type: String,
    },
    dvdDrive: {
        type: String,
    },
    twentyPlusCount: {
        type: String,
    },
    floppyCount: {
        type: String,
    },
    twentyPlusCount: {
        type: String,
    },
    molexCount: {
        type: String,
    },
    genderCategory: {
        type: String,
    },
    orderConfirm: {
        type: Boolean,
        default: false
    },
    orderShip: {
        type: Boolean,
        default: false
    },
    orderStatusOperator: {
        type: Boolean,
        default: false
    },
    orderDelivered: {
        type: Boolean,
        default: false
    },
    Walvis: {
        type: Boolean,
        default: false
    },
    Swakop: {
        type: Boolean,
        default: false
    },
    Windhoek: {
        type: Boolean,
        default: false
    },
    KatimaMulilo: {
        type: Boolean,
        default: false
    },
    Grootfontein: {
        type: Boolean,
        default: false
    },
    Rundu: {
        type: Boolean,
        default: false
    },
    Otjiwarongo: {
        type: Boolean,
        default: false
    },
    Oshakati: {
        type: Boolean,
        default: false
    },
    Okahandja: {
        type: Boolean,
        default: false
    },
    Gobabis: {
        type: Boolean,
        default: false
    },
    Rehoboth: {
        type: Boolean,
        default: false
    },
    Ongwediva: {
        type: Boolean,
        default: false
    },
    Ondangwa: {
        type: Boolean,
        default: false
    },
    Tsumeb: {
        type: Boolean,
        default: false
    },
    
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    processorName: {
        type: String
    },
    processorFrequency: {
        type: String
    },
    graphicsCardName: {
        type: String
    },
    vRam: {
        type: String
    },
    coreCount: {
        type: String
    },
    graphicsCardGeneration: {
        type: String
    },
    ram: {
        type: String
    },
    ramArrangement: {
        type: String
    },
    ramGeneration: {
        type: String
    },
    hardDisk: {
        type: String
    },
    ssd: {
        type: String
    },
    nvme: {
        type: String
    },
    nvmeBus: {
        type: String
    },
    operatingSystem: {
        type: String
    },
    inclusions: {
        type: String
    },
    motherboard: {
        type: String
    },
    powerSupply: {
        type: String
    },
    wifiModule: {
        type: String
    },
    ethernetPort: {
        type: String
    },
    usbPort: {
        type: String
    },
    vgaPort: {
        type: String
    },
    pciPort: {
        type: String
    },
    hdmiPort: {
        type: String
    },
    ramSlot: {
        type: String
    },
    modelName: {
        type: String
    },
    resolution: {
        type: String
    },
    aspectRatio: {
        type: String
    },
    displaySize: {
        type: String
    },
    color: {
        type: String
    },
    resolutionType: {
        type: String
    },
    fps: {
        type: String
    },
    threeD: {
        type: String
    },
    brand: {
        type: String
    },
    cType: {
        type: String
    },
    sdCardSlot: {
        type: String
    },
    ramSpeed: {
        type: String
    },
    compatibleDevice: {
        type: String
    },
    fan: {
        type: String
    },
    displayVia: {
        type: String
    },
    busStandard: {
        type: String
    },
    graphicsCardSpeed: {
        type: String
    },
    wattage: {
        type: String
    },
    manufacturer: {
        type: String
    },
    threads: {
        type: String
    },
    cpuUnlock: {
        type: String
    },
    maxRam: {
        type: String
    },
    ramBandwidth: {
        type: String
    },
    integratedGraphics: {
        type: String
    },
    supportedOS: {
        type: String
    },
    compatibleMotherboards: {
        type: String
    },
    seriesName: {
        type: String
    },
    cpuSocket: {
        type: String
    },
    chipsetType: {
        type: String
    },
    connectorType: {
        type: String
    },
    weight: {
        type: String
    },
    sataCount: {
        type: String
    },
    fourPinCount: {
        type: String
    },
    sixPinCount: {
        type: String
    },
    specialAttribute: {
        type: String
    },
    dimensions: {
        type: String
    },
    hddSlots: {
        type: String
    },
    hddCount: {
        type: String
    },
    ssdCount: {
        type: String
    },
    ssdSlots: {
        type: String
    },
    functions: {
        type: String
    },
    inputTray: {
        type: String
    },
    outputTray: {
        type: String
    },
    compatibleBlackInks: {
        type: String
    },
    compatibleColorInks: {
        type: String
    },
    stockedInk: {
        type: String
    },
    monoPrint: {
        type: String
    },
    colorPrint: {
        type: String
    },
    compatibleModel: {
        type: String
    },
    cableLenght: {
        type: String
    },
    interface: {
        type: String
    },
    cableType: {
        type: String
    },
    gender: {
        type: String
    },
    transferRate: {
        type: String
    },
    bodyCover: {
        type: String
    },
    storageCapacity: {
        type: String
    },
    hardwareInterface: {
        type: String
    },
    diskStorage: {
        type: String
    },
    pageYield: {
        type: String
    },
    sataPin: {
        type: String
    },
    hddInsert: {
        type: String
    },
    ssdInsert: {
        type: String
    },
    nvmeSlot: {
        type: String
    },
    mdotTwo: {
        type: String
    },
    powerConnector: {
        type: String
    },
    ramBus: {
        type: String
    },
    location: {
        type: String
    }
}, { timestamps: true })


productSchema.index({ 
    title:'text',
}, {
    weights: {
        title: 5,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }