var express = require('express');
var api = require('./api.js');
var models = require('../models/index');
var postOne = require('./blog/web-dev-blog-series-introduction');
var postTwo = require('./blog/node-js-and-you');

var router = express.Router();

router.use('/api', api);

router.use('/secret/s3cr371ns7411', function(req, res) {
    var pass = req.query.pass;
    if (pass !== 'pass') {
        res.json({error: 'Could not read password.'});
    }

    // install blogs
    var BlogPost = models['blog'];
    var newPost;

    function checkForError(err, data){
        if (err) {
            res.json({status: 'Failed', error: err});
        }
    }

    // wipe out existing blog entries
    BlogPost.remove({}, checkForError);

    // 1/31/16
    newPost = new BlogPost(postOne);
    newPost.save(checkForError);

    // 2/2/16
    newPost = new BlogPost(postTwo);
    newPost.save(checkForError);

    res.json({status: 'success'});
});

module.exports = router;