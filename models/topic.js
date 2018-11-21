// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// TOPIC.JS - Model for Topic (owned by single Project, owns many Resources)
// Sequelize uses to create "Topics" (pluralized) table
// ====================================================

module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("Topic", {
      topicName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Topic.associate = function(models) {
      Topic.belongsTo(models.Project, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Topic;
  };
