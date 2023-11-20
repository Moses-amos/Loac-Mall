const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require('../models/Product');
const { auth } = require("../middleware/auth");
//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
        cart: req.user.cart,
        wishlist: req.user.wishlist,
        accountTier: req.user.accountTier,
        pcBuild: req.user.pcBuild,
        operateLocation: req.user.operateLocation,
        storePickup: req.user.storePickup,
        userLocation: req.user.userLocation,
        contact: req.user.contact,
        address: req.user.address,
        history: req.user.history,
    }); 
});

//=================================
//             Product
//=================================

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

    // user.generateToken((err, user) => {
    //     if (err) return res.status(400).send(err);
    //     res.cookie("w_authExp", user.tokenExp);
    //     res
    //         .cookie("w_auth", user.token)
    //         .status(200)
    //         .json({
    //             loginSuccess: true, userId: user._id
    //         });
    // });

});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

// Cart
router.get('/addToCart', auth, (req, res) => {

    User.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;


        userInfo.cart.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })


        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user._id, "cart.id": req.query.productId },
                { $inc: { "cart.$.quantity": 1 } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        } else {
            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        cart: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        }
    })
});

router.get('/addToCartOnce', auth, (req, res) => {

    User.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;


        userInfo.cart.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })


        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user._id, "cart.id": req.query.productId },
                { $inc: { "cart.$.quantity": 0 } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        } else {
            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        cart: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        }
    })
});

// router.get('/addToCartOnce', auth, (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.user._id },
//         {
//             $push: {
//                 cart: {
//                     id: req.query.productId,
//                     quantity: 1,
//                     date: Date.now()
//                 }
//             }
//         },
//         { new: true },
//         (err, userInfo) => {
//             if (err) return res.json({ success: false, err });
//             res.status(200).json(userInfo.cart)
//         }
//     )
// });

// Pcbuild
router.get('/addPcBuild', auth, (req, res) => {

            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        pcBuild: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.pcBuild)
                }
            )
});

// Wishlist
router.get('/addToWishlist', auth, (req, res) => {

    User.findOne({ _id: req.user._id }, (err, userInfo) => {

        userInfo.wishlist.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })

            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        wishlist: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.wishlist)
                }
            )
        
    })
});

router.get('/addToWishlistOnce', auth, (req, res) => {

    User.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;


        userInfo.wishlist.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })


        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user._id, "wishlist.id": req.query.productId },
                { $inc: { "wishlist.$.quantity": 0 } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.wishlist)
                }
            )
        } else {
            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        wishlist: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.wishlist)
                }
            )
        }
    })
});

// Cart
router.get('/removeFromCart', auth, (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            "$pull":
                { "cart": { "id": req.query._id } }
        },
        { new: true },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map(item => {
                return item.id
            })

            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, cartDetail) => {
                    return res.status(200).json({
                        cartDetail,
                        cart
                    })
                })
        }
    )
})

// PcBuild
router.get('/removeFromPcBuild', auth, (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            "$pull":
                { "pcBuild": { "id": req.query._id } }
        },
        { new: true },
        (err, userInfo) => {
            let pcBuild = userInfo.pcBuild;
            let array = pcBuild.map(item => {
                return item.id
            })

            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, pcBuildDetail) => {
                    return res.status(200).json({
                        pcBuildDetail,
                        pcBuild
                    })
                })
        }
    )
})

// Wishlist
router.get('/removeFromWishlist', auth, (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            "$pull":
                { "wishlist": { "id": req.query._id } }
        },
        { new: true },
        (err, userInfo) => {
            let wishlist = userInfo.wishlist;
            let array = wishlist.map(item => {
                return item.id
            })

            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, wishlistDetail) => {
                    return res.status(200).json({
                        wishlistDetail,
                        wishlist
                    })
                })
        }
    )
})

// Cart
router.get('/userCartInfo', auth, (req, res) => {
    User.findOne(
        { _id: req.user._id },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map(item => {
                return item.id
            })


            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, cartDetail) => {
                    if (err) return res.status(400).send(err);
                    return res.status(200).json({ success: true, cartDetail, cart })
                })

        }
    )
})

// PcBuild
router.get('/userPcBuildInfo', auth, (req, res) => {
    User.findOne(
        { _id: req.user._id },
        (err, userInfo) => {
            let pcBuild = userInfo.pcBuild;
            let array = pcBuild.map(item => {
                return item.id
            })


            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, pcBuildDetail) => {
                    if (err) return res.status(400).send(err);
                    return res.status(200).json({ success: true, pcBuildDetail, pcBuild })
                })

        }
    )
})

// Wishlist
router.get('/userWishlistInfo', auth, (req, res) => {
    User.findOne(
        { _id: req.user._id },
        (err, userInfo) => {
            let wishlist = userInfo.wishlist;
            let array = wishlist.map(item => {
                return item.id
            })


            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, wishlistDetail) => {
                    if (err) return res.status(400).send(err);
                    return res.status(200).json({ success: true, wishlistDetail, wishlist })
                })

        }
    )
})


router.post('/successBuy', auth, (req, res) => {
    let history = [];
    // let transactionData = {};

    //1.Put brief Payment Information inside User Collection 
    req.body.cartDetail.forEach((item) => {
        history.push({
            dateOfPurchase: Date.now(),
            name: item.title,
            id: item._id,
            price: item.price,
            images: item.imageOne,
            imageOne: item.imageOne,
            retailerImage: item.retailerImage,
            warrenty: item.warrenty,
            sellerId: item.sellerId,
            brochureItem: item.brochureItem,
            orderConfirm: item.orderConfirm,
            orderShip: item.orderShip,
            storeAddress: item.storeAddress,
            orderStatusOperator: item.orderStatusOperator,
            orderDelivered: item.orderDelivered,
            quantity: item.quantity,
            storeAddress: item.storeAddress,
            // paymentId: req.body.paymentData.paymentID
        })
    })

    // req.body.pcBuildDetail.forEach((item) => {
    //     history.push({
    //         dateOfPurchase: Date.now(),
    //         name: item.title,
    //         id: item._id,
    //         price: item.price,
    //         buildProduct: item.buildProduct,
    //         images: item.images,
    //         orderConfirm: item.orderConfirm,
    //         orderShip: item.orderShip,
    //         orderStatusOperator: item.orderStatusOperator,
    //         quantity: item.quantity,
    //         // paymentId: req.body.paymentData.paymentID
    //     })
    // })

    //2.Put Payment Information that come from Paypal into Payment Collection 
    // transactionData.user = {
    //     id: req.user._id,
    //     name: req.user.name,
    //     lastname: req.user.lastname,
    //     email: req.user.email
    // }

    // transactionData.data = req.body.paymentData;
    // transactionData.product = history


    User.findOneAndUpdate(
        { _id: req.user._id },
        { $push: { history: history }, $set: { cart: [] } },
        { new: true },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            if (err) return res.json({ success: false, err })
            res.status(200).json({
                success: true,
                cart: user.cart,
                cartDetail: [],
            })

            // const payment = new Payment(transactionData)
            // payment.save((err, doc) => {
            //     if (err) return res.json({ success: false, err });

                //3. Increase the amount of number for the sold information 

                //first We need to know how many product were sold in this transaction for 
                // each of products

                // let products = [];
                // doc.product.forEach(item => {
                //     products.push({ id: item.id, quantity: item.quantity })
                // })

                // first Item    quantity 2
                // second Item  quantity 3

                // async.eachSeries(products, (item, callback) => {
                //     Product.update(
                //         { _id: item.id },
                //         {
                //             $inc: {
                //                 "sold": item.quantity
                //             }
                //         },
                //         { new: false },
                //         callback
                //     )
                // }, (err) => {
                //     if (err) return res.json({ success: false, err })
                //     res.status(200).json({
                //         success: true,
                //         cart: user.cart,
                //         cartDetail: [],
                //     })
                // })

           // }
           // )
        }
    )
})


router.get('/getHistory', auth, (req, res) => {
    User.findOne(
        { _id: req.user._id },
        (err, doc) => {
            let history = doc.history;
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, history })
        }
    )
})

router.post('/getHistorys', auth, (req, res) => {
    User.find({"history.sellerId": req.user.retailer.toString()},
        (err, doc) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, doc })
        }
    )
})

router.post('/getHistoryProducts', auth, (req, res) => {
    User.find({"history.sellerId": req.user._id.toString()},
        (err, doc) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, doc })
        }
    )
})


router.post('/updateHistoryConfirm', auth, (req, res) => {
    const settingRole = req.body;

    User.findOne({ _id: settingRole.userId }, (err, doc) => {
        let duplicate = false;

        doc.history.forEach((item) => {
            if (item.id == settingRole.productId) {
                duplicate = true;
            }
        })

        if (duplicate) {
            User.findOneAndUpdate(
                { _id: settingRole.userId, "history.id": settingRole.productId },
                { $set: { 
                    "history.$.orderConfirm": settingRole.orderConfirm,
                    "history.$.storeAddress": settingRole.storeAddress,
                } },
                // { $set: { "} },
                // { $set: { } },
                // { $push: 
                //     { 
                //         orderConfirm: settingRole.orderConfirm,
                //         orderShip: settingRole.orderShip,
                //         orderStatusOperator: settingRole.orderStatusOperator,
                //     } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.history)

                }
            )
        } 

})

})

router.post('/updateHistoryShip', auth, (req, res) => {
    const settingRole = req.body;


    User.findOne({ _id: settingRole.userId }, (err, doc) => {
        let duplicate = false;

        doc.history.forEach((item) => {
            if (item.id == settingRole.productId) {
                duplicate = true;
            }
        })

        if (duplicate) {
            User.findOneAndUpdate(
                { _id: settingRole.userId, "history.id": settingRole.productId },
                { $set: { 
                    "history.$.orderShip": settingRole.orderShip,
                } },
                // { $set: { "} },
                // { $set: { } },
                // { $push: 
                //     { 
                //         orderConfirm: settingRole.orderConfirm,
                //         orderShip: settingRole.orderShip,
                //         orderStatusOperator: settingRole.orderStatusOperator,
                //     } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.history)

                }
            )
        } 

})

})

router.post('/updateHistoryDeliver', auth, (req, res) => {
    const settingRole = req.body;


    User.findOne({ _id: settingRole.userId }, (err, doc) => {
        let duplicate = false;

        doc.history.forEach((item) => {
            if (item.id == settingRole.productId) {
                duplicate = true;
            }
        })

        if (duplicate) {
            User.findOneAndUpdate(
                { _id: settingRole.userId, "history.id": settingRole.productId },
                { $set: { 
                    "history.$.orderStatusOperator": settingRole.orderStatusOperator
                } },
                // { $set: { "} },
                // { $set: { } },
                // { $push: 
                //     { 
                //         orderConfirm: settingRole.orderConfirm,
                //         orderShip: settingRole.orderShip,
                //         orderStatusOperator: settingRole.orderStatusOperator,
                //     } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.history)

                }
            )
        } 

})

})

router.post('/updateHistoryDeliveryDone', auth, (req, res) => {
    const settingRole = req.body;


    User.findOne({ _id: settingRole.userId }, (err, doc) => {
        let duplicate = false;

        doc.history.forEach((item) => {
            if (item.id == settingRole.productId) {
                duplicate = true;
            }
        })

        if (duplicate) {
            User.findOneAndUpdate(
                { _id: settingRole.userId, "history.id": settingRole.productId },
                { $set: { 
                    "history.$.orderDelivered": settingRole.orderDelivered,
                    "history.$.storeAddress": settingRole.storeAddress,
                } },
                // { $set: { "} },
                // { $set: { } },
                // { $push: 
                //     { 
                //         orderConfirm: settingRole.orderConfirm,
                //         orderShip: settingRole.orderShip,
                //         orderStatusOperator: settingRole.orderStatusOperator,
                //     } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.history)

                }
            )
        } 

})

})

// Remove order
router.get('/removeOrder', auth, (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            "$pull":
                { "history": { "id": req.query._id } }
        },
        { new: true },
        (err, userInfo) => {
            let history = userInfo.history;
            let array = history.map(item => {
                return item.id
            })

            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, history) => {
                    return res.status(200).json({
                        history
                    })
                })
        }
    )
})

// Save Role
router.post("/setRole", auth, (req, res) => {
    const settingRole = req.body;

    User.findByIdAndUpdate({_id: req.user._id}, settingRole, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })
});

router.post("/updateUsers", auth, (req, res) => {
    const settingRole = req.body;

    User.updateMany(settingRole)
        .exec((err, users) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, users })
        })


});

// Get user
router.get("/getUser", auth, (req, res) => {

    User.findById({_id: req.user._id}, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })
});

router.post("/getLandingPageUser", (req, res) => {

    User.findById({_id: req.body.userId}, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true, doc
        });
    })
});

router.post("/getUsers", (req, res) => {

    User.find()
        .exec((err, users) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, users })
        })
});

router.post("/getBranches", (req, res) => {

    User.find({operateLocation: "Branch"})
        .exec((err, users) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, users })
        })
});

router.post("/getNormalUsers", (req, res) => {

    User.find({operateLocation: "User"})
        .exec((err, users) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, users })
        })
});

router.post("/getRetailers", (req, res) => {

    User.find({operateLocation: "Admin"})
        .exec((err, users) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, users })
        })
});

// router.delete('/deleteuser/:userId',auth,(req,res)=>{
//     User.findOne({_id:req.params.userId})
//     .exec((err,user)=>{
//         if(err || !user){
//             return res.status(422).json({error:err})
//         }
//         if(user._id.toString() === req.user._id.toString()){
//             user.remove()
//               .then(result=>{
//                   res.json(result)
//               }).catch(err=>{
//                 //   console.log(err)
//               })
//         }
//     })
// })


module.exports = router;
