-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 12:34 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_first`
--

-- --------------------------------------------------------

--
-- Table structure for table `field_permission`
--

CREATE TABLE `field_permission` (
  `fieldper_id` int(11) NOT NULL,
  `module_id` int(11) DEFAULT NULL,
  `modulename` varchar(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  `fielddata_id` int(11) NOT NULL,
  `field_name` varchar(25) NOT NULL,
  `readonly` int(11) NOT NULL DEFAULT 0,
  `write` int(11) NOT NULL DEFAULT 0,
  `invisible` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `field_permission`
--

INSERT INTO `field_permission` (`fieldper_id`, `module_id`, `modulename`, `pro_id`, `fielddata_id`, `field_name`, `readonly`, `write`, `invisible`, `created_at`, `updated_at`) VALUES
(1, 2, 'Invoice', 99, 27, 'Booking ID', 1, 0, 0, '2022-11-16 04:47:00', '2022-11-16 04:47:00'),
(2, 2, 'Invoice', 99, 28, 'Invoice No', 1, 0, 0, '2022-11-16 04:47:00', '2022-11-16 04:47:00'),
(3, 2, 'Invoice', 99, 29, 'Invoice Date', 1, 0, 0, '2022-11-16 04:47:00', '2022-11-16 04:47:00'),
(4, 2, 'Invoice', 99, 30, 'Company', 0, 0, 1, '2022-11-16 04:47:00', '2022-11-16 04:47:00'),
(5, 2, 'Invoice', 99, 31, 'GST Number', 0, 0, 1, '2022-11-16 04:47:01', '2022-11-16 04:47:01'),
(6, 2, 'Invoice', 99, 32, 'Brok %', 0, 0, 1, '2022-11-16 04:47:01', '2022-11-16 04:47:01'),
(7, 2, 'Invoice', 99, 33, 'Brokerage Amount', 0, 0, 1, '2022-11-16 04:47:01', '2022-11-16 04:47:01'),
(8, 2, 'Invoice', 99, 34, 'CGST', 0, 0, 1, '2022-11-16 04:47:02', '2022-11-16 04:47:02'),
(9, 2, 'Invoice', 99, 35, 'SGST', 0, 0, 1, '2022-11-16 04:47:02', '2022-11-16 04:47:02'),
(10, 2, 'Invoice', 99, 36, 'IGST', 0, 0, 1, '2022-11-16 04:47:02', '2022-11-16 04:47:02'),
(11, 2, 'Invoice', 99, 37, 'GST', 0, 0, 1, '2022-11-16 04:47:02', '2022-11-16 04:47:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `field_permission`
--
ALTER TABLE `field_permission`
  ADD PRIMARY KEY (`fieldper_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `field_permission`
--
ALTER TABLE `field_permission`
  MODIFY `fieldper_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
