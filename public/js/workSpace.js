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

// jQuery calls to wsApiRoutes.js:

// GET all topics for project - DONE (see wsHtmlRoutes.js)
// GET all resources for each topic - DONE (see wsHtmlRoutes.js)

// POST new topic for project - DONE
// POST new resource name for each topic - DONE

// DELETE a topic from project - DONE
// DELETE a resource from topic - DONE

// PUT change content of a resource - DONE
// PUT change name of a topic - DONE
// PUT change name of a resource - DONE


// start jQuery wrapper function
$(document).ready(function () {

  // ==========================================================

  // get the Project ID for this page from the last char in the current URL
  var thisURL = window.location.href;
  // console.log(thisURL);
  var projectId = thisURL[thisURL.length - 1];
  // console.log(projectId);

  // ==========================================================

  // event listener for the "Add Topic" button and input field, calls addTopic() function
  $(document).on("click", "#add-topic-button", addTopic);


  // function called by event handler for the "Add Topic" button and input field
  function addTopic() {
    var newTopic = $("#add-topic-name").val().trim();
    // console.log(newTopic);

    // POST call to wsApiRoutes /api/:project/:topicname
    $.post("/api/" + projectId + "/" + newTopic, function () {
      // reload the page to get updated Project with new Topic added
      location.reload(true);
    });
  }

  // ==========================================================

  // event listener for the .delete-topic button
  $(document).on("click", ".delete-topic", deleteTopic);


  // called by .delete-topic button click handler
  function deleteTopic() {

    var confirmDelete = confirm("Are you sure you want to delete this Topic?");

    if (confirmDelete === true) {

      // get the Topic id from the data-topic="" HTML property of the button
      var thisTopicID = $(this).attr('data-topic');
      // console.log(thisTopicID);

      // DELETE call to wsApiRoutes /api/topics/:id
      $.ajax("/api/topics/" + thisTopicID, {
        type: "DELETE"
      }).then(
        function () {
          // reload the page to get updated Project with Topic deleted
          location.reload(true);
        });
    }
  }

  // ==========================================================


  // event listener for clicking on a Topic Name input
  // works with updateTopic event listener
  $(document).on("focus", ".tname", editTopic);


  // called by clicking into the input field of a Topic Name .tname
  // works with updateTopic() on blur
  function editTopic() {
    // create a variable with value of element's placeholder="" content
    var topicNamePlaceholder = $(this).attr('placeholder');
    // then make the value="" (the text of textarea) the text in the placeholder
    $(this).val(topicNamePlaceholder);
  }

  // +++++++++++

  // event listener for clickout out of a Topic Name input
  // works with editTopic event listener
  $(document).on("blur", ".tname", updateTopic);


  // called by clicking out of the input field of a Topic Name .tname
  // works with editTopic() on focus
  function updateTopic() {

    // get the Topic id from the data-topic="" HTML property of the input
    var topicID = $(this).attr('data-topic');
    // console.log(topicID);
    // get the new topic name from the current text in the input
    var newTopicName = $(this).val().trim();
    // console.log(newTopicName);
    // create an object to send as data: (the req.body) with the new Topic name
    var putTopicName = {
      topicName: newTopicName
    };

    // Send the PUT request with the swapped value as the new value in database
    $.ajax("/api/topics/" + topicID, {
      type: "PUT",
      data: putTopicName
    }).then(function (result) {
      // console.log(result);
      location.reload();
    });
  }

  // ==========================================================

  // event listener for the Add Resource "+" button and input field, calls addResource() function
  $(document).on("click", ".add-resource", addResource);


  // called by the event handler for .add-resource buttons
  function addResource() {

    // get the Topic id for the new resource from data-topic="" property of button
    var thisTopicID = $(this).attr('data-topic');
    // console.log(thisTopicID);

    // get the new Resource name from the input field whose ID name includes this Topic ID
    var newResourceName = $("#add-resource-name-" + thisTopicID).val().trim();
    // console.log(newResourceName);

    // POST to wsApiRoutes /api/resources/:topicid/:resourcename
    $.post("/api/resources/" + thisTopicID + "/" + newResourceName, function (newResource) {
      // reload the page to to show the new Resource added
      // console.log(newResource);
      location.reload(true);
    });
  }

  // ==========================================================

  // event listener for the Delete Resource "x" button
  $(document).on("click", ".delete-resource", deleteResource);


  // called by the .delete-resource buttons event handler
  function deleteResource() {

    var confirmDelete = confirm("Are you sure you want to delete this Resource?");

    if (confirmDelete == true) {

      var thisResourceID = $(this).attr('data-resource');
      // console.log(thisResourceID);

      // DELETE to wsApiRoutes /api/resources/:id
      $.ajax("/api/resources/" + thisResourceID, {
        type: "DELETE"
      }).then(
        function (result) {
          location.reload(true);
        });
    }
  }

  // ==========================================================


  // event listener for clicking on a Resource Name input
  // works with updateResourceName event hander
  $(document).on("focus", ".rname", editResourceName);


  // called by clicking into the input field of a Topic Name .tname
  // works with updateResourceName() on blur
  function editResourceName() {
    // create a variable with value of element's placeholder="" content
    var resourceNamePlaceholder = $(this).attr('placeholder');
    // then make the value="" (the input text of textarea) the placeholder content
    $(this).val(resourceNamePlaceholder);
  }

  // +++++++++++

  // event listener for clickout out of a Resource Name input
  // works with editResourceName event handler
  $(document).on("blur", ".rname", updateResourceName);


  // called by clicking out of the input field of a Topic Name .tname
  // works with editResourceName() on focus
  function updateResourceName() {

    var resourceID = $(this).attr('data-resource');
    // console.log(resourceID);
    var newResourceName = $(this).val().trim();
    // console.log(newResourceName);
    var putResourceName = {
      resourceName: newResourceName
    };

    // PUT to wsApiRoutes /api/resource-name/:id
    $.ajax("/api/resource-name/" + resourceID, {
      type: "PUT",
      data: putResourceName
    }).then(function (result) {
      // console.log(result);
      location.reload();
    });
  }

  // ==========================================================

  // event listener for clicking into a Resource Content textarea
  $(document).on("focus", ".rescont", editResource);


  // function places placeholder="" content into value="" of Resource Content field
  function editResource() {
    // create a variable with value of element's placeholder="" content
    var resContPlaceholder = $(this).attr('placeholder');
    // then make the value="" (the text of the textarea) the placeholder content
    $(this).val(resContPlaceholder);
  }

  // +++++++++++

  // event listener for clickout out of a Resource Content textarea
  $(document).on("blur", ".rescont", updateResource);


  // function to update the db resourceContent from the current field contents
  function updateResource() {

    // get id of this Resource from textarea's data-resource="" property
    var resourceID = $(this).attr('data-resource');
    // console.log(resourceID);

    // get the current text content of the textarea
    var thisResVal = $(this).val().trim();
    // console.log(thisResVal);

    // and make an object with the current text to send to wsApiRoutes as data:
    var putResVal = {
      resourceContent: thisResVal
    };

    // PUT to wsApiRoutes /api/resource-content/:id
    $.ajax("/api/resource-content/" + resourceID, {
      type: "PUT",
      data: putResVal
    }).then(function (result) {
      // console.log(result);
      location.reload();
    });
  }

  // ==========================================================
}); // end jQuery wrapper