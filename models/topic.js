// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// TOPIC.JS - Model for Topic (owned by single Project, owns many Resources)
// Sequelize uses to create "topics" (pluralized) table
// ====================================================

// SAMPLE
// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// Topic model:
// topic.js (topic_title(STRING)) -- Topic.hasMany(models.Resource, {}), Topic.belongsTo(models.Project, {})
