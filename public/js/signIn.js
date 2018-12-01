// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// signIn.js
// DOM event handlers for signin.handlebars page view
// ====================================================

// GET all users (compare with entered user name; if match, load user's projects page)
// ($.get() to signinApiRoutes.js)
// POST new user ($.post() to signinApiRoutes.js)

var username;
signIn();


//Signing in
function signIn() {
  // No UserName in Local Storage
  if (localStorage.getItem("username") === null) {
    console.log("no username");
    $(".hello").hide();
    $("#sign-out").hide();
    $(".newProject").hide();
    $(".myProjects").hide();
    $("#log-in").click(function () {
      username = $("#userNameFirst").val();
      console.log(username);
      localStorage.setItem("username", username);
      $("#username").text(username);
      $("#sign-in").hide();
      $("#landingTitle").css("display", "none");
      $("#duckFloat").css("display", "none");
      $(".hello").show();
      $("#sign-out").show();
      $(".newProject").show();
      $(".myProjects").show();
      createNewUser(username);
      getUserId(username);

    });
  }
  //UserName is in Local Storage
  else {
    $("#sign-in").hide();
    $("#landingTitle").css("display", "none");
    $("#duckFloat").css("display", "none");
    username = localStorage.getItem("username");
    console.log(username);
    $("#username").empty();
    $(".hello").show();
    $("#sign-out").show();
    $(".newProject").show();
    $(".myProjects").show();
    $("#username").text(username);
    getUserId(username);
  }
}


// Opens the sign in modal and clears the landing page buisness
$("#sign-in").click(function (event) {
  $("#landingTitle").css("display", "none");
  $("#duckFloat").css("display", "none");
});


//Sign out click event
$("#sign-out").click(function (event) {
  localStorage.removeItem("username", username);
  location.reload(true);
});


function getUserId(username) {
  $.ajax({
    type: "GET",
    url: "/api/user/" + username
  }).then(function (result) {
    console.log(result.id);
    getUserProjects(result.id);
  });
}


function getUserProjects(userId) {
  $.ajax({
    type: "GET",
    url: "/api/" + userId + "/projects"
  }).then(function (result) {
    console.log(result);
    for (i = 0; i < result.length; i++) {
      var projectUrl = result[i].id
      $(".projects").append(`
      <div class='project-edit-group input-group mb-1'>
      <div class='input-group-prepend'>
        <button class='btn btn-sm btn-outline-danger delete-project' type='button'  data-project='${result[i].id}'>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <input type='text' class='pname form-control form-control-sm' placeholder='${result[i].projectName}' data-project='${result[i].id}'>
      <div class='input-group-append'>
      <a href="/${projectUrl}">
      <button class='btn btn-sm btn-danger goto-project' type='button'>
      <i class="fas fa-angle-right"></i>
      </button>
        </a>
      </div>
    </div>
      `)
    }
  });
}

function postUserNameId(username) {
  $.ajax({
    type: "POST",
    url: "/api/users/" + username
  }).then(function (result) {
    console.log(result);
    getUserId(username);
  });
}

function postNewProject(username) {
  $.ajax({
    type: "GET",
    url: "/api/user/" + username
  }).then(function (result) {
    var projectName = $("#projectName").val().trim();
    $.ajax({
      type: "POST",
      url: "/api/user/" + result.id + "/" + projectName
    }).then(function (result) {
      console.log("New project " + result);
      getUserId(username);
    });
  });
}

function createNewUser(username) {
  $.ajax({
    type: "POST",
    url: "/api/users/" + username
  }).then(function (result) {
    console.log(result)
  });
}

// Ryan: Create an On click function for submitting new project, that calls postNewProject(username)
$("#createNewProjectButton").click(function (event) {
  //event.preventDefault();
  console.log("Clicked");
  postNewProject(username);
  location.reload(true);
});

// ==========================================================

// event listener for clicking on a Project Name input to edit projectName
// works with updateProjecteName event hander
$(document).on("focus", ".pname", editProjectName);


// called by clicking into the input field of a Project Name .pname
// works with updateProjecteName() on blur
function editProjectName() {
  // create a variable with value of element's placeholder="" content
  var projectNamePlaceholder = $(this).attr('placeholder');
  // then make the value="" (the input text of textarea) the placeholder content
  $(this).val(projectNamePlaceholder);
}

// +++++++++++

// event listener for clickout out of a Project Name input
// works with editProjectName event handler
$(document).on("blur", ".pname", updateProjecteName);


// called by clicking out of the input field of a Project Name .pname
// works with editProjectName() on focus
function updateProjecteName() {

  var projectID = $(this).attr('data-project');
  // console.log(resourceID);

  var newProjectName = $(this).val().trim();
  // console.log(newResourceName);

  var putProjectName = {
    projectName: newProjectName
  };

  // PUT to wsApiRoutes /api/resource-name/:id
  $.ajax("/api/project-name/" + projectID, {
    type: "PUT",
    data: putProjectName
  }).then(function (result) {
    // console.log(result);
    location.reload();
  });
}


// ==========================================================

// event listener for the Delete Resource "x" button
$(document).on("click", ".delete-project", deleteProject);


// called by the .delete-resource buttons event handler
function deleteProject() {

  var confirmDelete = confirm("Are you sure you want to delete this Project?");

  if (confirmDelete == true) {

    var thisProjectID = $(this).attr('data-project');
    // console.log(thisResourceID);

    // DELETE to wsApiRoutes /api/resources/:id
    $.ajax("/api/projects/" + thisProjectID, {
      type: "DELETE"
    }).then(
      function (result) {
        location.reload(true);
      });
  }
}