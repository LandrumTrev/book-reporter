// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// USER.JS - Model for User (owns many Projects)
// Sequelize uses to create "Users" (pluralized) table
// ====================================================

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Project, {
      onDelete: "CASCADE"
    });
  };

  return User;
};