var express = require('express');
var api = require('./api.js');
var models = require('../models/index');

var router = express.Router();

router.use('/api', api);

router.use('/secret/s3cr371ns7411', function(req, res) {
    // install blogs
    var BlogPost = models['blog'];

    // wipe out existing blog entries
    BlogPost.remove({}, function(err) {

    });

    // 1/31/16
    var newPost = new BlogPost({
        title: 'Creating and Deploying a Javascript Application part 1',
        id: 'creating-and-deploying-a-javascript-application-part-1',
        body: `
            <p>
                My first blog series is going to cover some of the latest technologies I've used to create this very site.  This will cover Amazon Web Services EC2 for the server, Node.js to run the server, Bootstrap.css, React.JS, MongoDB for the backend, etc.
            </p>
        `
    });

    newPost.save(function(err, data){
        if (err) {
            res.json({status: 'failed to save blog post', error: err});
        }
        res.json({status: 'success', post: data});
    });
});

module.exports = router;