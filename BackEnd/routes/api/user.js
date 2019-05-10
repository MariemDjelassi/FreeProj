var router = require('express').Router();
var bcrypt = require('bcrypt');
var User = require('../../models/userSchema');
var Freelancer = require('../../models/freelancerSchema');
var Company = require('../../models/companySchema');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname );
    }
});

var upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), function (req, res, next) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    } else {
        console.log('file received');
        return res.send({
          success: true
        })
    }
});

// router.get('/getContenue/:name',  function (req, res, next) {
//     res.sendFile('C:/Users/houni/OneDrive/Bureau/Formation/Niveau4/Projet/uploads/' + req.params.name);
// })

router.post('/register/freelancer', upload.single('profileImage'), async(req,res) => {
    // Check if this user already exisits
    let exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.send('That user already exist!');
    } else {
        // Insert the new user if they do not exist yet
        // req.body.profileImage = req.file.filename;
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

router.post('/register/company', upload.single('logo'), async(req,res) => {
    // Check if this user already exisits
    let exist = await User.findOne({ email: req.body.email });
    if (exist) {
        return res.send('That user already exist!');
    } else {
        // Insert the new user if they do not exist yet
        req.body.logo = req.file.filename;
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