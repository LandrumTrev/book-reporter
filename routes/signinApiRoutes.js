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

  app.post("/api/user/:userid/:projectname", function(req, res) {
    db.Project.create({
      projectName: req.params.projectname,
      UserId: req.params.userid
    })
      .then(function(dbProject) {
        console.log(dbProject);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  });

  app.post("/api/users/:username", function(req, res) {
    db.User.findOrCreate({ where: { userName: req.params.username } })
      .then(function(dbUser) {
        console.log(dbUser);
        console.log(res);
        res.json(dbUser);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  });
};
