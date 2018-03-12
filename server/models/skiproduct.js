var mongoose = require('mongoose');

module.exports = mongoose.model('Skiproduct', {
    ItemCode: {
        type: Number,
        required: true
    },
    DisplayName: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: false
    },
    ListPrice: {
        type: Number,
        required: false
    },
    MainImage: {
        type: String,
        required: false
    },
    DisplaySizes: {
        type: Boolean,
        default: false
    },
    Sizes: {
        type: String,
        required: false
    },
    EnableAltImage: {
        type: Boolean,
        default: false
    },
    AltImage: {
        type: String,
        required: false
    },
    EnableAltImage2: {
        type: Boolean,
        default: false
    },
    AltImage2: {
        type: String,
        required: false
    },
    DisplayImg: {
        type: String,
        required: false
    }
});