# take.note
### A research project note organizer and composer

*MVC with MySQL, Node, Express, Handlebars, Sequelize and Quill.js word processor.*

_________________________________________________

[take.note on Heroku](https://book-reporter.herokuapp.com/)

_________________________________________________

### take.note is a Project-based note organizer web app. 

An MVC-structured responsive web app, take.note utilizes a MySQL database accessed with the Sequelize ORM, Handlebars for data-based page templating, and Bootstrap front-end elements modified with custom CSS. The web-based Quill.js word processor allows the main document of each Project numerous formatting options.

The database has four tables created and managed by Sequelize models: Users, Projects, Topics, and Resources, which are all associated with a cascading one-to-many relationship in that order. 

Each table has a name column, with the name value of Projects, Topics, and Resources being editable from the user interface with input area on-focus/on-blur event handlers; no "submit" button clicks needed.

Each Project also contains the main project's word-processor formattable document, and each Resource contains a Resource Content text field for storage of individual notes. The Project and Resouce content fields are also editable by the same on-focus/on-blur events as their titles, again eliminating the need for "submit" buttons.

Also included is the ability to delete Projects, Topics, and Resources. In addition, there are buttons on the right sides that allow the toggling of expand/collapse of either all Resource Contents, just the Resource Contents of a single Topic, and of individual Resource Content areas for easier viewing of current items being worked on.

Basic user login is handled by storing the user's name in the browser's local storage, and matching that value to the userName field in the Users table in the databse. This takes the user to a page listing all of the user's Projects. If the username entered does not already exist in the database, the app creates a new user and associates the user name to it's own Projects.

_________________________________________________

### How to use take.note 

#### PROJECTS LIST 

__sign in__    
*click the "get quacken!" button to login to your Projects*    
If your username does not already exist in the database, a new user account will be created for you. Do not include spaces in your username.   

__sign out__    
*click the "sign out" button in the top right header menu*   

__create a new project__    
*after you log in, you will be taken to your projects list page*   
To create a new project, enter a Project name in the "create a new project" field and click the book icon button. Spaces allowed in Project, Topic, and Resource names; just not in Usernames.   

__delete a project__    
*click on the X button to the left of your project name to delete a Project and all it's Topics and Resources*   
Currently there is no feature to allow transfer of Topics and/or Resources to other Projects; this feature is planned for inclusion in future versions.   

__edit a project__    
*click on the > button to the right of your project name to go to your project's workspace*   
To create a new project, enter a Project name in the "create a new project" field and click the book icon button. Spaces allowed in Project, Topic, and Resource names; just not in Usernames.   


#### PROJECTS WORKSPACE 

__project editor__    
*use the project editor window with word processor formatting options to compose your book, paper, report, or other type of project*   
Your project will be auto-saved anytime you click outside the project editor window; no need to click a "save" button. Click on the "editor" button in the menu to show/hide the editor if you want to view the topics and resources list full screen.   

__topics and resources list__    
*use the topics and resources list to organize your notes (Resources) into Topics*   
You can edit the names of your Topics and Resources at any time--just edit the name and when you click outside of the name field, the new name is auto-saved; no need to click a "save" button. Click on the "list" button in the menu to show/hide the topics and resources list if you want to view the project editor window full screen.   

__add a new topic__    
*topics are organizational groups for related resources*   
Add a new topic by entering a topic name in the "add a new Topic to this Project" area at the top of the list, and click the + button to add the topic to your list. Also, you can toggle open and closed all topics in your project with the down arrow button to the right the "add a new Topic to this Project" field.

__edit a topic__    
*rename a topic, delete a topic, toggle open/closed all topic resource's content areas*   
Rename a topic by editing it's name and click outside the box to save. Delete the topic and any related resources by clicking the X button next to the topic name. Toggle open and closed all resource contents for that topic by clicking the down button to the right of the topic name.

__edit a resource__     
*rename a resource, delete a resource, toggle content area, edit content area*     
Rename a resource by editing it's name and click outside the box to save. Delete the resource by clicking the X button next to the resource name. Toggle open and closed the resource contents for that resource by clicking the down button to the right of the resource name. When a resource's content area is open, you can edit the resource contents, and save them just by clicking outside the content area. Currently the resource content areas will only hold unformatted text; additional formatting and file storage are planned for future releases.    

_________________________________________________


[source: take.note on GitHub](https://github.com/LandrumTrev/book-reporter)

###### ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
###### University of Richmond (Virginia)
###### Full Stack Developer Bootcamp (July 2018)



