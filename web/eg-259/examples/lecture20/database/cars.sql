-- phpMyAdmin SQL Dump
-- version 2.9.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Nov 23, 2006 at 10:22 AM
-- Server version: 5.0.24
-- PHP Version: 5.1.6
-- 
-- Database: corvettes
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table States
-- 

DROP TABLE IF EXISTS states;

CREATE TABLE states (
  id int(11) NOT NULL auto_increment,
  state varchar(25) NOT NULL,
  PRIMARY KEY  (id)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- 
-- Dumping data for table states
-- 

INSERT INTO states VALUES (1, 'Alabama');
INSERT INTO states VALUES (2, 'Alaska');
INSERT INTO states VALUES (3, 'Arizona');
INSERT INTO states VALUES (4, 'Arkansas');
INSERT INTO states VALUES (5, 'Alabama');
INSERT INTO states VALUES (6, 'California');
INSERT INTO states VALUES (7, 'Colorado');
INSERT INTO states VALUES (8, 'Connecticut');
INSERT INTO states VALUES (9, 'Delaware');
INSERT INTO states VALUES (10, 'Florida');
INSERT INTO states VALUES (11, 'Georgia');
INSERT INTO states VALUES (12, 'Hawaii'); 
INSERT INTO states VALUES (13, 'Idaho'); 
INSERT INTO states VALUES (14, 'Illinois'); 
INSERT INTO states VALUES (15, 'Indiana'); 
INSERT INTO states VALUES (16, 'Iowa'); 
INSERT INTO states VALUES (17, 'Kansas'); 
INSERT INTO states VALUES (18, 'Kentucky'); 
INSERT INTO states VALUES (19, 'Louisiana'); 
INSERT INTO states VALUES (20, 'Maine'); 
INSERT INTO states VALUES (21, 'Maryland'); 
INSERT INTO states VALUES (22, 'Massachusetts'); 
INSERT INTO states VALUES (23, 'Michigan'); 
INSERT INTO states VALUES (24, 'Minnesota'); 
INSERT INTO states VALUES (25, 'Mississippi'); 
INSERT INTO states VALUES (26, 'Missouri'); 
INSERT INTO states VALUES (27, 'Montana'); 
INSERT INTO states VALUES (28, 'Nebraska'); 
INSERT INTO states VALUES (29, 'Nevada'); 
INSERT INTO states VALUES (30, 'New Hampshire'); 
INSERT INTO states VALUES (31, 'New Jersey'); 
INSERT INTO states VALUES (32, 'New Mexico'); 
INSERT INTO states VALUES (33, 'New York'); 
INSERT INTO states VALUES (34, 'North Carolina'); 
INSERT INTO states VALUES (35, 'North Dakota'); 
INSERT INTO states VALUES (36, 'Ohio'); 
INSERT INTO states VALUES (37, 'Oklahoma'); 
INSERT INTO states VALUES (38, 'Oregon'); 
INSERT INTO states VALUES (39, 'Pennsylvania'); 
INSERT INTO states VALUES (40, 'Rhode Island'); 
INSERT INTO states VALUES (41, 'South Carolina'); 
INSERT INTO states VALUES (42, 'South Dakota'); 
INSERT INTO states VALUES (43, 'Tennessee'); 
INSERT INTO states VALUES (44, 'Texas'); 
INSERT INTO states VALUES (45, 'Utah'); 
INSERT INTO states VALUES (46, 'Vermont'); 
INSERT INTO states VALUES (47, 'Virginia'); 
INSERT INTO states VALUES (48, 'Washington'); 
INSERT INTO states VALUES (49, 'West Virginia'); 
INSERT INTO states VALUES (50, 'Wisconsin'); 
INSERT INTO states VALUES (51, 'Wyoming');

-- 
-- Table structure for table features
-- 

DROP TABLE IF EXISTS features;

CREATE TABLE features (
  id int(11) NOT NULL auto_increment,
  feature varchar(10) NOT NULL,
  PRIMARY KEY  (id)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table features
-- 

INSERT INTO features VALUES (1, 'Automatic');
INSERT INTO features VALUES (2, '4-speed');
INSERT INTO features VALUES (3, '5-speed');
INSERT INTO features VALUES (4, '6-speed');
INSERT INTO features VALUES (5, 'CD');
INSERT INTO features VALUES (6, 'Leather');

-- 
-- Table structure for table corvettes
-- 

DROP TABLE IF EXISTS corvettes;

CREATE TABLE corvettes (
  id int(11) NOT NULL auto_increment,
  body_style varchar(25) NOT NULL,
  miles float NOT NULL,
  year_of_manufacture DATE NOT NULL,
  state_id int(11) NOT NULL,
  CONSTRAINT fk_state FOREIGN KEY (state_id) REFERENCES states(id), 
  PRIMARY KEY  (id)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table corvettes
-- 

INSERT INTO corvettes VALUES (1, 'coupe', 18.0, '1997-12-15', 4);
INSERT INTO corvettes VALUES (2, 'hatchback', 58.0, '1996-05-30', 8);
INSERT INTO corvettes VALUES (3, 'convertible', 13.5, '2001-06-01', 1);
INSERT INTO corvettes VALUES (4, 'hatchback', 19.0, '1995-08-15', 2);
INSERT INTO corvettes VALUES (5, 'hatchback', 25.0, '1991-04-18', 6);
INSERT INTO corvettes VALUES (6, 'hardtop', 15.0, '2000-05-07', 2);
INSERT INTO corvettes VALUES (7, 'coupe', 55.0, '1979-10-10', 9);
INSERT INTO corvettes VALUES (8, 'convertible', 17.0, '1999-01-01', 6);
INSERT INTO corvettes VALUES (9, 'hardtop', 17.0, '2000-12-31', 6);
INSERT INTO corvettes VALUES (10, 'hatchback', 50.0, '1995-09-15', 8);

-- 
-- Table structure for table corvettes_features
-- 

DROP TABLE IF EXISTS corvettes_features;

CREATE TABLE corvettes_features (
  corvette_id int(11) NOT NULL,
  feature_id int(11) NOT NULL,
  CONSTRAINT fk_cf_corvette FOREIGN KEY   (corvette_id) REFERENCES corvettes(id),  
  CONSTRAINT fk_cf_feature FOREIGN KEY   (feature_id) REFERENCES features(id)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table corvettes_features
-- 

INSERT INTO corvettes_features VALUES (1, 1);
INSERT INTO corvettes_features VALUES (1, 5);
INSERT INTO corvettes_features VALUES (1, 6);
INSERT INTO corvettes_features VALUES (2, 1);
INSERT INTO corvettes_features VALUES (2, 5);
INSERT INTO corvettes_features VALUES (2, 6);
INSERT INTO corvettes_features VALUES (3, 1);
INSERT INTO corvettes_features VALUES (3, 6);
INSERT INTO corvettes_features VALUES (4, 2);
INSERT INTO corvettes_features VALUES (4, 6);
INSERT INTO corvettes_features VALUES (5, 1);
INSERT INTO corvettes_features VALUES (5, 6);
INSERT INTO corvettes_features VALUES (6, 2);
INSERT INTO corvettes_features VALUES (7, 4);
INSERT INTO corvettes_features VALUES (7, 6);
INSERT INTO corvettes_features VALUES (8, 4);
INSERT INTO corvettes_features VALUES (8, 5);
INSERT INTO corvettes_features VALUES (8, 6);
INSERT INTO corvettes_features VALUES (9, 4);
INSERT INTO corvettes_features VALUES (9, 5);
INSERT INTO corvettes_features VALUES (9, 6);
INSERT INTO corvettes_features VALUES (10, 1);
INSERT INTO corvettes_features VALUES (10, 5);



