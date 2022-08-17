CREATE DATABASE ODOO_PRESTAMOS_F;

USE ODOO_PRESTAMOS_F;

CREATE TABLE Aseguradora (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50),
    monto FLOAT NOT NULL
);

CREATE TABLE Clientes (
	id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(50),
    street VARCHAR(50),
    email VARCHAR(50),
    pass VARCHAR(25),
);

CREATE TABLE Prestamo (
	id INT PRIMARY KEY AUTO_INCREMENT,
    idAseg INT NOT NULL,
    idCliente INT NOT NULL, 
    fecha_prestamo DATE ,
    monto FLOAT NOT NULL,
    meses INT NOT NULL,
    abal VARCHAR(50),
    penalidad FLOAT,
    
    FOREIGN KEY (idAseg) REFERENCES Aseguradora(id),
    FOREIGN KEY (idCliente) REFERENCES Clientes(id)
);

CREATE TABLE Prestamo_details (
	id INT PRIMARY KEY AUTO_INCREMENT,
    idPres INT NOT NULL,
    num_cuota INT NOT NULL,
    fechapago DATE,
    pago_mensual FLOAT,
    capital FLOAT,
    estado TINYINT DEFAULT 0,
    pago FLOAT DEFAULT 0
);
