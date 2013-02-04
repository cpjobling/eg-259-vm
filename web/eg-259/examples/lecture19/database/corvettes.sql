-- phpMyAdmin SQL Dump
-- version 2.9.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Nov 23, 2006 at 10:43 AM
-- Server version: 5.0.24
-- PHP Version: 5.1.6
-- 
-- Database: `cars`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `Corvettes`
-- 

DROP TABLE IF EXISTS `Corvettes`;

CREATE TABLE `Corvettes` (
  `Vette_id` int(11) NOT NULL auto_increment,
  `Body_style` varchar(25) NOT NULL,
  `Miles` float NOT NULL,
  `Year` year(4) NOT NULL,
  `State` int(11) NOT NULL,
  PRIMARY KEY  (`Vette_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `Corvettes`
-- 

INSERT INTO `Corvettes` VALUES (1, 'coupe', 18.0, 1997, 4);
INSERT INTO `Corvettes` VALUES (2, 'hatchback', 58.0, 1996, 8);
INSERT INTO `Corvettes` VALUES (3, 'convertible', 13.5, 2001, 1);
INSERT INTO `Corvettes` VALUES (4, 'hatchback', 19.0, 1995, 2);
INSERT INTO `Corvettes` VALUES (5, 'hatchback', 25.0, 1991, 6);
INSERT INTO `Corvettes` VALUES (6, 'hardtop', 15.0, 2000, 2);
INSERT INTO `Corvettes` VALUES (7, 'coupe', 55.0, 1979, 11);
INSERT INTO `Corvettes` VALUES (8, 'convertible', 17.0, 1999, 6);
INSERT INTO `Corvettes` VALUES (9, 'hardtop', 17.0, 2000, 6);
INSERT INTO `Corvettes` VALUES (10, 'hatchback', 50.0, 1995, 8);