-- USE epishd21527gshvd;
USE bookreporter_db;

INSERT INTO Users (userName, createdAt, updatedAt) VALUES ('NickyB', NOW(), NOW());
-- this will be id:2 in Users

INSERT INTO Projects (projectName, createdAt, updatedAt, UserId) VALUES ('Dev Notes', NOW(), NOW(), 3);
-- so assign this project to UserId 3 in Projects
-- and this Project will be id:3 in Projects, so assign all Topics to ProjectId 2 in Topics

-- ===================================================

INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('HTML', NOW(), NOW(), 3);
-- all Topics assigned to projectId 3 in Topics
-- this Topic will be id: 7 in Topics, so assign all first Topic resources to TopicId 7 in Resources

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (7, NOW(), NOW(), 'Script Tag, jQuery', '<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (7, NOW(), NOW(), 'Script Tag, Bootstrap', '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (7, NOW(), NOW(), 'Link Tag, Font Awesome', '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossorigin="anonymous" />');

-- ===================================================

INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('Drag and Drop', NOW(), NOW(), 3);
-- this Topic will be id: 8 in Topics, so assign all second Topic resources to TopicId 8 in Resources

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (8, NOW(), NOW(), 'ondrop/drag, syntax', '‘<div ondrop="drop(event, target)" ondragover="allowDrop(event)"></div>’');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (8, NOW(), NOW(), 'dragable/ondrag, syntax', '<div draggable="true" ondragstart="drag(event)"></div');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (8, NOW(), NOW(), 'js, syntax', 
'function allowDrop(event) {
        event.preventDefault();
    }
    function drag(event) {
        event.dataTransfer.setData("Text/html", event.target.id);
    }
    function drop(event, target) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text/html");
        event.target.appendChild(document.getElementById(data));
    }'
);

-- ===================================================

-- INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('A Caucus-Race and a Long Tale', NOW(), NOW(), 2);
-- this Topic will be id: 6 in Topics, so assign all third Topic resources to TopicId 6 in Resources

-- INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'Something Dry', 'They were indeed a queer-looking party that assembled on the bank--the birds with draggled feathers, the animals with their fur clinging close to them, and all dripping wet, cross, and uncomfortable.

-- The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, ‘I am older than you, and must know better’; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.

-- At last the Mouse, who seemed to be a person of authority among them, called out, ‘Sit down, all of you, and listen to me! I’LL soon make you dry enough!’ They all sat down at once, in a large ring, with the Mouse in the middle. Alice kept her eyes anxiously fixed on it, for she felt sure she would catch a bad cold if she did not get dry very soon.

-- ‘Ahem!’ said the Mouse with an important air, ‘are you all ready? This is the driest thing I know. Silence all round, if you please! “William the Conqueror, whose cause was favoured by the pope, was soon submitted to by the English, who wanted leaders, and had been of late much accustomed to usurpation and conquest. Edwin and Morcar, the earls of Mercia and Northumbria--“’');

-- INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'Everyones A Winner', 'First it marked out a race-course, in a sort of circle, ‘the exact shape doesn’t matter,’ it said, and then all the party were placed along the course, here and there. There was no ‘One, two, three, and away,’ but they began running when they liked, and left off when they liked, so that it was not easy to know when the race was over. However, when they had been running half an hour or so, and were quite dry again, the Dodo suddenly called out ‘The race is over!’ and they all crowded round it, panting, and asking, ‘But who has won?’

-- This question the Dodo could not answer without a great deal of thought, and it sat for a long time with one finger pressed upon its forehead (the position in which you usually see Shakespeare, in the pictures of him), while the rest waited in silence. At last the Dodo said, ‘EVERYBODY has won, and all must have prizes.’');

-- INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'A Remarkable Sensation', 'This speech caused a remarkable sensation among the party. Some of the birds hurried off at once: one old Magpie began wrapping itself up very carefully, remarking, ‘I really must be getting home; the night-air doesn’t suit my throat!’ and a Canary called out in a trembling voice to its children, ‘Come away, my dears! It’s high time you were all in bed!’ On various pretexts they all moved off, and Alice was soon left alone.');

