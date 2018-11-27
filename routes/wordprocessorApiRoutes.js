// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// wordprocessorApiRoutes.js
// (apiRoutes for wordprocessor.handlebars, called by wordprocessor.js event handlers)
// these routes to be incorporated into workspaceApiRoutes.js
// ====================================================

// GET project_content of project
// PUT change project_content of project

var db = require("../models");

module.exports = function (app) {


 // Get all Topics of a Project (of a User)

 app.get("/api/:user/:project/topics", function (req, res) {
    db.Topic.findAll({
      where: {
        ProjectId: req.params.project
      }
    }).then(function (dbTopics) {
      // console.log("topicName: " + dbTopics[0].dataValues.topicName);
      // console.log("topic id: " + dbTopics[0].dataValues.id);
      res.json(dbTopics);
    });
  });

  // ========================================================

  // Get all Resources of a Topic (of a Project of a User)

  app.get("/api/:user/:project/:topic/resources", function (req, res) {
    db.Resource.findAll({
      where: {
        TopicId: req.params.topic
      }
    }).then(function (dbResources) {
      // console.log("resourceName: " + dbResources[0].dataValues.resourceName);
      // console.log("resource id: " + dbResources[0].dataValues.id);
      res.json(dbResources);
    });
  });

  // ========================================================
  // ========================================================

//   PUT to update new user project




//   GET to find stored user project
}
