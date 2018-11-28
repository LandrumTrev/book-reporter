// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// wsApiRoutes.js
// (apiRoutes for workspace.handlebars, called by workSpace.js event handlers)
// ====================================================

// jQuery calls from workSpace.js:

// GET all topics for project - DONE (see wsHtmlRoutes.js)
// GET all resources for each topic - DONE (see wsHtmlRoutes.js)
// GET projectContent Quill editor text from db - DONE

// POST new topic for project - DONE
// POST new resource name for each topic - DONE

// DELETE a topic from project - DONE
// DELETE a resource from topic - DONE

// PUT change content of a resource - DONE
// PUT change name of a topic - DONE
// PUT change name of a resource - DONE
// PUT updated projectContent Quill editor text to db - DONE


var db = require("../models");

module.exports = function (app) {

  // GET ROUTES
  // ========================================================

  // single GET route for workspace handled by wsHtmlRoute.js
  // GET call to render handlebars also gets and passes in 
  // Project object with all Topics and Resources

  // ========================================================

  // get the Project's projectContent Quill JSON data
  app.get("/api/projects/:id", function (req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProject) {
      console.log(dbProject);
      res.json(dbProject);
    });
  }); // end app.get

  // ========================================================
  // ========================================================


  // POST ROUTES
  // ========================================================

  // create a new Topic in the Project
  app.post("/api/projects/:project/:topicname", function (req, res) {
    // console.log(req.params.project);
    // console.log(req.params.topicname);
    db.Topic.create({
      topicName: req.params.topicname,
      ProjectId: req.params.project
    }).then(function (dbTopic) {
      // console.log(dbTopic);
      // redirect
      res.redirect('back');
    });
  });

  // ========================================================

  // create a new Resource in the Topic
  app.post("/api/resources/:topicid/:resourcename", function (req, res) {
    // console.log(req.params.resourcename);
    db.Resource.create({
      resourceName: req.params.resourcename,
      TopicId: req.params.topicid
    }).then(function (dbResource) {
      // console.log(dbResource);
      // redirect
      res.redirect('back');
    });
  });

  // ========================================================
  // ========================================================


  // DELETE ROUTES
  // ========================================================

  // deletes a Topic
  app.delete("/api/topics/:id", function (req, res) {
    db.Topic.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTopic) {
      if (dbTopic.affectedRows == 0) {
        // if no rows affected (so, nothing deleted), return 404 (not found)
        return res.status(404).end();
      } else {
        // otherwise (if item was deleted), return 200 (everything good)
        res.status(200).end();
        res.json(dbTopic);
      }
    });
  });

  // ========================================================

  // deletes a Resource
  app.delete("/api/resources/:id", function (req, res) {
    db.Resource.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbResource) {
      if (dbResource.affectedRows == 0) {
        // if no rows affected (so, nothing deleted), return 404 (not found)
        return res.status(404).end();
      } else {
        // otherwise (if item was deleted), return 200 (everything good)
        res.status(200).end();
        res.json(dbResource);
      }
    });
  });

  // ========================================================
  // ========================================================


  // UPDATE (PUT) ROUTES
  // ========================================================

  // updates the Quill wordprocessor Project Content
  app.put("/api/projects/:id", function (req, res) {
    console.log("route request:" + req);
    db.Project.update({
        projectContent: req.body.projectContent
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbProjectContent) {
        res.json(dbProjectContent);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // ========================================================

  // updates a Resource Name
  app.put("/api/resource-name/:id", function (req, res) {
    db.Resource.update({
        resourceName: req.body.resourceName
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbResourceName) {
        res.json(dbResourceName);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // ========================================================

  // updates Resource Content text
  app.put("/api/resource-content/:id", function (req, res) {
    db.Resource.update({
        resourceContent: req.body.resourceContent
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbResCont) {
        res.json(dbResCont);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // ========================================================

  // updates a Topic Name
  app.put("/api/topics/:id", function (req, res) {
    db.Topic.update({
        topicName: req.body.topicName
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbTopicName) {
        res.json(dbTopicName);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // ========================================================
}; // end module.exports