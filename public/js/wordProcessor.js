// ====================================================
// take.note :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// wordProcessor.js
// DOM event handlers for wordprocessor.handlebars page view
// these functions to be incorporated into workspace.js
// ====================================================

// jQuery calls to wordprocessorApiRoutes.js

// GET project_content of project
// PUT change project_content of project

// SET UP THE TOOLBAR OBJECT AND FORMATTING TOOLS
var toolbarOptions = [
  [{ 'align': [] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline',],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  ['link', 'image', 'formula'],
  ['blockquote', 'code-block']
];


// ];CREATE A NEW EDITOR
var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow'
});



// CLICK EVENT TO SAVE EDITOR CONTENTS AS DELTA AND TRANSFORM TO JSON
// $("#saveProject").on("click", function (event) {
//     event.preventDefault();
//     // var content = $("#editor > p")
//     var delta = quill.getContents();
//     console.log("deltaContents: " + JSON.stringify(delta));
//     // });

//     // SAVE NEW PROJECT TO A DB
//     //     var newProject = {
//     //         body: JSON.stringify(delta)
//     //     }
//     //     $.ajax("/api/notes",
//     //         {
//     //             type: "POST",
//     //             data: newProject
//     //         })
//     //         // .then, when POST responds by sending (res),
//     //         .then(function () {
//     //             // and reload the page so selectAll() can display updated list
//     //             location.reload();

//     //         });
//     // })

//     // DRAG AND DROP BIZNESS
//     function allowDrop(event) {
//         event.preventDefault();
//     }
//     function drag(event) {
//         event.dataTransfer.setData("Text/html", event.target.id);
//     }
//     function drop(event, target) {
//         event.preventDefault();
//         var data = event.dataTransfer.getData("Text/html");
//         event.target.appendChild(document.getElementById(data));
//     }

// SETS UP PAGE ONLOAD
// HIDE TOPICS AND RESOURCES
// $(document).ready(function () {

//     // $("#searchRsrcsForm").css("display", "none");
//     $("#resourceBlock").css("display", "none");

//     $("#viewNotes").on("click", function () {
//         $("#resourceBlock").css("display", "block");


//     })
// });


// $(".close").on("click", function () {
//     $("#resourceBlock").css("display", "none");

// })



// var loadProject = 
// $ajax("/api/notes/:id",
// {
//     type: "GET",
//     data: 1
// })
// .then(function () {
//     location.reload();
// })

// loadProject();

// })
// });

// });

// })

// $("#saveNote").on("click", function (event) {
//     event.preventDefault();
//         var newNote = {
//             Title: $("#noteTitle").val().trim(),
//             Body: $("#editor").val().trim(),
//             Topic: $("#Topic").val().trim()
//         }

// POST request to router.post("/api/burgers", ...) in burgers_controller.js
// $.ajax("/api/notes",
// and send POST body JSON with data
// {
//     type: "POST",
//     data: newNote
// })

// .then, when POST responds by sending (res),
// .then(function () {

// confirm creation of new item
// console.log("created new code to devour");

// and reload the page so selectAll() can display updated list
//             location.reload();

//         });