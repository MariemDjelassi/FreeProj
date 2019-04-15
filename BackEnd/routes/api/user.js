var router = require('express').Router();
var bcrypt = require('bcrypt');
var upload = require('../uploads/uploadMiddleware');
var User = require('../../models/userSchema');
var Freelancer = require('../../models/freelancerSchema');
var Company = require('../../models/companySchema');

router.post('/upload', upload.single('file'), function (req, res, next) {
    res.send(req.file)
});

router.post('/register/freelancer', upload.single('file') , async(req,res) => {
    // Check if this user already exisits
    let exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.send('That user already exist!');
    } else {
        // Insert the new user if they do not exist yet
        freelancer = new Freelancer(req.body);
        user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.role = 'Freelancer';
        await freelancer.save( async function(err, freelancer) {
            res.send(freelancer);
            user['freelancer'] = freelancer._id;
            await user.save();
            res.send({message:"Register done"});
        });
    }
})

router.post('/register/company', async(req,res) => {
    // Check if this user already exisits
    let exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.send('That user already exist!');
    } else {
        // Insert the new user if they do not exist yet
        company = new Company(req.body);
        user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user.role = 'Company';
        await company.save( async function(err, company) {
            user['company'] = company._id;
            await user.save();
            res.send({message:"Register done"});
        });
    }
})

module.exports = router;