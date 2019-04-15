var router = require('express').Router();
var passport = require('passport');
var Company = require('../../models/companySchema');
var Freelancer = require('../../models/freelancerSchema');
var Project = require('../../models/projectSchema');
var upload = require('../uploads/uploadMiddleware');
var mongoose = require('mongoose');

router.post('/upload', upload.single('file'), function (req, res, next) {
    res.send(req.file)
})
// 
router.post('/createProject/:idCompany', upload.single('file'), passport.authenticate('bearer', {session: false}), async(req,res) => {
    var project = new Project(req.body);
    project['company_owner'] = req.params.idCompany; // affect user to project
    await project.save(async(err,proj) => {
        if(err) {
            res.send(err)
        }
        res.send('Success Adding Project!');
        // affect project to user 
        // await Company.findByIdAndUpdate(req.params.idCompany, {$push:{projects: proj}}, async(err,user) => {
        //     res.send('Success Adding Project!')
        // })
    })
})
//  
router.get('/readProject/:idProj', passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.findById(req.params.idProj).exec(async(err,proj) => {
        if (err){
            res.send(err);
        }
        res.send(proj);
    })
})

router.get('/readProjects', passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.find().exec(async(err, proj) => {
        if (err){
            res.send(err);
        }
        res.send(proj);
    })
})

router.delete('/deleteProject/:idProj', passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.findByIdAndRemove(req.params.idProj).exec((err,proj) => {
        if(err){
            console.log(err);
        }
        res.send('Deleted successfully!');
    })
})

router.post('/updateProject/:idProj', passport.authenticate('bearer', {session:false}), async(req,res) =>{
    await Project.findByIdAndUpdate(req.params.idProj, {
        titleProject: req.body.titleProject,
        description: req.body.description,
        start_date: req.body.start_date, 
        duration: req.body.duration,
        skills: req.body.skills,
        min_offer: req.body.min_offer,
        max_offer: req.body.max_offer, 
        status: req.body.status
        }).exec((err,proj) => {
            if(err){
                console.log(err);
            }
        res.send('Updated successfully!');
    })
})
// 
// apply offer to project by freelancer
router.post('/applyOffer/:idFreel/:idProj', async(req,res) => {
    var freel = new Freelancer(req.body);
    freel['_id'] = req.params.idFreel;
    await Project.findByIdAndUpdate(req.params.idProj, {$addToSet:{applied_freelancers:{'id_freelancer': freel, 'offer': '1234'}}}). exec((err, proj) => {
        if (err) { res.send(err); }
        var project = new Project(req.body);
        project['_id'] = req.params.idProj;
        Freelancer.findByIdAndUpdate(req.params.idFreel, {$push:{projects: project}}).exec((err, frel) => {
            if(err) {  res.send(err); }
        })
        res.send({message: 'offer applied with success.'});
    })
})

// read freels applied to project problem in populate
router.get('/getFreels/:idProj', async(req,res) => {
    await Project.findOne({_id:req.params.idProj}).populate({ path: 'applied_freelancers', select: 'id_freelancer' }).exec((err,Frel) => {
        if (err) {
            res.send(err);
        }
        res.send(Frel);
    })
})

// accept offer to project by company 
router.post('/acceptOffer/:idFreel/:idProj', passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.findByIdAndUpdate(req.params.idProj, {$set:{accepted_freelancer: req.params.idFreel}}, async(err, offre) => {
        if (err){
            res.send(err);
        }
        res.send({message: 'accepted freelancer!!'});
    })
})
// 
// change status of project by company
router.post('/inProgressStatus/:idProj',passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.findByIdAndUpdate(req.params.idProj, {$set:{status: 'in progress'}}, async(err, offre) => {
        if (err) {
            res.send(err);
        }
        res.send({message: 'status changed to in progress.'});
    })
})

router.post('/completedStatus/:idProj', passport.authenticate('bearer', {session:false}), async(req,res) => {
    await Project.findOneByIdAndUpdate(req.params.idProj, {$set:{status: 'completed'}}, async(err, offre) => {
        if (err){
            res.send(err);
        }
        res.send({message: 'status changed to completed.'});
    })
})

module.exports = router;