// ====================================================
// BookReporter :: A research project note organizer and composer
// MVC with MySQL, Node, Express, Handlebars and Sequelize.
// ©2018 Nicholas Angelo Batten, Ryan Case, Melissa Derricott, Alex Silvester, Richard Trevillian
// University of Richmond (Virginia)
// Full Stack Developer Bootcamp (July 2018)
// ====================================================
// workSpace.js
// DOM event handlers for workspace.handlebars page view
// ====================================================

// jQuery calls to workspaceApiRoutes.js

// GET all topics for project
// GET all resources for each topic

// POST new topic for project
// POST new resource for each topic

// PUT change name of a topic
// PUT change project assignment of topic (?)
// PUT change name of a resource
// PUT change content of a resource
// PUT change topic assignment of a resource (?)

// console.log("workSpace.js online");

// start jQuery wrapper function
$(document).ready(function () {

  // pass variable for userId from signin page
  var userId = 1;
  // pass variable for projectId from myProjects page
  var projectId = 1;

  // on page load, get all Topics and Resources for the Project
  getTopicsAndResources(userId, projectId);

  // ==========================================================

  // call workspaceApiRoutes.js to get all Topics and Resources
  function getTopicsAndResources(uID, pID) {

    // pass in the current userId and projectId to the API route to get Topics
    $.get("/api/" + uID + "/" + pID + "/topics", function (topics) {

      // FOR each Topic returned in (topics),
      for (let i = 0; i < topics.length; i++) {

        var topicName = topics[i].topicName;
        var tID = topics[i].id;
        // console.log(topicName + " - id: " + tID);

        // create a Topic list item id="topic1"
        var topicLI = $("<a id='topic" + tID + "' href='#' class='list-group-item list-group-item-action'></a>");
        // and .append to it an h5 to display the topicName
        topicLI.append("<h5 class='mb-0'>" + topicName + "</h5>");
        // and create a <div> to hold all that Topics Resources
        var resourceGroup = $("<div id='topic" + tID + "resources' class='list-group'></div>");
        // and .append that Resource container <div> to the Topic list item
        topicLI.append(resourceGroup);

        // ==========================================================

        // then for each Topic item loop, do a get call for that Topics Resources
        $.get("/api/" + uID + "/" + pID + "/" + tID + "/resources", function (resources) {

          // and for each Resource returned for that Topic,
          for (let j = 0; j < resources.length; j++) {

            var resourceContent = resources[j].resourceContent;
            var resourceName = resources[j].resourceName;
            var resourceId = resources[j].id;
            var resourceTopic = resources[j].TopicId;

            // console.log(resources[j]);
            // console.log(resourceName + " - id: " + resourceId);
            // console.log("content: " + resourceContent);

            // create a Resource Name list item with id="resource1"
            var resourceItem = $("<div id='resource" + resourceId + "' class='list-group-item list-group-item-action'></div>");
            // and .append to it an h6 to display the resourceName
            resourceItem.append("<h6 class='resname mb-0'>" + resourceName + "</h6>");

            // create a Resource Content copy list item with id="resourceContent1"
            var resourceContent = $("<p class='rescont mb-0'>" + resourceContent + "</p>");
            // and append the ResourceContent to the resourceItem headline
            $(resourceItem).append(resourceContent);

            // and append the Resource list item to the resourceGroup container for that Topic
            $("#topic" + resourceTopic).append(resourceItem);
          }
        }); // end Resources AJAX

        $("#topics_display").append(topicLI);
      } // end Topics FOR loop
    }); // end $.get call for Topics
  } // end getTopicsAndResources

  // ========================================================
}); // end jQuery wrapper function


$(document).on("click", ".todo-item", editTodo);


  // This function handles showing the input box for a user to edit a todo
  function editTodo() {
    var currentTodo = $(this).data("todo");
    $(this)
      .children()
      .hide();
    $(this)
      .children("input.edit")
      .val(currentTodo.text);
    $(this)
      .children("input.edit")
      .show();
    $(this)
      .children("input.edit")
      .focus();
  }












// SAMPLES BELOW: NOT FOR BOOK-REPORTER
// ========================================================

// EVENT HANDLER FOR .change-status BUTTON
$(".change-status").on("click", function (event) {
  // variable for the data-id="" property of THIS button
  // which is set to the item's db id: number by Handlebars
  var id = $(this).data("id");

  // variable for the data-newstatus="" property of THIS button
  // which is set as the item's database value of done: by Handlebars
  // NOTE: Handlebars has swapped the true|false value of done: in the rendered HTML
  // in order for it to be grabbed here and set as the new value in the database
  var newStatus = $(this).data("newstatus");

  // create an object which is {done: 0 | false} or {done: 1 | true},
  // based on the SWAPPED done: value in the rendered HTML
  var newStatusState = {
    done: newStatus
  };

  // Send the PUT request with the swapped value as the new value in database
  $.ajax("/api/items/" + id, {
    type: "PUT",
    data: newStatusState
  }).then(function () {
    console.log("changed status to", newStatus);
    // Reload the page to get the updated list
    $("#new-item").val("");
    location.reload();
  });
});