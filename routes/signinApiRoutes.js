// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// signinApiRoutes.js
// (apiRoutes for signin.handlebars, called by signin.js event handlers)
// ====================================================

// GET all users (compare with entered user name; if match, load user's projects page)
// POST new user

app.get("/api/:user/", function(req, res) {
    db.Topic.findAll({ where: { ProjectId: req.params.project } }).then(function(dbTopics) {
      // console.log("topicName: " + dbTopics[0].dataValues.topicName);
      // console.log("topic id: " + dbTopics[0].dataValues.id);
      res.json(dbTopics);
    });
  });

  app.get("/api/:user/:project/", function(req, res) {
    db.Topic.findAll({ where: { ProjectId: req.params.project } }).then(function(dbTopics) {
      // console.log("topicName: " + dbTopics[0].dataValues.topicName);
      // console.log("topic id: " + dbTopics[0].dataValues.id);
      res.json(dbTopics);
    });
  });