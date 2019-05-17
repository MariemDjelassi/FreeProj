var router = require('express').Router();
var bcrypt = require('bcrypt');
var User = require('../../models/userSchema');
var Freelancer = require('../../models/freelancerSchema');
var Company = require('../../models/companySchema');
var mongoose = require('mongoose');


router.post('/register/freelancer', async(req,res) => {
    console.log(req.body);
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
        console.log('newFreel', freelancer);
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
    console.log(req.body)
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
        console.log('aaaaaa',company)
        await company.save(async function(err, company) {
            if(err) {
                res.send(err);
            }
            res.send(company);
            user['company'] = company._id;
            await user.save();
            res.send({message:"Register done"});
        });
    }
})


module.exports = router;