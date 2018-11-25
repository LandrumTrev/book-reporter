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

// DELETE a topic from project - DONE
// DELETE a resource from topic - DONE

// PUT change content of a resource - DONE
// PUT change name of a topic
// PUT change name of a resource

// PUT change topic assignment of a resource (?)
// PUT change project assignment of topic (?)


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

        // // delete resource button (burn icon)
        // var deleteTopicButton = $("<i id='delete-topic-button-" + tID + "' class='delete-topic fas fa-burn p-0 mb-0 mr-3 float-left' data-topic='" + tID + "'></i>");
        // // append to the Topic container topicLI before the Topic Headline
        // topicLI.append(deleteTopicButton);

        // display the topicName data as the Topic Headline
        // var topicHeadline = $("<h5 class='p-0 mb-2 float-left'>" + topicName + "</h5>");
        var topicHeadline = $("<div class='input-group mb-3'><div class='input-group-prepend'><button class='btn btn-outline-secondary' type='button' id='topic-delete-button-" + tID + "' data-topic='" + tID + "'> X </button></div><input id='add-resource-name-" + tID + "' type='text' class='form-control' placeholder='" + topicName + "'></div>");

        // append to the Topic container topicLI after the Topic Delete Button
        topicLI.append(topicHeadline);

        // create an "Add Resource" input and button at the top of every Topic list of Resources
        var newResourceInput = $("<div class='input-group mb-3'><div class='input-group-prepend'><button class='btn btn-outline-secondary' type='button' id='add-resource-button-" + tID + "' data-topic='" + tID + "'>Add Resource</button></div><input id='add-resource-name-" + tID + "' type='text' class='form-control' placeholder='add a new Resource to this Topic'></div>");
        // append the "Add Resource" input below the Topic Name and above the Resource list
        topicLI.append(newResourceInput);

        // ==========================================================

        // event handler for the "Delete Topic" burn icon button
        $(document).on("click", "#delete-topic-button-" + tID, function () {

          // console.log("delete clicked!");

          var confirmDelete = confirm("Are you sure you want to delete this Topic?");

          if (confirmDelete == true) {

            var thisTopic = ($(this).attr('data-topic'));
            // console.log(thisTopic);

            // Send the DELETE request with the topicId set as the data-topic="" value of the delete button
            $.ajax("/api/topics/" + thisTopic, {
              type: "DELETE"
            }).then(
              function (result) {
                // console.log(result);
                // console.log("topic id: " + thisTopic + " has been deleted.");
                // Reload the page to get the updated list
                location.reload(true);
              });
          } else {
            // console.log("delete cancelled.");
          }
        });

        // ==========================================================

        // event handler for the "Add Resource" button and input field, calls addResource() function
        $(document).on("click", "#add-resource-button-" + tID, function () {

          var thisTopic = $(this).attr('data-topic');
          console.log(thisTopic);

          // var resourceName = $("#add-resource-name-" + thisTopic).val().trim();
          // var resourceName = $(this).val().trim();
          var resourceName = "Sparkymonkey";
          console.log(resourceName);

          var thisID = $("#add-resource-name-" + thisTopic);
          console.log(thisID);

          // POST a call to workspaceApiRoutes /api/:user/:project/:topic/newresource
          // $.post("/api/resource-new/" + userId + "/" + projectId + "/" + thisTopic + "/" + newResource, function (newTopic) {
          $.post("/api/resource-new/" + thisTopic + "/" + resourceName, function (newTopic) {
            // reload the page to re-run getTopicsAndResources() to show the new Resource
            console.log(newTopic);
            // location.reload(true);
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

            // create a Resource Name list item container with id="resource1"
            var resourceItem = $("<div id='resource" + resourceId + "' class='resname list-group-item list-group-item-action'></div>");

            // delete resource button (burn icon)
            var deleteResourceButton = $("<i id='delete-resource-button-" + resourceId + "' class='delete-resource fas fa-burn p-0 mb-0 mr-3 float-left' data-topic='" + resourceId + "'></i>");
            // append to the resourceItem container DIV before Resource Name
            resourceItem.append(deleteResourceButton);

            // Resource Headline displays the resourceName
            var resourceHeadline = $("<h6 class='resname p-0 mb-1'>" + resourceName + "</h6>");
            // append it to the resourceItem container DIV after delete (burn) icon
            resourceItem.append(resourceHeadline);

            // ==========================================================    

            // event handler for the "Delete Topic" burn icon button
            $(document).on("click", "#delete-resource-button-" + resourceId, function () {

              var confirmDelete = confirm("Are you sure you want to delete this Resource?");

              if (confirmDelete == true) {

                var thisResource = ($(this).attr('data-topic'));
                // console.log(thisResource);

                // Send the DELETE request with the topicId set as the data-topic="" value of the delete button
                $.ajax("/api/resources/" + thisResource, {
                  type: "DELETE"
                }).then(
                  function (result) {
                    location.reload(true);
                  });
              } else {
                // console.log("delete cancelled.");
              }
            });

            // ==========================================================    

            // create a Resource Content box list item with id="resourceContent1"
            var resourceBox = $("<textarea class='form-control rescont mb-0' rows='7' wrap='hard' id='ResourceId-" + resourceId + "' data-ResourceId='" + resourceId + "' placeholder='" + resourceContent + "'></textarea>");

            // event handler for clicking on a Resource Content textarea
            $(document).on("focus", "#ResourceId-" + resourceId, editResource);

            // function places placeholder="" content into value="" of Resource Content field
            function editResource() {
              var resContPlaceholder = $(this).attr('placeholder');
              $(this).val(resContPlaceholder);
            }

            // event handler for clickout out of a Resource Content textarea
            $(document).on("blur", "#ResourceId-" + resourceId, updateResource);

            // function to update the db resourceContent from the current field contents
            function updateResource() {

              var resId = $(this).attr('data-ResourceId');
              // console.log(resId);
              var thisResVal = $(this).val().trim();
              // console.log(thisResVal);
              var putResVal = {
                resourceContent: thisResVal
              };

              // Send the PUT request with the swapped value as the new value in database
              $.ajax("/api/resource-content/" + resId, {
                type: "PUT",
                data: putResVal
              }).then(function (result) {
                // console.log(result);
                location.reload();
              });
            }

            // and append the ResourceContent to the resourceItem headline
            $(resourceItem).append(resourceBox);

            // and append the Resource list item to the resourceGroup container for that Topic
            $("#topic" + resourceTopic).append(resourceItem);
          }
        }); // end Resources AJAX

        $("#topics_display").append(topicLI);
      } // end Topics FOR loop
    }); // end $.get call for Topics
  } // end getTopicsAndResources

  // ========================================================

  // // $(document).on("click", ".rescont", editResource);

  // // This function handles showing the input box for a user to edit a todo
  // function editResource() {
  //   // var currentResource = $(this).data("ResourceId-");
  //   // console.log(resourceContent);
  //   console.log($(this).attr('id'));
  //   console.log($(this).attr('data-ResourceId'));
  //   // console.log($(this).resourceContent);
  //   $(this)
  //     .children()
  //     .hide();
  //   $(this)
  //     .children("input.edit")
  //     .val();
  //   $(this)
  //     .children("input.edit")
  //     .show();
  //   $(this)
  //     .children("input.edit")
  //     .focus();
  // }

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


  // ========================================================


  // // This function constructs a Resource row
  // function createNewResource(todo) {
  //   var $newResourceRow = $(
  //     [
  //       "<li class='list-group-item todo-item'>",

  //       "<span>",
  //       todo.text,
  //       "</span>",

  //       "<input type='text' class='edit' style='display: none;'>",

  //       "<button class='delete btn btn-danger'>x</button>",
  //       "<button class='complete btn btn-primary'>✓</button>",

  //       "</li>"

  //     ].join("")
  //   );


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