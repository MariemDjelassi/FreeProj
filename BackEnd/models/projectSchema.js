var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    titleProject : String,
    description : String,
    duration : String,
    start_date : String,
    skills : [{skill : String}],
    min_offer : Number,
    max_offer : Number,
    company_owner : { type : mongoose.Schema.Types.ObjectId, ref : 'company' }
    applied_freelancers : [{ id_freelancer : { type : mongoose.Schema.Types.ObjectId, ref : 'freelancer' }, offer : Number}],
    accepted_freelancer : { type : mongoose.Schema.Types.ObjectId, ref : 'freelancer' },
    status : {type : String, enum : ['en attente', 'en cours', 'terminé']}
});

module.exports = mongoose.model('project', projectSchema);