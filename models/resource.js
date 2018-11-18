// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// RESOURCE.JS - Model for Resource (owned by single Topic)
// Sequelize uses to create "Resources" (pluralized) table
// ====================================================


module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define("Resource", {
    resourceName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resourceContent: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Resource.associate = function(models) {
    Resource.belongsTo(models.Topic, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Resource;
};
