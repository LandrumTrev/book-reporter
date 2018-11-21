// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// PROJECT.JS - Model for Project (owned by single User, owns many Topics)
// Sequelize uses to create "Projects" (pluralized) table
// ====================================================

module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectContent: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Project.associate = function (models) {
    Project.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Project;
};
