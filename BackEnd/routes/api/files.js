var router = require('express').Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname );
    }
});
var upload = multer({ storage: storage });


router.post('/upload', upload.single('file'), function (req, res, next) {
    console.log(req.file);
    if (!req.file) {
        console.log("No file received");
        return res.send({message: 'No file received'});
    } else {
        console.log('file received');
        return res.send({message: 'File received' + ' :: ' + req.file.filename})
    }
});

// router.get('/getContenue/:name',  function (req, res, next) {
//     res.sendFile('C:/Users/houni/OneDrive/Bureau/Formation/Niveau4/Projet/uploads/' + req.params.name);
// })


module.exports = router;