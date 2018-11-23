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

// GET all topics for project - DONE
// GET all resources for each topic - DONE

// POST new topic for project - DONE
// POST new resource name for each topic - DONE

// PUT change name of a topic
// PUT change project assignment of topic (?)
// PUT change name of a resource
// PUT change content of a resource
// PUT change topic assignment of a resource (?)

// DELETE a topic from project
// DELETE a resource from topic


// start jQuery wrapper function
$(document).ready(function () {

  // pass variable for userId from signin page
  var userId = 1;
  // pass variable for projectId from myProjects page
  var projectId = 1;

  // on page load, get all Topics and Resources for the Project
  // get these variables (demo values above) from Local Storage (Melissa)
  getTopicsAndResources(userId, projectId);

  // ==========================================================

  // make a call to workspaceApiRoutes.js to get all Topics and Resources
  function getTopicsAndResources(uID, pID) {

    // pass in the current userId and projectId to the API route to get Topics
    $.get("/api/" + uID + "/" + pID + "/topics", function (topics) {

      // FOR each Topic returned in (topics),
      for (let i = 0; i < topics.length; i++) {

        // variable to stand for the name of the looped Topic
        var topicName = topics[i].topicName;
        // variable to stand for the database id of the looped Topic
        var tID = topics[i].id;
        // console (browser) the topicName and tID values
        // console.log(topicName + " - id: " + tID);

        // define a Topic list DOM element item id="topic1"
        var topicLI = $("<div id='topic" + tID + "' class='list-group-item list-group-item-action'></div>");

        // var deleteTopicButton = $("<button type='button' class='delete-topic btn btn-outline-danger btn-sm p-0 mb-2 float-right' style='width:25px;height:25px;'>x</button>");
        // delete resource button (burn icon)
        var deleteTopicButton = $("<i class='delete-topic fas fa-burn p-0 mb-0 mr-2 float-left'></i>");
        topicLI.append(deleteTopicButton);

        // and .append to it an h5 to display the topicName
        topicLI.append("<h5 class='p-0 mb-2 float-left'>" + topicName + "</h5>");

        // create an "Add Resource" input and button at the top of every Topic list of Resources
        var newResourceInput = $("<div class='input-group mb-3'><div class='input-group-prepend'><button class='btn btn-outline-secondary' type='button' id='add-resource-button-" + tID + "' data-topic='" + tID + "'>Add Resource</button></div><input id='add-resource-name-" + tID + "' type='text' class='form-control' placeholder='add a new Resource to this Topic'></div>")
        // append the "Add Resource" input below the Topic Name and above the Resource list
        topicLI.append(newResourceInput);

        // ==========================================================

        // event handler for the "Add Resource" button and input field, calls addResource() function
        $(document).on("click", "#add-resource-button-" + tID, function () {

          var thisTopic = ($(this).attr('data-topic'));
          // console.log(thisTopic);

          var newResource = $("#add-resource-name-" + thisTopic).val().trim();
          console.log(newResource);

          // POST a call to workspaceApiRoutes /api/:user/:project/:topic/newresource
          $.post("/api/resources/" + userId + "/" + projectId + "/" + thisTopic + "/" + newResource, function (newTopic) {
            // reload the page to re-run getTopicsAndResources() to show the new Resource
            location.reload(true);
          });
        });

        // ==========================================================

        // event handler for the "Add Resource" button and input field, calls addResource() function
        $(document).on("click", "#add-resource-button-" + tID, function () {

          var thisTopic = ($(this).attr('data-topic'));
          // console.log(thisTopic);

          var newResource = $("#add-resource-name-" + thisTopic).val().trim();
          console.log(newResource);

          // POST a call to workspaceApiRoutes /api/:user/:project/:topic/newresource
          $.post("/api/resources/" + userId + "/" + projectId + "/" + thisTopic + "/" + newResource, function (newTopic) {
            // reload the page to re-run getTopicsAndResources() to show the new Resource
            location.reload(true);
          });
        });

        // ==========================================================
        // and create a <div> to hold that Topic's Resources
        var resourceGroup = $("<div id='topic" + tID + "resources' class='list-group'></div>");
        // and .append that Resource container <div> to the topicLI Topic list item as well
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
            // console.log(resourceName + " - Resource id: " + resourceId + ", Topic Id: " + resourceTopic);
            // console.log("content: " + resourceContent);

            // create a Resource Name list item container with id="resource1"
            var resourceItem = $("<div id='resource" + resourceId + "' class='resname list-group-item list-group-item-action'></div>");

            // delete resource button (burn icon)
            var deleteResourceButton = $("<i class='delete-resource fas fa-burn p-0 mb-0 mr-2 float-left'></i>");
            // append to the resourceItem container DIV before Resource Name
            resourceItem.append(deleteResourceButton);

            // Resource Headline displays the resourceName
            var resourceHeadline = $("<h6 class='resname p-0 mb-1'>" + resourceName + "</h6>");
            // append it to the resourceItem container DIV after delete (burn) icon
            resourceItem.append(resourceHeadline);

            // $(".resname").click(function () {
            //   console.log("I got clicked!");
            //   $("#resourceContent" + resourceId).toggle();
            // });         

            // create a Resource Content copy list item with id="resourceContent1"
            // var resourceContent = $("<p id='resourceContent" + resourceId + "' class='rescont mb-0' style='display: none'>" + resourceContent + "</p>");
            var resourceContent = $("<p id='resourceContent" + resourceId + "' class='rescont mb-0'>" + resourceContent + "</p>");
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


  // event handler for the "Add Topic" button and input field, calls addTopic() function
  $(document).on("click", "#add-topic-button", addTopic);


  // function called by event handler for the "Add Topic" button and input field
  function addTopic() {
    var newTopic = $("#add-topic-name").val().trim();
    console.log(newTopic);

    // POST a call to workspaceApiRoutes /api/:user/:project/newtopic
    $.post("/api/" + userId + "/" + projectId + "/" + newTopic, function (newTopic) {
      // reload the page to re-run getTopicsAndResources() to show the new Topic
      location.reload(true);
    });
  };


  // ========================================================


  // // event handler for the "Add Resource" button and input field, calls addResource() function
  // $(document).on("click", "#add-resource-button-" + tID, addResource);


  // // function called by event handler for the "Add Topic" button and input field
  // function addResource() {
  //   var newResource = $("#add-resource-name-" + tID).val().trim();
  //   console.log(newResource);

  //   // POST a call to workspaceApiRoutes /api/:user/:project/:topic/newresource
  //   $.post("/api/" + userId + "/" + projectId + "/" + tID + "/" + newTopic, function (newTopic) {
  //     // reload the page to re-run getTopicsAndResources() to show the new Resource
  //     location.reload(true);
  //   });
  // };




  // ========================================================
}); // end jQuery wrapper function


// $(document).on("click", ".todo-item", editTodo);


// // This function handles showing the input box for a user to edit a todo
// function editTodo() {
//   var currentTodo = $(this).data("todo");
//   $(this)
//     .children()
//     .hide();
//   $(this)
//     .children("input.edit")
//     .val(currentTodo.text);
//   $(this)
//     .children("input.edit")
//     .show();
//   $(this)
//     .children("input.edit")
//     .focus();
// }












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