# take.note
### A Project Composition and Content Organization Web App

*Responsive RESTful MVC web app built with Node, Express, Handlebars, HTML, CSS, Bootstrap, JavaScript, jQuery, MySQL, Sequelize and Quill.js word processor.*

_________________________________________________    

**Keep all your notes organized alongside your project document in a take.note's integrated workspace. Keep  all your projects together in one place you can access online from any device. take.note can help you write books, papers, speeches, screenplays, apps, project planning, and more--anything that requires a final formatted document using multiple content sources.**

_________________________________________________    

[take.note on Heroku](https://book-reporter.herokuapp.com/)

_________________________________________________    

### take.note is a Project-based note organizer web app with multiple User accounts. 

An MVC-structured responsive web app, take.note utilizes a MySQL database accessed with the Sequelize ORM, Handlebars for data-based page templating, and Bootstrap front-end elements modified with custom CSS. The web-based Quill.js word processor allows the main document of each Project various formatting options.

The database has four tables created and managed by Sequelize ORM models: Users, Projects, Topics, and Resources, which are all associated with a cascading one-to-many relationship, in that order. 

Each table has a name column, with the name value of Projects, Topics, and Resources being editable from the User interface with input area on-focus/on-blur event handlers; no "submit" button clicks needed.

Each Project also contains the main Project's word-processor formattable document, and each Resource contains a Resource Content text field for storage of individual notes. The Project and Resouce Content fields are also editable by the same on-focus/on-blur events as their titles, again eliminating the need for "submit" buttons.

Also included is the ability to delete Projects, Topics, and Resources. In addition, there are buttons on the right sides that allow the toggling of expand/collapse of either all Resource Contents, just the Resource Contents of a single Topic, and of individual Resource Content areas for easier viewing of current items being worked on.

Basic User login is handled by storing the User's name in the browser's local storage, and matching that value to the UserName field in the Users table in the databse. This takes the User to a page listing all of the User's Projects. If the Username entered does not already exist in the database, the app creates a new User and associates the User name to it's own Projects.

_________________________________________________    

### How to use take.note 

#### Projects LIST 

__sign in__    
*click the "get quacken!" button to login to your Projects*    
If your Username does not already exist in the database, a new User account will be created for you. Do not include spaces in your Username.   

__sign out__    
*click the "sign out" button in the top right header menu*   

__create a new Project__    
*after you log in, you will be taken to your Projects LIST page*   
To create a new Project, enter a Project name in the "create a new Project" field and click the book icon button. Spaces allowed in Project, Topic, and Resource names; just not in Usernames.   

__delete a Project__    
*click on the X button to the left of your Project name to delete a Project and all it's Topics and Resources*   
Currently there is no feature to allow transfer of Topics and/or Resources to other Projects; this feature is planned for inclusion in future versions.   

__edit a Project__    
*click on the > button to the right of your Project name to go to your Project's WORKSPACE:*   
   
_________________________________________________     

#### Projects WORKSPACE 

__Project editor__    
*use the Project editor window with word processor to compose your book, paper, report, or other Project*   
Your Project will be auto-saved anytime you click outside the Project editor window; no need to click a "save" button. Click on the "editor" button in the menu to show/hide the editor if you want to view the Topics and Resources list full screen.   

__Topics and Resources list__    
*use the Topics and Resources list to organize your notes (Resources) into Topics*   
You can edit the names of your Topics and Resources at any time--just edit the name and when you click outside of the name field, the new name is auto-saved; no need to click a "save" button. Click on the "list" button in the menu to show/hide the Topics and Resources list if you want to view the Project editor window full screen.   

__add a new Topic__    
*Topics are organizational groups for related Resources*   
Add a new Topic by entering a Topic name in the "add a new Topic to this Project" area at the top of the list, and click the + button to add the Topic to your list. Also, you can toggle open and closed all Topics' Resource Content areas in your Project with the down arrow button to the right the "add a new Topic to this Project" field.

__edit a Topic__    
*rename a Topic, delete a Topic, toggle open/closed all Topic Resource's Content areas*   
Rename a Topic by editing it's name and click outside the box to save. Delete the Topic and any related Resources by clicking the X button next to the Topic name. Toggle open and closed all Resource Contents for that Topic by clicking the down button to the right of the Topic name.

__edit a Resource__     
*rename a Resource, delete a Resource, toggle Content area, edit Content area*     
Rename a Resource by editing it's name and click outside the box to save. Delete the Resource by clicking the X button next to the Resource name. Toggle open and closed the Resource Contents for that Resource by clicking the down button to the right of the Resource name. When a Resource's Content area is open, you can edit the Resource Contents, and save them just by clicking outside the Content area. Currently the Resource Content areas will only hold unformatted text; additional formatting and file storage are planned for future releases.    
_________________________________________________    

### Built by 

[Nicholas Angelo Batten](https://github.com/Nicholasangelo)    
[Ryan Case](https://github.com/Ryan-T-Case)    
[Melissa Derricott](https://github.com/MDerricott)    
[Alex Silvester](https://github.com/aosilvester)    
[Richard Trevillian](https://github.com/LandrumTrev)    

_________________________________________________    

[source: take.note on GitHub](https://github.com/LandrumTrev/book-reporter)   

*©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian*   
*University of Richmond (Virginia)*    
*Full Stack Developer Bootcamp (July 2018)*     
*2018-11-30*    
