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

console.log("console.log working");
signIn();
//Signing in
function signIn() {
  // No UserName in Local Storage
  if (localStorage.getItem("username") === null) {
    console.log("no username");
    $(".hello").hide();
    $("#log-in").click(function() {
      username = $("#userNameFirst").val();
      console.log(username);
      localStorage.setItem("username", username);
      $("#username").text(username);
      $("#sign-in").hide();
      $(".hello").show();

      // POST API call new username added to database
    });
  }
  //UserName in Local Storage
  else {
    $("#sign-in").hide();
    username = localStorage.getItem("username");
    console.log(username);
    $("#username").empty();
    $(".hello").show();
    $("#username").text(username);
  }
}
  $(document).ready(function () {
    getUserProjects();
    getUserNameId();
  });


function getUserProjects() {
  $.ajax({
    type: "GET",
    url: "/api/1/projects"
  }).then(function(result) {
    console.log(result[0]);
    $(".projects").append(result[0].projectName);
});
}

function getUserNameId(){
  $.ajax({
    type:"GET",
    url: "/api/user/1"
  }).then(function(result){
    console.log(result);
    // for(var i = 0; i < result.length; i++){
    //   console.log(result[i]);
    // }
  });

}
