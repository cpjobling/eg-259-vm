-- phpMyAdmin SQL Dump
-- version 2.9.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Nov 23, 2006 at 10:53 AM
-- Server version: 5.0.24
-- PHP Version: 5.1.6
-- 
-- Database: `cars`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `Equipment`
-- 

DROP TABLE IF EXISTS `Equipment`;

CREATE TABLE `Equipment` (
  `Equip_id` int(11) NOT NULL auto_increment,
  `Equip` varchar(10) NOT NULL,
  PRIMARY KEY  (`Equip_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `Equipment`
-- 

INSERT INTO `Equipment` VALUES (1, 'Automatic');
INSERT INTO `Equipment` VALUES (2, '4-speed');
INSERT INTO `Equipment` VALUES (3, '5-speed');
INSERT INTO `Equipment` VALUES (4, '6-speed');
INSERT INTO `Equipment` VALUES (5, 'CD');
INSERT INTO `Equipment` VALUES (6, 'Leather');
