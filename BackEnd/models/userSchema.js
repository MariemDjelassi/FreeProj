var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    role : {type : String, enum : ['Freelancer', 'Company'], required : true,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                // Complete async task
                setTimeout(() => {
                    const result = v.length = 1;
                    callback(result);
                }, 2000);
            },
            message: 'You must provide only 1 tag.'
        },
    },
    freelancer : { type : mongoose.Schema.Types.ObjectId, ref : 'freelancer' },
    company : { type : mongoose.Schema.Types.ObjectId, ref : 'company' }
})
// status : {type : String, enum : ['Active', 'Not Active']},

userSchema.methods.joiValidate = function(user) {
	var Joi = require('joi');
	var schema = {
        email: Joi.types.String().email().required().unique(),
		password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
		role: Joi.types.String().valid('COMPANY', 'FREELANCER').uppercase().required()
	}
	return Joi.validate(user, schema);
}

module.exports = mongoose.model('user', userSchema);