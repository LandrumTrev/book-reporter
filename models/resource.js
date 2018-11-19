// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// RESOURCE.JS - Model for Resource (owned by single Topic)
// Sequelize uses to create "resources" (pluralized) table
// ====================================================

// SAMPLE
// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// Resource model:
// resource.js (resource_title(STRING), resource_content(TEXT)) -- Resource.belongsTo(models.Topic, {})
