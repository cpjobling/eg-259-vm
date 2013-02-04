-- phpMyAdmin SQL Dump
-- version 2.9.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Nov 23, 2006 at 10:22 AM
-- Server version: 5.0.24
-- PHP Version: 5.1.6
-- 
-- Database: `cars`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `States`
-- 

DROP TABLE IF EXISTS `States`;

CREATE TABLE `States` (
  `State_id` int(11) NOT NULL auto_increment,
  `State` varchar(25) NOT NULL,
  PRIMARY KEY  (`State_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- 
-- Dumping data for table `States`
-- 

INSERT INTO `States` VALUES (1, 'Alabama');
INSERT INTO `States` VALUES (2, 'Alaska');
INSERT INTO `States` VALUES (3, 'Arizona');
INSERT INTO `States` VALUES (4, 'Arkansas');
INSERT INTO `States` VALUES (5, 'Alabama');
INSERT INTO `States` VALUES (6, 'California');
INSERT INTO `States` VALUES (7, 'Colorado');
INSERT INTO `States` VALUES (8, 'Connecticut');
INSERT INTO `States` VALUES (9, 'Delaware');
INSERT INTO `States` VALUES (10, 'Florida');
INSERT INTO `States` VALUES (11, 'Georgia');
INSERT INTO `States` VALUES (12, 'Hawaii'); 
INSERT INTO `States` VALUES (13, 'Idaho'); 
INSERT INTO `States` VALUES (14, 'Illinois'); 
INSERT INTO `States` VALUES (15, 'Indiana'); 
INSERT INTO `States` VALUES (16, 'Iowa'); 
INSERT INTO `States` VALUES (17, 'Kansas'); 
INSERT INTO `States` VALUES (18, 'Kentucky'); 
INSERT INTO `States` VALUES (19, 'Louisiana'); 
INSERT INTO `States` VALUES (20, 'Maine'); 
INSERT INTO `States` VALUES (21, 'Maryland'); 
INSERT INTO `States` VALUES (22, 'Massachusetts'); 
INSERT INTO `States` VALUES (23, 'Michigan'); 
INSERT INTO `States` VALUES (24, 'Minnesota'); 
INSERT INTO `States` VALUES (25, 'Mississippi'); 
INSERT INTO `States` VALUES (26, 'Missouri'); 
INSERT INTO `States` VALUES (27, 'Montana'); 
INSERT INTO `States` VALUES (28, 'Nebraska'); 
INSERT INTO `States` VALUES (29, 'Nevada'); 
INSERT INTO `States` VALUES (30, 'New Hampshire'); 
INSERT INTO `States` VALUES (31, 'New Jersey'); 
INSERT INTO `States` VALUES (32, 'New Mexico'); 
INSERT INTO `States` VALUES (33, 'New York'); 
INSERT INTO `States` VALUES (34, 'North Carolina'); 
INSERT INTO `States` VALUES (35, 'North Dakota'); 
INSERT INTO `States` VALUES (36, 'Ohio'); 
INSERT INTO `States` VALUES (37, 'Oklahoma'); 
INSERT INTO `States` VALUES (38, 'Oregon'); 
INSERT INTO `States` VALUES (39, 'Pennsylvania'); 
INSERT INTO `States` VALUES (40, 'Rhode Island'); 
INSERT INTO `States` VALUES (41, 'South Carolina'); 
INSERT INTO `States` VALUES (42, 'South Dakota'); 
INSERT INTO `States` VALUES (43, 'Tennessee'); 
INSERT INTO `States` VALUES (44, 'Texas'); 
INSERT INTO `States` VALUES (45, 'Utah'); 
INSERT INTO `States` VALUES (46, 'Vermont'); 
INSERT INTO `States` VALUES (47, 'Virginia'); 
INSERT INTO `States` VALUES (48, 'Washington'); 
INSERT INTO `States` VALUES (49, 'West Virginia'); 
INSERT INTO `States` VALUES (50, 'Wisconsin'); 
INSERT INTO `States` VALUES (51, 'Wyoming');
