var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    nameCompany : String,
    address : String,
    foundYear : Number,
    phoneNumber : Number, 
    logoCompany : String,
    size : {type : String, enum : ['[0..9]','[10..49]','[50..99]','+100']},
    description : String,
    website : String,
    linkedIn : String,
    fb_link : String,
    projects : [{ type : mongoose.Schema.Types.ObjectId, ref : 'project' }]
});

module.exports = mongoose.model('company', companySchema);