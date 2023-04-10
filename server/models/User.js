const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        default: ""
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: String,
        maxlength: 50
    },
    cart: {
        type: Array,
        default: []
    },
    pcBuild: {
        type: Array,
        default: []
    },
    wishlist: {
        type: Array,
        default: []
    },
    contact: {
        type: String,
        maxlength: 50
    },
    retailer: {
        type: String
    },
    userLocation: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    otjiwarongoAddress: {
        type: String,
        default: ""
    },
    oshakatiAddress: {
        type: String,
        default: ""
    },
    swakopAddress: {
        type: String,
        default: ""
    },
    katimaMuliloAddress: {
        type: String,
        default: ""
    },
    okahandjaAddress: {
        type: String,
        default: ""
    },
    grootfonteinAddress: {
        type: String,
        default: ""
    },
    gobabisAddress: {
        type: String,
        default: ""
    },
    rehobothAddress: {
        type: String,
        default: ""
    },
    runduAddress: {
        type: String,
        default: ""
    },
    ongwedivaAddress: {
        type: String,
        default: ""
    },
    windhoekAddress: {
        type: String,
        default: ""
    },
    tsumebAddress: {
        type: String,
        default: ""
    },
    walvisAddress: {
        type: String,
        default: ""
    },
    storePickup: {
        type: Boolean,
        default: true
    },
    operateLocation: {
        type: String,
        maxlength: 50,
        default: "User"
    },
    history: {
        type: Array,
        default: []
    },
    notifications: {
        type: String,
        maxlength: 250
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
    profileImage: {
        type: Array,
        default: []
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})


userSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    jwt.verify(token, 'secret', function (err, decode) {
        user.findOne({
            "_id": decode,
            "token": token
        }, function (err, user) {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}