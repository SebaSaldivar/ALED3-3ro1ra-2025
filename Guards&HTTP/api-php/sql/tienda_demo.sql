-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2025 a las 22:03:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- Crear BD si no existe
CREATE DATABASE IF NOT EXISTS `tienda_demo`
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tienda_demo`;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
 /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 /*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------
-- Tabla: productos (crear si no existe)
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT DEFAULT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Datos semilla (no duplica si corrés de nuevo)
-- --------------------------------------------------------
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`) VALUES
(1, 'Cafetera Mini 600W', 'Cafetera compacta ideal para oficina o monoambiente.', 25999.00),
(2, 'Taza térmica 350ml', 'Acero inoxidable, tapa hermética, mantiene la temperatura.', 8999.00),
(3, 'Mermelada artesanal 420g', 'De frutilla sin conservantes.', 3890.00),
(4, 'Combo yerba + mate', 'Yerba suave 500g + mate de acero.', 11990.00),
(5, 'Auriculares in-ear', 'Con micrófono y cable reforzado.', 6490.00),
(6, 'Lámpara de escritorio LED', 'Tres niveles de brillo, brazo flexible.', 12490.00),
(7, 'Cuaderno A5 tapa dura', '80 hojas rayadas, elástico y bolsillo.', 3490.00),
(8, 'Mochila urbana 20L', 'Resistente al agua, compartimento para notebook.', 32990.00),
(9, 'Botella deportiva 700ml', 'Libre de BPA, con pico antiderrame.', 5990.00),
(10, 'Organizador de escritorio', 'Bandeja + portalápices + soporte para celular.', 4990.00)
ON DUPLICATE KEY UPDATE
  `nombre` = VALUES(`nombre`),
  `descripcion` = VALUES(`descripcion`),
  `precio` = VALUES(`precio`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
 /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
 /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
