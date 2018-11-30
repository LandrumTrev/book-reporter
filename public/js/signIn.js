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
    $("#log-in").click(function() {
      username = $("#userNameFirst").val();
      console.log(username);
      localStorage.setItem("username", username);
      $("#username").text(username);
      $("#sign-in").hide();
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
// Opens the sign in modle and clears the landing page buisness
$("#sign-in").click(function(event) {
  $("#landingTitle").css("display", "none");
  $("#duckFloat").css("display", "none");
})
//Sign out click event
$("#sign-out").click(function(event) {
  localStorage.removeItem("username", username);
  location.reload(true);
});

function getUserId(username) {
  $.ajax({
    type: "GET",
    url: "/api/user/" + username
  }).then(function(result) {
    console.log(result.id);
    getUserProjects(result.id);
  });
}

function getUserProjects(userId) {
  $.ajax({
    type: "GET",
    url: "/api/" + userId + "/projects"
  }).then(function(result) {
    console.log(result);
    for (i=0; i < result.length; i++){
      var projectUrl = result[i].id
      $(".projects").append(`
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <h3 class="card-title text-center">${result[i].projectName}</h3>
            <p class="card-text text-center">Click the button below to visit this project</p>
            <a href="/${projectUrl}" class="btn btn-primary text-center">Open</a>
          </div>
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
  }).then(function(result) {
    console.log(result);
    getUserId(username);
  });
}

function postNewProject(username) {
  $.ajax({
    type: "GET",
    url: "/api/user/" + username
  }).then(function(result) {
    var projectName = $("#projectName").val().trim();
    $.ajax({
      type: "POST",
      url: "/api/user/" + result.id + "/" + projectName
    }).then(function(result) {
      console.log("New project " + result);
      getUserId(username);
    });
  });
}

function createNewUser(username){
  $.ajax({
    type: "POST",
    url: "/api/users/" + username
  }).then(function(result){
    console.log(result)
  });
}

// Ryan: Create an On click function for submitting new project, that calls postNewProject(username)
$("#createNewProjectButton").click(function(event) {
  //event.preventDefault();
  console.log("Clicked");
  postNewProject(username);
  location.reload(true);
});
