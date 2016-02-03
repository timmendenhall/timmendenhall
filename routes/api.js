import express from 'express';
import models from '../models/index';

let router = express.Router();

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

// Get one by parameter prop value
router.get('/:model/:findByProp/:findByValue', (req, res) => {
    var model = models[req.params.model];
    if (!model) {
        var msg = 'model: ' + req.params.model + ' was not found.';
        res.json({error: msg});
        return;
    }

    var findByProp = req.params.findByProp;
    var findByValue = req.params.findByValue;
    var search = {};
    search[findByProp] = findByValue;

    model.findOne(search, function(err, found) {
        if (err) { return res.json({status: 'failed', error: err}); }

        return res.json({status: 'success', item: found});
    });
});

export default router;