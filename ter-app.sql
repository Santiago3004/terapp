-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2024 a las 20:20:23
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
-- Base de datos: `db_terapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion`
--

CREATE TABLE `asignacion` (
  `Id_terapeuta` int(3) DEFAULT NULL,
  `Id_terapia` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fisioterapeuta`
--

CREATE TABLE `fisioterapeuta` (
  `Id_terapeuta` int(3) NOT NULL,
  `Nombres` varchar(70) NOT NULL,
  `Apellidos` varchar(70) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contrasena` varchar(10) NOT NULL,
  `Paciente` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `Id_paciente` int(3) NOT NULL,
  `Nombres` varchar(70) NOT NULL,
  `Apellidos` varchar(70) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contrasena` varchar(10) NOT NULL,
  `Reportes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terapia`
--

CREATE TABLE `terapia` (
  `Id_terapia` int(3) NOT NULL,
  `Nombre_Ejerc` varchar(70) NOT NULL,
  `Diagnostico` text NOT NULL,
  `Ejercicio` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD KEY `fk01` (`Id_terapeuta`),
  ADD KEY `fk02` (`Id_terapia`);

--
-- Indices de la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  ADD PRIMARY KEY (`Id_terapeuta`),
  ADD KEY `fk03` (`Paciente`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`Id_paciente`);

--
-- Indices de la tabla `terapia`
--
ALTER TABLE `terapia`
  ADD PRIMARY KEY (`Id_terapia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  MODIFY `Id_terapeuta` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `Id_paciente` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `terapia`
--
ALTER TABLE `terapia`
  MODIFY `Id_terapia` int(3) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignacion`
--
ALTER TABLE `asignacion`
  ADD CONSTRAINT `fk01` FOREIGN KEY (`Id_terapeuta`) REFERENCES `fisioterapeuta` (`Id_terapeuta`),
  ADD CONSTRAINT `fk02` FOREIGN KEY (`Id_terapia`) REFERENCES `terapia` (`Id_terapia`);

--
-- Filtros para la tabla `fisioterapeuta`
--
ALTER TABLE `fisioterapeuta`
  ADD CONSTRAINT `fk03` FOREIGN KEY (`Paciente`) REFERENCES `paciente` (`Id_paciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
