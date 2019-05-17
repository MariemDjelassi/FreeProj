var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    name : String,
    address : String,
    foundYear : Number,
    phone : Number, 
    logo : String,
    size : {type : String, enum : ['[0..9]','[10..49]','[50..99]','+100', '']},
    description : String,
    website : String,
    linkedIn : String,
    fb_link : String,
});

module.exports = mongoose.model('company', companySchema);