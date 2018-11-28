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
    $("#log-in").click(function () {
      username = $("#userNameFirst").val();
      console.log(username);
      localStorage.setItem("username", username);
      $("#username").text(username);
      $("#sign-in").hide();
      $(".hello").show();

    });
  }
  //UserName is in Local Storage
  else {
    $("#sign-in").hide();
    username = localStorage.getItem("username");
    console.log(username);
    $("#username").empty();
    $(".hello").show();
    $("#username").text(username);
    getUserId(username);

    //Ryan create a div that displays "If not" + username + " ,click here"
    // When the div is clicked (on.click) run this code:
    //localStorage.removeItem(username);
  }
}

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
    $(".projects").append(result[0].projectName);
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
    var projectName = $("#projectName").value().trim();
    $.ajax({
      type: "POST",
      url: "/api/user/" + result.id + "/" + projectName
    }).then(function(result) {
      console.log(result);
    });
  });
}

// Ryan: Create an On click function for submitting new project, that calls postNewProject(username)
