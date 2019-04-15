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
    const token = await jwt.sign({ _id: user._id, role: user.role }, 'my-jwt-secret', {expiresIn:3600});
    res.send({success:"true", access_token:token});
})

module.exports = router;