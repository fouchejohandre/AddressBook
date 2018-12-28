-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3301
-- Generation Time: Dec 28, 2018 at 07:44 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `address_book`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `sp_AddContact`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AddContact` (IN `_FirstName` VARCHAR(50), IN `_LastName` VARCHAR(50), IN `_WorkTel` VARCHAR(50), IN `_HomeTel` VARCHAR(50), IN `_Mobile` VARCHAR(50), IN `_Fax` VARCHAR(50), IN `_HomeEmail` VARCHAR(50), IN `_WorkEmail` VARCHAR(50), IN `_CompanyName` VARCHAR(50), IN `_CompanyPosition` VARCHAR(50), IN `_HomeAddressNr` VARCHAR(50), IN `_HomeAddressStreet` VARCHAR(50), IN `_HomeAddressSuburb` VARCHAR(50), IN `_HomeAddressCity` VARCHAR(50), IN `_HomeAddressPostalCode` VARCHAR(50), IN `_HomeAddressAdditional` VARCHAR(50), IN `_ImageUrl` VARCHAR(250), IN `_UserId` INT)  BEGIN
INSERT INTO contacts(FirstName, LastName,  WorkTel, HomeTel, Mobile, Fax, HomeEmail, WorkEmail, CompanyName, CompanyPosition, HomeAddressNr, HomeAddressStreet, HomeAddressSuburb, HomeAddressCity, HomeAddressPostalCode, HomeAddressAdditional, ImageUrl, UserId)
VALUES (_FirstName, _LastName, _WorkTel, _HomeTel, _Mobile, _Fax, _HomeEmail, _WorkEmail, _CompanyName, _CompanyPosition, _HomeAddressNr, _HomeAddressStreet, _HomeAddressSuburb, _HomeAddressCity, _HomeAddressPostalCode, _HomeAddressAdditional, _ImageUrl , _UserId);
END$$

DROP PROCEDURE IF EXISTS `sp_AddUser`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_AddUser` (IN `_FirstName` VARCHAR(50), IN `_LastName` VARCHAR(50), IN `_TelNo` VARCHAR(50), IN `_Mobile` VARCHAR(50), IN `_Email` VARCHAR(50), IN `_Username` VARCHAR(50), IN `_Password` VARCHAR(50))  BEGIN
INSERT INTO user(FirstName, LastName,  TelNo, Mobile, Email, Username, Password)
VALUES (_FirstName, _LastName, _TelNo, _Mobile, _Email, _Username, _Password);
END$$

DROP PROCEDURE IF EXISTS `sp_DeleteContact`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_DeleteContact` (IN `_ContactId` INT)  NO SQL
DELETE FROM contacts
WHERE ContactId = _ContactId$$

DROP PROCEDURE IF EXISTS `sp_GetUser`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetUser` (IN `_Username` VARCHAR(50), IN `_Password` VARCHAR(50))  NO SQL
SELECT UserID, FirstName, LastName, TelNo, Mobile, Email FROM user 
WHERE Username = _Username
AND Password = _Password$$

DROP PROCEDURE IF EXISTS `sp_GetUserContacts`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_GetUserContacts` (IN `_UserId` INT)  NO SQL
SELECT * FROM contacts WHERE UserId = _UserId$$

DROP PROCEDURE IF EXISTS `sp_UpdateContact`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_UpdateContact` (IN `_ContactId` INT, IN `_FirstName` VARCHAR(50), IN `_LastName` VARCHAR(50), IN `_WorkTel` VARCHAR(50), IN `_HomeTel` VARCHAR(50), IN `_Mobile` VARCHAR(50), IN `_Fax` VARCHAR(50), IN `_HomeEmail` VARCHAR(50), IN `_WorkEmail` VARCHAR(50), IN `_CompanyName` VARCHAR(50), IN `_CompanyPosition` VARCHAR(50), IN `_HomeAddressNr` VARCHAR(50), IN `_HomeAddressStreet` VARCHAR(50), IN `_HomeAddressSuburb` VARCHAR(50), IN `_HomeAddressCity` VARCHAR(50), IN `_HomeAddressPostalCode` VARCHAR(50), IN `_HomeAddressAdditional` VARCHAR(50), IN `_ImageUrl` VARCHAR(250))  BEGIN
UPDATE contacts
SET FirstName = _FirstName,
    LastName = _LastName,
    WorkTel = _WorkTel,
    HomeTel = _HomeTel,
    Mobile = _Mobile,
    Fax = _Fax,
    HomeEmail = _HomeEmail,
    WorkEmail = _WorkEmail,
    CompanyName = _CompanyName,
    CompanyPosition = _CompanyPosition,
    HomeAddressNr = _HomeAddressNr,
    HomeAddressStreet = _HomeAddressStreet,
    HomeAddressSuburb = _HomeAddressSuburb,
    HomeAddressCity = _HomeAddressCity,
    HomeAddressPostalCode = _HomeAddressPostalCode,
    HomeAddressAdditional = _HomeAddressAdditional,
    ImageUrl = _ImageUrl
WHERE ContactId = _ContactId;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `ContactId` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `LastName` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `WorkTel` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeTel` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Mobile` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Fax` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeEmail` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `WorkEmail` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `CompanyName` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `CompanyPosition` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressNr` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressStreet` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressSuburb` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressCity` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressPostalCode` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `HomeAddressAdditional` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `ImageUrl` varchar(250) COLLATE latin7_general_cs NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`ContactId`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin7 COLLATE=latin7_general_cs;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`ContactId`, `FirstName`, `LastName`, `WorkTel`, `HomeTel`, `Mobile`, `Fax`, `HomeEmail`, `WorkEmail`, `CompanyName`, `CompanyPosition`, `HomeAddressNr`, `HomeAddressStreet`, `HomeAddressSuburb`, `HomeAddressCity`, `HomeAddressPostalCode`, `HomeAddressAdditional`, `ImageUrl`, `UserId`) VALUES
(1, 'Jaco', 'Doe1', ' 2711 111 1111', ' 2711 111 1111', ' 2711 111 1111', ' 2711 111 1111', 'jd1@home.com', 'jd1@work.com', 'CompanyName1', 'CompanyPosition1', '1', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/default.jpg', 1),
(2, 'John2', 'Doe2', '+2711 111 1112', '+2711 111 1112', '+2711 111 1112', '+2711 111 1112', 'jd2@home.com', 'jd2@work.com', 'CompanyName2', 'CompanyPosition2', '2', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/2.jpg', 1),
(3, 'John3', 'Doe3', '+2711 111 1113', '+2711 111 1113', '+2711 111 1113', '+2711 111 1113', 'jd3@home.com', 'jd3@work.com', 'CompanyName3', 'CompanyPosition3', '3', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/3.jpg', 1),
(4, 'John4', 'Doe4', '+2711 111 1114', '+2711 111 1114', '+2711 111 1114', '+2711 111 1114', 'jd4@home.com', 'jd4@work.com', 'CompanyName4', 'CompanyPosition4', '4', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/4.jpg', 1),
(6, 'Bill1', 'Soap1', ' 2711 111 1116', ' 2711 111 1116', ' 2711 111 1116', ' 2711 111 1116', 'bs1@home.com', 'bs1@work.com', 'CompanyName6', 'CompanyPosition6', '6', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/11.jpg', 1),
(7, 'Bill2', 'Soap2', '+2711 111 1117', '+2711 111 1117', '+2711 111 1117', '+2711 111 1117', 'bs2@home.com', 'bs2@work.com', 'CompanyName7', 'CompanyPosition7', '7', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/7.jpg', 1),
(8, 'Bill3', 'Soap3', '+2711 111 1118', '+2711 111 1118', '+2711 111 1118', '+2711 111 1118', 'bs3@home.com', 'bs3@work.com', 'CompanyName8', 'CompanyPosition8', '8', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/8.jpg', 1),
(9, 'Bill4', 'Soap4', '+2711 111 1119', '+2711 111 1119', '+2711 111 1119', '+2711 111 1119', 'bs4@home.com', 'bs4@work.com', 'CompanyName9', 'CompanyPosition9', '9', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/9.jpg', 1),
(10, 'Bill5', 'Soap5', '+2711 111 1120', '+2711 111 1120', '+2711 111 1120', '+2711 111 1120', 'bs5@home.com', 'bs5@work.com', 'CompanyName10', 'CompanyPosition10', '10', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/10.jpg', 1),
(11, 'John6', 'Soap6', ' 2711 111 1121', ' 2711 111 1121', ' 2711 111 1121', ' 2711 111 1121', 'js1@home.com', 'js1@work.com', 'CompanyName11', 'CompanyPosition11', '11', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/lg-axis.1.jpg', 2),
(12, 'John7', 'Soap7', ' 2711 111 1122', ' 2711 111 1122', ' 2711 111 1122', ' 2711 111 1122', 'js2@home.com', 'js2@work.com', 'CompanyName12', 'CompanyPosition12', '12', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/car.jpg', 2),
(13, 'John8', 'Soap8', ' 2711 111 1123', ' 2711 111 1123', ' 2711 111 1123asd', ' 2711 111 1123', 'js3@home.com', 'js3@work.com', 'CompanyName13', 'CompanyPosition13', '13', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/13.jpg', 2),
(14, 'John9', 'Soap9', ' 2711 111 1124', ' 2711 111 1124', ' 2711 111 1124', ' 2711 111 112', 'js4@home.com', 'js4@work.com', 'CompanyName14', 'CompanyPosition14', '14', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/14.jpg', 2),
(15, 'John10', 'Soap10', '+2711 111 1125', '+2711 111 1125', '+2711 111 1125', '+2711 111 1125', 'js5@home.com', 'js5@work.com', 'CompanyName15', 'CompanyPosition15', '15', 'Random Street', 'Summerstrand', 'Port Elizabeth', '6080', 'None', 'http://localhost:8000/AddressBook/Images/15.jpg', 2),
(33, 'A', 'undefined', 'undefined', 'undefined', 'A', 'undefined', 'undefined', 'A', 'undefined', 'undefined', 'A', 'undefined', 'undefined', 'A', 'undefined', 'undefined', 'http://localhost:8000/AddressBook/Images/motorola-defy-with-motoblur.2.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `LastName` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `TelNo` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Mobile` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Email` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Username` varchar(50) COLLATE latin7_general_cs NOT NULL,
  `Password` varchar(50) COLLATE latin7_general_cs NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin7 COLLATE=latin7_general_cs;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `FirstName`, `LastName`, `TelNo`, `Mobile`, `Email`, `Username`, `Password`) VALUES
(1, 'Johandre', 'Fouche', '0419931035', '0828723857', 'fouchejohandre@gmail.com', 'Johandre', 'Johandre'),
(2, 'Pieter', 'Fouche', '0419635869', '0832283403', 'johandre@comprsa.com', 'Pieter', 'Pieter'),
(3, 'Jack', 'Jack', '0112563658', '0823696589', 'jack@mail.com', 'Jack', 'Jack'),
(4, 'John', 'John', '0536310988', '0604471592', 'john@work.co.za', 'John', 'John'),
(5, 'AA', 'AA', 'undefined', '012', 'aa@aa.aa.aa', 'a', 'a');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
