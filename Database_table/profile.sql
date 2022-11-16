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
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `pro_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(20) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`pro_id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'Admin Profile', 0, '2022-10-18 23:15:33', '2022-10-18 23:15:33'),
(2, 'Administrator', 'Admin Profile', 0, '2022-10-18 23:38:01', '2022-10-18 23:38:01'),
(3, 'Administrator', 'Admin Profile', 1, '2022-10-19 05:13:56', '2022-10-19 05:13:56'),
(4, 'HR', 'HR data', 0, '2022-10-19 07:10:07', '2022-10-19 07:10:07'),
(5, 'Administrator', 'Admin Profile', 1, '2022-10-19 23:56:01', '2022-10-19 23:56:01'),
(6, 'Administrator', 'Admin Profile', 1, '2022-10-21 04:57:39', '2022-10-21 04:57:39'),
(7, 'sale', 'sales data', 0, '2022-10-21 04:57:59', '2022-10-21 04:57:59'),
(8, 'sale', 'sales data', 1, '2022-10-21 05:11:19', '2022-10-21 05:11:19'),
(9, 'support', 'support profile', 0, '2022-10-21 23:46:15', '2022-10-21 23:46:15'),
(10, 'Administrator', 'Admin Profile', 1, '2022-10-29 05:00:39', '2022-10-29 05:00:39'),
(11, 'sale', 'sales data', 1, '2022-10-29 05:10:12', '2022-10-29 05:10:12'),
(12, 'Administrator', 'sales data', 0, '2022-10-29 06:17:06', '2022-10-29 06:17:06'),
(13, 'Administrator', 'Admin Profile', 1, '2022-10-29 07:14:24', '2022-10-29 07:14:24'),
(14, 'Administrator', 'Admin Profile', 0, '2022-10-30 23:19:45', '2022-10-30 23:19:45'),
(15, 'sale', 'sales data', 1, '2022-10-30 23:22:37', '2022-10-30 23:22:37'),
(16, 'Administrator', 'Admin Profile', 1, '2022-10-31 02:03:18', '2022-10-31 02:03:18'),
(17, 'support', 'support data', 1, '2022-10-31 02:31:47', '2022-10-31 02:31:47'),
(18, 'sale', 'sales data', 1, '2022-10-31 04:26:50', '2022-10-31 04:26:50'),
(19, 'Administrator', 'Admin Profile', 1, '2022-10-31 04:32:06', '2022-10-31 04:32:06'),
(20, 'HR', 'HR data', 1, '2022-10-31 04:33:21', '2022-10-31 04:33:21'),
(21, 'sale', 'sales data', 0, '2022-10-31 04:36:08', '2022-10-31 04:36:08'),
(22, 'test2', 'sales data', 0, '2022-10-31 04:36:55', '2022-10-31 04:36:55'),
(23, 'Administrator', 'Admin Profile', 1, '2022-10-31 04:39:28', '2022-10-31 04:39:28'),
(24, 'Administrator', 'Admin Profile', 0, '2022-10-31 04:47:58', '2022-10-31 04:47:58'),
(25, 'sale', 'Admin Profile', 1, '2022-10-31 04:58:51', '2022-10-31 04:58:51'),
(26, 'Administrator', 'Admin Profile', 1, '2022-10-31 05:00:55', '2022-10-31 05:00:55'),
(27, 'Administrator', 'sales data', 1, '2022-10-31 05:05:07', '2022-10-31 05:05:07'),
(28, 'Administrator', 'Admin Profile', 1, '2022-10-31 05:34:57', '2022-10-31 05:34:57'),
(29, 'Administrator', 'Admin Profile', 1, '2022-10-31 05:45:13', '2022-10-31 05:45:13'),
(30, 'Administrator', 'HR data', 1, '2022-10-31 05:47:32', '2022-10-31 05:47:32'),
(31, 'sale', 'sales data', 1, '2022-10-31 05:52:41', '2022-10-31 05:52:41'),
(32, 'Administrator', 'sales data', 1, '2022-10-31 05:57:30', '2022-10-31 05:57:30'),
(33, 'support', 'sales data', 1, '2022-10-31 06:02:07', '2022-10-31 06:02:07'),
(34, 'sale', 'sales data', 0, '2022-10-31 06:05:07', '2022-10-31 06:05:07'),
(35, 'Administrator', 'Admin Profile', 1, '2022-10-31 06:07:27', '2022-10-31 06:07:27'),
(36, 'Administrator', 'Admin Profile', 0, '2022-10-31 06:14:15', '2022-10-31 06:14:15'),
(37, 'Administrator', 'Admin Profile', 1, '2022-10-31 06:18:18', '2022-10-31 06:18:18'),
(38, 'Administrator', 'Admin Profile', 1, '2022-10-31 06:19:57', '2022-10-31 06:19:57'),
(39, 'sale', 'sales data', 1, '2022-10-31 06:34:57', '2022-10-31 06:34:57'),
(40, 'Administrator', 'Admin Profile', 1, '2022-10-31 06:37:49', '2022-10-31 06:37:49'),
(41, 'Administrator', 'Admin Profile', 0, '2022-10-31 06:40:53', '2022-10-31 06:40:53'),
(42, 'Administrator', 'Admin Profile', 0, '2022-10-31 06:43:23', '2022-10-31 06:43:23'),
(43, 'sale', 'sales data', 1, '2022-10-31 06:46:09', '2022-10-31 06:46:09'),
(44, 'Administrator', 'Admin Profile', 1, '2022-10-31 07:05:48', '2022-10-31 07:05:48'),
(45, 'HR', 'HR data', 1, '2022-10-31 07:07:34', '2022-10-31 07:07:34'),
(46, 'Administrator', 'Admin Profile', 1, '2022-10-31 07:10:09', '2022-10-31 07:10:09'),
(47, 'support', 'support profile', 1, '2022-10-31 07:18:36', '2022-10-31 07:18:36'),
(48, 'HR', 'sales data', 1, '2022-10-31 07:20:01', '2022-10-31 07:20:01'),
(49, 'Administrator', 'Admin Profile', 0, '2022-10-31 23:19:42', '2022-10-31 23:19:42'),
(50, 'sale', 'sales data', 0, '2022-10-31 23:23:35', '2022-10-31 23:23:35'),
(51, 'sale', 'sales data', 0, '2022-10-31 23:25:06', '2022-10-31 23:25:06'),
(52, 'sale', 'sales data', 0, '2022-10-31 23:26:46', '2022-10-31 23:26:46'),
(53, 'Administrator', 'Admin Profile', 1, '2022-10-31 23:34:25', '2022-10-31 23:34:25'),
(54, 'Administrator', 'Admin Profile', 0, '2022-10-31 23:35:59', '2022-10-31 23:35:59'),
(55, 'Administrator', 'sales data', 0, '2022-10-31 23:41:00', '2022-10-31 23:41:00'),
(56, 'Administrator', 'Admin Profile', 1, '2022-10-31 23:43:58', '2022-10-31 23:43:58'),
(57, 'HR', 'HR data', 1, '2022-10-31 23:45:24', '2022-10-31 23:45:24'),
(58, 'support', 'support profile', 0, '2022-11-01 00:17:44', '2022-11-01 00:17:44'),
(59, 'Administrator', 'Admin Profile', 0, '2022-11-01 00:22:03', '2022-11-01 00:22:03'),
(60, 'sale', 'sales data', 1, '2022-11-01 00:28:14', '2022-11-01 00:28:14'),
(61, 'Administrator', 'Admin Profile', 1, '2022-11-01 00:30:10', '2022-11-01 00:30:10'),
(62, 'support', 'support profile', 1, '2022-11-01 01:09:17', '2022-11-01 01:09:17'),
(63, 'data', 'data2', 0, '2022-11-01 01:11:03', '2022-11-01 01:11:03'),
(64, 'Administrator', 'sales data', 1, '2022-11-01 01:19:01', '2022-11-01 01:19:01'),
(65, 'test2', 'test', 1, '2022-11-01 01:25:23', '2022-11-01 01:25:23'),
(66, 'sale', 'sale data12', 0, '2022-11-01 01:29:42', '2022-11-01 01:29:42'),
(67, 'Administrator', 'Admin Profile', 1, '2022-11-01 01:30:55', '2022-11-01 01:30:55'),
(68, 'HR', 'HR data', 0, '2022-11-01 01:32:07', '2022-11-01 01:32:07'),
(69, 'support', 'sale data12', 0, '2022-11-01 01:33:02', '2022-11-01 01:33:02'),
(70, 'sale', 'sales data', 1, '2022-11-01 01:34:03', '2022-11-01 01:34:03'),
(71, 'sale', 'salesdata', 1, '2022-11-01 01:37:26', '2022-11-01 01:37:26'),
(72, 'test2', 'HR data', 0, '2022-11-01 01:40:02', '2022-11-01 01:40:02'),
(73, 'sale', 'sale data12', 0, '2022-11-01 01:50:51', '2022-11-01 01:50:51'),
(74, 'Administrator', 'Admin Profile', 0, '2022-11-01 01:59:21', '2022-11-01 01:59:21'),
(75, 'Administrator', 'sales data', 1, '2022-11-01 02:33:24', '2022-11-01 02:33:24'),
(76, 'sale', 'Admin Profile', 1, '2022-11-01 02:35:00', '2022-11-01 02:35:00'),
(77, 'sale', 'sales data', 1, '2022-11-01 03:50:58', '2022-11-01 03:50:58'),
(78, 'Administrator', 'sales data', 0, '2022-11-01 04:17:34', '2022-11-01 04:17:34'),
(79, 'Administrator', 'Admin Profile', 1, '2022-11-01 04:35:42', '2022-11-01 04:35:42'),
(80, 'Administrator', 'Admin Profile', 0, '2022-11-01 04:40:45', '2022-11-01 04:40:45'),
(81, 'Administrator', 'Admin Profile', 0, '2022-11-01 04:42:47', '2022-11-01 04:42:47'),
(82, 'Administrator', 'Admin Profile', 1, '2022-11-01 05:17:26', '2022-11-01 05:17:26'),
(83, 'Administrator', 'Admin Profile', 1, '2022-11-01 05:53:57', '2022-11-01 05:53:57'),
(84, 'Administrator', 'Admin Profile', 1, '2022-11-01 06:08:52', '2022-11-01 06:08:52'),
(85, 'Administrator', 'Admin Profile', 0, '2022-11-01 22:56:15', '2022-11-01 22:56:15'),
(86, 'HR', 'sales data', 1, '2022-11-01 22:58:57', '2022-11-01 22:58:57'),
(87, 'Administrator', 'Admin Profile', 1, '2022-11-01 23:15:48', '2022-11-01 23:15:48'),
(88, 'sale', 'sales data', 1, '2022-11-02 01:56:33', '2022-11-02 01:56:33'),
(89, 'Administrator', 'Admin Profile', 1, '2022-11-02 02:14:59', '2022-11-02 02:14:59'),
(90, 'Administrator', 'Admin Profile', 0, '2022-11-02 02:28:27', '2022-11-02 02:28:27'),
(91, 'Administrator', 'Admin Profile', 0, '2022-11-03 01:31:44', '2022-11-03 01:31:44'),
(92, 'Administrator', 'Admin Profile', 0, '2022-11-03 01:33:48', '2022-11-03 01:33:48'),
(93, 'Administrator', 'Admin Profile', 1, '2022-11-04 00:54:03', '2022-11-04 00:54:03'),
(94, 'HR', 'HR data', 0, '2022-11-04 01:13:51', '2022-11-04 01:13:51'),
(95, 'sale', 'sales data', 1, '2022-11-04 01:16:02', '2022-11-04 01:16:02'),
(96, 'Administrator', 'sales data', 1, '2022-11-06 23:19:19', '2022-11-06 23:19:19'),
(97, 'Administrator', 'Admin Profile', 1, '2022-11-16 00:18:10', '2022-11-16 00:18:10'),
(98, 'sale', 'sales data', 1, '2022-11-16 00:21:22', '2022-11-16 00:21:22'),
(99, 'Administrator', 'Admin Profile', 1, '2022-11-16 04:46:56', '2022-11-16 04:46:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`pro_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
