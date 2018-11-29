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
// GET projectContent Quill editor text from db - DONE

// POST new topic for project - DONE
// POST new resource name for each topic - DONE

// DELETE a topic from project - DONE
// DELETE a resource from topic - DONE

// PUT change content of a resource - DONE
// PUT change name of a topic - DONE
// PUT change name of a resource - DONE
// PUT updated projectContent Quill editor text to db - DONE


// start jQuery wrapper function
$(document).ready(function () {

  // ==========================================================
  // START QUILL EDITOR FUNCTIONS
  // ==========================================================

  // on page load, run function to load projectContent from db in editor
  $(document).ready(editorProjectContent);

  // on page load, run function to load projectContent from db in editor
  function editorProjectContent() {

    // get the Project id from the editor DIV, set by Handlebars
    var wpProjectId = $("#editor").attr("data-project");

    $.ajax("/api/projects/" + wpProjectId, {
      type: "GET",
    }).then(function (getResult) {
      // JSON.parse the JSON String data from Project's projectContent col
      var jsonResult = JSON.parse(getResult.projectContent);
      // have Quill load the parsed JSON data into the editor
      quill.setContents(jsonResult);
    });
  };

  // +++++++++++

  $(document).on("blur", "#quillBox", updateProjectWP);

  function updateProjectWP() {

    // create a var for Quill grabbing current editor content
    var delta = quill.getContents();

    // and then JSON.stringify that content, 
    // and turn it into an object to send as the body of the $.ajax PUT
    var editorPutContent = {
      projectContent: JSON.stringify(delta)
    }

    // get the Project id from the editor DIV, set by Handlebars
    var wpProjectId = $("#editor").attr("data-project");

    $.ajax("/api/projects/" + wpProjectId, {
      type: "PUT",
      data: editorPutContent
    }).then(function (putResult) {
      // when click outside the editor, current content now saved in db
      // no need for a jarring reload here; all new page loads will get from db
    });
  };

  // ==========================================================
  // END QUILL EDITOR FUNCTIONS
  // ==========================================================

  // this code resizes the textarea of each Resource Content 
  // to the height of all text contained within (no fixed height, no scroll bars)
  // amd also sets the default css "display:none" to all textareas after sizing them
  var allTextareas = $("body").find("textarea");
  // console.log(allTextareas[0]);

  for (let i = 0; i < allTextareas.length; i++) {

    var thisTextarea = allTextareas[i];

    // set the height of each textarea to the scrollHeight of it's content text
    $(thisTextarea).height($("textarea")[i].scrollHeight);
  }

  // ==========================================================

  // get the Project ID for this page from the last char in the current URL
  var thisURL = window.location.href;
  // console.log(thisURL);
  var projectId = thisURL[thisURL.length - 1];
  // console.log(projectId);

  // ==========================================================

  // event listener for .toggle-all-resources button to show/hide all Project Resources
  $(document).on("click", ".toggle-all-resources", showHideProjectResources);


  // called by .toggle-all-resources button to show/hide all Project Resources
  function showHideProjectResources() {

    // select all .rescont (all Resource Content textareas)
    var projectResourceContents = $(".rescont");
    // console.log(projectResourceContents);

    // then toggle the visibility of all Resource Content textareas
    $(projectResourceContents).toggle();

  }

  // ==========================================================

  // event listener for .toggle-topic-resources button to show/hide all Topic's Resources
  $(document).on("click", ".toggle-topic-resources", showHideTopicResources);


  // called by handler for the .toggle-resource button to show/hide all Topic's Resources
  function showHideTopicResources() {

    // get the Topic id from the button's data-topic=""
    var topicID = $(this).attr('data-topic');
    // console.log(topicID);

    // select all .rescont with a data-topic="" that matches the button's data-topic=""
    var topicsResourceContents = $(".rescont[data-topic='" + topicID + "']");
    // console.log(topicsResourceContents);

    // then toggle the visibility of just the matching .resont textareas
    $(topicsResourceContents).toggle();

  }

  // ==========================================================

  // event listener for .toggle-resource button to show/hide each Resource Content
  $(document).on("click", ".toggle-resource", showHideResourceContent);


  // called by handler for the .toggle-resource button to show/hide each Resource Content
  function showHideResourceContent() {

    var resID = $(this).attr('data-resource');
    // console.log(resID);
    var thisResourceContent = $("#content-r-" + resID);
    // console.log(thisResourceContent);
    $(thisResourceContent).toggle();
  }

  // ==========================================================

  // event listener for the "Add Topic" button and input field, calls addTopic() function
  $(document).on("click", "#add-topic-button", addTopic);


  // function called by event handler for the "Add Topic" button and input field
  function addTopic() {
    var newTopic = $("#add-topic-name").val().trim();
    // console.log(newTopic);

    // POST call to wsApiRoutes /api/:project/:topicname
    $.post("/api/projects/" + projectId + "/" + newTopic, function () {
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
      location.reload();
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