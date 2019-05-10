var router = require('express').Router();
var passport = require('passport');
var Freelancer = require('../../models/freelancerSchema');
var upload = require('../uploads/uploadMiddleware');

router.get('/getFreelancer/:idFreel', passport.authenticate('bearer', {session: false}), async(req,res) => {
    await Freelancer.findById(req.params.idFreel).populate({ path: 'projects' }).exec((err,Freel) => {
        if (err) {
            res.send(err);
        }
        res.send(Freel);
    })
})

router.get('/getFreelancers', passport.authenticate('bearer', {session: false}), async(req,res) => {
    await Freelancer.find().exec(function(err,Freels) {
        if (err) {
            res.send(err);
        }
        res.send(Freels);
    });
})

router.post('/updateFreelancer/:idFreel', upload.single('profileImage'), passport.authenticate('bearer', {session: false}), async(req,res) => {
    req.body.profileImage = req.file.filename;
    await Freelancer.findByIdAndUpdate(req.params.idFreel, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone, 
        birthDate: req.body.birthDate,
        address: req.body.address, 
        rateWork: req.body.rateWork, 
        profileImage: req.body.profileImage,  
        fb_link: req.body.fb_link,  
        twitter_link: req.body.twitter_link,  
        linkedIn_link: req.body.linkedIn_link,
        gitHub_link: req.body.gitHub_link,
        portFolio_link: req.body.portFolio_link,
        skills: req.body.skills,
        languages: req.body.languages
        }).exec((err,Freels) => {
            if(err){
                console.log(err);
            }
        res.send('Updated successfully!');
    })
})

module.exports = router;


// router.get('/GetOffreById/:id', async (req, res)=> {
//     const rslt =await Offre.findById(ObjectId(req.params.id)).populate('owner');
//     res.send(rslt);
// });

// router.post('/UpdateOffre/:id',passport.authenticate('bearer', { session: false }), function (req, res){
//     Offre.findByIdAndUpdate(ObjectId(req.params.id),{$set:req.body}, function(err, offre){
//         if (err){
//             res.send(err);
//         }
//         res.send(offre);
//     })
// });

// router.get('/GetAllOffr', function(req,res){
//     Offre.find({status:'Active'}).populate('owner').exec(function (err, offres){
//         if (err){
//             res.send(err)
//         }
//         res.send(offres)
//     })
// });
