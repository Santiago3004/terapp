-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2024 a las 17:44:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ter-app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centrosalud`
--

CREATE TABLE `centrosalud` (
  `Id_centro` int(3) NOT NULL,
  `NombreCentro` varchar(20) NOT NULL,
  `Nit` varchar(10) NOT NULL,
  `Direccion` varchar(15) NOT NULL,
  `Telefono` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fisioterapeuta`
--

CREATE TABLE `fisioterapeuta` (
  `Id_Terapeuta` int(3) NOT NULL,
  `Nombres` varchar(20) NOT NULL,
  `Apellidos` varchar(20) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `CentroSalud` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `Id_paciente` int(3) NOT NULL,
  `Nombres` varchar(20) NOT NULL,
  `Apellidos` varchar(20) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terapia`
--

CREATE TABLE `terapia` (
  `Id_paciente` int(3) NOT NULL,
  `Id_terapeuta` int(3) NOT NULL,
  `Diagnostico` text NOT NULL,
  `Sesiones` int(3) NOT NULL,
  `Ejercicios` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centrosalud`
--
ALTER TABLE `centrosalud`
  ADD PRIMARY KEY (`Id_centro`),
  ADD UNIQUE KEY `Nit` (`Nit`),
  ADD KEY `Id_centro` (`Id_centro`);

--
-- Indices de la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  ADD PRIMARY KEY (`Id_Terapeuta`),
  ADD KEY `fk_03` (`CentroSalud`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`Id_paciente`);

--
-- Indices de la tabla `terapia`
--
ALTER TABLE `terapia`
  ADD KEY `fk_01` (`Id_paciente`),
  ADD KEY `fk_02` (`Id_terapeuta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `centrosalud`
--
ALTER TABLE `centrosalud`
  MODIFY `Id_centro` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  MODIFY `Id_Terapeuta` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `Id_paciente` int(3) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  ADD CONSTRAINT `fk_03` FOREIGN KEY (`CentroSalud`) REFERENCES `centrosalud` (`Id_centro`);

--
-- Filtros para la tabla `terapia`
--
ALTER TABLE `terapia`
  ADD CONSTRAINT `fk_01` FOREIGN KEY (`Id_paciente`) REFERENCES `paciente` (`Id_paciente`),
  ADD CONSTRAINT `fk_02` FOREIGN KEY (`Id_terapeuta`) REFERENCES `fisioterapeuta` (`Id_Terapeuta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
