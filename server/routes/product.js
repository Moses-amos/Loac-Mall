const express = require('express');
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require('multer');

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/uploadProduct", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const product = new Product(req.body)

    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});


router.post("/getProducts", (req, res) => {

    // let order = req.body.order ? req.body.order : "desc";
    // let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    // console.log(findArgs)
    // console.log(term)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            // .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            // .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }
});


router.post("/getPageProducts", (req, res) => {
    Product.find({product: req.body.product}, (err, products) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, products})
    })
});

router.post("/getProductRetailer", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    // console.log(findArgs)
    // console.log(term)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }
});

// get writer products
router.get("/writerProducts", auth, (req, res) => {

    Product.find({sellerId: req.user._id}, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })
});

// get reccommend products
router.post("/recommendProducts", (req, res) => {

    Product.find({product: req.body.product}, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })
});


//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id
    // console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    //we need to find the product information that belong to product Id 
    Product.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});


router.post("/getProduct", auth, (req, res) => {
    const updateValues = req.body;

    Product.findByIdAndUpdate({_id: req.body.productId}, updateValues, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })


});

router.delete('/deleteproduct/:productId',auth,(req,res)=>{
    Product.findOne({_id:req.params.productId})
    .populate("writer","_id")
    .exec((err,product)=>{
        if(err || !product){
            return res.status(422).json({error:err})
        }
        if(product.writer._id.toString() === req.user._id.toString()){
            product.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                //   console.log(err)
              })
        }
    })
})




module.exports = router;
