// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// PROJECT.JS - Model for Project (owned by single User, owns many Topics)
// Sequelize uses to create "projects" (pluralized) table
// ====================================================

// SAMPLE
// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// Project model:
// project.js (project_name(STRING), project_content(TEXT)) -- User.hasMany(models.Project, {}), User.belongsTo(models.User, {})
