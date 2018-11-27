-- USE epishd21527gshvd;
USE bookreporter_db;

INSERT INTO Users (userName, createdAt, updatedAt) VALUES ('Lewis Carroll', NOW(), NOW());
-- this will be id:2 in Users

INSERT INTO Projects (projectName, createdAt, updatedAt, UserId) VALUES ('Alices Adventures in Wonderland', NOW(), NOW(), 2);
-- so assign this project to UserId 2 in Projects
-- and this Project will be id:2 in Projects, so assign all Topics to ProjectId 2 in Topics

-- ===================================================

INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('Down the Rabbit-Hole', NOW(), NOW(), 2);
-- all Topics assigned to projectId 2 in Topics
-- this Topic will be id: 4 in Topics, so assign all first Topic resources to TopicId 4 in Resources

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (4, NOW(), NOW(), 'Alice with her sister', 'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, and what is the use of a book, thought Alice without pictures or conversations?');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (4, NOW(), NOW(), 'Alice sees a White Rabbit', 'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (4, NOW(), NOW(), 'The rabbit has a watch', 'There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, ‘Oh dear! Oh dear! I shall be late!’ (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.');

-- ===================================================

INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('The Pool of Tears', NOW(), NOW(), 2);
-- this Topic will be id: 5 in Topics, so assign all second Topic resources to TopicId 5 in Resources

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (5, NOW(), NOW(), 'Curiouser', '‘Curiouser and curiouser!’ cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); ‘now I’m opening out like the largest telescope that ever was! Good-bye, feet!’ (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). ‘Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I’m sure _I_ shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;--but I must be kind to them,’ thought Alice, ‘or perhaps they won’t walk the way I want to go! Let me see: I’ll give them a new pair of boots every Christmas.’');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (5, NOW(), NOW(), 'A Little Golden Key', 'Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (5, NOW(), NOW(), 'A Poem', 
'   ‘How doth the little crocodile
      Improve his shining tail,
     And pour the waters of the Nile
      On every golden scale!

     ‘How cheerfully he seems to grin,
      How neatly spread his claws,
     And welcome little fishes in
      With gently smiling jaws!’
');

-- ===================================================

INSERT INTO Topics (topicName, createdAt, updatedAt, ProjectId) VALUES ('A Caucus-Race and a Long Tale', NOW(), NOW(), 2);
-- this Topic will be id: 6 in Topics, so assign all third Topic resources to TopicId 6 in Resources

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'Something Dry', 'They were indeed a queer-looking party that assembled on the bank--the birds with draggled feathers, the animals with their fur clinging close to them, and all dripping wet, cross, and uncomfortable.

The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, ‘I am older than you, and must know better’; and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.

At last the Mouse, who seemed to be a person of authority among them, called out, ‘Sit down, all of you, and listen to me! I’LL soon make you dry enough!’ They all sat down at once, in a large ring, with the Mouse in the middle. Alice kept her eyes anxiously fixed on it, for she felt sure she would catch a bad cold if she did not get dry very soon.

‘Ahem!’ said the Mouse with an important air, ‘are you all ready? This is the driest thing I know. Silence all round, if you please! “William the Conqueror, whose cause was favoured by the pope, was soon submitted to by the English, who wanted leaders, and had been of late much accustomed to usurpation and conquest. Edwin and Morcar, the earls of Mercia and Northumbria--“’');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'Everyones A Winner', 'First it marked out a race-course, in a sort of circle, ‘the exact shape doesn’t matter,’ it said, and then all the party were placed along the course, here and there. There was no ‘One, two, three, and away,’ but they began running when they liked, and left off when they liked, so that it was not easy to know when the race was over. However, when they had been running half an hour or so, and were quite dry again, the Dodo suddenly called out ‘The race is over!’ and they all crowded round it, panting, and asking, ‘But who has won?’

This question the Dodo could not answer without a great deal of thought, and it sat for a long time with one finger pressed upon its forehead (the position in which you usually see Shakespeare, in the pictures of him), while the rest waited in silence. At last the Dodo said, ‘EVERYBODY has won, and all must have prizes.’');

INSERT INTO Resources (TopicId, createdAt, updatedAt, resourceName, resourceContent) VALUES (6, NOW(), NOW(), 'A Remarkable Sensation', 'This speech caused a remarkable sensation among the party. Some of the birds hurried off at once: one old Magpie began wrapping itself up very carefully, remarking, ‘I really must be getting home; the night-air doesn’t suit my throat!’ and a Canary called out in a trembling voice to its children, ‘Come away, my dears! It’s high time you were all in bed!’ On various pretexts they all moved off, and Alice was soon left alone.');

-- ===================================================
