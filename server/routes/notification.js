const express = require('express');
const router = express.Router();
const multer = require('multer');

const { auth } = require("../middleware/auth");
const { Notification } = require('../models/Notification');

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





router.post("/uploadImage", auth, (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/uploadNotification", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const notification = new Notification(req.body)

    notification.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});


router.post("/getNotifications", (req, res) => {

    Notification.find()
        .exec((err, notification) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, notification })
        })

});

module.exports = router;
