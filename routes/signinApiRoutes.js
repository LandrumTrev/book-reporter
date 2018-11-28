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
var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findOne().then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/:user/projects", function(req, res) {
    console.log("params" + req.params);
    db.Project.findAll({
      where: { UserId: req.params.user }
    }).then(function(dbProject) {
      // res.send(req.params.UserId);
      res.json(dbProject);
    });
  });

  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({
      where: { userName: req.params.username }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // app.get("/api/:user/:project/", function(req, res) {
  //   db.Project.findAll({
  //     where: { ProjectId: req.params.project }
  //   }).then(function(dbProject) {
  //     res.json(dbProject);
  //   });
  // });

  app.post("/api/user/:username", function(req,res) {
    db.User.create({
      userName: req.params.username
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });
};
