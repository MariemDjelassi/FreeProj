var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectL3')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
