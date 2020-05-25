create database tweetsdb;

#create user table
CREATE TABLE 'tweetsdb'.'user' (
  'USER_ID' INT NOT NULL AUTO_INCREMENT,
  'NAME' VARCHAR(45) NOT NULL,
  PRIMARY KEY ('USER_ID'));

#create post table
CREATE TABLE 'tweetsdb'.'post' (
  'POST_ID' INT NOT NULL AUTO_INCREMENT,
  'USER_ID' INT NOT NULL,
  'DESCRIPTION' VARCHAR(280) NOT NULL,
  'CREATED_AT' TIMESTAMP NOT NULL,
  'PHOTO_LINK' VARCHAR(1024) NULL,
  'LIKES' INT NULL,
  PRIMARY KEY ('POST_ID'),
  INDEX 'USER_ID_idx' ('USER_ID' ASC) VISIBLE,
  CONSTRAINT 'FK_USER_ID'
    FOREIGN KEY ('USER_ID')
    REFERENCES 'tweetsdb'.'user' ('USER_ID')
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

#create tag table
CREATE TABLE 'tweetsdb'.'tag' (
  'TAG_ID' INT NOT NULL AUTO_INCREMENT,
  'TAG_NAME' VARCHAR(20) NOT NULL,
  PRIMARY KEY ('TAG_ID'));

#create post_tags table
CREATE TABLE 'tweetsdb'.'post_tags' (
  'POST_TAGS_ID' INT NOT NULL AUTO_INCREMENT,
  'POST_ID' INT NOT NULL,
  'TAG_ID' INT NOT NULL,
  PRIMARY KEY ('POST_TAGS_ID'),
  INDEX 'POST_ID_idx' ('POST_ID' ASC) VISIBLE,
  INDEX 'FK_TAG_ID_idx' ('TAG_ID' ASC) VISIBLE,
  CONSTRAINT 'FK_POST_ID'
    FOREIGN KEY ('POST_ID')
    REFERENCES 'tweetsdb'.'post' ('POST_ID')
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 'FK_TAG_ID'
    FOREIGN KEY ('TAG_ID')
    REFERENCES 'tweetsdb'.'tag' ('TAG_ID')
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


#create post_likes table
CREATE TABLE 'tweetsdb'.'post_likes' (
  'POST_LIKES_ID' INT NOT NULL AUTO_INCREMENT,
  'POST_ID' INT NOT NULL,
  'USER_ID' INT NOT NULL,
  PRIMARY KEY ('POST_LIKES_ID'),
  INDEX 'FK_PL_ID_idx' ('POST_ID' ASC) VISIBLE,
  INDEX 'FK_PU_ID_idx' ('USER_ID' ASC) VISIBLE,
  CONSTRAINT 'FK_PL_ID'
    FOREIGN KEY ('POST_ID')
    REFERENCES 'tweetsdb'.'post' ('POST_ID')
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 'FK_PU_ID'
    FOREIGN KEY ('USER_ID')
    REFERENCES 'tweetsdb'.'user' ('USER_ID')
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
	

#insert data into user table
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Ksenia');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('April');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Username');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Trip Agency');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Galaxy');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('The Queen of Spades');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Иванов Иван');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('May');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('June');
INSERT INTO 'tweetsdb'.'user' ('NAME') VALUES ('Shark');


#insert data into tag table
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('trip');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('dream');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('france');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('castle');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('summer');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('house');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('menton');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('sea');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('nice');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('ez');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('view');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('trip');
INSERT INTO 'tweetsdb'.'tag' ('TAG_NAME') VALUES ('hotel');


#insert data into post table
INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
1,
'Oh, I know that they’ll be better days. Oh, that sunshine bout to come my way',
'2020-02-28 19:25:08',
'https://deita.ru/media/images/paris-2499022_960_720.2e16d0ba.fill-950x690-c100.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
4,
'May we never ever shed another tear for today. Cause oh, I know that they’ll be better days',
'2020-03-01 15:17:00',
'https://www.orangesmile.com/extreme/img/main/la-conciergerie_1.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
3,
'Waking up in California. But these clouds they won’t go away. Everyday is like another storm, yeah',
'2020-03-05 22:14:00',
'https://weatlas.com/img/landmarks/eabd42573a270ddff5bfcd0868823f4d.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
5,
'I’m just trying not to go insane',
'2020-03-01 12:34:07',
'https://bienvenue.ru/wp-content/uploads/2019/09/France_Houses_Coast_Menton_525118_3840x2400-e1568662151301-1024x684.jpg',
3);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
6,
'Yeah, in the city shining so bright. So many dark nights, so many dark days',
'2020-02-24 16:43:00',
'https://cs8.pikabu.ru/post_img/big/2018/03/16/0/1521149430122584598.jpg',
3);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
3,
'But every time I feel the paranoia. I close my eyes and I pray',
'2020-04-05 13:23:45',
'https://www.votpusk.ru/country/ctimages/new/fr186.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
2,
'Oh, I know that they’ll be better days. Oh, that sunshine bout to come my way',
'2020-04-01 23:00:00',
'https://www.net-provence.com/villes/antibes/antibes.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
4,
'May we never ever shed another tear for today. Cause oh, I know that they’ll be better days',
'2020-05-05 13:23:45',
'https://cdn.lecagnard.com/img/hotel-cagnard-french-riviera/village-medieval-haut-de-cagnes-1.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
5,
'Been waking up to a new year. Got the past a million miles away',
'2020-04-02 18:28:00',
'https://i.pinimg.com/originals/c3/23/af/c323af12c4785114801657ffbb5ebb65.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
2,
'I’m waking up with a new fear. But I know it’ll wash away',
'2020-03-01 23:59:59',
'https://frenchriviera.travel/wp-content/uploads/2018/05/saint-paul-de-vence5.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
6,
'Whatever you do don’t worry bout me. I’m thinking bout you, don’t worry bout us',
'2020-04-03 01:38:00',
'https://ibi-co.com/images/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
1,
'Cause in the morning everything can change, yeah. And time will tell you it does',
'2020-03-01 23:59:59',
'https://suitcasemag.com/wp-content/uploads/2019/08/le-roch-restaurant-foodie-france.jpg',
3);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
3,
'Oh, I know that they’ll be better days. Oh, that sunshine bout to come my way',
'2020-05-17 05:24:00',
'https://omotgtravel.com/wp-content/uploads/2020/01/VER1011-C.Recoura.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
5,
'May we never ever shed another tear for today. Cause oh, I know that they’ll be better days',
'2020-03-27 12:59:59',
'https://live.staticflickr.com/4429/36126398733_382da0745f_b.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
2,
'Better days. Better days',
'2020-05-01 05:24:00',
'https://s23514.pcdn.co/wp-content/uploads/2019/03/secrets_of_eastern_france-1140x1425.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
4,
'Better days. Better days',
'2020-04-29 19:16:11',
'https://hospitality-on.com/sites/default/files/2017-10/paris-1836415_1920.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
5,
'May we never ever shed another tear for today',
'2020-03-01 09:34:00',
'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/002/047/slideshow/20e26003f58a62e8b98518d754c26bbf/france-paris-louvre-at-dusk.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
3,
'Cause oh, I know that they’ll be better days',
'2020-04-03 18:21:11',
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pont-saint-benezet-on-rhone-river-and-avignon-royalty-free-image-1138166686-1555335845.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
2,
'May we never ever shed another tear for today',
'2020-05-07 08:15:00',
'https://img.etimg.com/thumb/width-640,height-480,imgsize-527400,resizemode-1,msid-69024736/ask-the-travel-expert-how-best-to-plan-a-family-vacation-to-france.jpg',
2);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
5,
'Cause oh, I know that they’ll be better days',
'2020-04-24 15:26:11',
'https://www.westjet.com/assets/wj-web/images/destinations/europe/dfracdg/Notre-dame-gargoyle-with-Paris-cityscape-and-Eiffel-Tower-737x426.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
10,
'hello',
'2020-05-25 22:15:00',
'https://suitcasemag.com/wp-content/uploads/2019/08/le-roch-restaurant-foodie-france.jpg',
0);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
9,
'hello',
'2020-05-12 11:14:11',
'https://frenchriviera.travel/wp-content/uploads/2018/05/saint-paul-de-vence5.jpg',
1);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
10,
'Cause oh, I know that they’ll be better days',
'2020-05-25 10:34:23',
'https://suitcasemag.com/wp-content/uploads/2019/08/le-roch-restaurant-foodie-france.jpg',
0);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
10,
'hello',
'2020-05-25 17:19:00',
'https://frenchriviera.travel/wp-content/uploads/2018/05/saint-paul-de-vence5.jpg',
0);

INSERT INTO 'tweetsdb'.'post' ('USER_ID','DESCRIPTION','CREATED_AT','PHOTO_LINK','LIKES')
VALUES (
10,
'Cause oh, I know that they’ll be better days',
'2020-05-25 05:43:23',
'https://www.westjet.com/assets/wj-web/images/destinations/europe/dfracdg/Notre-dame-gargoyle-with-Paris-cityscape-and-Eiffel-Tower-737x426.jpg',
0);

#insert data into post_likes table

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (1, 2);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (1, 3);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (2, 1);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (3, 4);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (3, 2);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (4, 3);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (4, 5);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (4, 2);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (5, 1);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (5, 3);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (5, 5);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (6, 2);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (6, 6);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (7, 1);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (7, 5);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (8, 1);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (9, 6);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (9, 4);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (10, 5);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (11, 1);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (11, 3);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (12, 3);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (12, 5);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (12, 4);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (13, 5);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (13, 6);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (14, 2);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (15, 1);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (15, 5);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (16, 2);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (16, 3);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (17, 4);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (18, 2);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (18, 4);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (19, 3);
INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (19, 4);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (20, 6);

INSERT INTO 'tweetsdb'.'post_likes'('POST_ID','USER_ID') VALUES (22, 7);


#insert data into post_tags table

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (1, 1);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (1, 2);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (1, 3);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (2, 4);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (2, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (3, 2);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (3, 6);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (3, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (4, 7);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (4, 8);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (4, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (5, 9);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (5, 3);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (5, 8);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (6, 10);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (6, 11);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (6, 2);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (6, 12);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (7, 3);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (7, 8);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (8, 12);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (8, 6);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (9, 4);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (10, 6);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (10, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (11, 12);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (12, 3);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (12, 2);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (13, 5);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (13, 12);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (14, 13);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (14, 9);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (15, 4);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (16, 3);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (16, 2);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (17, 2);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (18, 8);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (18, 12);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (19, 6);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (20, 3);
INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (20, 11);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (21, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (22, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (23, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (24, 5);

INSERT INTO 'tweetsdb'.'post_tags'('POST_ID','TAG_ID') VALUES (25, 5);