-- ====================================================
-- BookReporter :: A research project note organizer and composer
-- MVC with MySQL, Node, Express, Handlebars and Sequelize.
-- ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
-- University of Richmond (Virginia)
-- Full Stack Developer Bootcamp (July 2018)
-- ====================================================
-- SEEDS.SQL - SAMPLE DATA TO INSERT IN DATABASE
-- ====================================================

-- PUT YOUR SAMPLE DATA HERE FOR User, Project, Topic, Resource models
-- use Terminal or MySQL Workbench to put these in manually, 
-- unless you know how to do it in Sequelize (if so, tell us how to do that!)

-- INSERT INTO tableName (colName) VALUES ('data to insert');

-- ====================================================

INSERT INTO bookreporter_db.Users (userName, createdAt, updatedAt) VALUES ('Mark Twain', NOW(), NOW());

INSERT INTO bookreporter_db.Projects (projectName, createdAt, updatedAt, UserId) VALUES ('Autobiography', NOW(), NOW(), 1);

INSERT INTO bookreporter_db.Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('Childhood', NOW(), NOW(), 1);

INSERT INTO bookreporter_db.Resources (resourceName, resourceContent, createdAt, updatedAt, TopicId) VALUES ('Baptism', "", NOW(), NOW(), 1);

INSERT INTO bookreporter_db.Resources (resourceName, resourceContent, createdAt, updatedAt, TopicId) VALUES ('1st Grade', "Mrs. Snookypearl", NOW(), NOW(), 1);

-- ====================================================

DELETE FROM bookreporter_db.Users WHERE id=1;
DELETE FROM bookreporter_db.Projects WHERE id=1;
DELETE FROM bookreporter_db.Topics WHERE id=1;
DELETE FROM bookreporter_db.Resources WHERE id=1;

-- ====================================================

INSERT INTO bookreporter_db.Projects (projectName, createdAt, updatedAt, UserId) VALUES ('Fun Stuff', NOW(), NOW(), 1);
DELETE FROM bookreporter_db.Projects WHERE id=2;

-- ====================================================