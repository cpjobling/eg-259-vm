-- phpMyAdmin SQL Dump
-- version 2.9.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Dec 12, 2006 at 09:56 AM
-- Server version: 5.0.24
-- PHP Version: 5.1.6
-- 
-- Database: `song-o-matic`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `songs`
-- 

DROP TABLE IF EXISTS `songs`;

CREATE TABLE `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `composer` varchar(255) default NULL,
  `artist` varchar(255) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Dumping data for table `songs`
-- 

INSERT INTO `songs` VALUES (1, 'Don''t Sleep in the Subway Darling', 'Jackie Trent and Tony Hatch', 'Petula Clark');
INSERT INTO `songs` VALUES (2, 'Help!', 'Lennon and McCartney', 'The Beatles');
INSERT INTO `songs` VALUES (3, 'Please, Please Me', 'John Lennon and Paul McCartney', 'The Beatles');
INSERT INTO `songs` VALUES (4, 'Space Oddity', 'David Bowie', 'David Bowie');
INSERT INTO `songs` VALUES (5, 'It''s a Kind of Magic', 'Freddy Mercury', 'Queen');
INSERT INTO `songs` VALUES (6, 'Wish you were here', 'Roger Waters', 'Pink Floyd');
