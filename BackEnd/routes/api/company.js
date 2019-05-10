var router = require('express').Router();
var passport = require('passport');
var Company = require('../../models/companySchema');

// passport.authenticate('bearer', {session: false}),

router.get('/getCompany/:idCompany', passport.authenticate('bearer', {session: false}), async(req,res) => {
    await Company.findById(req.params.idCompany).exec(function(err,company) {
        if (err) {
            res.send(err);
        }
        res.send(company);
    });
})

router.get('/getCompanies', passport.authenticate('bearer', {session: false}), async(req,res) => {
    await Company.find().exec(function(err,company) {
        if (err) {
            res.send(err);
        }
        res.send(company);
    });
})

router.post('/updateCompany/:idCompany', passport.authenticate('bearer', {session: false}), async(req,res) => {
    await Company.findByIdAndUpdate(req.params.idCompany, {
        name: req.body.name || "Untitled Company",
        address: req.body.address,
        foundYear: req.body.foundYear, 
        phone: req.body.phone,
        logo: req.body.logo, 
        size: req.body.size, 
        description: req.body.description,  
        website: req.body.website,  
        linkedIn: req.body.linkedIn,  
        fb_link: req.body.fb_link
        }).exec((err,companies) => {
            if(err) {
                console.log(err);
            }
        res.send('Updated successfully!');
    })
})

module.exports = router;