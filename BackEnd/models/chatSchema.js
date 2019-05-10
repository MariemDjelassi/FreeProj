var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    userComp : {type: mongoose.SchemaTypes.ObjectId, ref:'company'},
    userFreel: {type: mongoose.SchemaTypes.ObjectId, ref:'freelancer'},
    messages : [{
      sender : String,
      content : String,
      date : {type: Date, default: Date.now()},
    }],
});

module.exports = mongoose.model('chat', chatSchema);