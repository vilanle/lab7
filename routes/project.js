var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project.find({ _id:projectID }, function(err, projects) {
    res.json(projects[0]);
  })

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newproject = new models.Project({
    title: form.data.project_title,
    date: form_data.date,
    summary: form_data.summary,
    image: form_data.image
  });

  newproject.save(function(err){
    res.send(200);
  });
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Project.find({ _id: projectID}, function(err, projects){
    models.Project.remove({ _id: projectID }, function(err) {
      res.send(200);
    });
  });
}