var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    titleProject : String,
    description : String,
    duration : Number,
    start_date : String,
    skills : [{skill : String}],
    min_offer : Number,
    max_offer : Number,
    file : String,
    company_owner : { type : mongoose.Schema.Types.ObjectId, ref : 'company' },
    applied_freelancers : [{ id_freelancer : { type : mongoose.Schema.Types.ObjectId, ref : 'freelancer' }, offer : Number}],
    accepted_freelancer : { type : mongoose.Schema.Types.ObjectId, ref : 'freelancer', unique : true },
    status : {type : String, enum : ['waiting', 'in progress', 'completed'], default : 'waiting',
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
        }
    }
});

module.exports = mongoose.model('project', projectSchema);