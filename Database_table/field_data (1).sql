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
-- Table structure for table `field_data`
--

CREATE TABLE `field_data` (
  `fielddata_id` int(25) NOT NULL,
  `module_id` int(25) NOT NULL,
  `field_name` varchar(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `field_data`
--

INSERT INTO `field_data` (`fielddata_id`, `module_id`, `field_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Month', '2022-10-22 05:34:18', '2022-10-22 05:34:18'),
(2, 1, 'CRN Number', '2022-10-22 05:35:25', '2022-10-22 05:35:25'),
(3, 1, 'Client Name', '2022-10-22 05:36:41', '2022-10-22 05:36:41'),
(4, 1, 'Mobile', '2022-10-22 05:37:07', '2022-10-22 05:37:07'),
(5, 1, 'Deal Status', '2022-10-22 05:37:35', '2022-10-22 05:37:35'),
(6, 1, 'Company Name', '2022-10-22 05:38:03', '2022-10-22 05:38:03'),
(7, 1, 'Builder Group', '2022-10-22 05:38:31', '2022-10-22 05:38:31'),
(8, 1, 'Project Name', '2022-10-22 05:39:03', '2022-10-22 05:39:03'),
(9, 1, 'Sub Project', '2022-10-22 05:39:22', '2022-10-22 05:39:22'),
(10, 1, 'Booking Date', '2022-10-22 05:39:40', '2022-10-22 05:39:40'),
(11, 1, 'Cluster', '2022-10-22 05:40:32', '2022-10-22 05:40:32'),
(12, 1, 'Wing', '2022-10-22 05:40:56', '2022-10-22 05:40:56'),
(13, 1, 'Flat Nos', '2022-10-22 05:41:14', '2022-10-22 05:41:14'),
(14, 1, 'CV Value', '2022-10-22 05:47:27', '2022-10-22 05:47:27'),
(15, 1, 'Payout %', '2022-10-22 05:48:07', '2022-10-22 05:48:07'),
(16, 1, 'Payout Amount', '2022-10-22 09:47:55', '2022-10-22 09:47:55'),
(17, 1, 'Shared Payout to Refferal', '2022-10-22 09:48:58', '2022-10-22 09:48:58'),
(18, 1, 'Extra Incentives', '2022-10-22 09:49:30', '2022-10-22 09:49:30'),
(19, 1, 'Actual Payout', '2022-10-22 09:49:55', '2022-10-22 09:49:55'),
(20, 1, 'Business Value', '2022-10-22 09:50:13', '2022-10-22 09:50:13'),
(21, 1, 'Sourcing Employee', '2022-10-22 09:50:32', '2022-10-22 09:50:32'),
(22, 1, 'Closing Managers', '2022-10-22 09:51:03', '2022-10-22 09:51:03'),
(23, 1, 'Team Leader', '2022-10-22 09:51:22', '2022-10-22 09:51:22'),
(24, 1, 'Region Head', '2022-10-22 09:51:41', '2022-10-22 09:51:41'),
(25, 1, 'Team Name', '2022-10-22 09:51:58', '2022-10-22 09:51:58'),
(26, 1, 'Lead Source', '2022-10-22 09:52:35', '2022-10-22 09:52:35'),
(27, 2, 'Booking ID', '2022-10-22 09:53:29', '2022-10-22 09:53:29'),
(28, 2, 'Invoice No', '2022-10-22 09:54:35', '2022-10-22 09:54:35'),
(29, 2, 'Invoice Date', '2022-10-22 09:55:08', '2022-10-22 09:55:08'),
(30, 2, 'Company', '2022-10-22 09:55:21', '2022-10-22 09:55:21'),
(31, 2, 'GST Number', '2022-10-22 09:55:36', '2022-10-22 09:55:36'),
(32, 2, 'Brok %', '2022-10-22 09:57:37', '2022-10-22 09:57:37'),
(33, 2, 'Brokerage Amount', '2022-10-22 09:58:23', '2022-10-22 09:58:23'),
(34, 2, 'CGST', '2022-10-22 09:58:45', '2022-10-22 09:58:45'),
(35, 2, 'SGST', '2022-10-22 09:59:14', '2022-10-22 09:59:14'),
(36, 2, 'IGST', '2022-10-22 09:59:31', '2022-10-22 09:59:31'),
(37, 2, 'GST', '2022-10-22 09:59:52', '2022-10-22 09:59:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `field_data`
--
ALTER TABLE `field_data`
  ADD PRIMARY KEY (`fielddata_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `field_data`
--
ALTER TABLE `field_data`
  MODIFY `fielddata_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
