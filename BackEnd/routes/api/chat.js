var router = require('express').Router();
var passport = require('passport');
var Chat = require('../../models/chatSchema');
var User = require('../../models/userSchema');

// Start Chat
// router.post('/newChat', passport.authenticate('bearer', { session: false }), async(req,res) => {
//     var chat = new Chat(req.body);
//     await chat.save(async(err, chat) => {
//         if (err) {
//             res.send(err);
//         }
//         res.send(chat);
//     })
// });

// Add message to conversation exist
router.post('/sendMesg/:idChat', passport.authenticate('bearer', { session: false }), async(req,res) => {
    await Chat.findById(req.params.idChat, async(err, chat) => {
        if (err) {
            res.send(err);
        }
        const io = req.app.get('io');
        await chat.messages.push(req.body);
        await Chat.findByIdAndUpdate(chat._id, {$set: {messages: chat.messages}}, async(err2, chat2) => {
            await io.emit('newMessageSended', chat2);
        })
    })
});

router.get('/getChat/:idComp/:idFreel', passport.authenticate('bearer', { session: false }), async(req,res) => {
    await Chat.findOne({userComp: req.params.idComp, userFreel: req.params.idFreel}, function(err, chat) {
        if (err) {
            res.send(err);
        }
        if (!chat) {
            var newChat = new Chat({userComp: req.params.idComp, userFreel: req.params.idFreel, messages: []});
            newChat.save(async(err, msg) => {
                if (err) {
                    res.send(err);
                }
                res.send(msg);
            })
        } else {
            res.send(chat);
        }
    })
});

module.exports = router;