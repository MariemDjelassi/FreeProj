var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String},
    role : {type : String, enum : ['Freelancer', 'Company']},
    freelancer : [{ type : mongoose.Schema.Types.ObjectId, ref : 'freelancer' }],
    company : [{ type : mongoose.Schema.Types.ObjectId, ref : 'company' }],
});

module.exports = mongoose.model('user', userSchema);