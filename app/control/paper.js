var Paper = require('../model/paper');

exports.addInfo = function (req, res) {
    var _paper = req.body.info;
    var paper = new Paper(_paper);
    paper.save(function(err, paper){
        if (err) {
            console.log(err);
        }
        res.json({ paper });
    });
};

exports.getAllInfo = function (req, res) {
    Paper
        .find({})
        .exec(function(err, papers){
            if (err) {
                console.log(err);
            }
            res.json({ papers });
        });
};


exports.modifyInfo = function(req) {
    var _info = req.body.info;
    Paper
        .findOne({_id: _info.paperId})
        .exec(function(err, paper){
            var _id = paper._id;
            delete paper._id;
            Paper.update({_id: _id}, _info, function(err){
                if (err) {
                    console.log(err);
                }
            });
        });
};

exports.paperRemove = function(req) {
    var paperId = req.query.paperId;
    Paper
        .remove({_id: paperId})
        .then(function(err){
            if (err) {
                console.log(err);
            }
        });
};
