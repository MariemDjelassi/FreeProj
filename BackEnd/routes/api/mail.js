var router = require('express').Router();
var User = require('../../models/userSchema');
var Freelancer = require('../../models/freelancerSchema');
var Company = require('../../models/companySchema');
var passport = require('passport');
var nodemailer = require('nodemailer');

router.post('/sendMail/:idComp/:idFreel', function (req, res) {
    User.findOne({company: req.params.idComp}).exec(function(err, comp) {
        if (err) {
            console.log("test");
            res.send(err)
        } else {
            const output = `
            <p>Hi baby </p>
            <h3>I Love You forever</h3>
            
            `;
        
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'tt.test5points@gmail.com',// 
                pass: 'test123!!'
                },
            tls: {
                rejectUnauthorized: false
            }
        })
        User.findOne({freelancer: req.params.idFreel}).exec(function(err, freel) {
            if (err) {
                res.send(err)
            } else {
                console.log(freel);
                const mailOptions = {
                    from: comp.email, // sender address
                    to: freel.email, // list of receivers
                    subject: 'Apply Accepted', // Subject line
                    html: output// plain text body
                };
                console.log(mailOptions);
                transporter.sendMail(mailOptions, function (err, msg) {
                    if (err) {
                        console.log(err);
                        res.send({message: 'There was an error sending the email'});
                    } else {
                        res.send({message: 'Email has been sent!'});
                    }
                });
            }    
        });
        }
    })
})

module.exports = router;
