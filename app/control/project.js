var Project = require('../model/project');

exports.addInfo = function (req, res) {
    var _project = req.body.info;
    var project = new Project(_project);
    project.save(function(err, project){
        if (err) {
            console.log(err);
        }
        res.json({ project });
    });
};

exports.getAllInfo = function (req, res) {
    Project
        .find({})
        .populate('owner')
        .exec(function(err, projects){
            if (err) {
                console.log(err);
            }
            res.json({ projects });
        });
};

exports.modifyInfo = function (req) {
    var _info = req.body.info;
    Project
        .findOne({_id: _info.projectId})
        .exec(function(err, project){
            var _id = project._id;
            delete project._id;
            Project.update({_id: _id}, _info, function(err){
                if (err) {
                    console.log(err);
                }
            });
        });
};

exports.projectRemove = function (req) {
    var projectId = req.query.projectId;
    Project
        .remove({_id: projectId})
        .then(function(err){
            if (err) {
                console.log(err);
            }
        })
};