// ====================================================
// take.note :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// signinApiRoutes.js
// (apiRoutes for signin.handlebars, called by signin.js event handlers)
// ====================================================


// require all table data from db as ORM Sequelize models
var db = require("../models");

// export routes for import by server.js, used by Express
module.exports = function (app) {

  // ========================================================
  // GET ROUTES
  // ========================================================

  app.get("/api/:user/projects", function (req, res) {
    console.log("params" + req.params);
    db.Project.findAll({
      where: {
        UserId: req.params.user
      }
    }).then(function (dbProject) {
      // res.send(req.params.UserId);
      res.json(dbProject);
    });
  });

  app.get("/api/user/:username", function (req, res) {
    db.User.findOne({
      where: {
        userName: req.params.username
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });


  // ========================================================
  // POST ROUTES
  // ========================================================

  app.post("/api/user/:userid/:projectname", function (req, res) {
    db.Project.create({
        projectName: req.params.projectname,
        UserId: req.params.userid
      })
      .then(function (dbProject) {
        console.log(dbProject);
      })
      .catch(function (err) {
        console.log(err.message);
      });
  });

  app.post("/api/users/:username", function (req, res) {
    db.User.findOrCreate({
        where: {
          userName: req.params.username
        }
      })
      .then(function (dbUser) {
        console.log(dbUser);
        console.log(res);
        res.json(dbUser);
      })
      .catch(function (err) {
        console.log(err.message);
      });
  });


  // ========================================================
  // PUT ROUTES
  // ========================================================

  // updates a Project Name
  app.put("/api/project-name/:id", function (req, res) {
    db.Project.update({
        projectName: req.body.projectName
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbProjectName) {
        res.json(dbProjectName);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  // ========================================================
  // DELETE ROUTES
  // ========================================================

  // deletes a Project
  app.delete("/api/projects/:id", function (req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProject) {
      if (dbProject.affectedRows == 0) {
        // if no rows affected (so, nothing deleted), return 404 (not found)
        return res.status(404).end();
      } else {
        // otherwise (if item was deleted), return 200 (everything good)
        res.status(200).end();
        res.json(dbProject);
      }
    });
  });

  // ========================================================
  // END signinApiRoutes module.exports
  // ========================================================
};