var express = require('express');
var api = require('./api.js');
var models = require('../models/index');
//var postOne = require('./blog/web-dev-blog-series-introduction');
//var postTwo = require('./blog/node-js-and-you');

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
    newPost = new BlogPost({
        title: 'Web Dev Blog Series Introduction',
        id: 'web-dev-blog-series-introduction',
        created: new Date('2016-02-01T00:11:59.950Z'),
        body: `
            <h2>Baby Steps</h2>
            <p>Ever wanted to make your own web application?  Ever wonder which is better unidirectional or bidirectional data flow?  Don't even know what that means?  As long as you answered a resounding "Yes!" to the first question, then this series is for you.</p>
            <p>We're going to focus on various bite size chunks.  These chunks can be taken individually for learning a new technology.  Or you can follow along and deploy your very own web application.</p>
            <p>But, even I must go through some of my own baby steps as I am not only maintaining the content for the blog, but, also I'll be coding it along the way!</p>
            <h2>What exactly is this made with?</h2>
            <p>I'm glad you asked!  I will first focus the blog series on the same technologies running this site including: Node.js, React JS, React Router, Redux, Webpack, deploying on Amazon Web Services and more!</p>
        `
    });
    newPost.save(checkForError);

    // 2/2/16
    newPost = new BlogPost({
        title: 'Node JS And You',
        id: 'node-js-and-you',
        created: new Date('2016-02-03T00:57:19.489Z'),
        lastModified: new Date(),
        body: `
            <h2>What's a Node Anyways?</h2>
            <p>So what is Node.js anyways?  If you haven't heard of it by now, then you can think of it as a modular, non-blocking io, powerful framework for building web servers of any variety and size.  Also, the best part is it runs by reading your javascript code and even comes with a package manager (npm) with access to an unlimited number resources.  If you don't know what a package manager is don't sweat it, we'll learn more as we go.</p>
            <h2>Installing Node</h2>
            <p>Your options for installation will vary depending on which operating system you're running.  But, have no fear as the fine people of Joyent have some amazing installation instructions.  Let's head over to <a href="https://nodejs.org/en/" target="_blank">Node.js's website</a> now.</p>
            <p>Currently your options are going to be either 4.X.X or 5.X.X.  It shouldn't really matter which one you choose.  But, I'll be using 5.0.0 during the time of writing this tutorial.</p>
            <p>If you're a Mac user, you may prefer to install Node.js with Homebrew.  This is my preferred method as it's a single command to then update my Node.js install.</p>
            <p>To be continued...</p>
        `
    });
    newPost.save(checkForError);

    res.json({status: 'success'});
});

module.exports = router;