var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require ('jsonwebtoken');
var User = require('../../models/userSchema');
var Freelancer = require('../../models/freelancerSchema');
var Company = require('../../models/companySchema');


router.post('/login', async(req,res) => {
    let user = await User.findOne({email: req.body.email});
    if(!user) {
        res.send({message :'Incorrect email or password.'});
    } 
    let validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        res.send({message :'Incorrect email or password.'});
    }
    if(user.role === 'Company') {
        Company.findOne({ _id: user.company }).then(comp => {
            const token = jwt.sign({ 
                '_id':user._id,
                'idComp': comp._id,
                'role': "Company",
                'email': user.email,
                'password':user.password,
                'name': comp.name,
                'address': comp.address,
                'foundYear': comp.foundYear,
                'phone': comp.phone,
                'size': comp.size,
                'fb_link': comp.fb_link,
                'website': comp.website,
                'logo': comp.logo,
                'linkedIn': comp.linkedIn,
                'description': comp.description
                }, 'my-jwt-secret', {expiresIn:3600});
            res.send({success:"true", access_token:token});
        })
    }
    if(user.role === 'Freelancer') {
        Freelancer.findOne({ _id: user.freelancer }).then(freel => {
            const token = jwt.sign({ 
                '_id':user._id,
                'idFreel': freel._id,
                'role': "Freelancer",
                'email': user.email,
                'password':user.password,
                'firstName': freel.firstName,
                'lastName': freel.lastName,
                'phone': freel.phone,
                'birthDate': freel.birthDate,
                'address': freel.address,
                'rateWork': freel.rateWork,
                'profileImage': freel.profileImage,
                'fb_link': freel.fb_link,
                'twitter_link': freel.twitter_link,
                'linkedIn_link': freel.linkedIn_link,
                'gitHub_link': freel.gitHub_link,
                'portFolio_link': freel.portFolio_link,
                'skills': freel.skills,
                'languages': freel.languages
                },
            'my-jwt-secret', {expiresIn:3600});
            res.send({success:"true", access_token:token});
        })
    }
})

module.exports = router;