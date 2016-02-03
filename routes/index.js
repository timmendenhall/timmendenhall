import express from 'express';
import api from './api.js';
import models from '../models/index';
import postOne from './blog/web-dev-blog-series-introduction';
import postTwo from './blog/node-js-and-you';

let router = express.Router();

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

export default router;