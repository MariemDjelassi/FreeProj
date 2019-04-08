var mongoose = require('mongoose');

var freelancerSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber : String,
    birthDate : String,
    address : String,
    rateWork : Number,
    profileImage : String,
    fb_link : String,
    twitter_link : String,
    linkedIn_link : String,
    gitHub_link : String,
    portFolio_link : String,
    skills : [{skill : String}],
    langages :[{langage : String}],
    projects : [{ type : mongoose.Schema.Types.ObjectId, ref : 'project' }]
});

module.exports = mongoose.model('freelancer', freelancerSchema);