var express = require('express');

var router = express.Router();
var models = require('../models/index');

router.get('/:model', (req, res) => {
    var model = models[req.params.model];
    if (!model) {
        var msg = 'model: ' + req.params.model + ' was not found.';
        res.json({error: msg});
        return;
    }

    model.find({}, function(err, found) {
        if (err) { return res.json({status: 'failed', error: err}); }

        return res.json({status: 'success', items: found});
    });
});

module.exports =  router;