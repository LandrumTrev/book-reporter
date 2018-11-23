// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// workspaceApiRoutes.js
// (apiRoutes for workspace.handlebars, called by workspace.js event handlers)
// ====================================================

// GET all topics for project
// GET all resources for each topic

// POST new topic for project
// POST new resource name and resource content for each topic

// PUT change name of a topic
// PUT change project assignment of topic (?)
// PUT change name of a resource
// PUT change content of a resource
// PUT change topic assignment of a resource (?)

var db = require("../models");

module.exports = function (app) {

  // GET ROUTES
  // ========================================================

  // Get all Topics of a Project (of a User)
  // called by getTopicsAndResources() in workSpace.js (first call)
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
  // called by getTopicsAndResources() in workSpace.js (second call)
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
  // ========================================================


  // POST ROUTES
  // ========================================================

  // create a new Topic in the Project
  app.post("/api/:user/:project/:newtopic", function (req, res) {
    // console.log(req.params.user);
    // console.log(req.params.project);
    // console.log(req.params.newtopic);
    db.Topic.create({
        topicName: req.params.newtopic,
        ProjectId: req.params.project
      })
      // pass the result of our call
      .then(function (dbTopic) {
        // log the result to our terminal/bash window
        // console.log(dbTopic);
        // redirect
        res.redirect('back');
      });
  });

  // ========================================================


  // create a new Resource in the Topic
  app.post("/api/resources/:user/:project/:topic/:newresource", function (req, res) {
    // console.log(req.params.user);
    // console.log(req.params.project);
    // console.log(req.params.topic);
    // console.log(req.params.newresource);
    db.Resource.create({
        resourceName: req.params.newresource,
        TopicId: req.params.topic
      })
      // pass the result of our call
      .then(function (dbResource) {
        // log the result to our terminal/bash window
        // console.log(dbResource);
        // redirect
        res.redirect('back');
      });
  });


  // ========================================================
  // ========================================================
  // ========================================================



  // UPDATE ROUTES
  // ========================================================




  // ========================================================
  // ========================================================
  // ========================================================



  //SAMPLE ROUTES BELOW:
  // ====================================================
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};