-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: karyawan
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `job_task`
--

DROP TABLE IF EXISTS `job_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_task` (
  `idtask` int NOT NULL AUTO_INCREMENT,
  `idpegawai` int NOT NULL,
  `jobtask` varchar(45) NOT NULL,
  `deadline` date DEFAULT NULL,
  PRIMARY KEY (`idtask`),
  KEY `fk_pegawai-job_task_idx` (`idpegawai`),
  CONSTRAINT `fk_pegawai-job_task` FOREIGN KEY (`idpegawai`) REFERENCES `pegawai` (`idpegawai`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_task`
--

LOCK TABLES `job_task` WRITE;
/*!40000 ALTER TABLE `job_task` DISABLE KEYS */;
INSERT INTO `job_task` VALUES (1,1,'Owner bos',NULL),(2,2,'Ensuring operational',NULL),(3,2,'Supervise operational',NULL),(4,4,'Financial Audit','2021-11-01'),(7,5,'Selling product','2021-12-12'),(9,5,'Selling product','2021-12-12');
/*!40000 ALTER TABLE `job_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pegawai`
--

DROP TABLE IF EXISTS `pegawai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pegawai` (
  `idpegawai` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telp` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `idrole` int NOT NULL,
  `status` varchar(45) DEFAULT 'Active',
  PRIMARY KEY (`idpegawai`),
  KEY `fk_role-pegawai_idx` (`idrole`),
  CONSTRAINT `fk_role-pegawai` FOREIGN KEY (`idrole`) REFERENCES `role` (`idrole`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pegawai`
--

LOCK TABLES `pegawai` WRITE;
/*!40000 ALTER TABLE `pegawai` DISABLE KEYS */;
INSERT INTO `pegawai` VALUES (1,'Ido Yudha','yudhatama7@gmail.com','085334870901','ido123',1,'Active'),(2,'Joel','joel@mail.com','085111220044','joel123',2,'Active'),(3,'Ellen','ellen@mail.com','089222331177','ellen123',2,'Active'),(4,'Tommy','tommy@mail.com','081999000111','tommy123',3,'Active'),(5,'Mamad Haha','mamad@mail.com','086777550001','mamad123',3,'Active');
/*!40000 ALTER TABLE `pegawai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posisi`
--

DROP TABLE IF EXISTS `posisi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posisi` (
  `idposisi` int NOT NULL AUTO_INCREMENT,
  `posisi` varchar(45) NOT NULL,
  `parentId` int DEFAULT NULL,
  PRIMARY KEY (`idposisi`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posisi`
--

LOCK TABLES `posisi` WRITE;
/*!40000 ALTER TABLE `posisi` DISABLE KEYS */;
INSERT INTO `posisi` VALUES (1,'Owner',NULL),(2,'Finance',1),(3,'Operational',1),(4,'Auditor',2),(5,'Sales',3),(6,'Cashier',3);
/*!40000 ALTER TABLE `posisi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posisi_pegawai`
--

DROP TABLE IF EXISTS `posisi_pegawai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posisi_pegawai` (
  `idposisi_pegawai` int NOT NULL AUTO_INCREMENT,
  `idpegawai` int NOT NULL,
  `idposisi` int NOT NULL,
  PRIMARY KEY (`idposisi_pegawai`),
  KEY `fk_pegawai-posisi_idx` (`idpegawai`),
  KEY `fk_posisi_pegawai-posisi_idx` (`idposisi`),
  CONSTRAINT `fk_pegawai-posisi` FOREIGN KEY (`idpegawai`) REFERENCES `pegawai` (`idpegawai`),
  CONSTRAINT `fk_posisi_pegawai-posisi` FOREIGN KEY (`idposisi`) REFERENCES `posisi` (`idposisi`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posisi_pegawai`
--

LOCK TABLES `posisi_pegawai` WRITE;
/*!40000 ALTER TABLE `posisi_pegawai` DISABLE KEYS */;
INSERT INTO `posisi_pegawai` VALUES (1,1,1),(2,2,3),(3,3,2),(4,4,4),(5,5,5);
/*!40000 ALTER TABLE `posisi_pegawai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `idrole` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`idrole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Super Admin'),(2,'Admin'),(3,'Guest');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'karyawan'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 13:38:34
