# take.note
### A research project note organizer and composer

*MVC with MySQL, Node, Express, Handlebars, Sequelize and Quill.js word processor.*

_________________________________________________

[take.note on Heroku](https://book-reporter.herokuapp.com/)

_________________________________________________

#### take.note is a Project-based note organizer web app. 

An MVC-structured web app, take.note utilizes a MySQL database accessed with the Sequelize ORM, uses Handlebars for data-based page templating, and Bootstrap front-end elements modified with custom CSS. The web-based Quill.js word processor allows the main document of each Project numerous formatting options.

The database has four tables created and managed by Sequelize: Users, Projects, Topics, and Resources, which are all associated with a cascading one-to-many relationship in that order. 

Each table has a name column, with the value of name in Projects, Topics, and Resources being editable from the interface with input area on-focus/on-blur event handlers; no "submit" button clicks needed.

Each Project also contains the main project's word-processor formatable document, and each Resource contains a Resource Content text field for storage of individual notes. The Project and Resouce content fields are also editable by the same on-focus/on-blur events as their titles, again eliminating the need for "submit" buttons.

Also included is the ability to delete Projects, Topics, and Resources. In addition, there are buttons on the right sides that allow the toggling of expand/collapse of either all Resource Contents, just the Resource Contents of a single Topic, and of individual Resource Content areas for easier viewing of current items being worked on.



* __item__ description 
 
_________________________________________________


[source: take.note on GitHub](https://github.com/LandrumTrev/book-reporter)

###### ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
###### University of Richmond (Virginia)
###### Full Stack Developer Bootcamp (July 2018)



