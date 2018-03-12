var mongoose = require('mongoose');

module.exports = mongoose.model('Usercontact', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telphone: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    }
});