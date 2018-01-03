-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2018 at 03:18 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wintor`
--

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE `markers` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `info` varchar(80) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `number` varchar(30) NOT NULL,
  `Fuel` int(10) NOT NULL,
  `Production_per_Day` varchar(20) NOT NULL,
  `Last_Maintenance` date NOT NULL,
  `Operation_Time` int(10) NOT NULL,
  `Last_Update` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Schedule` varchar(30) DEFAULT NULL,
  `Bearing` tinyint(1) DEFAULT NULL,
  `Accu` tinyint(1) DEFAULT NULL,
  `Oil_Level` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `markers`
--

INSERT INTO `markers` (`id`, `name`, `info`, `lat`, `lng`, `number`, `Fuel`, `Production_per_Day`, `Last_Maintenance`, `Operation_Time`, `Last_Update`, `Schedule`, `Bearing`, `Accu`, `Oil_Level`) VALUES
(1, 'Wintor1', 'Kalimantan Barat', 0.000000, 109.333336, '+628974253558', 60, '225', '2018-01-20', 15, '2017-12-10 20:38:46', 'Afdeling A1 Block C2', 1, 1, 1),
(2, 'Wintor2', 'Jakarta', -6.121435, 106.774124, '+6281293949298', 100, '500', '2017-11-08', 10, '2017-12-08 08:22:20', 'Afdeling A5Block C1', 1, 0, 1),
(3, 'Wintor3', 'Medan', 3.597031, 98.678513, '+6289759409232', 10, '1000', '2017-12-05', 12, '2017-12-09 13:48:27', 'Afdeling A2 Block C4', 1, 0, 1),
(4, 'Wintor4', 'Semarang', -6.966667, 110.416664, '+6281193043948', 40, '400', '2016-12-12', 5, '2017-12-08 08:22:59', 'Afdeling A1 Block C7', 1, 1, 0),
(5, 'Wintor5', 'Jambi', -1.609972, 103.607254, '+6281294933829', 25, '300', '2017-04-18', 3, '2017-12-09 14:17:51', 'Afdeling A3 Block C4', 0, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
