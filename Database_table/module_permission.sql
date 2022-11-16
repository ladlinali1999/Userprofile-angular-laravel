-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2022 at 12:33 PM
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
-- Table structure for table `module_permission`
--

CREATE TABLE `module_permission` (
  `mper_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL DEFAULT 0,
  `pro_id` int(11) DEFAULT 0,
  `module_name` varchar(25) DEFAULT NULL,
  `view` int(11) DEFAULT 0,
  `create` int(11) DEFAULT 0,
  `edit` int(11) DEFAULT 0,
  `delete` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module_permission`
--

INSERT INTO `module_permission` (`mper_id`, `module_id`, `pro_id`, `module_name`, `view`, `create`, `edit`, `delete`, `created_at`, `updated_at`) VALUES
(1, 1, 99, 'Sales', 1, 1, 1, 1, '2022-11-16 04:46:59', '2022-11-16 04:46:59'),
(2, 2, 99, 'Invoice', 1, 1, 1, 1, '2022-11-16 04:46:59', '2022-11-16 04:46:59'),
(3, 3, 99, 'Receipts', 0, 1, 0, 0, '2022-11-16 04:46:59', '2022-11-16 04:46:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `module_permission`
--
ALTER TABLE `module_permission`
  ADD PRIMARY KEY (`mper_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `module_permission`
--
ALTER TABLE `module_permission`
  MODIFY `mper_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
